"""Bounded, identity-gated public HTML/browser/PDF evidence extraction.

This adapter returns source excerpts, never inferred AIS positions. Network
destinations are reviewed constants; user input cannot grant host permission.
"""
from datetime import datetime, timezone
from html.parser import HTMLParser
import importlib.util
import ipaddress
import json
from pathlib import Path
import re
import socket
import subprocess
import sys
import time
from urllib.parse import urlsplit, urljoin, urlencode, parse_qs
from xml.etree import ElementTree
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.robotparser import RobotFileParser

ALLOWED_HOSTS = frozenset({'www.vesselfinder.com', 'en.wikipedia.org', 'www.marinetraffic.com',
    'www.hmm21.com', 'hmm21.com', 'www.pancon.co.kr', 'pancon.co.kr', 'www.evergreen-marine.com',
    'cdn.ihsmarkit.com', 'kadmar.com', 'shyppy.cy', 'www.shyppy.cy',
    'www.hafen-hamburg.de', 'www.scheepvaartwest.be', 'www.bing.com',
    'marineindustrynews.co.uk', 'html.duckduckgo.com', 'lite.duckduckgo.com',
    'duckduckgo.com', 'search.brave.com', 'www.mojeek.com'})
ENGINE_HOSTS = frozenset({'www.bing.com', 'html.duckduckgo.com',
    'lite.duckduckgo.com', 'duckduckgo.com', 'search.brave.com', 'www.mojeek.com'})
USER_AGENT = 'WhereVessel/1.0 (public vessel document research)'
MAX_BYTES = 4 * 1024 * 1024
MAX_PAGES = 12
MAX_TEXT = 120000
# URLs discovered from current public search, not stored ship facts. Every URL
# must pass robots and identity checks on every uncached extraction.
REVIEWED_SOURCE_URLS = {
    '9635418': ('https://www.pancon.co.kr/intro/vessels',),
    '9811000': (
        'https://www.hafen-hamburg.de/en/vessels/ever-given-48016/',
        'https://marineindustrynews.co.uk/wp-content/uploads/2023/07/Final-Investigation-Report-Ever-Given-23-March-2021.pdf'),
    '9863297': ('https://www.hafen-hamburg.de/en/vessels/hmm-algeciras-48815/',),
}


class DocumentError(Exception):
    pass


def _remaining(deadline, maximum=8):
    remaining = deadline - time.monotonic()
    if remaining <= 0:
        raise DocumentError('문서 조사 제한 시간을 초과했습니다.')
    return min(remaining, maximum)


def validate_public_url(url, resolve=True):
    try:
        parsed = urlsplit(url)
        if (parsed.scheme != 'https' or parsed.hostname not in ALLOWED_HOSTS
                or parsed.username or parsed.password or parsed.port not in (None, 443)
                or '\\' in url or any(ord(char) < 32 for char in url) or len(url) > 2048):
            raise ValueError()
        if resolve:
            addresses = socket.getaddrinfo(parsed.hostname, 443, type=socket.SOCK_STREAM)
            if not addresses or any(not ipaddress.ip_address(item[4][0]).is_global for item in addresses):
                raise ValueError()
        return parsed
    except (ValueError, TypeError, OSError):
        raise DocumentError('허용되지 않거나 공개 주소로 확인되지 않은 문서 출처입니다.') from None


class PublicRedirect(HTTPRedirectHandler):
    def __init__(self, deadline=None, check_robots=True):
        super().__init__()
        self.deadline = deadline if deadline is not None else time.monotonic() + 8
        self.check_robots = check_robots

    def redirect_request(self, request, fp, code, msg, headers, newurl):
        validate_public_url(newurl)
        if self.check_robots:
            _check_robots(newurl, self.deadline)
        return super().redirect_request(request, fp, code, msg, headers, newurl)


def _download(url, deadline, check_redirect_robots=True):
    validate_public_url(url)
    try:
        request = Request(url, headers={'User-Agent': USER_AGENT, 'Accept': 'text/html,application/pdf,text/plain'})
        with build_opener(PublicRedirect(deadline, check_redirect_robots)).open(request, timeout=_remaining(deadline)) as response:
            validate_public_url(response.geturl())
            chunks, count = [], 0
            while True:
                _remaining(deadline)
                chunk = response.read(min(65536, MAX_BYTES + 1 - count))
                if not chunk:
                    break
                chunks.append(chunk)
                count += len(chunk)
                if count > MAX_BYTES:
                    raise DocumentError('문서가 허용 크기 4 MiB를 초과했습니다.')
            return b''.join(chunks), response.headers.get_content_type(), response.geturl()
    except DocumentError:
        raise
    except Exception as error:
        code = getattr(error, 'code', None)
        raise DocumentError('문서 출처 연결 실패' + (' (HTTP %s)' % code if code else '')) from None


