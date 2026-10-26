"""On-demand public vessel research. No API key, no saved position fallback.

Only fixed public source hosts are requested. Source-relative timestamps and
rounded map coordinates are never promoted into a precise live position.
"""
from copy import deepcopy
from datetime import datetime, timezone
from html.parser import HTMLParser
from html import unescape
import json
import re
import threading
import time
import uuid
from urllib.parse import quote, urlencode, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
from urllib.robotparser import RobotFileParser

HOST = 'www.vesselfinder.com'
WIKI_HOST = 'en.wikipedia.org'
BASE = 'https://' + HOST
TIMEOUT = 7
MAX_BYTES = 1500000
USER_AGENT = 'WhereVessel/1.0 (single-vessel public research)'
_robots = None
_robots_at = 0
_cache = {}
_lock = threading.Lock()
_wiki_robots = None
_wiki_robots_at = 0
_context = threading.local()
_inflight = {}


class SourceError(Exception):
    pass


class SafeRedirect(HTTPRedirectHandler):
    def __init__(self, host=HOST):
        self.host = host

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        target = urlsplit(newurl)
        if target.scheme != 'https' or target.hostname != self.host or target.port not in (None, 443):
            raise SourceError('출처가 허용되지 않은 주소로 이동했습니다.')
        # The fetched robots rules apply to redirects as well as initial paths.
        # Do not recursively download rules while retrieving robots.txt itself.
        if urlsplit(req.full_url).path == '/robots.txt':
            raise SourceError('수집 규칙 파일의 리디렉션을 허용하지 않습니다.')
        rules = _robots if self.host == HOST else _wiki_robots
        if rules is None or not rules.can_fetch(USER_AGENT, newurl):
            raise SourceError('리디렉션 대상의 수집 규칙을 확인할 수 없습니다.')
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def _download(path, host=HOST):
    remaining = getattr(_context, 'deadline', time.monotonic() + 60) - time.monotonic()
    if remaining <= 0:
        raise SourceError('조사 제한 시간 60초를 초과했습니다.')
    if host not in (HOST, WIKI_HOST):
        raise SourceError('허용되지 않은 출처입니다.')
    if not path.startswith('/') or path.startswith('//'):
        raise SourceError('잘못된 출처 경로입니다.')
    request = Request('https://' + host + path, headers={'User-Agent': USER_AGENT, 'Accept': 'text/html,text/plain'})
    try:
        with build_opener(SafeRedirect(host)).open(request, timeout=min(TIMEOUT, remaining)) as response:
            raw = response.read(MAX_BYTES + 1)
            if len(raw) > MAX_BYTES:
                raise SourceError('원문이 허용 크기를 초과했습니다.')
            return raw.decode('utf-8', errors='replace')
    except SourceError:
        raise
    except Exception as exc:
        # Do not serialize response bodies, credentials or local exception paths.
        code = getattr(exc, 'code', None)
        raise SourceError('공개 출처 연결 실패' + (' (HTTP %s)' % code if code else '')) from None


def _fetch(path):
    global _robots, _robots_at
    now = time.monotonic()
    with _lock:
        current = _robots if now - _robots_at < 3600 else None
    if current is None:
        rules = _download('/robots.txt')
        current = RobotFileParser(BASE + '/robots.txt')
        current.parse(rules.splitlines())
        with _lock:
            _robots, _robots_at = current, now
    if not current.can_fetch(USER_AGENT, BASE + path):
        raise SourceError('공개 출처의 수집 규칙상 접근할 수 없는 경로입니다.')
    return _download(path)


def _wiki_fetch(path):
    global _wiki_robots, _wiki_robots_at
    now = time.monotonic()
    with _lock:
        rules = _wiki_robots if now - _wiki_robots_at < 3600 else None
    if rules is None:
        rules = RobotFileParser('https://' + WIKI_HOST + '/robots.txt')
        rules.parse(_download('/robots.txt', WIKI_HOST).splitlines())
        with _lock:
            _wiki_robots, _wiki_robots_at = rules, now
    if not rules.can_fetch(USER_AGENT, 'https://' + WIKI_HOST + path):
        raise SourceError('백과 출처의 수집 규칙상 접근할 수 없는 경로입니다.')
    return _download(path, WIKI_HOST)


def clean(value):
    return re.sub(r'\s+', ' ', unescape(re.sub(r'<[^>]*>', ' ', value))).strip()


def normalized(value):
    return re.sub(r'[^\w]', '', value, flags=re.UNICODE).casefold()


