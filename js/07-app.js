/* App: render, router, events, palette, hero animation */
function render() {
  const app = document.getElementById('app');
  const v = currentView();
  app.innerHTML = header() + (S.route === 'home' ? v : `<main id="main">${v}</main>`) + footer();
  document.documentElement.lang = S.lang;
  afterRender();
}
function rerender() { const y = window.scrollY; render(); window.scrollTo(0, y); }
function afterRender() { if (S.route === 'home') inkIn(); onScroll(); }
function go(route) {
  if (!ROUTES.includes(route)) route = 'home';
  S.route = route; S.menu = false;
  render(); window.scrollTo(0, 0);
  try { history.replaceState(null, '', '#' + route); } catch (e) {}
}
function setLang(l) {
  S.lang = l === 'hi' ? 'hi' : 'en';
  try { localStorage.setItem('ieq-lang', S.lang); } catch (e) {}
  rerender();
}
window.go = go; window.setLang = setLang; window.__routes = ROUTES;

function inkIn() {
  const d = document.getElementById('inkdisp'); if (!d) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { d.setAttribute('scale', '0'); return; }
  const dur = 2600; let st = null; d.setAttribute('scale', '80');
  const step = ts => { if (!st) st = ts; const k = Math.min(1, (ts - st) / dur); const e = 1 - Math.pow(1 - k, 3); d.setAttribute('scale', String(80 * (1 - e))); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
function onScroll() {
  const p = document.getElementById('prog'); if (!p) return;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  p.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });

let toastT;
function toast(msg) {
  const el = document.getElementById('toast'); el.textContent = msg; el.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2200);
}
function copyText(txt) {
  const done = () => toast(t(L('Copied', 'कॉपी हुआ')));
  const fail = () => toast(t(L('Copy did not work. Select the text and copy it.', 'कॉपी नहीं हुआ। पाठ चुनकर कॉपी करें।')));
  try { navigator.clipboard.writeText(txt).then(done, fail); } catch (e) { fail(); }
}

/* ---------- palette ---------- */
let palSel = 0, palList = [];
function palItems() {
  const items = [], add = (r, l, sub) => items.push({ r, l: t(l), sub: t(sub || '') });
  add('home', L('Home', 'मुख्य')); add('about', L('About the firm', 'फर्म के बारे में')); add('practice', L('Practice areas', 'कार्यक्षेत्र'));
  PRACTICE.forEach(p => add('practice-' + p.slug, p.name, p.short));
  add('fora', L('Forum ladders', 'न्यायालय-क्रम')); add('limitation', L('Limitation reference', 'परिसीमा संदर्भ')); add('lexicon', L('Lexicon', 'शब्दकोश'));
  LEX.forEach(x => add('lexicon', { en: x.t, hi: x.t }, x.m));
  LIM.forEach(r => add('limitation', r.what, { en: r.ref + ' · ' + r.per.en, hi: r.ref + ' · ' + r.per.hi }));
  PEOPLE.forEach(p => add('person-' + p.slug, { en: p.name, hi: p.name }, p.role));
  NOTES.forEach(n => add('note-' + n.slug, n.title, L('Note', 'टिप्पणी')));
  add('resources', L('Resources', 'संसाधन')); add('clientroom', L('Client Room', 'क्लाइंट रूम')); add('contact', L('Contact', 'संपर्क')); add('notices', L('Notices', 'सूचनाएँ'));
  return items;
}
function palFilter() {
  const q = document.getElementById('palq').value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  palList = palItems().filter(i => q.every(w => (i.l + ' ' + i.sub).toLowerCase().includes(w))).slice(0, 14);
  palSel = 0; palDraw();
}
function palDraw() {
  document.getElementById('pall').innerHTML = palList.length ? palList.map((i, k) => `<li><button class="${k === palSel ? 'on' : ''}" data-pal="${k}"><span>${esc(i.l)}</span><small>${esc(i.sub)}</small></button></li>`).join('') : `<li style="padding:14px;color:var(--fg2)">${esc(t(L('Nothing matches. Try one word, such as “mutation” or “bail”.', 'कुछ नहीं मिला। एक शब्द आज़माएँ, जैसे “दाखिल-खारिज” या “जमानत”।')))}</li>`;
}
function openPal() {
  const bg = document.getElementById('palbg'); bg.classList.add('open');
  const q = document.getElementById('palq'); q.value = ''; q.placeholder = t(L('Search pages, practice areas, periods, notes', 'पृष्ठ, कार्यक्षेत्र, अवधियाँ, टिप्पणियाँ खोजें')); palFilter(); q.focus();
}
function closePal() { document.getElementById('palbg').classList.remove('open'); }
function palGo(k) { const it = palList[k]; if (!it) return; closePal(); go(it.r); }

