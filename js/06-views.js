/* State, helpers and views */
const S = { lang: 'en', route: 'home', stream: 'civil', rung: 0, limArea: 'all', limQ: '', quiz: { i: 0, ans: null, score: 0, done: false }, pp: 0, menu: false, preview: '' };
try { const sl = localStorage.getItem('ieq-lang'); if (sl === 'hi' || sl === 'en') S.lang = sl; } catch (e) {}
const t = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[S.lang] ?? o.en) : o;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MONTHS = { en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'] };
const fmtDate = d => { const [y, m, dd] = d.split('-').map(Number); return `${dd} ${MONTHS[S.lang][m - 1]} ${y}`; };
const DRAFT = L('Draft for partner review', 'भागीदारों की समीक्षा हेतु प्रारूप');
const ROUTES = ['home', 'about', 'practice', ...PRACTICE.map(p => 'practice-' + p.slug), 'fora', 'limitation', 'lexicon', 'people', ...PEOPLE.map(p => 'person-' + p.slug), 'notes', ...NOTES.map(n => 'note-' + n.slug), 'resources', 'clientroom', 'contact', 'notices'];

const frame = (title, text) => `<div class="frame"><b>${esc(title)}</b>${esc(text)}</div>`;
const chips = arr => `<div class="chips">${arr.map(x => `<span class="chip">${esc(t(x))}</span>`).join('')}</div>`;
const report = (main, marg) => `<div class="wrap report"><div class="main">${main}</div>${marg ? `<aside class="marg" aria-label="${esc(t(L('Marginal notes', 'पार्श्व टिप्पणियाँ')))}">${marg}</aside>` : ''}</div>`;
const mg = (h, body) => `<div><h4>${esc(t(h))}</h4>${body}</div>`;
const link = (route, label, cls = '') => `<button class="btn ${cls}" data-go="${route}">${esc(t(label))}</button>`;

/* ---------- header / footer ---------- */
function header() {
  return `<a class="skip" href="#main" data-act="skip">${esc(t(L('Skip to main content', 'मुख्य सामग्री पर जाएँ')))}</a>
  <header class="hdr"><div class="wrap hdr-in">
    <button class="brand" data-go="home" aria-label="Ink &amp; Equity"><span class="mark">Ink <i>&amp;</i> Equity</span><small>${esc(t(L('LUCKNOW', 'लखनऊ')))}</small></button>
    <nav class="nav${S.menu ? ' open' : ''}" id="nav" aria-label="${esc(t(L('Main', 'मुख्य')))}">
      ${NAV.map(([r, l]) => `<button data-go="${r}"${S.route === r || S.route.startsWith(r.slice(0, -1) + '-') && r !== 'fora' ? ' aria-current="page"' : ''}>${esc(t(l))}</button>`).join('')}
    </nav>
    <div class="tools">
      <button class="tbtn" data-act="palette" aria-label="${esc(t(L('Search the site', 'साइट में खोजें')))}">${esc(t(L('Search', 'खोजें')))} <span aria-hidden="true">⌘K</span></button>
      <button class="tbtn" data-act="lang" aria-label="${esc(t(L('Switch language', 'भाषा बदलें')))}">${S.lang === 'en' ? 'हिं' : 'EN'}</button>
      <button class="tbtn" data-act="theme" aria-label="${esc(t(L('Switch light or dark', 'हल्का या गहरा बदलें')))}">${esc(t(L('Theme', 'थीम')))}</button>
    </div>
    <button class="tbtn menu-btn" data-act="menu" aria-expanded="${S.menu}" aria-controls="nav">${esc(t(L('Menu', 'मेनू')))}</button>
  </div><div class="prog" id="prog"></div></header>`;
}
function footer() {
  return `<footer class="ftr"><div class="wrap">
    <div class="cols">
      <div><div class="brand"><span class="mark">Ink <i>&amp;</i> Equity</span></div>
        <p style="margin-top:12px">${esc(CONTACT.addr)}</p>
        <p>${esc(CONTACT.phone)}</p>
        <p><a href="${CONTACT.map}" target="_blank" rel="noopener">${esc(t(L('Open in Google Maps', 'गूगल मैप्स में खोलें')))}</a></p></div>
      <div><h4>${esc(t(L('Pages', 'पृष्ठ')))}</h4><ul>
        ${[['practice', L('Practice areas', 'कार्यक्षेत्र')], ['fora', L('Fora', 'न्यायालय-क्रम')], ['limitation', L('Limitation reference', 'परिसीमा संदर्भ')], ['lexicon', L('Lexicon', 'शब्दकोश')], ['people', L('People', 'जन')], ['notes', L('Notes', 'टिप्पणियाँ')], ['about', L('About the firm', 'फर्म के बारे में')]].map(([r, l]) => `<li><button class="lnk" data-go="${r}">${esc(t(l))}</button></li>`).join('')}
      </ul></div>
      <div><h4>${esc(t(L('Resources', 'संसाधन')))}</h4><ul>
        ${FAMILY.map(f => `<li><button class="lnk" data-go="resources">${esc(t(f.name))}</button></li>`).join('')}
        <li><button class="lnk" data-go="clientroom">${esc(t(L('Client Room (phase 2)', 'क्लाइंट रूम (चरण 2)')))}</button></li>
      </ul></div>
      <div><h4>${esc(t(L('Notices', 'सूचनाएँ')))}</h4><ul>
        <li><button class="lnk" data-go="notices">${esc(t(L('Information notice', 'सूचना-पत्र')))}</button></li>
        <li><button class="lnk" data-go="notices">${esc(t(L('Privacy notice', 'गोपनीयता सूचना')))}</button></li>
        <li><button class="lnk" data-go="notices">${esc(t(L('Use of AI', 'एआई का उपयोग')))}</button></li>
        <li><button class="lnk" data-go="notices">${esc(t(L('Grievance contact', 'शिकायत संपर्क')))}</button></li>
      </ul></div>
    </div>
    <p class="fine">${esc(t(L(
      'This website is for general information only. It does not advertise or solicit work for any advocate, in keeping with Rule 36 of the Bar Council of India Rules, and nothing on it is legal advice. Sending a message to the firm does not create an advocate-client relationship. Where AI has materially helped in preparing a page, the page says so.',
      'यह वेबसाइट केवल सामान्य जानकारी के लिए है। यह भारतीय विधिज्ञ परिषद नियमों के नियम 36 के अनुरूप किसी अधिवक्ता के कार्य का विज्ञापन या याचना नहीं करती, और इस पर कुछ भी विधिक सलाह नहीं है। फर्म को संदेश भेजने से अधिवक्ता-मुवक्किल संबंध नहीं बनता। जहाँ किसी पृष्ठ की तैयारी में एआई ने सारभूत सहायता की है, वहाँ पृष्ठ यह बताता है।')))}</p>
  </div></footer>`;
}
function runhead(crumbs, draft) {
  return `<div class="wrap runhead"><div class="path">${crumbs.map(([r, l], i) => (i ? ' / ' : '') + (r ? `<button data-go="${r}">${esc(t(l))}</button>` : `<span>${esc(t(l))}</span>`)).join('')}</div>${draft ? `<span class="status">${esc(t(DRAFT))}</span>` : '<span></span>'}</div>`;
}

/* ---------- home ---------- */
function heroAmp() {
  return `<svg class="hero-amp" viewBox="0 0 600 600" role="img" aria-label="${esc(t(L('A large ampersand, the mark of Ink and Equity', 'इंक एंड इक्विटी का चिह्न, एक बड़ा ऐम्परसैंड')))}">
  <defs><filter id="inkf" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="3" seed="7" result="n"/><feDisplacementMap id="inkdisp" in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
  <circle cx="300" cy="300" r="284" fill="none" style="stroke:var(--gold-deco)" stroke-width="1"/>
  <circle cx="300" cy="300" r="274" fill="none" style="stroke:var(--rule)" stroke-width="1" stroke-dasharray="2 7"/>
  <g filter="url(#inkf)">
    <text x="291" y="470" text-anchor="middle" font-size="520" style="fill:var(--teal)" opacity=".6">&amp;</text>
    <text x="300" y="463" text-anchor="middle" font-size="520" style="fill:var(--gold-deco)">&amp;</text>
  </g>
  <text x="300" y="540" text-anchor="middle" font-size="26" letter-spacing="9" style="fill:var(--fg2);font-family:Jost,sans-serif;font-style:normal">${esc(t(L('LUCKNOW', 'लखनऊ')))}</text>
</svg>`;
}
function vHome() {
  const lines = S.lang === 'en' ? ['Justice,', 'argued with', 'conviction.'] : ['न्याय,', 'पूरी दृढ़ता से', 'प्रस्तुत।'];
  const ppl = PRACTICE;
  const cur = ppl[S.pp];
  return `<main id="main">
  <section class="wrap hero">
    <div><h1>${lines.map((l, i) => `<span class="ln"><span>${i === 2 ? `<em>${l}</em>` : l}</span></span>`).join('')}</h1>
      <p class="lede">${esc(t(L(
        'Ink & Equity is a firm of advocates at Lucknow. This site describes what we practise, by law and by forum, and publishes dated, sourced notes on the law. It does not advertise results.',
        'इंक एंड इक्विटी लखनऊ में अधिवक्ताओं की फर्म है। यह साइट बताती है कि हम किन विधियों और किन न्यायालयों में कार्य करते हैं, और विधि पर दिनांकित, स्रोत-सहित टिप्पणियाँ प्रकाशित करती है। यह परिणामों का विज्ञापन नहीं करती।')))}</p>
      <div class="ctas">${link('practice', L('See the practice areas', 'कार्यक्षेत्र देखें'))}${link('notes', L('Read the notes', 'टिप्पणियाँ पढ़ें'), 'ghost')}</div></div>
    ${heroAmp()}
  </section>
  <div class="wrap fora-strip" aria-label="${esc(t(L('Fora', 'न्यायालय')))}">
    ${[L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), L('Delhi High Court', 'दिल्ली उच्च न्यायालय'), L('Allahabad High Court, Lucknow', 'इलाहाबाद उच्च न्यायालय, लखनऊ'), L('Allahabad High Court, Prayagraj', 'इलाहाबाद उच्च न्यायालय, प्रयागराज'), L('Civil and revenue courts of Uttar Pradesh', 'उत्तर प्रदेश के दीवानी और राजस्व न्यायालय'), L('Tribunals', 'अधिकरण')].map(x => `<span><b>${esc(t(x))}</b></span>`).join('')}
  </div>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('The name', 'नाम')))}</h2><p>${esc(t(L('Ink is the craft of legal writing. Equity is the conviction that justice is a fundamental right. The firm succeeds Rishabh Raj & Associates, which began in 2024.', 'इंक विधिक लेखन की कारीगरी है। इक्विटी वह दृढ़ विश्वास है कि न्याय मौलिक अधिकार है। यह फर्म ऋषभ राज एंड एसोसिएट्स की उत्तराधिकारी है, जो 2024 में आरंभ हुई।')))}</p></div></section>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('Twelve areas, by law and forum', 'बारह क्षेत्र, विधि और न्यायालय के अनुसार')))}</h2><p>${esc(t(L('Each page names the statutes, the courts and the course of a matter. None describes results.', 'हर पृष्ठ में कानून, न्यायालय और मामले की प्रक्रिया है। किसी में परिणामों का वर्णन नहीं।')))}</p></div>
    <div class="pidx"><ol>${ppl.map((p, i) => `<li><button data-go="practice-${p.slug}" data-hpp="${i}" class="${i === S.pp ? 'on' : ''}">${esc(t(p.name))}<span>${esc(t(p.short))}</span></button></li>`).join('')}</ol>
      <div class="pprev" id="pprev" aria-live="polite">${ppView(cur)}</div></div></section>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('Where a dispute goes', 'विवाद कहाँ जाता है')))}</h2><p>${esc(t(L('Every dispute has a ladder of courts. Choose the kind of matter and walk up it, rung by rung, with the provision behind each step.', 'हर विवाद के लिए न्यायालयों की एक सीढ़ी होती है। मामले का प्रकार चुनें और हर पायदान को उसके प्रावधान सहित देखें।')))}</p></div>
    <div class="ctas">${link('fora', L('Open the forum ladders', 'न्यायालय-क्रम खोलें'))}${link('limitation', L('Limitation reference', 'परिसीमा संदर्भ'), 'ghost')}</div></section>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('People', 'जन')))}</h2><p>${esc(t(L('Details are limited to name, role, qualifications, areas of practice and bar memberships.', 'विवरण नाम, भूमिका, योग्यता, कार्यक्षेत्र और बार सदस्यता तक सीमित हैं।')))}</p></div>
    <div class="ppl">${PEOPLE.map(pe => `<button class="person" data-go="person-${pe.slug}"><span class="mono">${pe.ini}</span><h3>${esc(pe.name)}</h3><small>${esc(t(pe.role))}</small></button>`).join('')}</div></section>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('Notes', 'टिप्पणियाँ')))}</h2><p>${esc(t(L('Dated, sourced and marked with their review status.', 'दिनांकित, स्रोत-सहित और समीक्षा स्थिति के साथ।')))}</p></div>
    ${notesList(3)}</section>

  <section class="wrap sec"><div class="sec-h"><h2>${esc(t(L('Resources from the firm', 'फर्म के संसाधन')))}</h2><p>${esc(t(L('Four companion sites carry the longer teaching and reference work.', 'चार सहयोगी साइटें लंबा शिक्षण और संदर्भ कार्य रखती हैं।')))}</p></div>
    ${familyGrid()}</section>
  </main>`;
}
function ppView(p) {
  return `<h3>${esc(t(p.name))}</h3><p>${esc(t(p.head))}</p>${chips(p.laws.slice(0, 3).map(l => L(l[0] + ' ' + l[1], l[0] + ' ' + l[1])))}<div class="ctas">${link('practice-' + p.slug, L('Open this area', 'यह क्षेत्र खोलें'))}</div>`;
}
function notesList(n) {
  const list = n ? NOTES.slice(0, n) : NOTES;
  return `<div class="notes">${list.map(x => `<button class="note" data-go="note-${x.slug}"><small>${esc(fmtDate(x.date))} · ${esc(t(PBY[x.area].name))}</small><h3>${esc(t(x.title))}</h3><span>${esc(t(x.dek))}</span><small><span class="status">${esc(t(DRAFT))}</span></small></button>`).join('')}</div>`;
}
function familyGrid() {
  return `<div class="fam">${FAMILY.map(f => `<div class="famc"><h3>${esc(t(f.name))}</h3><p>${esc(t(f.desc))}</p>${LINKS[f.key] ? `<a class="btn ghost" href="${LINKS[f.key]}" target="_blank" rel="noopener">${esc(t(L('Open the preview', 'पूर्वावलोकन खोलें')))}</a>` : ''}<small>${esc(t(L('Planned address', 'प्रस्तावित पता')))}: ${esc(f.addr)} (${esc(t(L('availability unchecked', 'उपलब्धता अजाँची')))})</small></div>`).join('')}</div>`;
}

/* ---------- about ---------- */
function vAbout() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('About the firm', 'फर्म के बारे में')]], true) + report(`
  <h1 class="page-title">${esc(t(L('About the firm', 'फर्म के बारे में')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Ink & Equity is a Lucknow firm of advocates founded by Rishabh Raj and Vedant Bhargav. It succeeds Rishabh Raj & Associates, which began in 2024.', 'इंक एंड इक्विटी लखनऊ की अधिवक्ताओं की फर्म है, जिसकी स्थापना ऋषभ राज और वेदांत भार्गव ने की। यह ऋषभ राज एंड एसोसिएट्स की उत्तराधिकारी है, जो 2024 में आरंभ हुई।')))}</p></div>
  <h2 class="h3">${esc(t(L('The two words', 'दो शब्द')))}</h2>
  <p>${esc(t(L('Ink stands for the meticulous craft of legal writing: pleadings, opinions and orders are read closely, and what goes out is written to be read. Equity stands for the conviction that justice is a fundamental right.', 'इंक विधिक लेखन की सावधान कारीगरी का प्रतीक है: अभिवचन, राय और आदेश ध्यान से पढ़े जाते हैं, और जो बाहर जाता है वह पढ़े जाने के लिए लिखा जाता है। इक्विटी इस दृढ़ विश्वास का प्रतीक है कि न्याय मौलिक अधिकार है।')))}</p>
  <h2 class="h3">${esc(t(L('Where we appear', 'हम कहाँ उपस्थित होते हैं')))}</h2>
  ${chips([L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), L('Delhi High Court', 'दिल्ली उच्च न्यायालय'), L('Allahabad High Court, Lucknow and Prayagraj', 'इलाहाबाद उच्च न्यायालय, लखनऊ और प्रयागराज'), L('UP civil and revenue courts', 'उ.प्र. के दीवानी और राजस्व न्यायालय'), L('Tribunals', 'अधिकरण')])}
  <h2 class="h3">${esc(t(L('How this site is kept', 'यह साइट कैसे रखी जाती है')))}</h2>
  <ol class="steps">
    <li><b>${esc(t(L('Only permitted facts', 'केवल अनुमत तथ्य')))}</b>${esc(t(L('Name, address, contact details, qualifications, areas of practice and bar memberships.', 'नाम, पता, संपर्क विवरण, योग्यता, कार्यक्षेत्र और बार सदस्यता।')))}</li>
    <li><b>${esc(t(L('Every note carries its sources', 'हर टिप्पणी अपने स्रोत देती है')))}</b>${esc(t(L('And a review status, so a reader can see whether a partner has signed it off.', 'और समीक्षा स्थिति, ताकि पाठक देख सके कि किसी भागीदार ने उसे अनुमोदित किया है या नहीं।')))}</li>
    <li><b>${esc(t(L('No testimonials, no case lists, no offers', 'न प्रशंसापत्र, न मामलों की सूची, न प्रस्ताव')))}</b>${esc(t(L('Rule 36 of the Bar Council of India Rules and the Council’s circular of 17 July 2026 draw that line.', 'भारतीय विधिज्ञ परिषद नियमों का नियम 36 और परिषद का 17 जुलाई 2026 का परिपत्र यह रेखा खींचते हैं।')))}</li>
    <li><b>${esc(t(L('AI is disclosed', 'एआई का प्रकटीकरण')))}</b>${esc(t(L('See the notices page.', 'सूचना पृष्ठ देखें।')))}</li>
  </ol>`, mg(L('Contact', 'संपर्क'), `<p>${esc(CONTACT.addr)}</p><p>${esc(CONTACT.phone)}</p>${link('contact', L('Write to the firm', 'फर्म को लिखें'), 'ghost')}`));
}

