/* ---------- icons (inline SVG, stroke-based) ---------- */
const I = {
  plus:'<path d="M12 5v14M5 12h14"/>',
  gear:'<path d="M10.3 3.3a1 1 0 0 1 1 -.9h1.4a1 1 0 0 1 1 .9l.2 1.6a7 7 0 0 1 1.6 .9l1.5-.6a1 1 0 0 1 1.2 .4l.7 1.2a1 1 0 0 1-.2 1.3l-1.2 1a7 7 0 0 1 0 1.8l1.2 1a1 1 0 0 1 .2 1.3l-.7 1.2a1 1 0 0 1-1.2 .4l-1.5-.6a7 7 0 0 1-1.6 .9l-.2 1.6a1 1 0 0 1-1 .9h-1.4a1 1 0 0 1-1-.9l-.2-1.6a7 7 0 0 1-1.6-.9l-1.5 .6a1 1 0 0 1-1.2-.4l-.7-1.2a1 1 0 0 1 .2-1.3l1.2-1a7 7 0 0 1 0-1.8l-1.2-1a1 1 0 0 1-.2-1.3l.7-1.2a1 1 0 0 1 1.2-.4l1.5 .6a7 7 0 0 1 1.6-.9z"/><circle cx="12" cy="12" r="2.6"/>',
  chevR:'<path d="M15 6l-6 6 6 6"/>',
  chevL:'<path d="M9 6l6 6-6 6"/>',
  check:'<path d="M5 12l5 5L20 6"/>',
  cal:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M9 3v4M15 3v4"/>',
  trash:'<path d="M5 7h14M10 7V5h4v2M6 7l1 12h10l1-12"/>',
  inbox:'<path d="M4 13h4l2 3h4l2-3h4M5 6h14l1 7v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5z"/>',
  download:'<path d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  /* subject icons */
  triangle:'<path d="M12 4l8 15H4z"/>',
  sigma:'<path d="M17 5H7l5 7-5 7h10"/>',
  integral:'<path d="M9 19c0 1.5 1 2 2 2s2-.8 2-3V6c0-2.2 1-3 2-3s2 .5 2 2"/>',
  atom:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  abc:'<path d="M3 17l2.5-8L8 17M3.7 14h3.6M13 9v8M13 9h2a2 2 0 0 1 0 4h-2m0 0h2.3a2 2 0 0 1 0 4H13M21 11a2 2 0 0 0-4 0v3a2 2 0 0 0 4 0"/>',
  letter:'<path d="M5 18L10 6l5 12M6.5 14h7M17 9v9M17 9h2.5a2.2 2.2 0 0 1 0 4.5H17"/>',
  book:'<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M18 16H7a2 2 0 0 0-2 2"/>',
  hourglass:'<path d="M7 4h10M7 20h10M8 4c0 4 8 4 8 8s-8 4-8 8M16 4c0 4-8 4-8 8s8 4 8 8"/>',
  scale:'<path d="M12 4v16M7 20h10M6 8h12M6 8l-2.5 5a2.5 2.5 0 0 0 5 0zM18 8l-2.5 5a2.5 2.5 0 0 0 5 0z"/>',
  globe:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/>',
  dna:'<path d="M8 3c0 4 8 6 8 9s-8 5-8 9M16 3c0 4-8 6-8 9s8 5 8 9M8.5 7h7M8.5 17h7M10 5h4M10 19h4"/>',
  flask:'<path d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3M7.5 15h9"/>',
  microscope:'<path d="M6 20h12M9 20v-2M8 4l3 3-2 2-3-3zM10 6l4 4-3.5 3.5a4 4 0 0 1-5-5M13 15a5 5 0 0 1 3 5"/>',
  feather:'<path d="M20 4a6 6 0 0 0-8.5 0L5 10.5V19h8.5L20 12.5A6 6 0 0 0 20 4zM5 19L15 9M10 10h4v4"/>',
  code:'<path d="M9 8l-5 4 5 4M15 8l5 4-5 4"/>',
  language:'<path d="M4 5h8M8 3v2M6 5c0 4-2 7-4 8M7 5c0 3 2 6 4 7M13 20l4-9 4 9M14.5 16h5"/>',
  calculator:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4M8 19h4"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6z"/>',
  ruler:'<path d="M4 16L16 4l4 4L8 20zM8 8l2 2M11 5l2 2M14 12l2 2M11 15l2 2"/>',
  pi:'<path d="M5 8h14M9 8v9M15 8v7a1.5 1.5 0 0 0 3 0"/>',
  brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V5a2.5 2.5 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1"/>',
  leaf:'<path d="M5 20c0-8 6-14 14-14 0 8-6 14-14 14zM5 20c3-5 6-8 10-10"/>',
  molecule:'<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="8" r="2.4"/><circle cx="12" cy="17" r="2.4"/><path d="M7.7 7.7l3 6.6M16.2 9.6l-3 5.2M8.1 6.6l7.6 1"/>',
  test_tube:'<path d="M8 3h8M14 3v13a2.5 2.5 0 0 1-5 0V3M9 12h5"/>',
  earth:'<circle cx="12" cy="12" r="9"/><path d="M4 9c3 1 5-1 7 0s4 2 6 1M5 15c2-1 4 0 6-1s3-2 6-1"/>',
  mountain:'<path d="M3 20l6-11 4 6 2-3 6 8zM9 9l2 3"/>',
  map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
  palette:'<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-.5-2 1-2h2a4 4 0 0 0 4-4c0-5-4-8-9-8z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/>',
  music:'<path d="M9 18V5l10-2v13M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM19 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>',
  running:'<circle cx="15" cy="5" r="2"/><path d="M13 21l1.5-6-3-2 1-5 3 2 2 2M8 12l3-1M6 21l3-5"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6c3 2 3 10 0 12M18 6c-3 2-3 10 0 12"/>',
  laptop:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 20h20M9 20l.5-4M15 20l-.5-4"/>',
  chip:'<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
  star:'<path d="M12 3l2.6 5.6L21 9.4l-4.5 4.3L17.6 21 12 17.8 6.4 21l1.1-7.3L3 9.4l6.4-.8z"/>',
  pen:'<path d="M4 20l4-1L19 8a2 2 0 0 0-3-3L5 16zM14 7l3 3"/>',
  quote:'<path d="M7 7H4v4a3 3 0 0 0 3 3V7zM17 7h-3v4a3 3 0 0 0 3 3V7z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  clockwork:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
};
const ICON_CHOICES = ['triangle','sigma','integral','pi','calculator','compass','ruler','atom','molecule','test_tube','flask','dna','leaf','microscope','brain','abc','letter','book','quote','pen','feather','language','hourglass','clock','scale','globe','earth','map','mountain','laptop','code','chip','bulb','music','palette','running','ball','star','target'];