/* ---------- events ---------- */
document.addEventListener('click', e => {
  if (e.target.id === 'palbg') { closePal(); return; }
  const pb = e.target.closest('[data-pal]'); if (pb) { palGo(+pb.dataset.pal); return; }
  const el = e.target.closest('[data-go],[data-act]'); if (!el) return;
  if (el.dataset.go) { go(el.dataset.go); return; }
  const a = el.dataset.act, arg = el.dataset.arg;
  if (a === 'lang') setLang(S.lang === 'en' ? 'hi' : 'en');
  else if (a === 'theme') {
    const r = document.documentElement;
    const dark = r.dataset.theme === 'dark' || (!r.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    r.dataset.theme = dark ? 'light' : 'dark';
  }
  else if (a === 'menu') { S.menu = !S.menu; document.getElementById('nav').classList.toggle('open', S.menu); el.setAttribute('aria-expanded', S.menu); }
  else if (a === 'palette') openPal();
  else if (a === 'skip') { e.preventDefault(); const m = document.getElementById('main'); if (m) { m.setAttribute('tabindex', '-1'); m.focus(); } }
  else if (a === 'stream') { S.stream = arg; S.rung = 0; rerender(); }
  else if (a === 'rung') { S.rung = +arg; rerender(); }
  else if (a === 'limarea') { S.limArea = arg; rerender(); }
  else if (a === 'quizans') { const Q = S.quiz; if (Q.ans === null) { Q.ans = +arg; if (Q.ans === QUIZ[Q.i].a) Q.score++; document.getElementById('quiz').innerHTML = quizBlock(); } }
  else if (a === 'quiznext') { const Q = S.quiz; if (Q.i === QUIZ.length - 1) Q.done = true; else { Q.i++; Q.ans = null; } document.getElementById('quiz').innerHTML = quizBlock(); }
  else if (a === 'quizreset') { S.quiz = { i: 0, ans: null, score: 0, done: false }; document.getElementById('quiz').innerHTML = quizBlock(); }
  else if (a === 'lexg') { S_lex.g = arg; rerender(); }
  else if (a === 'copy') copyText(arg);
});
document.addEventListener('input', e => {
  if (e.target.id === 'limq') { S.limQ = e.target.value; document.getElementById('limtable').innerHTML = limTable(); }
  if (e.target.id === 'lexq') { S_lex.q = e.target.value; document.getElementById('lexgrid').innerHTML = lexGrid(); }
  if (e.target.id === 'palq') palFilter();
});
function hoverPP(e) {
  const b = e.target.closest('[data-hpp]'); if (!b) return;
  const i = +b.dataset.hpp; if (i === S.pp) return; S.pp = i;
  document.getElementById('pprev').innerHTML = ppView(PRACTICE[i]);
  document.querySelectorAll('[data-hpp]').forEach(x => x.classList.toggle('on', +x.dataset.hpp === i));
}
document.addEventListener('mouseover', hoverPP);
document.addEventListener('focusin', hoverPP);
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPal(); return; }
  const open = document.getElementById('palbg').classList.contains('open');
  if (!open) return;
  if (e.key === 'Escape') closePal();
  else if (e.key === 'ArrowDown') { e.preventDefault(); palSel = Math.min(palList.length - 1, palSel + 1); palDraw(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); palSel = Math.max(0, palSel - 1); palDraw(); }
  else if (e.key === 'Enter') { e.preventDefault(); palGo(palSel); }
});
document.addEventListener('submit', e => {
  if (e.target.id !== 'cform') return;
  e.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  const set = (id, m) => { document.getElementById(id).textContent = m; };
  const name = v('f-name'), phone = v('f-phone'), email = v('f-email'), msg = v('f-msg'), topic = document.getElementById('f-topic').value;
  const ok = document.getElementById('f-consent').checked;
  let bad = false;
  set('e-name', ''); set('e-contact', ''); set('e-msg', ''); set('e-consent', '');
  if (!name) { set('e-name', t(L('Enter your name.', 'अपना नाम लिखें।'))); bad = true; }
  if (!phone && !email) { set('e-contact', t(L('Enter a phone number or an email so the firm can reply.', 'उत्तर के लिए फ़ोन नंबर या ईमेल लिखें।'))); bad = true; }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) { set('e-contact', t(L('That email looks incomplete.', 'यह ईमेल अधूरा लगता है।'))); bad = true; }
  if (!msg) { set('e-msg', t(L('Write a few lines about your message.', 'अपने संदेश के बारे में कुछ पंक्तियाँ लिखें।'))); bad = true; }
  if (!ok) { set('e-consent', t(L('Tick the box to agree before preparing the message.', 'संदेश तैयार करने से पहले सहमति के लिए बॉक्स पर टिक करें।'))); bad = true; }
  if (bad) return;
  const txt = `${t(L('To Ink & Equity, Lucknow', 'इंक एंड इक्विटी, लखनऊ को'))}\n${t(L('Name', 'नाम'))}: ${name}\n${t(L('Phone', 'फ़ोन'))}: ${phone || '-'}\n${t(L('Email', 'ईमेल'))}: ${email || '-'}\n${t(L('Area', 'क्षेत्र'))}: ${topic ? t(PBY[topic].name) : '-'}\n\n${msg}\n\n${t(L('I agree that the firm may use these details only to reply to this message.', 'मैं सहमत हूँ कि फर्म इन विवरणों का उपयोग केवल इस संदेश का उत्तर देने के लिए करे।'))}`;
  S.preview = txt;
  document.getElementById('cpreview').innerHTML = `<div class="preview">${esc(txt)}</div><p style="margin-top:12px"><button class="btn ghost" data-act="copy" data-arg="${esc(txt).replace(/\n/g, '&#10;')}">${esc(t(L('Copy message', 'संदेश कॉपी करें')))}</button></p><p class="why">${esc(t(L('Nothing has been sent. Copy this and send it by phone or email once the firm’s email address is published.', 'कुछ भी भेजा नहीं गया है। इसे कॉपी करें और फर्म का ईमेल पता प्रकाशित होने पर फ़ोन या ईमेल से भेजें।')))}</p>`;
});

/* ---------- boot ---------- */
(function boot() {
  const h = (location.hash || '').replace('#', '');
  if (ROUTES.includes(h)) S.route = h;
  render();
})();