/* ---------- practice ---------- */
function vPractice() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Practice', 'कार्यक्षेत्र')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Practice areas', 'कार्यक्षेत्र')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Twelve areas, each described by the law that governs it and the courts that hear it.', 'बारह क्षेत्र, हर एक का वर्णन उसे शासित करने वाली विधि और उसे सुनने वाले न्यायालयों के आधार पर।')))}</p></div>
  <div class="pidx" style="grid-template-columns:1fr"><ol>${PRACTICE.map(p => `<li><button data-go="practice-${p.slug}">${esc(t(p.name))}<span>${esc(t(p.short))}</span></button></li>`).join('')}</ol></div>`,
  mg(L('Note', 'टिप्पणी'), `<p>${esc(t(L('The list of twelve areas is under confirmation by the partners.', 'बारह क्षेत्रों की सूची भागीदारों द्वारा पुष्टि के अधीन है।')))}</p>`) + mg(L('See also', 'यह भी देखें'), `<p><button class="lnk" style="all:unset;cursor:pointer;color:var(--teal-ink);text-decoration:underline" data-go="fora">${esc(t(L('Forum ladders', 'न्यायालय-क्रम')))}</button></p><p><button style="all:unset;cursor:pointer;color:var(--teal-ink);text-decoration:underline" data-go="limitation">${esc(t(L('Limitation reference', 'परिसीमा संदर्भ')))}</button></p>`));
}
function vPracticeOne(slug) {
  const p = PBY[slug];
  const extra = [];
  if (p.library) extra.push(`<p>${esc(t(L('Hindi-first guides to this area are in the Land and Revenue Library.', 'इस क्षेत्र की हिंदी-प्रथम मार्गदर्शिकाएँ भूमि एवं राजस्व पुस्तकालय में हैं।')))}</p>${link('resources', L('See the library', 'पुस्तकालय देखें'), 'ghost')}`);
  if (p.decoder) extra.push(`<p>${esc(t(L('The Notice Decoder maps a notice to the right Act and the appeal route.', 'नोटिस डिकोडर नोटिस को सही अधिनियम और अपील के मार्ग से जोड़ता है।')))}</p>${link('resources', L('See the decoder', 'डिकोडर देखें'), 'ghost')}`);
  const i = PRACTICE.indexOf(p), prev = PRACTICE[(i + 11) % 12], next = PRACTICE[(i + 1) % 12];
  return runhead([['home', L('Home', 'मुख्य')], ['practice', L('Practice', 'कार्यक्षेत्र')], [null, p.name]], true) + report(`
  <h1 class="page-title">${esc(t(p.name))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(p.head))}</p></div>
  <h2 class="h3">${esc(t(L('Provisions', 'प्रावधान')))}</h2>
  <div class="table-scroll"><table class="prov"><tbody>${p.laws.map(l => `<tr><th scope="row">${esc(l[0])}</th><td>${esc(l[1])}<small>${esc(t(l[2]))}</small></td></tr>`).join('')}</tbody></table></div>
  <h2 class="h3">${esc(t(L('Fora', 'न्यायालय')))}</h2>
  ${chips(p.fora)}
  <h2 class="h3">${esc(t(L('The course of a matter', 'मामले का क्रम')))}</h2>
  <ol class="steps">${p.steps.map(s => `<li>${esc(t(s))}</li>`).join('')}</ol>
  <h2 class="h3">${esc(t(L('Time', 'समय')))}</h2><p>${esc(t(p.time))}</p>
  <div class="ctas">${link('fora', L('See the forum ladder', 'न्यायालय-क्रम देखें'))}${link('limitation', L('Limitation reference', 'परिसीमा संदर्भ'), 'ghost')}</div>
  <div class="ctas" style="margin-top:40px">${link('practice-' + prev.slug, { en: '← ' + prev.name.en, hi: '← ' + prev.name.hi }, 'ghost')}${link('practice-' + next.slug, { en: next.name.en + ' →', hi: next.name.hi + ' →' }, 'ghost')}</div>`,
  mg(L('General information', 'सामान्य जानकारी'), `<p>${esc(t(L('This page describes the area of law and the courts. It is not advice on any matter.', 'यह पृष्ठ विधि के क्षेत्र और न्यायालयों का वर्णन करता है। यह किसी मामले पर सलाह नहीं है।')))}</p>`) +
  (extra.length ? mg(L('Related', 'संबद्ध'), extra.join('')) : '') +
  mg(L('Status', 'स्थिति'), `<p>${esc(t(L('Awaiting partner review. Statute references are to be checked against current text before release.', 'भागीदार की समीक्षा लंबित। प्रकाशन से पहले कानून-संदर्भ वर्तमान पाठ से मिलाए जाएँगे।')))}</p>`));
}

/* ---------- fora ---------- */
function vFora() {
  const st = STREAMS.find(s => s.id === S.stream) || STREAMS[0];
  if (S.rung >= st.rungs.length) S.rung = 0;
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Fora', 'न्यायालय-क्रम')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Where a dispute goes', 'विवाद कहाँ जाता है')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Choose the kind of matter. The ladder reads from the first forum at the bottom to the last at the top. Select a rung for what it hears and the provision behind it.', 'मामले का प्रकार चुनें। सीढ़ी नीचे पहले मंच से ऊपर अंतिम मंच तक पढ़ी जाती है। किसी पायदान को चुनें और देखें कि वह क्या सुनता है और उसका प्रावधान क्या है।')))}</p></div>
  <div class="streams" role="group" aria-label="${esc(t(L('Kind of matter', 'मामले का प्रकार')))}">${STREAMS.map(s => `<button class="chip" data-act="stream" data-arg="${s.id}" aria-pressed="${s.id === st.id}">${esc(t(s.name))}</button>`).join('')}</div>
  <div class="ladder"><ol class="rungs">${st.rungs.map((r, i) => `<li><button data-act="rung" data-arg="${i}" aria-pressed="${i === S.rung}"><b>${esc(t(r.n))}</b><span>${esc(r.src)}</span></button></li>`).join('')}</ol>
    <div class="rung-detail" aria-live="polite"><span class="pill">${esc(t(L('Rung', 'पायदान')))} ${S.rung + 1} / ${st.rungs.length}</span><h3 style="margin-top:12px">${esc(t(st.rungs[S.rung].n))}</h3><p>${esc(t(st.rungs[S.rung].t))}</p><p><small>${esc(st.rungs[S.rung].src)}</small></p>
    ${S.rung < st.rungs.length - 1 ? `<button class="btn ghost" data-act="rung" data-arg="${S.rung + 1}">${esc(t(L('Next forum up', 'अगला ऊपरी मंच')))}</button>` : `<p>${esc(t(L('This is the last forum in this ladder.', 'यह इस सीढ़ी का अंतिम मंच है।')))}</p>`}</div></div>`,
  mg(L('Read this first', 'पहले यह पढ़ें'), `<p>${esc(t(L('Appeal periods are counted from the date the Act says, not always from the date of the order. Check the limitation reference.', 'अपील की अवधि उस तिथि से गिनी जाती है जो अधिनियम में कही गई है, हमेशा आदेश की तिथि से नहीं। परिसीमा संदर्भ देखें।')))}</p>`) +
  mg(L('Practice areas on this ladder', 'इस सीढ़ी के क्षेत्र'), `<p>${PRACTICE.filter(p => p.stream === st.id || (st.id === 'gst' && p.slug === 'tax')).map(p => `<button style="all:unset;cursor:pointer;color:var(--teal-ink);text-decoration:underline;display:block" data-go="practice-${p.slug}">${esc(t(p.name))}</button>`).join('') || esc(t(L('See the practice index.', 'कार्यक्षेत्र सूची देखें।')))}</p>`));
}

