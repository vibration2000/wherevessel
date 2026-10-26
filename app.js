'use strict';
const el = id => document.getElementById(id);
let activeRequest = 0, controller = null, map = null, marker = null;
function message(text, state = '') { el('status').textContent = text; el('status').dataset.state = state; }
function safeUrl(value) { try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password ? u.href : null; } catch { return null; } }
function link(url, text, cls) { const a = document.createElement('a'); const safe = safeUrl(url); a.textContent = text; if(safe) { a.href=safe; a.target='_blank'; a.rel='noopener noreferrer'; } if(cls) a.className=cls; return a; }
function formatTime(value) { const d=new Date(value); return value && Number.isFinite(d.getTime()) ? d.toLocaleString('ko-KR',{timeZone:'Asia/Seoul',hour12:false})+' KST' : '시각 미확인'; }
function clearResult() { el('results').hidden=true; el('candidates').hidden=true; el('candidates').replaceChildren(); el('fields').replaceChildren(); el('sources').replaceChildren(); if(marker && map) map.removeLayer(marker); marker=null; el('mapEmpty').hidden=false; }
function renderFields(fields) {
 const primary=document.createElement('dl'), secondary=document.createElement('dl');
 const mainKeys=new Set(['region','speed','Navigation Status','destination','destination_time','position_observed_at','Ship Type','Flag']);
 for(const f of fields || []) {
  if(f.value===null || f.value===undefined || f.value==='')continue;
  if(['mmsi','Vessel Name','IMO number'].includes(f.field))continue;
  const row=document.createElement('div');row.className='fact';const dt=document.createElement('dt');dt.textContent=f.label || f.field || '정보';
  const dd=document.createElement('dd');dd.textContent=String(f.value)+(f.unit?' '+f.unit:'');const small=document.createElement('small');
  small.append(link(f.source_url || f.sourceUrl,'원문 확인 ↗'));
  if(f.page)small.append(document.createTextNode(' · '+f.page+'쪽'));
  if(f.verification_status==='conflict')small.append(document.createTextNode(' · 출처 충돌'));
  if(f.observed_at)small.append(document.createTextNode(' · 보고 '+formatTime(f.observed_at)));
  dd.append(small);row.append(dt,dd);(mainKeys.has(f.field)?primary:secondary).append(row);
 }
 el('fields').replaceChildren(primary);
 if(secondary.children.length){const more=document.createElement('details');const summary=document.createElement('summary');summary.textContent='제원·입출항 정보 더 보기 ('+secondary.children.length+')';more.append(summary,secondary);el('fields').append(more);}
}
function renderResult(data) {
 const v=data.vessel || {};el('results').hidden=false;el('emptyState').hidden=true;el('vesselName').textContent=v.name || el('query').value;
 el('identifiers').textContent=['IMO '+(v.imo || '미확인'),'MMSI '+(v.mmsi || '미확인')].join('  ·  ');
 const observedAge=Date.now()-Date.parse(data.position?.observed_at || v.observed_at);el('resultState').textContent=Number.isFinite(observedAge) && observedAge>300000 ? '오래된 보고 포함' : (data.state==='complete' ? '자료 수집 완료' : '출처 보고 자료');renderFields(data.fields);
 const checks=data.crosschecks || [];el('missing').textContent=(checks.some(c=>c.status==='corroborated')?'다른 원문과 선박 식별자를 대조했습니다. ':'')+(checks.some(c=>c.status==='conflict')?'출처 사이에 충돌이 있습니다. ':'')+(data.verification_note || '출처가 보고한 자료이며 독립 대조가 완료된 정보는 아닙니다.')+' 미확인 항목은 추정하지 않습니다. 목적지·ETA는 보고 또는 계획입니다.';
 for(const c of checks){if(!c.values)continue;const row=document.createElement('p');row.textContent=(c.field==='length'?'전장':c.field==='beam'?'폭':c.field)+' · '+(c.status==='agreement'?'원문 값 일치':'원문 값 차이')+': ';for(const v of c.values)row.append(link(v.source_url,String(v.value)+' ↗'),document.createTextNode(' '));el('missing').append(row);}
 el('fetchedAt').textContent='조회 '+formatTime(data.fetched_at || new Date().toISOString());
 const sources=data.sources || [];for(const s of sources)el('sources').append(link(s.url || s.source_url, s.title || s.name || s.url,'source-link'));
 el('errors').textContent=(data.errors || []).map(x=>typeof x==='string'?x:(x.message || x.error || '')).filter(Boolean).join(' · ');
 const p=data.position || v; const stamp=p.observed_at || p.observedAt; const time=Date.parse(stamp);const source=safeUrl(p.source_url || p.sourceUrl);
 const valid=typeof p.lat==='number' && typeof p.lon==='number' && Number.isFinite(p.lat) && Number.isFinite(p.lon) && Math.abs(p.lat)<=90 && Math.abs(p.lon)<=180 && Number.isFinite(time) && time<=Date.now()+60000 && source && !p.approximate;
 if(valid && window.L) { if(!map) {map=L.map('map').setView([p.lat,p.lon],7);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:18}).addTo(map);} el('mapEmpty').hidden=true;map.invalidateSize();if(marker)map.removeLayer(marker);const icon=L.divIcon?L.divIcon({className:'',html:'<span style="display:block;width:22px;height:22px;border:3px solid white;border-radius:50%;background:#087f76;box-shadow:0 0 0 2px #087f76" aria-hidden="true"></span>',iconSize:[22,22],iconAnchor:[11,11]}):null;marker=L.marker([p.lat,p.lon],icon?{icon}:{}).addTo(map);marker.bindPopup(document.createTextNode(v.name || '조회 선박'));map.setView([p.lat,p.lon],7);el('positionTime').textContent='관측 '+formatTime(stamp);el('mapNote').textContent=(Date.now()-time>300000?'과거 보고 위치입니다. ':'보고된 위치입니다. ')+'실제 현재 위치를 보장하지 않습니다. '+(p.precision_note || '')+' ';el('mapNote').append(link(source,'위치 원문 ↗'));
 } else {el('mapEmpty').hidden=false;el('positionTime').textContent=stamp?'관측 '+formatTime(stamp):'정확한 좌표·관측 시각 미확보';el('mapNote').textContent='정밀 좌표와 관측 시각을 확보하지 못했습니다. 원문에서 위치를 확인하세요.';}
}
function renderCandidates(items) { el('candidates').hidden=false;const title=document.createElement('h3');title.textContent='찾으시는 선박을 선택하세요';el('candidates').append(title);for(const c of items){const b=document.createElement('button');b.type='button';b.className='candidate';b.textContent=[c.name,c.imo?'IMO '+c.imo:'',c.mmsi?'MMSI '+c.mmsi:'',c.type || ''].filter(Boolean).join(' · ');b.addEventListener('click',()=>{el('query').value=c.imo || c.mmsi || c.name;search();});el('candidates').append(b);}}
async function search() {
 const q=el('query').value.trim();if(q.length<2 || q.length>80){message('선박명 또는 IMO·MMSI를 2~80자로 입력하세요.','error');return;}
 if(controller)controller.abort();const id=++activeRequest;controller=new AbortController();const current=controller;const timer=setTimeout(()=>current.abort(),65000);
 clearResult();el('emptyState').hidden=true;el('cancelButton').hidden=false;el('searchButton').textContent='다른 선박 조회 ↗';message('이 선박의 식별 정보와 공개 원문을 조사하고 있습니다. 최대 60초가 걸릴 수 있습니다.','loading');
 try {const response=await fetch('/api/search-vessel?q='+encodeURIComponent(q),{signal:current.signal,cache:'no-store'});const data=await response.json();if(id!==activeRequest)return;if(!response.ok)throw new Error(data.error || '조회 서버에 연결하지 못했습니다.');
 if(data.state==='ambiguous' || (!data.vessel && data.candidates?.length)){renderCandidates(data.candidates);message('비슷한 이름의 선박을 찾았습니다. 식별자를 확인하고 선택하세요.');}
 else if(data.vessel && (data.fields || []).length){renderResult(data);message(data.cached?'최근 조회 자료입니다. 각 항목의 원문과 시각을 확인하세요.':'공개 원문에서 확보한 자료입니다. 미확인 항목은 채우지 않았습니다.');}
 else {const why=(data.errors || []).map(x=>typeof x==='string'?x:(x.message || '')).filter(Boolean).join(' · ');message(data.state==='source_unavailable'?'자료 제공처에 연결하지 못했습니다. '+why:(why || '확인 가능한 자료를 찾지 못했습니다. 영문명 또는 IMO·MMSI로 다시 조회하세요.'),'error');el('emptyState').hidden=false;}
 } catch(error) {if(id!==activeRequest)return;message(error.name==='AbortError'?'조회가 중지되었거나 제한 시간을 초과했습니다. 다시 조회할 수 있습니다.':error.message,'error');el('emptyState').hidden=false;
 } finally {clearTimeout(timer);if(id===activeRequest){controller=null;el('cancelButton').hidden=true;el('searchButton').textContent='선박 조회 ↗';}}
}
el('searchForm').addEventListener('submit',event=>{event.preventDefault();search();});
el('cancelButton').addEventListener('click',()=>{activeRequest++;if(controller)controller.abort();controller=null;clearResult();el('cancelButton').hidden=true;el('searchButton').textContent='선박 조회 ↗';el('emptyState').hidden=false;message('조회를 중지했습니다. 다른 선박을 검색할 수 있습니다.');});
fetch('/vessels.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(names=>{for(const item of names){const o=document.createElement('option');o.value=item.name;el('vesselNames').append(o);}}).catch(()=>message('이름 제안을 불러오지 못했습니다. 이름을 직접 입력해 조회할 수 있습니다.'));

