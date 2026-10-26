# wherevessel — 한 척 중심 선박 검색

선박명 또는 IMO·MMSI로 요청한 한 척의 공개 자료를 조회합니다. 기존 274척 자료는 이름 제안만 남겼으며 좌표·제원은 검색 결과로 사용하지 않습니다.

## 실행

Python 3.12 이상에서 `python server.py`를 실행하고 http://localhost:3000/ 을 엽니다. 로컬 `start.bat`와 `wherevessel.bat`도 같은 화면을 엽니다. AIS 수신기는 자동 시작하지 않습니다. 공개 웹 바로가기의 Render 배포본은 로컬 수정만으로 갱신되지 않습니다.

## 정보와 한계

- `/api/search-vessel?q=PANCON%20GLORY`: API 키 없는 공개 웹 자료 수집. 접근 규칙·출처 실패를 처리하며 대체 출처를 탐색합니다.
- 이름이 모호하면 후보를 선택합니다. 기존 목록 밖의 이름과 IMO도 조회할 수 있습니다.
- 각 항목에 원문 링크, 보고 시각을 표시합니다. 조회 시각과 관측 시각은 다릅니다. 단일 출처 보고는 독립 대조 완료로 표시하지 않습니다.
- 정확한 좌표와 관측 시각을 확보하지 못하면 지도에 마커나 항로를 만들지 않습니다. 공개 페이지의 반올림된 지도 좌표를 실제 선박 좌표로 쓰지 않습니다.
- 사이트 접근 차단·구조 변경·통신 실패로 일부 또는 전체 조회가 실패할 수 있습니다. API 없는 모든 선박의 최신 위치를 보장하지 않습니다.
- 60초 캐시, 3개 동시 외부 조회 제한. 다른 선박 조회·중지 시 이전 응답의 화면 반영을 막습니다. 클라이언트 중지는 서버의 진행 중 HTTP 요청을 즉시 중단하지는 않습니다.
- 예전 소스·상세 데이터는 `.amo/single-vessel/before/`에 복구용으로 보관하고 HTTP에서는 차단합니다. 기존 AIS 중계 서비스 파일은 별도 용도로 보존합니다.

## 검증

`python -m unittest discover -s tests -p test_vessel_search.py`

`python -m unittest discover -s tests -p test_single_vessel_http.py`

`node tests/check_single_vessel.cjs`

기존 전체 선박 UI 검사는 교체된 화면의 완료 근거로 사용하지 않습니다. 실제 수집 결과는 `.amo/single-vessel-live-results.json`, 통합 결과는 `.amo/single-vessel/REPORT.md`를 확인하세요.
## 공개 원문 확장 (2026-10-26)

Shyppy의 보이는 소수 좌표와 절대 관측 시각을 IMO·MMSI·선명과 대조한 경우 보고 위치로 표시합니다. 관측이 오래되면 과거 보고임을 표시하며 측위 정확도·실제 현재 위치를 보장하지 않습니다. VesselFinder의 지도 중심 정수 좌표는 사용하지 않습니다.

공개 검색엔진으로 원문 URL을 발굴하고, 검토된 출처 URL을 보조 경로로 사용합니다. 검색 요약은 사실로 표시하지 않습니다. HTML·동적 브라우저·PDF 텍스트 수집은 원문 식별자를 확인한 발췌와 페이지를 제공합니다. 검색엔진 접근 제한, robots 거부, 브라우저 부재, PDF 실패는 오류로 남깁니다. 백과 기록의 전장·폭은 같은 단위의 공개 제원과 비교해 일치·충돌을 보존합니다. 식별자 일치는 AIS 원자료의 독립 검증을 뜻하지 않습니다.

확장 의존성 설치: `python -m pip install -r requirements.txt`, 동적 문서용 `python -m playwright install chromium`. Docker는 Chromium과 필요한 OS 의존성을 포함합니다. 같은 선박의 동시 요청은 병합하고 조회별 request_id를 제공합니다. 이전 요청 취소 후 응답 혼입을 차단합니다.
