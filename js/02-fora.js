/* Data: ladders of fora. Each rung is listed bottom to top. */
const STREAMS = [
  { id: 'civil', name: L('Civil suit', 'दीवानी वाद'), rungs: [
    { n: L('Civil Judge (Junior Division)', 'सिविल जज (कनिष्ठ खंड)'), src: 'CPC s. 15; Bengal, Agra and Assam Civil Courts Act, 1887', t: L('First-instance court for suits within its pecuniary limit. The limits are fixed by notification.', 'अपने आर्थिक क्षेत्राधिकार के भीतर वादों का प्रथम न्यायालय। सीमाएँ अधिसूचना द्वारा तय होती हैं।') },
    { n: L('Civil Judge (Senior Division)', 'सिविल जज (वरिष्ठ खंड)'), src: 'CPC s. 15; 1887 Act', t: L('Hears suits above the junior court’s limit and unlimited in value in the class of suits assigned to it.', 'कनिष्ठ न्यायालय की सीमा से ऊपर के वाद सुनता है।') },
    { n: L('District Judge', 'जिला न्यायाधीश'), src: 'CPC s. 96; 1887 Act', t: L('Hears first appeals from decrees of subordinate courts within the appeal limits fixed by law.', 'विधि द्वारा तय अपील-सीमाओं के भीतर अधीनस्थ न्यायालयों की डिक्री की प्रथम अपील सुनता है।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'CPC ss. 96, 100, 115', t: L('First appeal in larger suits; second appeal only on a substantial question of law; revision of jurisdictional errors.', 'बड़े वादों में प्रथम अपील; द्वितीय अपील केवल विधि के सारभूत प्रश्न पर; क्षेत्राधिकार की त्रुटियों का पुनरीक्षण।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Constitution Arts. 133, 136', t: L('Civil appeals in qualifying cases, and special leave to appeal in the Court’s discretion.', 'योग्य मामलों में दीवानी अपीलें, और न्यायालय के विवेक पर विशेष अनुमति।') }
  ] },
  { id: 'criminal', name: L('Criminal case', 'आपराधिक मामला'), rungs: [
    { n: L('Magistrate', 'मजिस्ट्रेट'), src: 'BNSS (classes of criminal courts)', t: L('Tries less serious offences, takes cognizance of complaints and police reports and decides bail in many cases.', 'कम गंभीर अपराधों का विचारण करता है, परिवादों और पुलिस रिपोर्टों पर संज्ञान लेता है और अनेक मामलों में जमानत तय करता है।') },
    { n: L('Court of Session', 'सत्र न्यायालय'), src: 'BNSS (Court of Session)', t: L('Tries the more serious offences and hears appeals from Magistrates, as the Sanhita provides. Has bail powers under section 483.', 'अधिक गंभीर अपराधों का विचारण करता है और संहिता के अनुसार मजिस्ट्रेटों की अपीलें सुनता है। धारा 483 के अधीन जमानत की शक्ति है।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'BNSS ss. 483, 528', t: L('Appeals, revisions, bail and the inherent power under section 528 to prevent abuse of process.', 'अपीलें, पुनरीक्षण, जमानत और प्रक्रिया के दुरुपयोग को रोकने के लिए धारा 528 की अंतर्निहित शक्ति।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Constitution Arts. 134, 136', t: L('Appeals in specified criminal cases and special leave.', 'निर्दिष्ट आपराधिक मामलों में अपीलें और विशेष अनुमति।') }
  ] },
  { id: 'writ', name: L('Writ and constitutional', 'रिट और संवैधानिक'), rungs: [
    { n: L('The authority itself', 'स्वयं प्राधिकारी'), src: 'The statute or rule in question', t: L('A representation or statutory appeal is usually the first step and often a condition for relief.', 'अभ्यावेदन या वैधानिक अपील प्रायः पहला कदम है और अक्सर राहत की शर्त भी।') },
    { n: L('High Court, single judge', 'उच्च न्यायालय, एकल न्यायाधीश'), src: 'Constitution Arts. 226, 227', t: L('Issues writs for fundamental rights and for other legal rights; supervises courts and tribunals.', 'मौलिक अधिकारों और अन्य विधिक अधिकारों के लिए रिट जारी करता है; न्यायालयों और अधिकरणों का अधीक्षण करता है।') },
    { n: L('High Court, Division Bench', 'उच्च न्यायालय, खंडपीठ'), src: 'Rules of the Court, 1952', t: L('A special appeal lies against a single judge’s judgment in a writ petition, as the Rules provide.', 'नियमों के अनुसार रिट याचिका में एकल न्यायाधीश के निर्णय के विरुद्ध विशेष अपील होती है।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Constitution Arts. 32, 136', t: L('Direct petitions for fundamental rights under Article 32, or special leave from the High Court.', 'अनुच्छेद 32 के अधीन मौलिक अधिकारों के लिए सीधी याचिका, या उच्च न्यायालय से विशेष अनुमति।') }
  ] },
  { id: 'land', name: L('Land and revenue (U.P.)', 'भूमि और राजस्व (उ.प्र.)'), rungs: [
    { n: L('Revenue Inspector / Lekhpal', 'राजस्व निरीक्षक / लेखपाल'), src: 'UP Revenue Code, 2006, ss. 16, 33', t: L('Keeps village records. On a report of succession, records it if uncontested or refers it to the Tahsildar if disputed.', 'ग्राम अभिलेख रखता है। उत्तराधिकार की रिपोर्ट पर विवाद न हो तो दर्ज करता है, विवाद हो तो तहसीलदार को भेजता है।') },
    { n: L('Tahsildar (Judicial)', 'तहसीलदार (न्यायिक)'), src: 'ss. 14, 32, 35', t: L('Decides mutation on succession or transfer after proclamation and inquiry, and corrects records.', 'उद्घोषणा और जाँच के बाद उत्तराधिकार या अंतरण पर दाखिल-खारिज तय करता है और अभिलेख सुधारता है।') },
    { n: L('Sub-Divisional Officer', 'उप-जिलाधिकारी'), src: 's. 35(2); Third Schedule', t: L('Hears appeals from the Tahsildar’s mutation order within 30 days. For revenue suits, the Third Schedule names the court.', 'तहसीलदार के दाखिल-खारिज आदेश की अपील 30 दिन में सुनता है। राजस्व वादों के लिए तृतीय अनुसूची न्यायालय का नाम देती है।') },
    { n: L('Commissioner / Board of Revenue', 'आयुक्त / राजस्व परिषद'), src: 'ss. 207 to 211', t: L('Appeals as the Third Schedule provides (first appeal in 30 days, second appeal in 90 days on a substantial question of law); revision within 60 days; the Board reviews its own orders.', 'तृतीय अनुसूची के अनुसार अपीलें (प्रथम अपील 30 दिन, विधि के सारभूत प्रश्न पर द्वितीय अपील 90 दिन); पुनरीक्षण 60 दिन में; परिषद अपने आदेशों का पुनर्विलोकन करती है।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'Constitution Arts. 226, 227', t: L('Writ jurisdiction over revenue orders for jurisdictional and legal errors.', 'क्षेत्राधिकार और विधि की त्रुटियों के लिए राजस्व आदेशों पर रिट क्षेत्राधिकार।') }
  ] },
  { id: 'service', name: L('Service matter', 'सेवा मामला'), rungs: [
    { n: L('Disciplinary or appointing authority', 'अनुशासनिक या नियुक्ति प्राधिकारी'), src: 'Service rules', t: L('Passes the order of appointment, promotion, penalty or retirement.', 'नियुक्ति, पदोन्नति, दंड या सेवानिवृत्ति का आदेश पारित करता है।') },
    { n: L('Departmental appellate authority', 'विभागीय अपीलीय प्राधिकारी'), src: 'U.P. Government Servant (Discipline and Appeal) Rules, 1999', t: L('The rules provide for an appeal or representation within a stated time.', 'नियम निर्धारित समय में अपील या अभ्यावेदन का प्रावधान करते हैं।') },
    { n: L('Tribunal', 'अधिकरण'), src: 'Administrative Tribunals Act, 1985', t: L('For central government employees. For State employees, a tribunal only where one is constituted.', 'केंद्र सरकार के कर्मचारियों के लिए। राज्य कर्मचारियों के लिए केवल जहाँ अधिकरण गठित हो।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'Constitution Art. 226', t: L('Writ jurisdiction over service orders.', 'सेवा आदेशों पर रिट क्षेत्राधिकार।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Constitution Art. 136', t: L('Special leave to appeal.', 'अपील की विशेष अनुमति।') }
  ] },
  { id: 'tax', name: L('Income-tax', 'आयकर'), rungs: [
    { n: L('Assessing Officer', 'निर्धारण अधिकारी'), src: 'Income-tax Act, 1961, ss. 143, 147, 148', t: L('Assessment and reassessment; most proceedings are conducted electronically through the faceless scheme.', 'निर्धारण और पुनर्निर्धारण; अधिकांश कार्यवाही फेसलेस योजना से इलेक्ट्रॉनिक रूप में होती है।') },
    { n: L('Commissioner (Appeals)', 'आयुक्त (अपील)'), src: 'ss. 246A, 249', t: L('First appeal. Under the 1961 Act the appeal is filed within 30 days of service of the notice of demand or the order.', 'प्रथम अपील। 1961 के अधिनियम में अपील माँग-नोटिस या आदेश की तामील से 30 दिन में दाखिल होती है।') },
    { n: L('Income Tax Appellate Tribunal', 'आयकर अपीलीय अधिकरण'), src: 's. 253', t: L('Second appeal on facts and law. Under the 1961 Act, 60 days from the date the order is communicated.', 'तथ्य और विधि पर द्वितीय अपील। 1961 के अधिनियम में आदेश की सूचना से 60 दिन।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 's. 260A', t: L('Appeal on a substantial question of law.', 'विधि के सारभूत प्रश्न पर अपील।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 's. 261', t: L('Appeal in cases the High Court certifies as fit, and by special leave.', 'उन मामलों में अपील जिन्हें उच्च न्यायालय उपयुक्त प्रमाणित करे, और विशेष अनुमति से।') }
  ] },
  { id: 'gst', name: L('GST', 'जीएसटी'), rungs: [
    { n: L('Proper Officer', 'उचित अधिकारी'), src: 'CGST Act, 2017, ss. 73, 74, 74A', t: L('Issues show-cause notices and adjudicates demands.', 'कारण बताओ नोटिस जारी करता है और माँगों का न्यायनिर्णयन करता है।') },
    { n: L('Appellate Authority', 'अपीलीय प्राधिकारी'), src: 's. 107', t: L('First appeal within three months of the order, with a pre-deposit of a part of the disputed tax.', 'आदेश से तीन माह में प्रथम अपील, विवादित कर के एक भाग की पूर्व-जमा सहित।') },
    { n: L('Appellate Tribunal (GSTAT)', 'अपीलीय अधिकरण (जीएसटीएटी)'), src: 'ss. 109, 112', t: L('Second appeal against the Appellate Authority’s order.', 'अपीलीय प्राधिकारी के आदेश के विरुद्ध द्वितीय अपील।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 's. 117', t: L('Appeal on a substantial question of law.', 'विधि के सारभूत प्रश्न पर अपील।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 's. 118', t: L('Appeal in specified cases and special leave.', 'निर्दिष्ट मामलों में अपील और विशेष अनुमति।') }
  ] },
  { id: 'consumer', name: L('Consumer complaint', 'उपभोक्ता परिवाद'), rungs: [
    { n: L('District Commission', 'जिला आयोग'), src: 'Consumer Protection Act, 2019, s. 34', t: L('Complaints where the consideration paid is up to ₹50 lakh.', 'जहाँ चुकाया गया प्रतिफल ₹50 लाख तक हो।') },
    { n: L('State Commission', 'राज्य आयोग'), src: 'ss. 41, 47', t: L('Original complaints above ₹50 lakh and up to ₹2 crore; appeals from the District Commission.', '₹50 लाख से ऊपर और ₹2 करोड़ तक के मूल परिवाद; जिला आयोग से अपीलें।') },
    { n: L('National Commission', 'राष्ट्रीय आयोग'), src: 'ss. 51, 58', t: L('Original complaints above ₹2 crore; appeals from the State Commission.', '₹2 करोड़ से ऊपर के मूल परिवाद; राज्य आयोग से अपीलें।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 's. 67', t: L('Appeal against the National Commission’s order.', 'राष्ट्रीय आयोग के आदेश के विरुद्ध अपील।') }
  ] },
  { id: 'arbitration', name: L('Arbitration', 'मध्यस्थता'), rungs: [
    { n: L('Arbitral tribunal', 'मध्यस्थ अधिकरण'), src: 'Arbitration and Conciliation Act, 1996', t: L('Decides the dispute and passes the award.', 'विवाद तय करता है और पंचाट पारित करता है।') },
    { n: L('Court under the Act', 'अधिनियम के अधीन न्यायालय'), src: 'ss. 9, 11, 34, 36', t: L('Interim relief, appointment of arbitrators, challenge to the award and enforcement. A challenge is filed within three months, extendable by thirty days.', 'अंतरिम राहत, मध्यस्थों की नियुक्ति, पंचाट को चुनौती और प्रवर्तन। चुनौती तीन माह में, तीस दिन बढ़ाई जा सकती है।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 's. 37', t: L('Appeals from specified orders of the court.', 'न्यायालय के निर्दिष्ट आदेशों की अपीलें।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Art. 136', t: L('Special leave to appeal.', 'अपील की विशेष अनुमति।') }
  ] },
  { id: 'banking', name: L('Recovery and insolvency', 'वसूली और दिवाला'), rungs: [
    { n: L('Debt Recovery Tribunal', 'ऋण वसूली अधिकरण'), src: 'RDDBFI Act, 1993; SARFAESI Act, s. 17', t: L('Recovery applications by banks and challenges to measures taken under SARFAESI.', 'बैंकों के वसूली आवेदन और सरफ़ाएसी के उपायों को चुनौती।') },
    { n: L('Debt Recovery Appellate Tribunal', 'ऋण वसूली अपीलीय अधिकरण'), src: 'RDDBFI Act, 1993', t: L('Appeal against the Tribunal’s order, subject to pre-deposit.', 'अधिकरण के आदेश के विरुद्ध अपील, पूर्व-जमा के अधीन।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'Constitution Arts. 226, 227', t: L('Writ jurisdiction over tribunal orders in appropriate cases.', 'उपयुक्त मामलों में अधिकरण के आदेशों पर रिट क्षेत्राधिकार।') },
    { n: L('NCLT → NCLAT → Supreme Court', 'एनसीएलटी → एनसीएलएटी → सर्वोच्च न्यायालय'), src: 'IBC ss. 7, 9, 61, 62', t: L('The separate insolvency track runs from the National Company Law Tribunal to its Appellate Tribunal and then the Supreme Court.', 'दिवाला की अलग धारा राष्ट्रीय कंपनी विधि अधिकरण से उसके अपीलीय अधिकरण और फिर सर्वोच्च न्यायालय तक चलती है।') }
  ] },
  { id: 'family', name: L('Family matter', 'पारिवारिक मामला'), rungs: [
    { n: L('Family Court / Magistrate', 'कुटुंब न्यायालय / मजिस्ट्रेट'), src: 'Family Courts Act, 1984; BNSS s. 144', t: L('Matrimonial and custody petitions; maintenance and domestic violence applications before the Magistrate.', 'वैवाहिक और अभिरक्षा याचिकाएँ; मजिस्ट्रेट के समक्ष भरण-पोषण और घरेलू हिंसा के आवेदन।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'Family Courts Act, 1984, s. 19', t: L('Appeal from Family Court judgments and orders.', 'कुटुंब न्यायालय के निर्णयों और आदेशों की अपील।') },
    { n: L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय'), src: 'Art. 136', t: L('Special leave to appeal.', 'अपील की विशेष अनुमति।') }
  ] },
  { id: 'cyber', name: L('Cyber and IT', 'साइबर और आईटी'), rungs: [
    { n: L('Police / Magistrate', 'पुलिस / मजिस्ट्रेट'), src: 'IT Act, 2000; BNSS', t: L('Criminal complaint and investigation for offences under the IT Act and the Sanhita.', 'आईटी अधिनियम और संहिता के अपराधों के लिए आपराधिक परिवाद और अन्वेषण।') },
    { n: L('Adjudicating Officer', 'न्यायनिर्णायक अधिकारी'), src: 'IT Act, 2000, s. 46', t: L('Civil claims for compensation for contraventions of Chapter IX.', 'अध्याय IX के उल्लंघनों के लिए क्षतिपूर्ति के दीवानी दावे।') },
    { n: L('Appellate Tribunal', 'अपीलीय अधिकरण'), src: 's. 57', t: L('Appeal against the Adjudicating Officer’s order.', 'न्यायनिर्णायक अधिकारी के आदेश के विरुद्ध अपील।') },
    { n: L('High Court', 'उच्च न्यायालय'), src: 'Arts. 226, 227', t: L('Writ and supervisory jurisdiction.', 'रिट और अधीक्षण क्षेत्राधिकार।') }
  ] }
];