/* ====== App name — change this one line to rename the app ====== */
const APP_NAME = 'Compound V';   /* options you liked: 'SchoolNinja', 'SchoolHero', 'Skewl' */

/* subject colors — value is the accent hex; the icon background is a soft tint of it */
const COLORS = ['#7c9cff','#ff8f5e','#5bd6a0','#ffb454','#c77dff','#ff6b8a','#4fd0e3'];
const DEFAULT_COLOR = '#7c9cff';
const tint = hex => { const h=hex.replace('#',''); const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16); return `rgba(${r},${g},${b},.16)`; };
const svg = (name, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${I[name]||''}</svg>`;

const TYPES = [
  {k:'homework', label:'שיעורי בית', icon:'book'},
  {k:'big', label:'עבודה גדולה', icon:'feather'},
  {k:'quiz', label:'בוחן', icon:'clock'},
  {k:'test', label:'מבחן', icon:'scale'},
];
const typeMeta = k => TYPES.find(t=>t.k===k) || TYPES[0];
const typeIcon = k => ({homework:'book', big:'feather', quiz:'clock', test:'scale'})[k];
const finishLabel = k => k==='test'?'תאריך המבחן' : k==='quiz'?'תאריך הבוחן' : 'להגיש עד';

/* ---------- date helpers ---------- */
const midnight = d => { const x=new Date(d); x.setHours(0,0,0,0); return x; };
const TODAY = midnight(new Date());
const addDays = (base,n) => { const d=new Date(base); d.setDate(d.getDate()+n); return midnight(d); };
const daysBetween = d => Math.round((midnight(d)-TODAY)/86400000);
const fmtDate = d => new Date(d).toLocaleDateString('he-IL',{day:'numeric',month:'short'});
const toISO = d => { const x=new Date(d); x.setMinutes(x.getMinutes()-x.getTimezoneOffset()); return x.toISOString().slice(0,10); };

function distLabel(d){
  const n = daysBetween(d);
  if(n<0) return {txt:'עבר הזמן', cls:'red'};
  if(n===0) return {txt:'היום', cls:'red'};
  if(n===1) return {txt:'מחר', cls:'amber'};
  if(n<=2) return {txt:'בעוד '+n+' ימים', cls:'amber'};
  return {txt:'בעוד '+n+' ימים', cls:''};
}

/* ---------- app state ---------- */
let TASKS = [];
let SUBJECTS = [];
let SETTINGS = {};
let nav = {screen:'home'};
let draft = {};

const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function boot(){
  TASKS = await Store.getTasks();
  SUBJECTS = await Store.getSubjects();
  SETTINGS = await Store.getSettings();
  applyTheme(SETTINGS.theme || 'auto');
  render();
}

function applyTheme(mode){
  const root = document.documentElement;
  if(mode==='auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);
}
async function setTheme(mode){
  SETTINGS.theme = mode;
  await Store.saveSettings(SETTINGS);
  applyTheme(mode);
  render();
}

function go(screen, extra={}){ nav = {screen, ...extra}; render(); }

/* ---------- render ---------- */
function render(){
  const map = {home:Home, subject:SubjectPick, type:TypePick, date:DatePick, detail:Detail, settings:Settings, done:DoneHistory, editsub:EditSubject};
  app.innerHTML = (map[nav.screen]||Home)();
  app.querySelector('.screen')?.classList.add('fade');
}

function header(title, {back=null, gear=false, sub=null}={}){
  return `<div class="hdr ${sub?'':'bordered'}">
    ${back!==null?`<button class="iconbtn" onclick="go('${back}')" aria-label="חזרה">${svg('chevR')}</button>`:''}
    <div style="flex:1;min-width:0">
      <div class="ttl">${esc(title)}</div>
      ${sub?`<div class="sub">${esc(sub)}</div>`:''}
    </div>
    ${gear?`<button class="iconbtn" onclick="go('settings')" aria-label="הגדרות">${svg('gear')}</button>`:''}
  </div>`;
}

function subjectIcon(name){
  const s = SUBJECTS.find(x=>x.name===name);
  return s ? s.icon : 'book';
}
function subjectColor(name){
  const s = SUBJECTS.find(x=>x.name===name);
  return (s && s.color) ? s.color : DEFAULT_COLOR;
}
function subjectTico(name, size){
  const c = subjectColor(name);
  const st = size ? `width:${size}px;height:${size}px;` : '';
  return `<div class="tico" style="${st}background:${tint(c)};color:${c}">${svg(subjectIcon(name))}</div>`;
}

/* ---------- HOME ---------- */
function Home(){
  const live = TASKS.filter(t=>!t.done).sort((a,b)=> new Date(a.finish)-new Date(b.finish));
  const statusLine = homeStatus(live);
  let listHTML;
  if(live.length===0){
    listHTML = `<div class="empty">${svg('inbox')}<div>אין משימות קרובות.<br>הוסף משהו כשמקבלים אותו בכיתה.</div></div>`;
  } else {
    // group: overdue+today+tomorrow => "עכשיו", up to 7 => "השבוע", rest => "בהמשך"
    const groups = {now:[], week:[], later:[]};
    live.forEach(t=>{ const n=daysBetween(t.finish); if(n<=1) groups.now.push(t); else if(n<=7) groups.week.push(t); else groups.later.push(t); });
    const gLabel = {now:'עכשיו', week:'השבוע', later:'בהמשך'};
    listHTML = Object.entries(groups).filter(([_,arr])=>arr.length).map(([k,arr])=>`
      <div class="daygroup">
        <div class="glabel">${gLabel[k]}</div>
        ${arr.map(taskRow).join('')}
      </div>`).join('');
  }
  const installHint = !window.matchMedia('(display-mode: standalone)').matches
    ? `<div class="installbar">${svg('download')}<div><b>התקן את האפליקציה:</b> בתפריט השיתוף בדפדפן בחר "הוסף למסך הבית".</div></div>` : '';
  return `<div class="screen">
    ${heroHeader(statusLine)}
    <div class="body">
      ${installHint}
      ${listHTML}
    </div>
    <div class="fab-wrap"><button class="fab" onclick="startAdd()">${svg('plus')}הוספת משימה</button></div>
  </div>`;
}

function heroHeader(statusLine){
  return `<div class="cvhead">
    <div class="cvglow"></div>
    <button class="iconbtn cvgear" onclick="go('settings')" aria-label="הגדרות">${svg('gear')}</button>
    <div class="cvrow">
      ${vialSVG()}
      <div class="cvtitle">
        <div class="cvname">COMPOUND <span class="v">V</span></div>
        <div class="cvsub">${esc(statusLine)}</div>
      </div>
    </div>
  </div>`;
}

function vialSVG(){
  return `<svg class="cvvial" viewBox="0 0 46 58" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="serumg" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stop-color="#0891b2"/><stop offset=".45" stop-color="#22d3ee"/><stop offset="1" stop-color="#67e8f9"/>
      </linearGradient>
      <linearGradient id="glassg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".22"/><stop offset=".5" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff" stop-opacity=".08"/>
      </linearGradient>
      <clipPath id="vialclip"><path d="M15 12h16v34a8 8 0 0 1-16 0z"/></clipPath>
    </defs>
    <rect x="13" y="2" width="20" height="5" rx="1.5" fill="#7dd3fc"/>
    <rect x="16" y="6" width="14" height="4" fill="#38bdf8" opacity=".5"/>
    <path d="M15 11h16v35a8 8 0 0 1-16 0z" fill="#0a1524" stroke="#2dd4bf" stroke-width="1.4" stroke-opacity=".7"/>
    <g clip-path="url(#vialclip)">
      <g class="liq">
        <rect x="14" y="27" width="18" height="21" fill="url(#serumg)"/>
      </g>
      <ellipse cx="23" cy="27" rx="9" ry="1.8" fill="#a5f3fc" opacity=".9"/>
      <g class="bubbles">
        <circle cx="21" r="1.4" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="3.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.15;.85;1" dur="3.6s" repeatCount="indefinite"/>
          <animate attributeName="r" values="0.7;1.4;1.2" keyTimes="0;.3;1" dur="3.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="25" r="1" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="4.4s" begin="1.3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.85;.85;0" keyTimes="0;.15;.85;1" dur="4.4s" begin="1.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="23" r="1.7" fill="#e0fbff">
          <animate attributeName="cy" values="45;27" dur="4s" begin="2.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.15;.85;1" dur="4s" begin="2.2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="0.8;1.7;1.4" keyTimes="0;.3;1" dur="4s" begin="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="19" r="0.9" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="4.8s" begin=".7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.8;.8;0" keyTimes="0;.15;.85;1" dur="4.8s" begin=".7s" repeatCount="indefinite"/>
        </circle>
      </g>
    </g>
    <path d="M15 11h16v35a8 8 0 0 1-16 0z" fill="url(#glassg)"/>
    <path d="M18 14v30" stroke="#ffffff" stroke-opacity=".4" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function homeStatus(live){
  const overdue = live.filter(t=>daysBetween(t.finish)<0).length;
  const today = live.filter(t=>daysBetween(t.finish)===0).length;
  if(live.length===0) return 'הכול רגוע — אין הגשות קרובות';
  const parts=[];
  if(today) parts.push(today===1?'משימה אחת להיום':`${today} משימות להיום`);
  if(overdue) parts.push(overdue===1?'אחת עברה את הזמן':`${overdue} עברו את הזמן`);
  if(parts.length) return parts.join(' · ');
  const next = live[0]; const n = daysBetween(next.finish);
  return n===1 ? 'הכי קרוב: מחר' : `הכי קרוב: בעוד ${n} ימים`;
}

function taskRow(t){
  const d = distLabel(t.finish); const m = typeMeta(t.type);
  return `<div class="task" onclick="go('detail',{id:'${t.id}'})">
    ${subjectTico(t.subject)}
    <div class="tmid">
      <div class="tsub">${esc(t.subject)}</div>
      <div class="ttype">${m.label}</div>
    </div>
    <div class="tright">
      <span class="pill ${d.cls}">${d.txt}</span>
      <span class="tdate">${fmtDate(t.finish)}</span>
    </div>
  </div>`;
}

/* ---------- ADD FLOW ---------- */
function startAdd(){ draft={}; go('subject'); }

function SubjectPick(){
  const cards = SUBJECTS.map(s=>{
    const c = s.color || DEFAULT_COLOR;
    return `<button class="subcard" onclick="pickSubject('${esc(s.name).replace(/'/g,"\\'")}')">
      <span style="color:${c}">${svg(s.icon)}</span><span>${esc(s.name)}</span>
    </button>`;
  }).join('');
  return `<div class="screen">
    ${header('איזה מקצוע?',{back:'home'})}
    <div class="body"><div class="pad"><div class="grid2">${cards}</div></div></div>
  </div>`;
}
function pickSubject(name){ draft.subject=name; go('type'); }

function TypePick(){
  const cards = TYPES.map(t=>`
    <button class="typecard" onclick="pickType('${t.k}')">${svg(t.icon)}${t.label}</button>`).join('');
  return `<div class="screen">
    ${header(draft.subject,{back:'subject'})}
    <div class="body"><div class="pad"><div class="typelist">${cards}</div></div></div>
  </div>`;
}
function pickType(k){ draft.type=k; go('date'); }

function DatePick(){
  const m = typeMeta(draft.type);
  const q = (draft.type==='test'||draft.type==='quiz') ? 'מתי זה?' : 'מתי צריך להגיש?';
  return `<div class="screen">
    ${header(draft.subject, {back:'type', sub:m.label})}
    <div class="body"><div class="pad">
      <div class="qlabel">${q}</div>
      <div class="grid2">
        <button class="datebtn" onclick="saveTask(0)">היום</button>
        <button class="datebtn" onclick="saveTask(1)">מחר</button>
        <button class="datebtn" onclick="saveTask(2)">בעוד יומיים</button>
        <button class="datebtn" onclick="saveTask(7)">שבוע הבא</button>
      </div>
      <button class="pickdate" onclick="openDatePicker(event)">${svg('cal')}בחירת תאריך מדויק
        <input type="date" id="exactdate" onchange="if(this.value)saveExact(this.value)">
      </button>
    </div></div>
  </div>`;
}

function newId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
async function commitTask(finishDate){
  const t = {id:newId(), subject:draft.subject, type:draft.type, given:toISO(TODAY), finish:toISO(finishDate), done:false, createdAt:Date.now()};
  TASKS.push(t);
  await Store.saveTasks(TASKS);
  go('home'); toast('נוסף');
}
function saveTask(n){ commitTask(addDays(TODAY,n)); }
function saveExact(v){ commitTask(new Date(v+'T00:00:00')); }
function openDatePicker(e){
  e.preventDefault();
  const inp = document.getElementById('exactdate');
  if(!inp) return;
  if(typeof inp.showPicker === 'function'){
    try { inp.showPicker(); return; } catch(_){}
  }
  inp.focus(); inp.click();
}

/* ---------- DETAIL ---------- */
function Detail(){
  const t = TASKS.find(x=>x.id===nav.id);
  if(!t) return Home();
  const m = typeMeta(t.type); const d = distLabel(t.finish);
  return `<div class="screen">
    ${header('משימה',{back:'home'})}
    <div class="body">
      <div class="dhead">
        <div class="tico" style="width:52px;height:52px;background:${tint(subjectColor(t.subject))};color:${subjectColor(t.subject)}">${svg(subjectIcon(t.subject))}</div>
        <div><div class="dsub">${esc(t.subject)}</div><div class="dtype">${m.label}</div></div>
      </div>
      <div class="drow"><span class="dk">${finishLabel(t.type)}</span><span class="dv">${fmtDate(t.finish)} · ${d.txt}</span></div>
      <label class="drow"><span class="dk">תאריך קבלה</span>
        <span class="dv edit">${fmtDate(t.given)} <span class="hint">· שינוי</span>
          <input type="date" value="${toISO(t.given)}" onchange="if(this.value)editGiven('${t.id}',this.value)">
        </span></label>
      <div class="dactions">
        <button class="btn" onclick="markDone('${t.id}')">${svg('check')}סימון כבוצע</button>
        <button class="btn ghost" onclick="delTask('${t.id}')">מחיקת המשימה</button>
      </div>
    </div>
  </div>`;
}
async function markDone(id){ const t=TASKS.find(x=>x.id===id); if(t){t.done=true;t.doneAt=Date.now();} await Store.saveTasks(TASKS); go('home'); toast('כל הכבוד'); }
async function editGiven(id,v){ const t=TASKS.find(x=>x.id===id); if(t)t.given=toISO(new Date(v+'T00:00:00')); await Store.saveTasks(TASKS); render(); }
async function delTask(id){ TASKS=TASKS.filter(x=>x.id!==id); await Store.saveTasks(TASKS); go('home'); toast('נמחק'); }

/* ---------- SETTINGS ---------- */
function Settings(){
  const rows = SUBJECTS.map((s,i)=>`
    <div class="setrow" onclick="editSubject(${i})" style="cursor:pointer">
      <span class="sname"><span style="color:${s.color||DEFAULT_COLOR};display:grid;place-items:center">${svg(s.icon)}</span>${esc(s.name)}</span>
      <span class="dv" style="color:var(--ink-faint)">${svg('chevL')}</span>
    </div>`).join('');
  const doneCount = TASKS.filter(t=>t.done).length;
  return `<div class="screen">
    ${header('הגדרות',{back:'home'})}
    <div class="body">
      <div class="sectlabel">מקצועות</div>
      <div class="addrow">
        <input class="inp" id="newsub" placeholder="שם מקצוע חדש" onkeydown="if(event.key==='Enter')addSubject()">
        <button class="addbtn" onclick="addSubject()">הוספה</button>
      </div>
      <div id="iconpickwrap" style="padding:0 18px"></div>
      ${rows}
      <div class="sectlabel">כללי</div>
      <div class="seg" role="group" aria-label="ערכת נושא">
        <button class="${(SETTINGS.theme||'auto')==='light'?'on':''}" onclick="setTheme('light')">בהיר</button>
        <button class="${(SETTINGS.theme||'auto')==='dark'?'on':''}" onclick="setTheme('dark')">כהה</button>
        <button class="${(SETTINGS.theme||'auto')==='auto'?'on':''}" onclick="setTheme('auto')">אוטומטי</button>
      </div>
      <div class="setrow" onclick="go('done')" style="cursor:pointer">
        <span class="sname">${svg('check')}משימות שבוצעו</span>
        <span class="dv" style="color:var(--ink-faint);font-weight:500">${doneCount} ${svg('chevL')}</span>
      </div>
    </div>
  </div>`;
}
let pendingIcon = 'book';
let pendingColor = DEFAULT_COLOR;
function addSubject(){
  const el=document.getElementById('newsub'); const v=el.value.trim();
  if(!v) return;
  SUBJECTS.push({name:v, icon:pendingIcon, color:pendingColor});
  Store.saveSubjects(SUBJECTS);
  pendingIcon='book'; pendingColor=DEFAULT_COLOR; render();
  toast('נוסף');
}
function removeSubject(i){ SUBJECTS.splice(i,1); Store.saveSubjects(SUBJECTS); render(); }

/* ---------- EDIT SUBJECT ---------- */
function editSubject(i){
  const s = SUBJECTS[i];
  pendingIcon = s.icon; pendingColor = s.color || DEFAULT_COLOR;
  go('editsub',{editIndex:i});
}
function EditSubject(){
  const i = nav.editIndex; const s = SUBJECTS[i];
  if(!s) return Settings();
  return `<div class="screen">
    ${header('עריכת מקצוע',{back:'settings'})}
    <div class="body">
      <div class="pad">
        <div style="font-size:12px;color:var(--ink-dim);margin:2px 0 8px">שם</div>
        <input class="inp" id="editname" value="${esc(s.name)}" style="width:100%;margin-bottom:6px">
        <div id="editpickwrap"></div>
      </div>
      <div class="dactions">
        <button class="btn" onclick="saveSubjectEdit()">${svg('check')}שמירה</button>
        <button class="btn ghost" onclick="removeSubjectAndBack()">מחיקת המקצוע</button>
      </div>
    </div>
  </div>`;
}
async function saveSubjectEdit(){
  const i = nav.editIndex; const s = SUBJECTS[i];
  const name = document.getElementById('editname').value.trim();
  const oldName = s.name;
  if(name) s.name = name;
  s.icon = pendingIcon; s.color = pendingColor;
  await Store.saveSubjects(SUBJECTS);
  if(name && name!==oldName){
    TASKS.forEach(t=>{ if(t.subject===oldName) t.subject=name; });
    await Store.saveTasks(TASKS);
  }
  go('settings'); toast('נשמר');
}
async function removeSubjectAndBack(){
  SUBJECTS.splice(nav.editIndex,1);
  await Store.saveSubjects(SUBJECTS);
  go('settings'); toast('נמחק');
}

/* ---------- DONE HISTORY ---------- */
function DoneHistory(){
  const done = TASKS.filter(t=>t.done).sort((a,b)=>(b.doneAt||0)-(a.doneAt||0));
  let body;
  if(done.length===0){
    body = `<div class="empty">${svg('check')}<div>עדיין אין משימות שבוצעו.</div></div>`;
  } else {
    body = done.map(t=>{
      const gap = Math.round((midnight(t.finish)-midnight(t.given))/86400000);
      const m = typeMeta(t.type);
      return `<div class="task" style="cursor:default">
        <div class="tico" style="color:var(--green)">${svg('check')}</div>
        <div class="tmid"><div class="tsub">${esc(t.subject)}</div><div class="ttype">${m.label} · התקבל ${fmtDate(t.given)}</div></div>
      </div>`;
    }).join('');
  }
  return `<div class="screen">${header('משימות שבוצעו',{back:'settings'})}<div class="body">${body}</div></div>`;
}

/* ---------- toast ---------- */
let toastT;
function toast(msg){
  let el=document.querySelector('.toast');
  if(!el){ el=document.createElement('div'); el.className='toast'; document.body.appendChild(el); }
  el.textContent=msg; requestAnimationFrame(()=>el.classList.add('show'));
  clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),1600);
}

