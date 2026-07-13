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
    {name:'גיאומטריה', icon:'triangle'},
    {name:'אלגברה', icon:'sigma'},
    {name:'קולומביה', icon:'integral'},
    {name:'פיזיקה', icon:'atom'},
    {name:'אנגלית', icon:'abc'},
    {name:'עברית', icon:'letter'},
    {name:'תנ"ך', icon:'book'},
    {name:'היסטוריה', icon:'hourglass'},
    {name:'אזרחות', icon:'scale'},
    {name:'גיאוגרפיה', icon:'globe'},
    {name:'ביולוגיה', icon:'dna'},
    {name:'כימיה', icon:'flask'},
    {name:'מדעים', icon:'microscope'},
    {name:'ספרות', icon:'feather'},
    {name:'מדעי המחשב', icon:'code'},
    {name:'ערבית', icon:'language'},
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