class Node:
    def __init__(self, tag='', attrs=None):
        self.tag, self.attrs, self.children = tag, dict(attrs or []), []

    def text(self):
        if self.tag in ('script', 'style', 'svg'):
            return ''
        return clean(' '.join(c.text() if isinstance(c, Node) else c for c in self.children))

    def nodes(self, tag=None, cls=None):
        for child in self.children:
            if isinstance(child, Node):
                if (tag is None or child.tag == tag) and (cls is None or cls in child.attrs.get('class', '').split()):
                    yield child
                yield from child.nodes(tag, cls)


class Document(HTMLParser):
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def parse_candidates(html):
    doc = Document(html).root
    found = {}
    for link in doc.nodes('a', 'ship-link'):
        path = link.attrs.get('href', '')
        match = re.fullmatch(r'/vessels/details/([0-9]{7,9})', path)
        names = list(link.nodes(cls='slna'))
        if not match or not names:
            continue
        types = list(link.nodes(cls='slty'))
        flags = list(link.nodes(cls='flag-icon'))
        name = names[0].text()
        found[path] = {'name': name, 'imo': match[1] if len(match[1]) == 7 else None,
                       'mmsi': match[1] if len(match[1]) == 9 else None,
                       'type': types[0].text() if types else None,
                       'flag': flags[0].attrs.get('title') if flags else None,
                       'query': match[1], 'path': path}
    return list(found.values())[:20]


LABELS = {'Vessel Name': '선박명', 'IMO number': 'IMO', 'Ship Type': '선종',
          'Flag': '국적', 'Year of Build': '건조 연도', 'Callsign': '호출부호',
          'AIS Type': 'AIS 선종', 'AIS Flag': 'AIS 국적', 'Length / Beam': '길이 / 폭',
          'Length Overall (m)': '전장 (m)', 'Beam (m)': '폭 (m)',
          'Gross Tonnage': '총톤수', 'Deadweight (t)': '재화중량 (t)',
          'Current draught': '현재 흘수', 'Navigation Status': '보고된 운항 상태',
          'TEU': '컨테이너 적재량 (TEU)'}


def parse_detail(html, url, query, fetched_at=None):
    fetched_at = fetched_at or datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
    doc = Document(html).root
    table = {}
    for row in doc.nodes('tr'):
        cells = [n for n in row.children if isinstance(n, Node) and n.tag in ('td', 'th')]
        if len(cells) == 2:
            key, value = cells[0].text(), cells[1].text()
            if key not in table and value and value != '-' and 'PREMIUM' not in value.upper():
                table[key] = value
    identity = table.get('IMO / MMSI', '')
    ids = re.fullmatch(r'([0-9]{7})\s*/\s*([0-9]{9})', identity)
    name = table.get('Vessel Name')
    if not ids or not name:
        raise SourceError('원문에서 선박 식별 정보를 확인하지 못했습니다.')
    imo, mmsi = ids.groups()
    if table.get('IMO number') != imo:
        raise SourceError('원문의 선박 식별 정보가 서로 일치하지 않습니다.')
    if query.isdigit() and query not in (imo, mmsi):
        raise SourceError('원문의 선박 식별자가 요청과 일치하지 않습니다.')
    if not query.isdigit() and normalized(query) != normalized(name):
        raise SourceError('원문의 선박명이 요청과 일치하지 않습니다. 후보를 선택하세요.')
    observed = None
    for node in doc.nodes('td'):
        if node.attrs.get('id') == 'lastrep':
            for icon in node.nodes():
                raw = icon.attrs.get('data-title', '')
                try:
                    observed = datetime.strptime(raw, '%b %d, %Y %H:%M UTC').replace(tzinfo=timezone.utc).isoformat().replace('+00:00', 'Z')
                except ValueError:
                    pass
    fields = []

    def add(key, label, value, evidence, timed=False):
        if value:
            fields.append({'field': key, 'label': label, 'value': value, 'source_url': url,
                           'source_type': 'public_web', 'observed_at': observed if timed else None,
                           'fetched_at': fetched_at, 'evidence': evidence[:500],
                           'verification_status': 'source_reported', 'extraction_method': 'html'})

    add('mmsi', 'MMSI', mmsi, identity)
    for key, label in LABELS.items():
        add(key, label, table.get(key), key + ': ' + table.get(key, ''), key in ('Navigation Status', 'Current draught'))
    descriptions = list(doc.nodes('p', 'text2'))
    description = descriptions[0].text() if descriptions else ''
    region = re.search(r'The current position of .+? is\s+(.*?)\s+reported\s', description)
    if region:
        add('region', '보고된 해역', region[1], region[0], True)
    speed = re.search(r'sailing at a speed of\s+([0-9.]+)\s+knots', description)
    if speed:
        add('speed', '보고된 속력', speed[1] + ' kn', speed[0], True)
    for label, field, korean in [('Destination', 'destination', '보고된 목적지'), ('Last Port', 'last_port', '최근 기항항')]:
        for div in doc.nodes('div'):
            direct = [n for n in div.children if isinstance(n, Node)]
            if any(n.attrs.get('class') == 'vilabel' and n.text() == label for n in direct):
                ports = [n for n in direct if n.tag == 'a' and '_npNa' in n.attrs.get('class', '').split()]
                if ports:
                    add(field, korean, ports[0].text(), div.text(), label == 'Destination')
                values = [n for n in direct if '_value' in n.attrs.get('class', '').split()]
                if values:
                    # Keep original incomplete dates; do not invent year/timezone.
                    raw_time = values[0].text()
                    time_label = ('보고된 도착 시각 (원문)' if re.match(r'^ATA\b', raw_time) else '보고된 ETA (원문)') if label == 'Destination' else '최근 기항 시각 (원문)'
                    add(field + '_time', time_label, raw_time, div.text(), label == 'Destination')
    if observed:
        add('position_observed_at', '위치 보고 관측 시각 (UTC)', observed, 'Position Received timestamp', True)
    # Embedded map coordinates may be rounded for public viewers. Never use them
    # as a precise ship marker, even when they include a report timestamp.
    vessel = {'name': name, 'imo': imo, 'mmsi': mmsi, 'lat': None, 'lon': None,
              'observed_at': observed, 'source_url': url}
    return {'state': 'partial', 'vessel': vessel, 'fields': fields, 'candidates': [],
            'sources': [{'url': url, 'title': 'VesselFinder 공개 선박 페이지', 'fetched_at': fetched_at}],
            'errors': [], 'position_note': '공개 원문에서 정밀 좌표를 확인할 수 없어 선박 위치를 지도에 표시하지 않습니다.',
            'missing': ['precise_position', 'independent_crosscheck'], 'fetched_at': fetched_at}


