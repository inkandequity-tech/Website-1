/* Data: people, family of sites, contact facts, navigation. Facts come from the firm's published pages and the brief. */
const PEOPLE = [
  {
    slug: 'rishabh-raj', name: 'Rishabh Raj', ini: 'R',
    role: L('Founding Partner', 'संस्थापक भागीदार'),
    areas: [L('Civil and land matters', 'दीवानी और भूमि मामले'), L('Land and revenue', 'भूमि और राजस्व'), L('Service matters', 'सेवा मामले'), L('Constitutional writs', 'संवैधानिक रिट')],
    quals: ['BBA LLB, Symbiosis Law School, Noida', 'St. Francis College', 'Enrolled 2018'],
    bars: ['Oudh Bar Association', 'Supreme Court Bar Association', 'Central Bar Association, Lucknow'],
    line: L('Founder of the firm, practising civil, land and revenue, service and constitutional writ matters.', 'फर्म के संस्थापक; दीवानी, भूमि और राजस्व, सेवा तथा संवैधानिक रिट मामलों में कार्यरत।')
  },
  {
    slug: 'vedant-bhargav', name: 'Vedant Bhargav', ini: 'V',
    role: L('Managing Partner', 'प्रबंध भागीदार'),
    areas: [L('Case management and firm operations', 'मामला प्रबंधन और फर्म संचालन')],
    quals: [], bars: [],
    line: L('Co-founder of the firm and its managing partner.', 'फर्म के सह-संस्थापक और प्रबंध भागीदार।')
  },
  {
    slug: 'radhika-singh', name: 'Radhika Singh', ini: 'R',
    role: L('Partner', 'भागीदार'),
    areas: [L('Tax', 'कर'), L('Constitutional law', 'संवैधानिक विधि'), L('Service law', 'सेवा विधि')],
    quals: [], bars: [],
    line: L('Partner practising tax, constitutional and service law.', 'कर, संवैधानिक और सेवा विधि में कार्यरत भागीदार।')
  },
  {
    slug: 'hanumant-lal-srivastava', name: 'Hanumant Lal Srivastava', ini: 'H',
    role: L('Partner', 'भागीदार'),
    areas: [L('Trial-court practice', 'विचारण न्यायालय में वकालत')],
    quals: [], bars: [],
    line: L('Partner practising before the trial courts.', 'विचारण न्यायालयों में कार्यरत भागीदार।')
  }
];
const PBYSLUG = Object.fromEntries(PEOPLE.map(p => [p.slug, p]));

/* Addresses of the companion sites. Filled in when the pages are published. */
const LINKS = { land: 'https://claude.ai/artifact/EeQKJBNL1qhALGKVP73FoR', decoder: 'https://claude.ai/artifact/E7nYdjaMQSHqt8aDQV8h4S', dive: 'https://claude.ai/artifact/HHfMSSZSBAYD4tWw5NVRUw', century: 'https://claude.ai/artifact/ViNzFSzEmnJfcZrtfxz15G' };
const FAMILY = [
  { key: 'land', name: L('UP Land and Revenue Library', 'उ.प्र. भूमि एवं राजस्व पुस्तकालय'), addr: 'ieqlaw.com/bhoomi', desc: L('Hindi-first guides to mutation, partition, succession and revenue appeals, each citing its provision.', 'दाखिल-खारिज, बँटवारा, उत्तराधिकार और राजस्व अपीलों पर हिंदी-प्रथम मार्गदर्शिकाएँ, हर एक अपने प्रावधान सहित।') },
  { key: 'decoder', name: L('Notice Decoder', 'नोटिस डिकोडर'), addr: 'noticedecoder.in', desc: L('Income-tax and GST notices in plain language, from the notice in hand to the appeal route.', 'आयकर और जीएसटी नोटिस सरल भाषा में, हाथ में रखे नोटिस से अपील के मार्ग तक।') },
  { key: 'dive', name: L('Academy Dive', 'एकेडमी डाइव'), addr: 'academydive.in', desc: L('A twelve-module course in courtroom practice, with a certificate anyone can verify.', 'न्यायालय-कार्य पर बारह मॉड्यूल का पाठ्यक्रम, ऐसे प्रमाणपत्र के साथ जिसे कोई भी सत्यापित कर सके।') },
  { key: 'century', name: L('A Century at the Bench', 'ए सेंचुरी एट द बेंच'), addr: 'lucknowbenchvoices.in', desc: L('An oral-history and photo archive of the Lucknow Bench and its Bar, convened by Ram Raj Singh.', 'लखनऊ पीठ और उसके अधिवक्ता-वर्ग का मौखिक-इतिहास और छायाचित्र संग्रह, राम राज सिंह द्वारा संयोजित।') }
];

const CONTACT = {
  addr: '1, Moti Mahal Marg, Hazratganj, Lucknow, Uttar Pradesh',
  phone: '+91 9450 72 7289',
  hours: [
    [L('Monday to Friday', 'सोमवार से शुक्रवार'), '6:30 PM to 9:00 PM'],
    [L('Saturday', 'शनिवार'), '11:00 AM to 1:00 PM'],
    [L('Sunday', 'रविवार'), '11:00 AM to 4:00 PM']
  ],
  map: 'https://www.google.com/maps/search/?api=1&query=1+Moti+Mahal+Marg+Hazratganj+Lucknow'
};

const NAV = [
  ['practice', L('Practice', 'कार्यक्षेत्र')],
  ['fora', L('Fora', 'न्यायालय-क्रम')],
  ['people', L('People', 'जन')],
  ['notes', L('Notes', 'टिप्पणियाँ')],
  ['resources', L('Resources', 'संसाधन')],
  ['contact', L('Contact', 'संपर्क')]
];
