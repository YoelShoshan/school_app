/*
  Storage layer.
  Everything the app persists goes through this object.
  Right now it reads/writes localStorage. To move to a cloud backend later,
  replace the bodies of these methods with fetch() calls to your API —
  the rest of the app never touches localStorage directly, so nothing else
  needs to change. Methods are async on purpose so the swap is seamless.
*/
const Store = (() => {
  const KEY_TASKS = 'hw.tasks.v1';
  const KEY_SUBJECTS = 'hw.subjects.v1';
  const KEY_SOURCES = 'hw.sources.v1';
  const KEY_SETTINGS = 'hw.settings.v1';
  const KEY_LOG = 'hw.log.v1';
  const LOG_CAP = 2000; // local safety cap; backend keeps the full history

  const DEFAULT_SOURCES = [
    {name:'Google Classroom', icon:'laptop', color:'#5bd6a0', url:'https://classroom.google.com'},
    {name:'אתר בית הספר', icon:'globe', color:'#7c9cff', url:''},
    {name:'וואטסאפ', icon:'quote', color:'#5bd6a0', url:''},
    {name:'Google Drive', icon:'book', color:'#ffb454', url:'https://drive.google.com'},
    {name:'מחברת', icon:'pen', color:'#c77dff', url:''},
  ];

  const DEFAULT_SUBJECTS = [
    {name:'גיאומטריה', icon:'triangle', color:'#7c9cff'},
    {name:'אלגברה', icon:'sigma', color:'#7c9cff'},
    {name:'קולומביה', icon:'integral', color:'#4fd0e3'},
    {name:'פיזיקה', icon:'atom', color:'#ff8f5e'},
    {name:'אנגלית', icon:'abc', color:'#c77dff'},
    {name:'עברית', icon:'letter', color:'#ff6b8a'},
    {name:'תנ"ך', icon:'book', color:'#ffb454'},
    {name:'היסטוריה', icon:'hourglass', color:'#ffb454'},
    {name:'אזרחות', icon:'scale', color:'#5bd6a0'},
    {name:'גיאוגרפיה', icon:'globe', color:'#5bd6a0'},
    {name:'ביולוגיה', icon:'dna', color:'#5bd6a0'},
    {name:'כימיה', icon:'flask', color:'#4fd0e3'},
    {name:'מדעים', icon:'microscope', color:'#4fd0e3'},
    {name:'ספרות', icon:'feather', color:'#ff6b8a'},
    {name:'מדעי המחשב', icon:'code', color:'#7c9cff'},
    {name:'ערבית', icon:'language', color:'#c77dff'},
  ];

  const read = (k, fallback) => {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  return {
    async getTasks(){ return read(KEY_TASKS, []); },
    async saveTasks(tasks){ write(KEY_TASKS, tasks); },

    async getSubjects(){
      const s = read(KEY_SUBJECTS, null);
      if (s === null){ write(KEY_SUBJECTS, DEFAULT_SUBJECTS); return DEFAULT_SUBJECTS.slice(); }
      return s;
    },
    async saveSubjects(subs){ write(KEY_SUBJECTS, subs); },

    async getSources(){
      const s = read(KEY_SOURCES, null);
      if (s === null){ write(KEY_SOURCES, DEFAULT_SOURCES); return DEFAULT_SOURCES.slice(); }
      return s;
    },
    async saveSources(src){ write(KEY_SOURCES, src); },

    async getSettings(){ return read(KEY_SETTINGS, {theme:'auto', parentEmail:'', parentEmailVerified:false, dailySummary:true}); },
    async saveSettings(s){ write(KEY_SETTINGS, s); },

    /*
      Action log — append-only audit trail.
      Each entry: {id, ts, event, taskId, data}
      This is the exact shape the backend table will store. When the backend
      lands, appendLog() posts to the server and getLog() reads from it; the
      daily-summary job reads this same log server-side to build the email.
    */
    async appendLog(entry){
      const log = read(KEY_LOG, []);
      log.push(entry);
      if (log.length > LOG_CAP) log.splice(0, log.length - LOG_CAP);
      write(KEY_LOG, log);
    },
    async getLog(){ return read(KEY_LOG, []); },
  };
})();
