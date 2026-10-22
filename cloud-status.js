// Show actual feed health separately from the saved vessel display.
(() => {
  if (!location.hostname.endsWith('.onrender.com') && !location.hostname.endsWith('.github.io')) return;
  const label = document.createElement('div');
  label.setAttribute('role', 'status');
  label.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;z-index:10000;padding:10px 14px;background:#102136;color:#fff;border:1px solid #36bfd2;border-radius:8px;font:13px/1.5 sans-serif;pointer-events:none';
  document.body.append(label);
  const setText = text => { label.textContent = text; };
  if (location.hostname.endsWith('.github.io')) {
    setText('저장 데이터 조회용 · 실시간 서버: https://wherevessel.onrender.com');
    return;
  }
  async function refresh() {
    try {
      const response = await fetch('/api/status', { cache: 'no-store' });
      if (!response.ok) throw new Error();
      const { ais } = await response.json();
      const messages = {
        awaiting_api_key: 'AIS 키 설정 대기 · 현재 위치는 저장 데이터입니다.',
        connecting: 'AIS 제공 서버 연결 중 · 현재 위치는 저장 데이터입니다.',
        connected_waiting_for_reports: 'AIS 연결됨 · 실제 선박 보고 수신을 기다리고 있습니다.',
        reconnecting: 'AIS 연결 끊김 · 마지막 저장 데이터를 표시합니다.',
        upstream_rejected: 'AIS 인증 또는 구독 거절 · 저장 데이터를 표시합니다.',
        rate_limited: 'AIS 제공 서버 요청 제한(429) · 저장 데이터를 표시합니다.'
      };
      let text = messages[ais.state] || 'AIS 상태 확인 중';
      if (ais.state === 'receiving') text = 'AIS 수신 중 · 실제 수신 선박만 갱신됩니다. 마지막 수신: ' + ais.last_received_at;
      if (ais.next_retry_at) text += ' · 다음 연결: ' + new Date(ais.next_retry_at).toLocaleTimeString('ko-KR');
      setText(text);
    } catch {
      setText('AIS 서버 상태 확인 실패 · 저장 데이터를 표시합니다.');
    }
  }
  refresh();
  setInterval(refresh, 15000);
})();