def _wikipedia_fallback(query):
    """Independent public encyclopedia fallback; historical specs, never AIS."""
    if query.isdigit():
        raise SourceError('백과 대체 검색은 영문 선박명이 필요합니다.')
    title = '_'.join(word if len(word) <= 3 and word.isupper() else word.title() for word in query.split())
    path = '/wiki/' + quote(title, safe='_')
    url = 'https://' + WIKI_HOST + path
    doc = Document(_wiki_fetch(path)).root
    headings = [n for n in doc.nodes('h1') if n.attrs.get('id') == 'firstHeading']
    heading = headings[0].text() if headings else ''
    compared = re.sub(r'^(?:MV|MS|SS|MT)\s+', '', heading, flags=re.I)
    if normalized(compared) != normalized(query):
        raise SourceError('백과 원문의 선박명이 요청과 일치하지 않습니다.')
    tables = list(doc.nodes('table', 'infobox'))
    if not tables:
        raise SourceError('백과 원문에서 선박 식별 표를 찾지 못했습니다.')
    text = tables[0].text()
    imo_match = re.search(r'IMO\s*(?:number)?\s*:?\s*([0-9]{7})\b', text, re.I)
    if not imo_match:
        raise SourceError('백과 원문에서 IMO를 확인하지 못했습니다.')
    mmsi_match = re.search(r'MMSI\s*:?\s*([0-9]{9})\b', text, re.I)
    fetched = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
    fields = []
    for row in tables[0].nodes('tr'):
        cells = [n for n in row.children if isinstance(n, Node) and n.tag in ('td', 'th')]
        if len(cells) != 2:
            continue
        label, value = cells[0].text(), cells[1].text()
        if label not in ('Name', 'Type', 'Length', 'Beam', 'Tonnage', 'Capacity', 'Builder', 'Yard number', 'Launched', 'Completed', 'Identification', 'Port of registry') or not value:
            continue
        fields.append({'field': label, 'label': label + ' (백과 기록)', 'value': value[:500],
                       'source_url': url, 'source_type': 'encyclopedia', 'observed_at': None,
                       'fetched_at': fetched, 'evidence': (label + ': ' + value)[:500],
                       'verification_status': 'source_reported_historical', 'extraction_method': 'html'})
    return {'state': 'partial', 'vessel': {'name': compared, 'imo': imo_match[1],
            'mmsi': mmsi_match[1] if mmsi_match else None, 'lat': None, 'lon': None,
            'observed_at': None, 'source_url': url}, 'fields': fields, 'candidates': [],
            'sources': [{'url': url, 'title': 'Wikipedia 공개 선박 기록', 'fetched_at': fetched}],
            'errors': [], 'missing': ['precise_position', 'independent_crosscheck', 'current_voyage'],
            'position_note': '백과 기록은 현재 운항·위치 정보가 아닙니다.', 'fetched_at': fetched}