/* ---------- limitation ---------- */
function limRows() {
  const q = S.limQ.trim().toLowerCase();
  return LIM.filter(r => (S.limArea === 'all' || r.area === S.limArea) && (!q || (r.ref + ' ' + r.what.en + ' ' + r.what.hi + ' ' + r.per.en).toLowerCase().includes(q)));
}
function limTable() {
  const rows = limRows();
  if (!rows.length) return `<div class="frame"><b>${esc(t(L('No match', 'कोई मेल नहीं')))}</b>${esc(t(L('Try a shorter word, such as “appeal” or “possession”, or choose All.', 'छोटा शब्द आज़माएँ, जैसे “अपील” या “कब्ज़ा”, या सभी चुनें।')))}</div>`;
  return `<div class="table-scroll"><table class="prov"><thead><tr><th>${esc(t(L('Proceeding', 'कार्यवाही')))}</th><th>${esc(t(L('Period and starting point', 'अवधि और आरंभ बिंदु')))}</th></tr></thead><tbody>${rows.map(r => `<tr><th scope="row" style="font-size:17px">${esc(t(r.what))}<small style="font-family:var(--f-body)">${esc(r.ref)}</small></th><td><b>${esc(t(r.per))}</b><small>${esc(t(r.from))}</small></td></tr>`).join('')}</tbody></table></div>`;
}
function quizBlock() {
  const Q = S.quiz;
  if (Q.done) return `<div class="q"><h3>${esc(t(L('Finished', 'पूर्ण')))}: ${Q.score} / ${QUIZ.length}</h3><p>${esc(t(L('Each answer above names its provision. Read the table again for any you missed.', 'ऊपर हर उत्तर अपना प्रावधान बताता है। जो छूटे उनके लिए तालिका फिर पढ़ें।')))}</p><button class="btn" data-act="quizreset">${esc(t(L('Start again', 'फिर शुरू करें')))}</button></div>`;
  const q = QUIZ[Q.i];
  return `<div class="q" aria-live="polite"><span class="pill">${Q.i + 1} / ${QUIZ.length}</span><h3 style="margin-top:10px">${esc(t(q.q))}</h3><div class="opts">${q.o.map((o, k) => `<button data-act="quizans" data-arg="${k}" ${Q.ans !== null ? 'disabled' : ''} class="${Q.ans !== null ? (k === q.a ? 'ok' : (k === Q.ans ? 'no' : '')) : ''}">${esc(t(o))}</button>`).join('')}</div>
  ${Q.ans !== null ? `<p class="why"><b>${Q.ans === q.a ? esc(t(L('Correct.', 'सही।'))) : esc(t(L('Not quite.', 'पूरी तरह नहीं।')))}</b> ${esc(t(q.w))} <em>${esc(q.s)}</em></p><button class="btn" data-act="quiznext">${Q.i === QUIZ.length - 1 ? esc(t(L('See result', 'परिणाम देखें'))) : esc(t(L('Next question', 'अगला प्रश्न')))}</button>` : ''}</div>`;
}
function vLimitation() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Limitation reference', 'परिसीमा संदर्भ')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Limitation reference', 'परिसीमा संदर्भ')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Common periods of limitation for civil, revenue, tax and other proceedings, each with its provision. A period is only the starting point: the facts decide the date from which it runs.', 'दीवानी, राजस्व, कर और अन्य कार्यवाहियों की सामान्य परिसीमा अवधियाँ, हर एक अपने प्रावधान सहित। अवधि केवल आरंभ बिंदु है: कौन सी तिथि से गणना होगी, यह तथ्य तय करते हैं।')))}</p></div>
  <div class="ltools"><input id="limq" type="search" placeholder="${esc(t(L('Search: appeal, possession, mutation…', 'खोजें: अपील, कब्ज़ा, दाखिल-खारिज…')))}" value="${esc(S.limQ)}" aria-label="${esc(t(L('Search limitation periods', 'परिसीमा अवधियाँ खोजें')))}"></div>
  <div class="streams" role="group">${LIM_AREAS.map(([k, l]) => `<button class="chip" data-act="limarea" data-arg="${k}" aria-pressed="${S.limArea === k}">${esc(t(l))}</button>`).join('')}</div>
  <div id="limtable">${limTable()}</div>
  <h2 class="h3">${esc(t(L('Five provisions that change the count', 'पाँच प्रावधान जो गणना बदलते हैं')))}</h2>
  <table class="prov"><tbody>${LIM_PRINCIPLES.map(r => `<tr><th scope="row">${esc(r.ref)}</th><td>${esc(t(r.t))}</td></tr>`).join('')}</tbody></table>
  <h2 class="h3">${esc(t(L('Test yourself', 'स्वयं परखें')))}</h2><div id="quiz">${quizBlock()}</div>`,
  mg(L('Source and status', 'स्रोत और स्थिति'), `<p>${esc(t(L('Periods are drawn from the Schedule to the Limitation Act, 1963 and the statutes named in each row. Awaiting partner review; confirm against current text before relying on any row.', 'अवधियाँ परिसीमा अधिनियम, 1963 की अनुसूची और हर पंक्ति में नामित कानूनों से ली गई हैं। भागीदार की समीक्षा लंबित; किसी पंक्ति पर भरोसा करने से पहले वर्तमान पाठ से मिलाएँ।')))}</p>`));
}

/* ---------- people ---------- */
function vPeople() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('People', 'जन')]], true) + report(`
  <h1 class="page-title">${esc(t(L('People', 'जन')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Name, role, qualifications, areas of practice and bar memberships. Where text is awaited from a partner, the page shows an open frame.', 'नाम, भूमिका, योग्यता, कार्यक्षेत्र और बार सदस्यता। जहाँ भागीदार का पाठ अपेक्षित है, पृष्ठ खुला फ़्रेम दिखाता है।')))}</p></div>
  <div class="ppl">${PEOPLE.map(pe => `<button class="person" data-go="person-${pe.slug}"><span class="mono">${pe.ini}</span><h3>${esc(pe.name)}</h3><small>${esc(t(pe.role))}</small><span>${esc(t(pe.line))}</span></button>`).join('')}</div>`, null);
}
function vPerson(slug) {
  const p = PBYSLUG[slug];
  return runhead([['home', L('Home', 'मुख्य')], ['people', L('People', 'जन')], [null, { en: p.name, hi: p.name }]], true) + report(`
  <div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap"><span class="mono" style="width:104px;height:104px;font-size:48px">${p.ini}</span><div><h1 class="page-title" style="margin:0">${esc(p.name)}</h1><p style="margin:6px 0 0;color:var(--fg2)">${esc(t(p.role))}, Ink &amp; Equity</p></div></div>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(p.line))}</p></div>
  <h2 class="h3">${esc(t(L('Areas of practice', 'कार्यक्षेत्र')))}</h2>${chips(p.areas)}
  <h2 class="h3">${esc(t(L('Qualifications', 'योग्यता')))}</h2>
  ${p.quals.length ? `<ul>${p.quals.map(q => `<li>${esc(q)}</li>`).join('')}</ul>` : frame(t(L('Awaiting text', 'पाठ की प्रतीक्षा')), t(L('Qualifications, in the words approved by ' + p.name + '.', p.name + ' द्वारा अनुमोदित शब्दों में योग्यता।')))}
  <h2 class="h3">${esc(t(L('Bar memberships', 'बार सदस्यता')))}</h2>
  ${p.bars.length ? `<ul>${p.bars.map(q => `<li>${esc(q)}</li>`).join('')}</ul>` : frame(t(L('Awaiting text', 'पाठ की प्रतीक्षा')), t(L('Bar memberships, in the words approved by ' + p.name + '.', p.name + ' द्वारा अनुमोदित शब्दों में बार सदस्यता।')))}
  <h2 class="h3">${esc(t(L('Writing', 'लेखन')))}</h2>${frame(t(L('Bylines are assigned by the partners', 'बायलाइन भागीदार तय करेंगे')), t(L('When a note is signed off, its author appears here.', 'जब कोई टिप्पणी अनुमोदित होगी, उसका लेखक यहाँ दिखेगा।')))}`,
  mg(L('Contact the firm', 'फर्म से संपर्क'), `<p>${esc(CONTACT.phone)}</p>${link('contact', L('Write to the firm', 'फर्म को लिखें'), 'ghost')}`) +
  mg(L('Status', 'स्थिति'), `<p>${esc(t(L('This profile goes live only after ' + p.name + ' signs it off.', 'यह प्रोफ़ाइल ' + p.name + ' के अनुमोदन के बाद ही प्रकाशित होगी।')))}</p>`));
}

/* ---------- notes ---------- */
function vNotes() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Notes', 'टिप्पणियाँ')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Ink & Equity Notes', 'इंक एंड इक्विटी टिप्पणियाँ')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Short notes on the law, with their sources. Each shows a date and a review status; bylines are added when a partner signs a note off.', 'विधि पर छोटी टिप्पणियाँ, स्रोतों सहित। हर एक में तिथि और समीक्षा स्थिति है; किसी भागीदार द्वारा अनुमोदन पर बायलाइन जोड़ी जाती है।')))}</p></div>
  ${notesList(0)}`, null);
}
function vNote(slug) {
  const n = NOTES.find(x => x.slug === slug);
  const i = NOTES.indexOf(n), prev = NOTES[(i + NOTES.length - 1) % NOTES.length], next = NOTES[(i + 1) % NOTES.length];
  const cite = `Ink & Equity Notes, “${n.title.en}” (${fmtDate(n.date)}, draft)`;
  return runhead([['home', L('Home', 'मुख्य')], ['notes', L('Notes', 'टिप्पणियाँ')], [null, n.title]], true) + report(`
  <article class="article"><p style="color:var(--fg2);margin-bottom:6px">${esc(fmtDate(n.date))} · ${esc(t(PBY[n.area].name))}</p>
  <h1 class="page-title">${esc(t(n.title))}</h1>
  <div class="headnote"><b>${esc(t(L('In brief', 'संक्षेप में')))}</b><p>${esc(t(n.dek))}</p></div>
  ${n.body.map(b => `<p>${esc(t(b))}</p>`).join('')}
  <div class="cite"><b>${esc(t(L('Sources', 'स्रोत')))}</b><ul>${n.src.map(s => `<li>${s[1] ? `<a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a>` : esc(s[0])}</li>`).join('')}</ul></div>
  <div class="cite"><b>${esc(t(L('Cite as', 'उद्धरण')))}</b><p style="margin:6px 0 10px">${esc(cite)}</p><button class="btn ghost" data-act="copy" data-arg="${esc(cite)}">${esc(t(L('Copy citation', 'उद्धरण कॉपी करें')))}</button></div>
  <div class="ctas"><button class="btn ghost" data-go="note-${prev.slug}">← ${esc(t(prev.title))}</button><button class="btn ghost" data-go="note-${next.slug}">${esc(t(next.title))} →</button></div></article>`,
  mg(L('Review status', 'समीक्षा स्थिति'), `<p>${esc(t(L('Draft. Byline and partner sign-off are pending. Cases and sections are to be checked against the reports and current text before release.', 'प्रारूप। बायलाइन और भागीदार का अनुमोदन लंबित। प्रकाशन से पहले निर्णय और धाराएँ रिपोर्टों और वर्तमान पाठ से मिलाई जाएँगी।')))}</p>`) +
  mg(L('Not advice', 'सलाह नहीं'), `<p>${esc(t(L('This note explains the law in general terms. It is not advice on any matter.', 'यह टिप्पणी विधि को सामान्य शब्दों में समझाती है। यह किसी मामले पर सलाह नहीं है।')))}</p>`) +
  mg(L('Related area', 'संबद्ध क्षेत्र'), `<p><button style="all:unset;cursor:pointer;color:var(--teal-ink);text-decoration:underline" data-go="practice-${n.area}">${esc(t(PBY[n.area].name))}</button></p>`));
}

/* ---------- resources / client room ---------- */
function vResources() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Resources', 'संसाधन')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Resources from the firm', 'फर्म के संसाधन')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Companion sites that carry longer teaching and reference work. They share this site’s notices and its rule: information, not advertisement.', 'सहयोगी साइटें जो लंबा शिक्षण और संदर्भ कार्य रखती हैं। वे इस साइट की सूचनाएँ और इसका नियम साझा करती हैं: सूचना, विज्ञापन नहीं।')))}</p></div>
  ${familyGrid()}`, mg(L('Sign-off', 'अनुमोदन'), `<p>${esc(t(L('Each companion site is approved by the partner or family member responsible for it before it goes live.', 'हर सहयोगी साइट प्रकाशन से पहले संबंधित भागीदार या परिवार के सदस्य द्वारा अनुमोदित होती है।')))}</p>`));
}
function vClientRoom() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Client Room', 'क्लाइंट रूम')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Client Room', 'क्लाइंट रूम')))}</h1>
  <div class="headnote"><b>${esc(t(L('Phase 2. Not live.', 'चरण 2। अभी उपलब्ध नहीं।')))}</b><p>${esc(t(L('A sign-in for existing clients to see next dates, documents and invoices from the firm’s case manager, hosted on the firm’s own server. The layout below is the plan, not a working page.', 'मौजूदा मुवक्किलों के लिए साइन-इन, जिसमें फर्म के केस मैनेजर से अगली तिथियाँ, दस्तावेज़ और चालान दिखेंगे, और जो फर्म के अपने सर्वर पर होगा। नीचे का लेआउट योजना है, कार्यरत पृष्ठ नहीं।')))}</p></div>
  <div class="room"><div class="login"><b style="font-family:var(--f-display);font-size:24px;font-weight:500">${esc(t(L('Sign in with a one-time code', 'एक-बार कोड से साइन इन')))}</b><input aria-label="${esc(t(L('Mobile number', 'मोबाइल नंबर')))}" placeholder="${esc(t(L('Mobile number', 'मोबाइल नंबर')))}" disabled><button class="btn" disabled>${esc(t(L('Send code', 'कोड भेजें')))}</button><small>${esc(t(L('Opens in phase 2.', 'चरण 2 में खुलेगा।')))}</small></div>
  <div class="panes">${frame(t(L('Next dates', 'अगली तिथियाँ')), t(L('Each matter’s next listing date will appear here.', 'हर मामले की अगली सूचीबद्ध तिथि यहाँ दिखेगी।')))}${frame(t(L('Documents', 'दस्तावेज़')), t(L('Pleadings and orders shared with the client.', 'मुवक्किल के साथ साझा अभिवचन और आदेश।')))}${frame(t(L('Invoices', 'चालान')), t(L('Fee notes and receipts.', 'शुल्क-पत्र और रसीदें।')))}</div></div>`, mg(L('Privacy', 'गोपनीयता'), `<p>${esc(t(L('Client data stays on the firm’s own server and out of public tools.', 'मुवक्किल का डेटा फर्म के अपने सर्वर पर रहेगा, सार्वजनिक उपकरणों से बाहर।')))}</p>`));
}

