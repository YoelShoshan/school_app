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
  const KEY_SETTINGS = 'hw.settings.v1';

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

    async getSettings(){ return read(KEY_SETTINGS, {reminderHour:16, keepHistory:true}); },
    async saveSettings(s){ write(KEY_SETTINGS, s); },
  };
})();