def _search_vessel(query):
    if not isinstance(query, str):
        query = ''
    query = re.sub(r'\s+', ' ', query).strip()
    if not 2 <= len(query) <= 80 or any(ord(c) < 32 for c in query):
        return {'state': 'invalid_request', 'vessel': None, 'fields': [], 'candidates': [], 'sources': [], 'errors': ['선박명 또는 IMO/MMSI를 2~80자로 입력하세요.']}
    key = normalized(query)
    now = time.monotonic()
    with _lock:
        cached = _cache.get(key)
    if cached and now - cached[0] < 60:
        result = deepcopy(cached[1])
        result['cached'] = True
        return result
    base = {'vessel': None, 'fields': [], 'candidates': [], 'sources': [], 'errors': []}
    try:
        if query.isdigit() and len(query) == 7:
            result = parse_detail(_fetch('/vessels/details/' + query), BASE + '/vessels/details/' + query, query)
        else:
            path = '/vessels?' + urlencode({'name': query})
            candidates = parse_candidates(_fetch(path))
            exact = [c for c in candidates if normalized(c['name']) == key or query in (c['imo'], c['mmsi'])]
            # Numeric MMSI search needs detail identity confirmation, not name comparison.
            if query.isdigit() and len(query) == 9 and len(candidates) == 1:
                exact = candidates
            if len(exact) == 1:
                item = exact[0]
                result = parse_detail(_fetch(item['path']), BASE + item['path'], query)
            elif candidates:
                result = dict(base, state='ambiguous', candidates=[{k: v for k, v in c.items() if k != 'path'} for c in (exact or candidates)],
                              sources=[{'url': BASE + path, 'title': '선박 검색 후보'}])
            else:
                result = dict(base, state='not_found', errors=['공개 출처에서 일치하는 선박을 찾지 못했습니다. 영문 선박명 또는 IMO/MMSI로 다시 검색하세요.'])
    except SourceError as exc:
        result = dict(base, state='source_unavailable', errors=[str(exc)])
    if result['state'] in ('source_unavailable', 'not_found'):
        original_errors = result['errors']
        try:
            result = _wikipedia_fallback(query)
            result['errors'] = ['VesselFinder: ' + message for message in original_errors]
        except SourceError as exc:
            result['errors'] = original_errors + ['Wikipedia: ' + str(exc)]
    if result.get('vessel'):
        from vessel_enrichment import enrich
        result = enrich(result, getattr(_context, 'deadline', time.monotonic() + 60))
    result['query'] = query
    result['cached'] = False
    if result['state'] in ('partial', 'complete', 'ambiguous'):
        with _lock:
            if len(_cache) >= 32:
                _cache.pop(next(iter(_cache)))
            _cache[key] = (now, deepcopy(result))
    return result


def search_vessel(query):
    """Coalesce simultaneous identical requests and retain the original fetch time."""
    key = normalized(query) if isinstance(query, str) else ''
    deadline = time.monotonic() + 60
    with _lock:
        pending = _inflight.get(key)
        owner = pending is None
        if owner:
            pending = {'event': threading.Event(), 'result': None}
            _inflight[key] = pending
    if owner:
        _context.deadline = deadline
        try:
            pending['result'] = _search_vessel(query)
        finally:
            pending['event'].set()
            with _lock:
                _inflight.pop(key, None)
            del _context.deadline
    elif not pending['event'].wait(max(0, deadline - time.monotonic())):
        return {'state':'source_unavailable','vessel':None,'fields':[],'sources':[],
                'candidates':[],'errors':['동일 선박 조사 대기 시간이 초과되었습니다.']}
    result = deepcopy(pending['result'])
    if result is None:
        raise SourceError('선박 조사에 실패했습니다.')
    request_id = str(uuid.uuid4())
    result['request_id'] = request_id
    for field in result.get('fields', []):
        field['request_id'] = request_id
        field.setdefault('published_at', None)
        field.setdefault('observed_at', None)
        field.setdefault('unit', None)
        if result.get('vessel'):
            field.setdefault('matched_identity', {'imo': result['vessel'].get('imo')})
    return result