/* ---------- contact / notices ---------- */
function vContact() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Contact', 'संपर्क')]], false) + report(`
  <h1 class="page-title">${esc(t(L('Contact', 'संपर्क')))}</h1>
  <div class="headnote"><b>${esc(t(L('Headnote', 'सारांश')))}</b><p>${esc(t(L('Write to the firm with a question about the firm itself or a matter you wish to bring. A message does not create an advocate-client relationship, and the firm gives no advice by email.', 'फर्म के बारे में प्रश्न, या ऐसे मामले के बारे में जिसे आप लाना चाहें, फर्म को लिखें। संदेश से अधिवक्ता-मुवक्किल संबंध नहीं बनता, और फर्म ईमेल पर सलाह नहीं देती।')))}</p></div>
  <dl class="kv"><dt>${esc(t(L('Address', 'पता')))}</dt><dd>${esc(CONTACT.addr)}<br><a href="${CONTACT.map}" target="_blank" rel="noopener">${esc(t(L('Open in Google Maps', 'गूगल मैप्स में खोलें')))}</a></dd>
  <dt>${esc(t(L('Phone', 'फ़ोन')))}</dt><dd>${esc(CONTACT.phone)} <button class="tbtn" data-act="copy" data-arg="${esc(CONTACT.phone)}">${esc(t(L('Copy', 'कॉपी')))}</button></dd>
  <dt>${esc(t(L('Email', 'ईमेल')))}</dt><dd>${frame(t(L('Address to be added', 'पता जोड़ा जाएगा')), t(L('The firm’s email address is not published here yet.', 'फर्म का ईमेल पता यहाँ अभी प्रकाशित नहीं है।')))}</dd>
  <dt>${esc(t(L('Office hours', 'कार्यालय समय')))}</dt><dd>${CONTACT.hours.map(h => `${esc(t(h[0]))}: ${esc(h[1])}`).join('<br>')}<br><small>${esc(t(L('By prior appointment.', 'पूर्व समय लेकर।')))}</small></dd></dl>
  <h2 class="h3">${esc(t(L('Write to the firm', 'फर्म को लिखें')))}</h2>
  <form class="form" id="cform" novalidate>
    <label for="f-name">${esc(t(L('Your name', 'आपका नाम')))}<input id="f-name" autocomplete="name"><span class="err" id="e-name"></span></label>
    <label for="f-phone">${esc(t(L('Phone', 'फ़ोन')))}<input id="f-phone" inputmode="tel" autocomplete="tel"></label>
    <label for="f-email">${esc(t(L('Email', 'ईमेल')))}<input id="f-email" type="email" autocomplete="email"><span class="err" id="e-contact"></span></label>
    <label for="f-topic">${esc(t(L('Area your message concerns', 'आपका संदेश किस क्षेत्र से संबंधित है')))}<select id="f-topic"><option value="">${esc(t(L('Not sure', 'पता नहीं')))}</option>${PRACTICE.map(p => `<option value="${p.slug}">${esc(t(p.name))}</option>`).join('')}</select></label>
    <label for="f-msg">${esc(t(L('Message', 'संदेश')))}<textarea id="f-msg"></textarea><span class="err" id="e-msg"></span></label>
    <label class="chk" for="f-consent"><input id="f-consent" type="checkbox"><span>${esc(t(L('I agree that Ink & Equity may use the details above only to reply to this message. I can withdraw this agreement at any time by writing to the grievance contact below.', 'मैं सहमत हूँ कि इंक एंड इक्विटी ऊपर दिए विवरण का उपयोग केवल इस संदेश का उत्तर देने के लिए करे। मैं नीचे दिए शिकायत संपर्क को लिखकर कभी भी यह सहमति वापस ले सकता/सकती हूँ।')))}</span></label><span class="err" id="e-consent"></span>
    <div><button class="btn" type="submit">${esc(t(L('Prepare my message', 'मेरा संदेश तैयार करें')))}</button></div>
  </form>
  <div id="cpreview" aria-live="polite"></div>
  <h2 class="h3">${esc(t(L('Grievance contact', 'शिकायत संपर्क')))}</h2>${frame(t(L('Name and address to be added', 'नाम और पता जोड़ा जाएगा')), t(L('The person who receives data-protection requests and complaints, as the data protection law requires.', 'वह व्यक्ति जो डेटा संरक्षण अनुरोध और शिकायतें प्राप्त करेगा, जैसा डेटा संरक्षण कानून अपेक्षित करता है।')))}`,
  mg(L('How this form works', 'यह फ़ॉर्म कैसे काम करता है'), `<p>${esc(t(L('This page does not send your message to a server. It prepares the text for you to copy and send by phone or by email once the address is published.', 'यह पृष्ठ आपका संदेश किसी सर्वर को नहीं भेजता। यह पाठ तैयार करता है जिसे आप कॉपी करके फ़ोन या ईमेल से भेज सकते हैं, पता प्रकाशित होने पर।')))}</p>`) +
  mg(L('No advice by email', 'ईमेल पर सलाह नहीं'), `<p>${esc(t(L('Please do not send confidential documents through this page.', 'कृपया इस पृष्ठ से गोपनीय दस्तावेज़ न भेजें।')))}</p>`));
}
function vNotices() {
  return runhead([['home', L('Home', 'मुख्य')], [null, L('Notices', 'सूचनाएँ')]], true) + report(`
  <h1 class="page-title">${esc(t(L('Notices', 'सूचनाएँ')))}</h1>
  <h2 class="h3">${esc(t(L('Information notice', 'सूचना-पत्र')))}</h2>
  <p>${esc(t(L('The Bar Council of India Rules do not allow advocates to solicit work or advertise, directly or indirectly. This website is a source of information. It lists name, address, contact details, qualifications, areas of practice and bar memberships, which the Rules permit, and publishes notes on the law. It carries no testimonials, claims of success or outcome guarantees. Nothing on it is legal advice.', 'भारतीय विधिज्ञ परिषद नियम अधिवक्ताओं को प्रत्यक्ष या अप्रत्यक्ष रूप से कार्य की याचना या विज्ञापन की अनुमति नहीं देते। यह वेबसाइट सूचना का स्रोत है। इसमें नाम, पता, संपर्क विवरण, योग्यता, कार्यक्षेत्र और बार सदस्यता हैं, जिनकी नियम अनुमति देते हैं, और विधि पर टिप्पणियाँ हैं। इसमें कोई प्रशंसापत्र, सफलता के दावे या परिणाम की गारंटी नहीं है। इस पर कुछ भी विधिक सलाह नहीं है।')))}</p>
  <h2 class="h3">${esc(t(L('Privacy notice', 'गोपनीयता सूचना')))}</h2>
  <p>${esc(t(L('This site sets no cookies and loads no advertising or analytics trackers. If you use the contact page, the details you type stay in your browser until you copy them. When the firm receives a message from you, it will use the details only to reply, and you may ask to see, correct or erase them, or withdraw your agreement, by writing to the grievance contact on the contact page.', 'यह साइट कोई कुकी नहीं लगाती और कोई विज्ञापन या विश्लेषण ट्रैकर नहीं चलाती। यदि आप संपर्क पृष्ठ का उपयोग करते हैं, तो आपके टाइप किए विवरण आपके ब्राउज़र में तब तक रहते हैं जब तक आप उन्हें कॉपी नहीं करते। जब फर्म को आपसे संदेश मिलेगा, वह विवरण का उपयोग केवल उत्तर देने के लिए करेगी, और आप संपर्क पृष्ठ पर शिकायत संपर्क को लिखकर उन्हें देखने, सुधारने या मिटाने का अनुरोध कर सकते हैं, या अपनी सहमति वापस ले सकते हैं।')))}</p>
  <h2 class="h3">${esc(t(L('Use of AI', 'एआई का उपयोग')))}</h2>
  <p>${esc(t(L('Where AI has materially helped in preparing a page, the page says so. This site carries no AI-generated image, voice or avatar of any advocate, judge or litigant.', 'जहाँ किसी पृष्ठ की तैयारी में एआई ने सारभूत सहायता की है, वहाँ पृष्ठ यह बताता है। इस साइट पर किसी अधिवक्ता, न्यायाधीश या पक्षकार की कोई एआई-निर्मित छवि, आवाज़ या अवतार नहीं है।')))}</p>
  ${frame(t(L('Proposed firm policy, not yet adopted', 'प्रस्तावित फर्म नीति, अभी अपनाई नहीं गई')), t(L('Every citation in a draft is checked against a public report before it leaves the firm. Client documents are not entered into public AI tools. Material AI use is disclosed. The partners are to confirm or change this text.', 'प्रारूप का हर उद्धरण फर्म से बाहर जाने से पहले सार्वजनिक रिपोर्ट से मिलाया जाता है। मुवक्किल के दस्तावेज़ सार्वजनिक एआई उपकरणों में नहीं डाले जाते। सारभूत एआई उपयोग का प्रकटीकरण होता है। भागीदार इस पाठ की पुष्टि करेंगे या बदलेंगे।')))}
  <h2 class="h3">${esc(t(L('Accessibility', 'सुगम्यता')))}</h2>
  <p>${esc(t(L('The site works with a keyboard, respects reduced-motion settings, and offers light and dark themes and English and Hindi.', 'साइट कीबोर्ड से चलती है, कम-गति सेटिंग का सम्मान करती है, और हल्की व गहरी थीम तथा अंग्रेज़ी और हिंदी देती है।')))}</p>`, null);
}

function currentView() {
  const r = S.route;
  if (r === 'home') return vHome();
  if (r === 'about') return vAbout();
  if (r === 'practice') return vPractice();
  if (r.startsWith('practice-')) return vPracticeOne(r.slice(9));
  if (r === 'fora') return vFora();
  if (r === 'limitation') return vLimitation();
  if (r === 'lexicon') return vLexicon();
  if (r === 'people') return vPeople();
  if (r.startsWith('person-')) return vPerson(r.slice(7));
  if (r === 'notes') return vNotes();
  if (r.startsWith('note-')) return vNote(r.slice(5));
  if (r === 'resources') return vResources();
  if (r === 'clientroom') return vClientRoom();
  if (r === 'contact') return vContact();
  if (r === 'notices') return vNotices();
  return vHome();
}