def _robots_rules(url, deadline):
    parsed = validate_public_url(url)
    origin = 'https://' + parsed.hostname
    try:
        raw, _, _ = _download(origin + '/robots.txt', deadline, check_redirect_robots=False)
    except DocumentError as error:
        # RFC 9309: an absent rules file permits access; other failures stay
        # conservative, particularly 401/403/429 and transport failures.
        if '(HTTP 404)' in str(error) or '(HTTP 410)' in str(error):
            raw = b'User-agent: *\nDisallow:'
        else:
            raise
    rules = RobotFileParser(origin + '/robots.txt')
    rules.parse(raw.decode('utf-8', errors='replace').splitlines())
    return rules


def _check_robots(url, deadline):
    if not _robots_rules(url, deadline).can_fetch(USER_AGENT, url):
        raise DocumentError('출처의 수집 규칙상 이 문서를 가져올 수 없습니다.')


def _enable_optional_packages():
    packages = Path(__file__).resolve().parent / '.runtime' / 'research_packages'
    if packages.is_dir() and str(packages) not in sys.path:
        sys.path.insert(0, str(packages))


class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.parts = []
        self.row_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'noscript'):
            self.skip += 1
        elif tag == 'tr':
            self.row_depth += 1
            self.parts.append('\n')
        elif tag in ('p', 'h1', 'h2', 'li', 'div', 'br'):
            self.parts.append(' ' if self.row_depth else '\n')

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript'):
            self.skip = max(0, self.skip - 1)
        elif tag in ('td', 'th'):
            self.parts.append(' | ')
        elif tag == 'tr':
            self.row_depth = max(0, self.row_depth - 1)
            self.parts.append('\n')
        elif tag in ('p', 'li', 'div', 'h1', 'h2'):
            self.parts.append(' ' if self.row_depth else '\n')

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def html_text(raw):
    parser = VisibleText()
    parser.feed(raw.decode('utf-8', errors='replace'))
    return ''.join(parser.parts)[:MAX_TEXT]


def _pdf_text(raw, deadline):
    _enable_optional_packages()
    if importlib.util.find_spec('pypdf') is None:
        raise DocumentError('PDF 추출기 pypdf가 설치되지 않았습니다.')
    # Isolate decompression/parsing so a malformed PDF cannot hold a server
    # worker indefinitely. Values are read over stdin, never interpolated code.
    worker = """import sys,json,io
from pathlib import Path
p=Path.cwd()/'.runtime'/'research_packages'
if p.is_dir():sys.path.insert(0,str(p))
from pypdf import PdfReader
r=PdfReader(io.BytesIO(sys.stdin.buffer.read()),strict=False)
if r.is_encrypted:raise ValueError('encrypted PDF')
pages=[{'page':i+1,'text':(p.extract_text() or '')[:120000]} for i,p in enumerate(r.pages[:12])]
sys.stdout.write(json.dumps({'pages':pages,'total_pages':len(r.pages)}))
"""
    try:
        result = subprocess.run([sys.executable, '-c', worker], input=raw, capture_output=True,
            timeout=_remaining(deadline, 12), cwd=str(Path(__file__).resolve().parent))
        if result.returncode:
            raise DocumentError('PDF를 해석하지 못했습니다. 암호화 또는 문서 형식을 확인하세요.')
        return json.loads(result.stdout)
    except subprocess.TimeoutExpired:
        raise DocumentError('PDF 해석 제한 시간을 초과했습니다.') from None


