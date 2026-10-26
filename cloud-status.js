// Show actual feed health separately from the saved vessel display.
(() => {
  const label = document.createElement('div');
  label.setAttribute('role', 'status');
  label.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;z-index:1500;padding:10px 14px;background:#102136;color:#fff;border:1px solid #36bfd2;border-radius:8px;font:13px/1.5 sans-serif;pointer-events:none';
  document.body.append(label);
  const setText = text => { label.textContent = text; };
  async function refresh() {
    const result = await requestAisStatus();
    setText(result.ok ? aisStatusText(result.ais)
      : 'AIS 서버 상태 확인 실패 · 저장 자료를 표시합니다. ' + result.error);
  }
  void refresh();
  setInterval(() => { void refresh(); }, 15000);
})();
