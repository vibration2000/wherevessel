"""Additional public evidence for an already identified vessel, within one deadline."""
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
import re
import time


def compare_particulars(primary, other):
    """Compare like static quantities while retaining original text and provenance."""
    pairs = [('Length Overall (m)', 'Length', 'length', 'm'),
             ('Beam (m)', 'Beam', 'beam', 'm')]
    checks = []
    for left, right, key, unit in pairs:
        a = next((f for f in primary if f['field'] == left), None)
        b = next((f for f in other if f['field'] == right), None)
        if not a or not b:
            continue
        # Require an explicit metre value in the historical record, not feet.
        am = re.fullmatch(r'([\d,]+(?:\.\d+)?)\s*(?:m)?', str(a['value']))
        bm = re.match(r'^([\d,]+(?:\.\d+)?)\s*(?:m\b|metres?\b|meters?\b)', str(b['value']))
        if not am or not bm:
            continue
        av, bv = float(am[1].replace(',','')), float(bm[1].replace(',',''))
        checks.append({'field':key, 'unit':unit,
            'status':'agreement' if abs(av-bv) < .011 else 'conflict',
            'values':[{'value':a['value'],'source_url':a['source_url']},
                      {'value':b['value'],'source_url':b['source_url']}],
            'evidence':'공개 제원과 백과 과거 제원을 비교했습니다. 원자료의 독립성은 미확인입니다.'})
    return checks


def parse_shyppy(html, expected, url):
    from vessel_search import Document, normalized, SourceError
    doc = Document(html).root
    heroes = list(doc.nodes('div', 'page-hero'))
    if not heroes:
        raise SourceError('위치 원문의 선박 식별 영역을 찾지 못했습니다.')
    headings = list(heroes[0].nodes('h1'))
    identity = heroes[0].text()
    ids = re.search(r'IMO\s+(\d{7})\s*·\s*MMSI\s+(\d{9})\b', identity)
    if (not headings or not ids or ids[1] != expected.get('imo')
            or normalized(headings[0].text()) != normalized(expected.get('name', ''))
            or (expected.get('mmsi') and ids[2] != expected['mmsi'])):
        raise SourceError('위치 원문의 선박 식별자가 요청과 일치하지 않습니다.')
    fields = {}
    for node in doc.nodes('div', 'detail-field'):
        labels, values = list(node.nodes('label')), list(node.nodes('span'))
        if labels and values:
            fields[labels[0].text()] = values[0].text()
    stamps = list(doc.nodes('span', 'fo-updated'))
    raw = stamps[0].text() if stamps else ''
    try:
        stamp = parsedate_to_datetime(raw.removeprefix('Last seen '))
        if stamp.tzinfo is None or stamp.timestamp() > time.time() + 60:
            raise ValueError()
        observed = stamp.astimezone(timezone.utc).isoformat().replace('+00:00', 'Z')
    except (ValueError, TypeError, OverflowError):
        raise SourceError('위치 원문의 절대 관측 시각을 확인하지 못했습니다.') from None
    # Use the visible reported coordinates, never a map centre or FAQ rounding.
    coords = re.fullmatch(r'(-?\d+\.\d{4,})°\s*,\s*(-?\d+\.\d{4,})°', fields.get('Position', ''))
    if not coords or abs(float(coords[1])) > 90 or abs(float(coords[2])) > 180:
        raise SourceError('위치 원문의 유효한 보고 좌표를 확인하지 못했습니다.')
    fetched = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
    evidence = 'Position: ' + fields['Position'] + '; ' + raw
    return {'lat': float(coords[1]), 'lon': float(coords[2]), 'observed_at': observed,
            'source_url': url, 'fetched_at': fetched, 'evidence': evidence,
            'verification_status': 'source_reported', 'extraction_method': 'visible_html',
            'precision_note': '공개 원문에 표시된 소수 좌표이며 측위 정확도를 보장하지 않습니다.'}


def enrich(result, deadline):
    from vessel_search import _download, _wikipedia_fallback, SourceError, normalized
    import research_documents as documents
    vessel = result['vessel']
    checks = []
    if time.monotonic() < deadline - 2:
        url = 'https://shyppy.cy/vessel/imo-' + vessel['imo']
        try:
            # Reuse the bounded document transport and access rules.
            documents._check_robots(url, deadline)
            raw, kind, final = documents._download(url, deadline)
            position = parse_shyppy(raw.decode('utf-8', errors='replace'), vessel, final)
            result['position'] = position
            result['fields'].append({'field': 'reported_coordinates', 'label': '원문 보고 좌표',
                'value': str(position['lat']) + ', ' + str(position['lon']),
                'source_type': 'public_web', **{k:v for k,v in position.items() if k not in ('lat','lon')}})
            result['sources'].append({'url': final, 'title': 'Shyppy 공개 AIS 보고', 'fetched_at': position['fetched_at']})
            result['missing'] = [x for x in result['missing'] if x != 'precise_position']
            result['position_note'] = position['precision_note']
            checks.append({'field': 'identity', 'status': 'corroborated', 'source_url': final,
                           'evidence': '선명·IMO·MMSI 일치. AIS 원자료의 독립성은 미확인.'})
        except (documents.DocumentError, SourceError) as exc:
            result['errors'].append('Shyppy: ' + str(exc))
    if time.monotonic() < deadline - 3 and not any(s.get('url','').startswith('https://en.wikipedia.org/') for s in result['sources']):
        try:
            other = _wikipedia_fallback(vessel['name'])
            if other['vessel']['imo'] != vessel['imo']:
                checks.append({'field':'identity','status':'conflict','source_url':other['vessel']['source_url'],
                               'evidence':'선박명은 같지만 IMO가 다릅니다. 자료를 병합하지 않았습니다.'})
            else:
                checks.extend(compare_particulars(result['fields'], other['fields']))
                result['fields'].extend(other['fields'])
                result['sources'].extend(other['sources'])
                checks.append({'field':'identity','status':'corroborated','source_url':other['vessel']['source_url'],
                               'evidence':'백과 기록 IMO 일치. 제원은 과거 기록이며 위치 대조는 아닙니다.'})
        except SourceError as exc:
            result['errors'].append('독립 기록: ' + str(exc))
    if time.monotonic() < deadline - 5:
        discovery = documents.discover_public_sources(vessel, deadline=deadline, max_results=3)
        result['discovery'] = discovery
        result['errors'].extend(discovery.get('errors', []))
        known = {s['url'] for s in result['sources']}
        for candidate in discovery.get('candidates', []):
            if time.monotonic() >= deadline - 2:
                break
            if candidate['url'] in known:
                continue
            document = documents.extract_public_document(candidate['url'], vessel, deadline=deadline)
            if (document['state'] == 'identity_unconfirmed'
                    and '.pdf' not in candidate['url'].lower() and time.monotonic() < deadline - 6):
                document = documents.extract_public_document(candidate['url'], vessel, mode='browser', deadline=deadline)
            result['fields'].extend(document['fields'])
            result['sources'].extend(document['sources'])
            result['errors'].extend(document['errors'])
            if document.get('identity_verified'):
                checks.append({'field':'identity','status':'corroborated','source_url':candidate['url'],
                    'evidence':'별도 공개 문서에서 IMO 식별자를 확인했습니다. 현재 위치의 독립 검증은 아닙니다.'})
            known.add(candidate['url'])
    # Identity agreement does not prove independent AIS feeds or all field values.
    result['crosschecks'] = checks
    result['verification_note'] = '선박 식별 대조와 위치·제원 대조는 별개입니다. 동일 AIS 원자료의 독립성은 확인되지 않았습니다.'
    return result
