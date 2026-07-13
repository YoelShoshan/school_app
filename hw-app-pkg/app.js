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
};
const ICON_CHOICES = ['triangle','sigma','integral','atom','abc','letter','book','hourglass','scale','globe','dna','flask','microscope','feather','code','language'];
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
  render();
}

function go(screen, extra={}){ nav = {screen, ...extra}; render(); }

/* ---------- render ---------- */
function render(){
  const map = {home:Home, subject:SubjectPick, type:TypePick, date:DatePick, detail:Detail, settings:Settings, done:DoneHistory};
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

/* ---------- HOME ---------- */
function Home(){
  const live = TASKS.filter(t=>!t.done).sort((a,b)=> new Date(a.finish)-new Date(b.finish));
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
    ${header('השבועיים הקרובים',{gear:true})}
    <div class="body">
      ${installHint}
      ${listHTML}
    </div>
    <div class="fab-wrap"><button class="fab" onclick="startAdd()">${svg('plus')}הוספת משימה</button></div>
  </div>`;
}

function taskRow(t){
  const d = distLabel(t.finish); const m = typeMeta(t.type);
  return `<div class="task" onclick="go('detail',{id:'${t.id}'})">
    <div class="tico">${svg(subjectIcon(t.subject))}</div>
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
  const cards = SUBJECTS.map(s=>`
    <button class="subcard" onclick="pickSubject('${esc(s.name).replace(/'/g,"\\'")}')">
      ${svg(s.icon)}<span>${esc(s.name)}</span>
    </button>`).join('');
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
      <label class="pickdate">${svg('cal')}בחירת תאריך מדויק
        <input type="date" onchange="if(this.value)saveExact(this.value)">
      </label>
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

/* ---------- DETAIL ---------- */
function Detail(){
  const t = TASKS.find(x=>x.id===nav.id);
  if(!t) return Home();
  const m = typeMeta(t.type); const d = distLabel(t.finish);
  return `<div class="screen">
    ${header('משימה',{back:'home'})}
    <div class="body">
      <div class="dhead">
        <div class="tico">${svg(subjectIcon(t.subject))}</div>
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
    <div class="setrow">
      <span class="sname">${svg(s.icon)}${esc(s.name)}</span>
      <button class="iconbtn" onclick="removeSubject(${i})" aria-label="הסרה">${svg('trash')}</button>
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
      <div class="setrow" onclick="go('done')" style="cursor:pointer">
        <span class="sname">${svg('check')}משימות שבוצעו</span>
        <span class="dv" style="color:var(--ink-faint);font-weight:500">${doneCount} ${svg('chevL')}</span>
      </div>
    </div>
  </div>`;
}
let pendingIcon = 'book';
function addSubject(){
  const el=document.getElementById('newsub'); const v=el.value.trim();
  if(!v) return;
  SUBJECTS.push({name:v, icon:pendingIcon});
  Store.saveSubjects(SUBJECTS);
  pendingIcon='book'; render();
}
function removeSubject(i){ SUBJECTS.splice(i,1); Store.saveSubjects(SUBJECTS); render(); }

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

/* render icon picker into settings when present */
const _origRender = render;
render = function(){
  _origRender();
  const wrap=document.getElementById('iconpickwrap');
  if(wrap){
    wrap.innerHTML = `<div class="iconpick">${ICON_CHOICES.map(ic=>`<div class="iconopt ${ic===pendingIcon?'sel':''}" onclick="setPendingIcon('${ic}')">${svg(ic)}</div>`).join('')}</div>`;
  }
};
function setPendingIcon(ic){ pendingIcon=ic; document.querySelectorAll('.iconopt').forEach(el=>el.classList.remove('sel')); event.currentTarget.classList.add('sel'); }

boot();