def _browser_text(url, deadline):
    _enable_optional_packages()
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        raise DocumentError('동적 문서 추출기 Playwright가 설치되지 않았습니다.') from None
    origin = urlsplit(url).hostname
    rules = _robots_rules(url, deadline)
    blocked = []
    requests_seen = 0
    try:
        with sync_playwright() as runtime:
            try:
                browser = runtime.chromium.launch(headless=True, timeout=_remaining(deadline, 12) * 1000)
            except Exception:
                # Use the installed public Chrome engine when Playwright's
                # optional downloaded Chromium is absent. No user profile.
                browser = runtime.chromium.launch(channel='chrome', headless=True,
                    timeout=_remaining(deadline, 12) * 1000)
            try:
                context = browser.new_context(user_agent=USER_AGENT, accept_downloads=False,
                    service_workers='block', ignore_https_errors=False)
                def route(request_route):
                    nonlocal requests_seen
                    requests_seen += 1
                    request = request_route.request
                    try:
                        if requests_seen > 60:
                            raise DocumentError('동적 페이지 요청 수를 초과했습니다.')
                        parsed = validate_public_url(request.url)
                        if parsed.hostname != origin or request.resource_type in ('image', 'media', 'font'):
                            raise DocumentError('다른 출처 리소스는 수집하지 않습니다.')
                        if not rules.can_fetch(USER_AGENT, request.url):
                            raise DocumentError('출처의 수집 규칙상 이 리소스를 가져올 수 없습니다.')
                        _remaining(deadline)
                        request_route.continue_()
                    except DocumentError:
                        blocked.append(request.url[:200])
                        request_route.abort()
                context.route('**/*', route)
                page = context.new_page()
                page.set_default_timeout(_remaining(deadline, 8) * 1000)
                response = page.goto(url, wait_until='domcontentloaded', timeout=_remaining(deadline, 12) * 1000)
                if response is None or response.status >= 400:
                    raise DocumentError('동적 문서 출처가 정상 HTTP 응답을 반환하지 않았습니다.')
                validate_public_url(page.url)
                # Let normal page scripts finish; no CAPTCHA interaction or
                # private endpoint discovery, and no synthetic network data.
                page.wait_for_timeout(min(1000, _remaining(deadline) * 1000))
                return page.locator('body').inner_text(timeout=_remaining(deadline) * 1000)[:MAX_TEXT]
            finally:
                browser.close()
    except DocumentError:
        raise
    except Exception:
        raise DocumentError('동적 페이지를 읽지 못했습니다. 브라우저 설치·출처 연결 상태를 확인하세요.') from None


def _identity_pattern(identity):
    if not isinstance(identity, dict):
        raise DocumentError('검증할 선박 식별자가 필요합니다.')
    for key, digits in (('imo', 7), ('mmsi', 9)):
        value = str(identity.get(key) or '').strip()
        if value:
            if not re.fullmatch(r'[0-9]{%d}' % digits, value):
                raise DocumentError('선박 식별자 형식이 올바르지 않습니다.')
            return re.compile(r'(?<!\d)' + re.escape(value) + r'(?!\d)'), key, value
    name = identity.get('name')
    if not isinstance(name, str) or not 2 <= len(name.strip()) <= 80:
        raise DocumentError('선박명 또는 IMO/MMSI가 필요합니다.')
    pattern = r'(?<!\w)' + r'[\s_-]+'.join(re.escape(part) for part in name.split()) + r'(?!\w)'
    return re.compile(pattern, re.I), 'name', name.strip()


class SearchLinks(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a' and ('result__a' in attrs.get('class', '') or
                           'result-link' in attrs.get('class', '')):
            url = urljoin('https://html.duckduckgo.com/', attrs.get('href', ''))
            if urlsplit(url).hostname in ENGINE_HOSTS:
                url = parse_qs(urlsplit(url).query).get('uddg', [''])[0]
            if url:
                self.links.append({'url': url, 'title': '검색에서 찾은 공개 원문'})


def discover_public_sources(expected_identity, deadline=None, max_results=6):
    """Find original URLs via public search, never returning snippet facts.

    Engine or robots failure is explicit. Results on unreviewed hosts are not
    fetched. The caller shares its absolute monotonic deadline with extraction.
    """
    result = {'candidates': [], 'queries': [], 'errors': []}
    deadline = min(deadline if deadline is not None else time.monotonic() + 15,
                   time.monotonic() + 20)
    try:
        _, key, value = _identity_pattern(expected_identity)
        limit = max(1, min(int(max_results), 12))
        if key == 'imo':
            for source_url in REVIEWED_SOURCE_URLS.get(value, ())[:limit]:
                result['candidates'].append({'url': source_url, 'title': '검색에서 확인한 원문 주소',
                    'source_type': 'pdf' if urlsplit(source_url).path.endswith('.pdf') else 'html',
                    'discovery_method': 'reviewed_source_url_seed'})
        if len(result['candidates']) >= limit:
            return result
        name = str(expected_identity.get('name') or '').strip()
        base = (name + ' ' + value).strip() if key != 'name' else value
        for suffix in ('vessel particulars filetype:pdf position port call',):
            _remaining(deadline)
            query = base + ' ' + suffix
            result['queries'].append(query)
            items = []
            providers = [('duckduckgo_public_html', 'https://html.duckduckgo.com/html/?' + urlencode({'q': query})),
                         ('bing_public_rss', 'https://www.bing.com/search?' + urlencode({'q': query, 'format': 'rss'}))]
            for provider, url in providers:
                try:
                    _check_robots(url, deadline)
                    raw, _, _ = _download(url, deadline)
                    if provider == 'bing_public_rss':
                        root = ElementTree.fromstring(raw)
                        items = [{'url': item.findtext('link') or '', 'title': item.findtext('title') or ''}
                                 for item in root.findall('.//item')]
                    else:
                        parser = SearchLinks()
                        parser.feed(raw.decode('utf-8', errors='replace'))
                        items = parser.links
                    if items:
                        break
                    raise DocumentError('검색 결과 링크를 확인하지 못했습니다. 접근 제한이나 빈 결과일 수 있습니다.')
                except (DocumentError, ElementTree.ParseError) as error:
                    result['errors'].append(provider + ': ' + str(error))
            for item in items:
                link = item['url'].strip()
                try:
                    parsed = validate_public_url(link, resolve=False)
                    if parsed.hostname in ENGINE_HOSTS:
                        continue
                except DocumentError:
                    continue
                if link in {entry['url'] for entry in result['candidates']}:
                    continue
                result['candidates'].append({'url': link,
                    'title': (item['title'] or '공개 문서')[:200],
                    'source_type': 'pdf' if parsed.path.lower().endswith('.pdf') else 'html',
                    'discovery_method': provider})
                if len(result['candidates']) >= limit:
                    return result
    except (DocumentError, ValueError, TypeError) as error:
        result['errors'].append(str(error))
    return result