/* render color + icon pickers wherever a picker wrap exists (add or edit) */
const _origRender = render;
render = function(){
  _origRender();
  const wrap = document.getElementById('iconpickwrap') || document.getElementById('editpickwrap');
  if(wrap){ wrap.innerHTML = pickerHTML(); }
};
function pickerHTML(){
  const colors = COLORS.map(c=>`<div class="coloropt ${c===pendingColor?'sel':''}" onclick="setPendingColor('${c}')" style="background:${c}"></div>`).join('');
  const icons = ICON_CHOICES.map(ic=>`<div class="iconopt ${ic===pendingIcon?'sel':''}" onclick="setPendingIcon('${ic}')" style="${ic===pendingIcon?`color:${pendingColor};border-color:${pendingColor}`:''}">${svg(ic)}</div>`).join('');
  return `
    <div style="font-size:12px;color:var(--ink-dim);margin:10px 0 8px">צבע</div>
    <div class="colorpick">${colors}</div>
    <div style="font-size:12px;color:var(--ink-dim);margin:14px 0 8px">סמל</div>
    <div class="iconpick" id="iconpickgrid">${icons}</div>`;
}
function setPendingColor(c){
  pendingColor=c;
  document.querySelectorAll('.coloropt').forEach(el=>el.classList.remove('sel'));
  event.currentTarget.classList.add('sel');
  const sel=document.querySelector('.iconopt.sel');
  if(sel){ sel.style.color=c; sel.style.borderColor=c; }
}
function setPendingIcon(ic){
  pendingIcon=ic;
  document.querySelectorAll('.iconopt').forEach(el=>{el.classList.remove('sel');el.style.color='';el.style.borderColor='';});
  const el=event.currentTarget; el.classList.add('sel'); el.style.color=pendingColor; el.style.borderColor=pendingColor;
}

boot();