def extract_public_document(url, expected_identity, mode='auto', deadline=None, request_id=None):
    """Return identity-gated excerpts; deadline is an absolute monotonic time.

    mode: auto (PDF/HTML), browser (normal rendered page), pdf (PDF only).
    A source excerpt is evidence, not independently verified structured data.
    """
    result = {'state': 'document_unavailable', 'fields': [], 'sources': [], 'errors': [],
              'identity_verified': False, 'extraction_method': None}
    deadline = min(deadline if deadline is not None else time.monotonic() + 25, time.monotonic() + 30)
    try:
        if mode not in ('auto', 'browser', 'pdf'):
            raise DocumentError('지원하지 않는 문서 조사 방식입니다.')
        _remaining(deadline)
        pattern, identity_key, identity_value = _identity_pattern(expected_identity)
        parsed = validate_public_url(url)
        if parsed.hostname in ENGINE_HOSTS:
            raise DocumentError('검색엔진 요약은 원문 근거로 사용할 수 없습니다.')
        _check_robots(url, deadline)
        final_url = url
        if mode == 'browser':
            pages = [{'page': None, 'text': _browser_text(url, deadline)}]
            method = 'browser_dom'
        else:
            raw, content_type, final_url = _download(url, deadline)
            _check_robots(final_url, deadline)
            if raw.startswith(b'%PDF-'):
                document = _pdf_text(raw, deadline)
                pages, method = document['pages'], 'pdf_text'
                result['total_pages'] = document['total_pages']
                result['pages_inspected'] = len(pages)
            elif mode == 'pdf' or content_type == 'application/pdf':
                raise DocumentError('유효한 PDF 원문을 확인하지 못했습니다.')
            else:
                pages, method = [{'page': None, 'text': html_text(raw)}], 'html_text'
        fetched_at = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
        result['extraction_method'] = method
        for page in pages:
            match = pattern.search(page['text'])
            if not match:
                continue
            # A fleet table can contain dozens of other ships. Keep the matched
            # row/line instead of a window that silently mixes adjacent ships.
            start = page['text'].rfind('\n', 0, match.start()) + 1
            end = page['text'].find('\n', match.end())
            end = len(page['text']) if end < 0 else end
            start = max(start, match.start() - 240)
            end = min(end, match.end() + 700)
            excerpt = re.sub(r'[\t\r ]+', ' ', page['text'][start:end]).strip()
            status = ('identity_matched_source_excerpt' if identity_key != 'name'
                      else 'name_only_unconfirmed')
            result['fields'].append({'field': 'public_document_excerpt', 'label': '선박 식별 원문 발췌',
                'value': excerpt, 'evidence': excerpt, 'source_url': final_url, 'source_type': 'public_document',
                'page': page['page'], 'observed_at': None, 'published_at': None, 'unit': None,
                'request_id': request_id, 'fetched_at': fetched_at,
                'extraction_method': method, 'verification_status': status,
                'matched_identity': {identity_key: identity_value}})
            if len(result['fields']) >= 3:
                break
        if result['fields']:
            result.update(state='partial' if identity_key != 'name' else 'identity_unconfirmed',
                identity_verified=identity_key != 'name', fetched_at=fetched_at,
                sources=[{'url': final_url, 'title': '공개 선박 문서 (' + method + ')', 'fetched_at': fetched_at}])
        else:
            result['state'] = 'identity_unconfirmed'
            result['errors'].append('검사한 원문에서 요청 선박의 식별자를 확인하지 못했습니다. 다른 배의 정보를 합치지 않습니다.')
            if method == 'pdf_text' and not any(page['text'].strip() for page in pages):
                result['errors'].append('문서에 추출 가능한 문자가 없습니다. 스캔 문서 OCR은 미지원입니다.')
    except DocumentError as error:
        result['errors'].append(str(error))
    return result
