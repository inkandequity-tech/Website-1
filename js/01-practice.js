/* Data: twelve practice areas, described by law and forum, never by results. */
const L = (en, hi) => ({ en, hi });
const PRACTICE = [
  {
    slug: 'constitutional', stream: 'writ',
    name: L('Constitutional Law and Writs', 'संवैधानिक विधि और रिट'),
    short: L('Articles 32, 226 and 227', 'अनुच्छेद 32, 226 और 227'),
    head: L(
      'Disputes about the power of the State: whether an order, rule or action respects the fundamental rights and the limits the Constitution sets. Most are heard as writ petitions, which are decided on documents rather than oral evidence.',
      'राज्य की शक्ति से जुड़े विवाद: कोई आदेश, नियम या कार्रवाई मौलिक अधिकारों और संविधान की सीमाओं के अनुरूप है या नहीं। अधिकांश मामले रिट याचिका के रूप में सुने जाते हैं, जिनका निर्णय मौखिक साक्ष्य के बजाय दस्तावेज़ों पर होता है।'),
    laws: [
      ['Constitution of India, 1950', 'Arts. 12, 14, 19, 21', L('The State, equality, freedoms and life and liberty.', 'राज्य, समानता, स्वतंत्रताएँ तथा जीवन और दैहिक स्वतंत्रता।')],
      ['Constitution of India, 1950', 'Art. 32', L('Direct remedy in the Supreme Court for fundamental rights.', 'मौलिक अधिकारों के लिए सर्वोच्च न्यायालय में सीधा उपचार।')],
      ['Constitution of India, 1950', 'Arts. 226, 227', L('Writs and superintendence by the High Court.', 'उच्च न्यायालय की रिट और अधीक्षण शक्ति।')],
      ['Rules of the Court, 1952', 'Allahabad High Court', L('Procedure for writ petitions and special appeals.', 'रिट याचिकाओं और विशेष अपीलों की प्रक्रिया।')]
    ],
    fora: [L('Supreme Court of India (Art. 32)', 'भारत का सर्वोच्च न्यायालय (अनु. 32)'), L('Allahabad High Court at Lucknow and Prayagraj (Arts. 226, 227)', 'इलाहाबाद उच्च न्यायालय, लखनऊ और प्रयागराज (अनु. 226, 227)'), L('Delhi High Court, where the authority or the cause of action lies in Delhi', 'दिल्ली उच्च न्यायालय, जहाँ प्राधिकारी या वाद-कारण दिल्ली में हो')],
    steps: [
      L('Read the order and the rule behind it. Identify the authority, its power and the right said to be affected.', 'आदेश और उसके पीछे का नियम पढ़ें। प्राधिकारी, उसकी शक्ति और प्रभावित अधिकार की पहचान करें।'),
      L('Check the alternative remedy and the delay. A statutory appeal or a long gap can decide whether a writ is entertained.', 'वैकल्पिक उपचार और विलंब देखें। वैधानिक अपील या लंबा अंतराल तय कर सकता है कि रिट सुनी जाएगी या नहीं।'),
      L('Draft the petition: facts in date order, grounds, annexures and the prayer.', 'याचिका का प्रारूप: तिथिवार तथ्य, आधार, संलग्नक और प्रार्थना।'),
      L('Listing, notice, counter-affidavit and rejoinder.', 'सूचीबद्धता, नोटिस, प्रतिशपथपत्र और प्रत्युत्तर।'),
      L('Hearing and judgment. Onward: a special appeal against a single judge, or a special leave petition.', 'सुनवाई और निर्णय। आगे: एकल न्यायाधीश के विरुद्ध विशेष अपील, या विशेष अनुमति याचिका।')
    ],
    time: L('No fixed period for a writ, but long delay can defeat relief. Appeals and special leave petitions have fixed periods.', 'रिट के लिए कोई निश्चित अवधि नहीं, परंतु लंबा विलंब राहत रोक सकता है। अपील और विशेष अनुमति याचिका की अवधि निश्चित है।')
  },
  {
    slug: 'civil', stream: 'civil',
    name: L('Civil Litigation', 'सिविल वाद'),
    short: L('Suits, injunctions, decrees', 'वाद, निषेधाज्ञा, डिक्री'),
    head: L(
      'Disputes between private parties about rights, money, property and contracts, decided by a civil court on pleadings and evidence. The Code of Civil Procedure sets the path from plaint to decree and appeal.',
      'अधिकारों, धन, संपत्ति और संविदाओं से जुड़े निजी पक्षों के विवाद, जिन्हें दीवानी न्यायालय अभिवचन और साक्ष्य पर तय करता है। सिविल प्रक्रिया संहिता वाद-पत्र से डिक्री और अपील तक का मार्ग तय करती है।'),
    laws: [
      ['Code of Civil Procedure, 1908', 'ss. 9, 26, 96, 100, 115', L('Jurisdiction, institution, appeals, second appeal and revision.', 'क्षेत्राधिकार, वाद की संस्थापना, अपील, द्वितीय अपील और पुनरीक्षण।')],
      ['Code of Civil Procedure, 1908', 'Orders VI, VII, VIII, XXXIX', L('Pleadings, plaint, written statement, temporary injunctions.', 'अभिवचन, वाद-पत्र, लिखित कथन, अस्थायी निषेधाज्ञा।')],
      ['Specific Relief Act, 1963', 'Chs. II, VII', L('Specific performance and injunctions.', 'विनिर्दिष्ट पालन और निषेधाज्ञा।')],
      ['Limitation Act, 1963', 'ss. 3, 5, 12, 14', L('Bar of limitation, extension, exclusion of time.', 'परिसीमा का वर्जन, विस्तार, समय का अपवर्जन।')],
      ['Indian Contract Act, 1872', '—', L('Formation, performance and breach of contracts.', 'संविदाओं का गठन, पालन और भंग।')],
      ['Bharatiya Sakshya Adhiniyam, 2023', '—', L('Proof of facts and admissibility of evidence.', 'तथ्यों का प्रमाण और साक्ष्य की ग्राह्यता।')]
    ],
    fora: [L('Civil Judge (Junior Division / Senior Division)', 'सिविल जज (कनिष्ठ / वरिष्ठ खंड)'), L('District Judge', 'जिला न्यायाधीश'), L('Allahabad High Court', 'इलाहाबाद उच्च न्यायालय'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('Establish the cause of action, the court with jurisdiction and the valuation of the suit.', 'वाद-कारण, क्षेत्राधिकार वाले न्यायालय और वाद के मूल्यांकन को स्थापित करें।'),
      L('Plaint with documents, court fee and verification. Summons issue to the defendant.', 'दस्तावेज़ों, न्यायालय-शुल्क और सत्यापन के साथ वाद-पत्र। प्रतिवादी को समन जारी होते हैं।'),
      L('Written statement, replication, framing of issues.', 'लिखित कथन, प्रत्युत्तर, वाद-बिंदुओं का निर्धारण।'),
      L('Evidence, cross-examination and final arguments.', 'साक्ष्य, प्रतिपरीक्षा और अंतिम बहस।'),
      L('Judgment and decree; then appeal or execution.', 'निर्णय और डिक्री; फिर अपील या निष्पादन।')
    ],
    time: L('Most money and contract suits are governed by a three-year period from when the right to sue accrues. See the limitation reference.', 'अधिकांश धन और संविदा वादों में वाद का अधिकार उत्पन्न होने से तीन वर्ष की अवधि लागू होती है। परिसीमा संदर्भ देखें।')
  },
  {
    slug: 'criminal', stream: 'criminal',
    name: L('Criminal Law', 'आपराधिक विधि'),
    short: L('BNS, BNSS, bail, trial', 'बीएनएस, बीएनएसएस, जमानत, विचारण'),
    head: L(
      'Matters under the Bharatiya Nyaya Sanhita and the Bharatiya Nagarik Suraksha Sanhita, from the first report to trial and appeal, for the accused and the complainant alike.',
      'भारतीय न्याय संहिता और भारतीय नागरिक सुरक्षा संहिता के अंतर्गत मामले, प्रथम सूचना से विचारण और अपील तक, अभियुक्त और परिवादी दोनों के लिए।'),
    laws: [
      ['Bharatiya Nyaya Sanhita, 2023', '—', L('Offences and punishments.', 'अपराध और दंड।')],
      ['Bharatiya Nagarik Suraksha Sanhita, 2023', 's. 35', L('Arrest without warrant; notice of appearance.', 'वारंट के बिना गिरफ़्तारी; उपस्थिति का नोटिस।')],
      ['Bharatiya Nagarik Suraksha Sanhita, 2023', 'ss. 479, 480', L('Detention of undertrial prisoners; bail in non-bailable offences.', 'विचाराधीन बंदियों की निरुद्धि; अजमानतीय अपराधों में जमानत।')],
      ['Bharatiya Nagarik Suraksha Sanhita, 2023', 'ss. 482, 483', L('Anticipatory bail; special powers of the High Court and Court of Session on bail.', 'अग्रिम जमानत; जमानत पर उच्च न्यायालय और सत्र न्यायालय की विशेष शक्तियाँ।')],
      ['Bharatiya Nagarik Suraksha Sanhita, 2023', 's. 528', L('Inherent powers of the High Court.', 'उच्च न्यायालय की अंतर्निहित शक्तियाँ।')],
      ['Bharatiya Sakshya Adhiniyam, 2023', '—', L('Evidence in criminal trials.', 'आपराधिक विचारण में साक्ष्य।')]
    ],
    fora: [L('Magistrates', 'मजिस्ट्रेट'), L('Court of Session', 'सत्र न्यायालय'), L('Allahabad High Court', 'इलाहाबाद उच्च न्यायालय'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('First information or complaint; understand what is alleged and under which provisions.', 'प्रथम सूचना या परिवाद; क्या आरोप है और किन धाराओं में, यह समझें।'),
      L('Investigation. Rights on arrest, notice of appearance and the question of bail.', 'अन्वेषण। गिरफ़्तारी पर अधिकार, उपस्थिति का नोटिस और जमानत का प्रश्न।'),
      L('Report, cognizance and framing of charge, or discharge.', 'रिपोर्ट, संज्ञान और आरोप तय होना, या उन्मोचन।'),
      L('Trial: prosecution evidence, statement of the accused, defence evidence, arguments.', 'विचारण: अभियोजन साक्ष्य, अभियुक्त का कथन, बचाव साक्ष्य, बहस।'),
      L('Judgment, then appeal, revision or a petition under the inherent power.', 'निर्णय, फिर अपील, पुनरीक्षण या अंतर्निहित शक्ति के अधीन याचिका।')
    ],
    time: L('Limits on taking cognizance depend on the offence. Appeals against conviction have fixed periods.', 'संज्ञान लेने की सीमा अपराध पर निर्भर है। दोषसिद्धि के विरुद्ध अपील की अवधि निश्चित है।')
  },
  {
    slug: 'land-revenue', stream: 'land',
    name: L('Land and Revenue', 'भूमि और राजस्व'),
    short: L('Mutation, partition, revenue appeals', 'दाखिल-खारिज, बँटवारा, राजस्व अपील'),
    head: L(
      'Agricultural land in Uttar Pradesh is governed by its own code and its own courts. Records of rights, mutation, succession, partition and revenue appeals are decided by revenue officers, with the High Court above them.',
      'उत्तर प्रदेश की कृषि भूमि की अपनी संहिता और अपने न्यायालय हैं। अधिकार-अभिलेख, दाखिल-खारिज, उत्तराधिकार, बँटवारा और राजस्व अपीलें राजस्व अधिकारी तय करते हैं, जिनके ऊपर उच्च न्यायालय है।'),
    laws: [
      ['Uttar Pradesh Revenue Code, 2006', 'ss. 31 to 40', L('Record of rights, correction, mutation on succession and transfer.', 'अधिकार-अभिलेख, सुधार, उत्तराधिकार और अंतरण पर दाखिल-खारिज।')],
      ['Uttar Pradesh Revenue Code, 2006', 'ss. 75 to 80', L('Classes of bhumidhar and use of a holding.', 'भूमिधर के वर्ग और जोत का उपयोग।')],
      ['Uttar Pradesh Revenue Code, 2006', 's. 108', L('General order of succession to a male bhumidhar.', 'पुरुष भूमिधर के उत्तराधिकार का सामान्य क्रम।')],
      ['Uttar Pradesh Revenue Code, 2006', 'ss. 116, 144', L('Suit for division of a holding; declaratory suit.', 'जोत के विभाजन का वाद; घोषणात्मक वाद।')],
      ['Uttar Pradesh Revenue Code, 2006', 'ss. 207 to 211', L('First and second appeal, revision and review.', 'प्रथम और द्वितीय अपील, पुनरीक्षण और पुनर्विलोकन।')],
      ['U.P. Imposition of Ceiling on Land Holdings Act, 1960', '—', L('Ceiling on holdings and surplus land.', 'जोत की सीमा और अधिशेष भूमि।')]
    ],
    fora: [L('Revenue Inspector and Tahsildar', 'राजस्व निरीक्षक और तहसीलदार'), L('Sub-Divisional Officer', 'उप-जिलाधिकारी'), L('Commissioner and Board of Revenue', 'आयुक्त और राजस्व परिषद'), L('Allahabad High Court', 'इलाहाबाद उच्च न्यायालय')],
    steps: [
      L('Pull the khatauni and khasra for the plot and read what is recorded.', 'भूखंड का खतौनी और खसरा निकालें और दर्ज विवरण पढ़ें।'),
      L('Identify the proceeding: mutation, correction, division, declaration or ceiling.', 'कार्यवाही की पहचान करें: दाखिल-खारिज, सुधार, विभाजन, घोषणा या सीमा-निर्धारण।'),
      L('File before the revenue court the schedule names; keep the report of succession or transfer on record.', 'अनुसूची में नामित राजस्व न्यायालय में दाखिल करें; उत्तराधिकार या अंतरण की रिपोर्ट अभिलेख पर रखें।'),
      L('Appeal or revision within the stated periods.', 'निर्धारित अवधि में अपील या पुनरीक्षण।'),
      L('Writ before the High Court against a revenue order, where the law allows.', 'जहाँ विधि अनुमति दे, राजस्व आदेश के विरुद्ध उच्च न्यायालय में रिट।')
    ],
    time: L('Appeals from a Tahsildar’s mutation order lie within 30 days; revenue appeals and revision have their own periods.', 'तहसीलदार के दाखिल-खारिज आदेश के विरुद्ध अपील 30 दिन में; राजस्व अपील और पुनरीक्षण की अपनी अवधियाँ हैं।'),
    library: true
  },
  {
    slug: 'property', stream: 'civil',
    name: L('Real Estate and Property', 'अचल संपत्ति'),
    short: L('Title, sale, lease, RERA', 'स्वत्व, विक्रय, पट्टा, रेरा'),
    head: L(
      'Buying, selling, leasing and mortgaging immovable property, and disputes over title and possession. The documents are checked against the Transfer of Property Act, the Registration Act and the stamp law.',
      'अचल संपत्ति का क्रय, विक्रय, पट्टा और बंधक, तथा स्वत्व और कब्ज़े के विवाद। दस्तावेज़ों को संपत्ति अंतरण अधिनियम, रजिस्ट्रीकरण अधिनियम और स्टांप विधि से मिलाकर जाँचा जाता है।'),
    laws: [
      ['Transfer of Property Act, 1882', 'ss. 53A, 54, 58, 105', L('Part performance, sale, mortgage, lease.', 'आंशिक पालन, विक्रय, बंधक, पट्टा।')],
      ['Registration Act, 1908', 'ss. 17, 49', L('Documents that must be registered; effect of non-registration.', 'जिन दस्तावेज़ों का पंजीकरण अनिवार्य है; अपंजीकरण का प्रभाव।')],
      ['Indian Stamp Act, 1899', 'as amended in Uttar Pradesh', L('Stamp duty and its effect on admissibility.', 'स्टांप शुल्क और ग्राह्यता पर उसका प्रभाव।')],
      ['Real Estate (Regulation and Development) Act, 2016', 's. 31', L('Complaints to the Authority by allottees.', 'आबंटितियों द्वारा प्राधिकरण में शिकायतें।')],
      ['Uttar Pradesh Urban Planning and Development Act, 1973', '—', L('Development authorities, layouts and building control.', 'विकास प्राधिकरण, लेआउट और भवन नियंत्रण।')]
    ],
    fora: [L('Sub-Registrar', 'उप-निबंधक'), L('Civil Courts', 'दीवानी न्यायालय'), L('U.P. RERA Authority and Appellate Tribunal', 'उ.प्र. रेरा प्राधिकरण और अपीलीय अधिकरण'), L('Allahabad High Court', 'इलाहाबाद उच्च न्यायालय')],
    steps: [
      L('Trace title through the chain of documents and the revenue or municipal record.', 'दस्तावेज़ों की श्रृंखला तथा राजस्व या नगर अभिलेख से स्वत्व की कड़ी जाँचें।'),
      L('Check encumbrances, registration and stamp.', 'भार, पंजीकरण और स्टांप की जाँच करें।'),
      L('Draft the sale deed, lease or agreement with clear description of the property.', 'संपत्ति के स्पष्ट वर्णन के साथ विक्रय-पत्र, पट्टा या करार का प्रारूप।'),
      L('Register the document and apply for mutation or the local record entry.', 'दस्तावेज़ पंजीकृत कराएँ और दाखिल-खारिज या स्थानीय अभिलेख में प्रविष्टि के लिए आवेदन करें।'),
      L('If a dispute arises, the suit, the RERA complaint or the writ is chosen by the nature of the grievance.', 'विवाद होने पर वाद, रेरा शिकायत या रिट का चयन शिकायत की प्रकृति से होता है।')
    ],
    time: L('A suit for possession on title is governed by a twelve-year period from when possession becomes adverse.', 'स्वत्व पर कब्ज़े का वाद उस समय से बारह वर्ष की अवधि में है जब कब्ज़ा प्रतिकूल हो जाए।')
  },
  {
    slug: 'service', stream: 'service',
    name: L('Service Matters', 'सेवा संबंधी मामले'),
    short: L('Appointment, discipline, promotion, retiral dues', 'नियुक्ति, अनुशासन, पदोन्नति, सेवानिवृत्ति देय'),
    head: L(
      'Disputes between a public servant and the State: appointment, seniority, promotion, disciplinary proceedings and retiral benefits. The service rules and Articles 14, 16 and 311 supply the standards.',
      'लोक सेवक और राज्य के बीच विवाद: नियुक्ति, ज्येष्ठता, पदोन्नति, अनुशासनात्मक कार्यवाही और सेवानिवृत्ति लाभ। सेवा नियम और अनुच्छेद 14, 16 तथा 311 मानक तय करते हैं।'),
    laws: [
      ['Constitution of India, 1950', 'Arts. 14, 16, 309, 311', L('Equality, equal opportunity in public employment, service rules, safeguards on dismissal.', 'समानता, सार्वजनिक नियोजन में समान अवसर, सेवा नियम, बर्खास्तगी पर सुरक्षा उपाय।')],
      ['U.P. Government Servant (Discipline and Appeal) Rules, 1999', '—', L('Charges, inquiry, penalties and departmental appeal.', 'आरोप, जाँच, दंड और विभागीय अपील।')],
      ['Financial Handbook / Fundamental Rules', '—', L('Pay, leave, pension and retiral dues.', 'वेतन, अवकाश, पेंशन और सेवानिवृत्ति देय।')],
      ['Administrative Tribunals Act, 1985', '—', L('Tribunals for central government employees.', 'केंद्र सरकार के कर्मचारियों के लिए अधिकरण।')]
    ],
    fora: [L('Departmental appellate authority', 'विभागीय अपीलीय प्राधिकारी'), L('Tribunal, where one is constituted', 'अधिकरण, जहाँ गठित हो'), L('Allahabad High Court (Art. 226)', 'इलाहाबाद उच्च न्यायालय (अनु. 226)'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('Collect the order, the service rules and the service record.', 'आदेश, सेवा नियम और सेवा-अभिलेख एकत्र करें।'),
      L('Use the departmental appeal or representation where the rules provide one.', 'जहाँ नियम प्रावधान करते हों वहाँ विभागीय अपील या अभ्यावेदन करें।'),
      L('Approach the tribunal or the High Court with the grounds and the relief.', 'आधारों और अनुतोष के साथ अधिकरण या उच्च न्यायालय जाएँ।'),
      L('Interim protection is considered on the facts.', 'तथ्यों के आधार पर अंतरिम संरक्षण पर विचार होता है।'),
      L('Judgment and onward appeal.', 'निर्णय और आगे की अपील।')
    ],
    time: L('Delay in service matters is closely examined; a departmental appeal should not be left unattended.', 'सेवा मामलों में विलंब की बारीकी से जाँच होती है; विभागीय अपील को अनदेखा न छोड़ें।')
  },
  {
    slug: 'tax', stream: 'tax',
    name: L('Tax: Income-tax and GST', 'कर: आयकर और जीएसटी'),
    short: L('Notices, assessments, appeals', 'नोटिस, निर्धारण, अपील'),
    head: L(
      'Assessments, notices, appeals and recovery under the Income-tax Act and the GST law. Since 1 April 2026 the Income-tax Act, 2025 applies to Tax Year 2026-27 onward, and earlier years continue under the 1961 Act.',
      'आयकर अधिनियम और जीएसटी विधि के अंतर्गत निर्धारण, नोटिस, अपील और वसूली। 1 अप्रैल 2026 से आयकर अधिनियम, 2025 कर वर्ष 2026-27 से लागू है, और पूर्व वर्ष 1961 के अधिनियम के अधीन चलते हैं।'),
    laws: [
      ['Income-tax Act, 1961', 'ss. 143, 147, 148, 246A, 249, 253, 260A', L('Assessment, reassessment, appeals to the CIT(A), Tribunal and High Court (for earlier years).', 'निर्धारण, पुनर्निर्धारण, आयुक्त (अपील), अधिकरण और उच्च न्यायालय में अपीलें (पूर्व वर्षों के लिए)।')],
      ['Income-tax Act, 2025', 'in force from 1 April 2026', L('536 sections; applies to Tax Year 2026-27 onward. See the Notice Decoder for verified section mapping.', '536 धाराएँ; कर वर्ष 2026-27 से लागू। सत्यापित धारा-मानचित्रण के लिए नोटिस डिकोडर देखें।')],
      ['Central Goods and Services Tax Act, 2017', 'ss. 73, 74, 74A, 107, 112, 117', L('Show-cause and adjudication, appeal, Appellate Tribunal and High Court.', 'कारण बताओ और न्यायनिर्णयन, अपील, अपीलीय अधिकरण और उच्च न्यायालय।')],
      ['Uttar Pradesh Goods and Services Tax Act, 2017', '—', L('State levy administered alongside the Central Act.', 'केंद्रीय अधिनियम के साथ प्रशासित राज्य कर।')]
    ],
    fora: [L('Assessing Officer / Proper Officer', 'निर्धारण अधिकारी / उचित अधिकारी'), L('CIT (Appeals) / GST Appellate Authority', 'आयुक्त (अपील) / जीएसटी अपीलीय प्राधिकारी'), L('Income Tax Appellate Tribunal / GST Appellate Tribunal', 'आयकर अपीलीय अधिकरण / जीएसटी अपीलीय अधिकरण'), L('High Court and Supreme Court', 'उच्च न्यायालय और सर्वोच्च न्यायालय')],
    steps: [
      L('Identify the year and therefore the Act that applies.', 'वर्ष और इसलिए लागू अधिनियम की पहचान करें।'),
      L('Read what the notice asks, the section it cites and the date by which it asks for a reply.', 'नोटिस क्या माँगता है, कौन सी धारा उद्धृत है और उत्तर की तिथि क्या है, यह पढ़ें।'),
      L('Assemble records and file the reply on the portal.', 'अभिलेख जुटाएँ और पोर्टल पर उत्तर दाखिल करें।'),
      L('First appeal within the period the Act gives.', 'अधिनियम द्वारा दी गई अवधि में प्रथम अपील।'),
      L('Tribunal, then High Court on a substantial question of law.', 'अधिकरण, फिर विधि के सारभूत प्रश्न पर उच्च न्यायालय।')
    ],
    time: L('First appeal against an income-tax order: 30 days under the 1961 Act. First appeal under GST: three months.', 'आयकर आदेश के विरुद्ध प्रथम अपील: 1961 अधिनियम में 30 दिन। जीएसटी में प्रथम अपील: तीन माह।'),
    decoder: true
  },
  {
    slug: 'cyber', stream: 'cyber',
    name: L('Cyber and IT Law', 'साइबर और आईटी विधि'),
    short: L('IT Act, data protection', 'आईटी अधिनियम, डेटा संरक्षण'),
    head: L(
      'Offences and civil claims arising from computers, accounts and data: unauthorised access, identity misuse, cheating online, obscene material and takedown, and obligations under the data protection law.',
      'कंप्यूटर, खातों और डेटा से उत्पन्न अपराध और दीवानी दावे: अनधिकृत पहुँच, पहचान का दुरुपयोग, ऑनलाइन छल, अश्लील सामग्री और हटाने के आदेश, तथा डेटा संरक्षण विधि के दायित्व।'),
    laws: [
      ['Information Technology Act, 2000', 'ss. 43, 66, 66C, 66D, 67', L('Damage to computers, hacking, identity theft, cheating by personation, obscene material.', 'कंप्यूटर को क्षति, हैकिंग, पहचान की चोरी, प्रतिरूपण द्वारा छल, अश्लील सामग्री।')],
      ['Information Technology Act, 2000', 'ss. 46, 57', L('Adjudicating Officer for compensation; appeal to the Appellate Tribunal.', 'क्षतिपूर्ति के लिए न्यायनिर्णायक अधिकारी; अपीलीय अधिकरण में अपील।')],
      ['Digital Personal Data Protection Act, 2023', 'Rules of 2025', L('Notice, consent and grievance duties for data fiduciaries, phased in from 2026-27.', 'डेटा न्यासियों के लिए सूचना, सहमति और शिकायत दायित्व, 2026-27 से चरणबद्ध।')],
      ['Bharatiya Nyaya Sanhita, 2023', '—', L('Cheating, forgery and related offences apply alongside the IT Act.', 'छल, कूटरचना और संबद्ध अपराध आईटी अधिनियम के साथ लागू होते हैं।')]
    ],
    fora: [L('Police and Magistrate', 'पुलिस और मजिस्ट्रेट'), L('Adjudicating Officer under the IT Act', 'आईटी अधिनियम के अधीन न्यायनिर्णायक अधिकारी'), L('Appellate Tribunal', 'अपीलीय अधिकरण'), L('High Court', 'उच्च न्यायालय')],
    steps: [
      L('Preserve the evidence: screenshots with dates, URLs, transaction references and messages.', 'साक्ष्य सुरक्षित रखें: तिथि सहित स्क्रीनशॉट, यूआरएल, लेन-देन संदर्भ और संदेश।'),
      L('Report through the national cyber crime portal or the police, as the situation requires.', 'स्थिति के अनुसार राष्ट्रीय साइबर अपराध पोर्टल या पुलिस के माध्यम से रिपोर्ट करें।'),
      L('Pick the track: criminal complaint, civil claim for compensation, or takedown request.', 'मार्ग चुनें: आपराधिक परिवाद, क्षतिपूर्ति का दीवानी दावा, या हटाने का अनुरोध।'),
      L('Electronic evidence is admitted on the certificate the evidence law requires.', 'इलेक्ट्रॉनिक साक्ष्य साक्ष्य-विधि द्वारा अपेक्षित प्रमाणपत्र पर स्वीकार होता है।')
    ],
    time: L('Prompt reporting helps preservation of records held by platforms and banks.', 'शीघ्र रिपोर्ट से मंचों और बैंकों के पास रखे अभिलेखों का संरक्षण संभव होता है।')
  },
  {
    slug: 'family', stream: 'family',
    name: L('Family Law', 'पारिवारिक विधि'),
    short: L('Marriage, maintenance, custody, succession', 'विवाह, भरण-पोषण, अभिरक्षा, उत्तराधिकार'),
    head: L(
      'Marriage and its end, maintenance, guardianship and custody, domestic violence remedies and succession, handled with attention to the personal law that applies to the parties.',
      'विवाह और उसकी समाप्ति, भरण-पोषण, संरक्षकता और अभिरक्षा, घरेलू हिंसा के उपचार और उत्तराधिकार, पक्षकारों पर लागू व्यक्तिगत विधि का ध्यान रखते हुए।'),
    laws: [
      ['Hindu Marriage Act, 1955', '—', L('Marriage, restitution, judicial separation, divorce.', 'विवाह, दाम्पत्य अधिकारों की पुनर्स्थापना, न्यायिक पृथक्करण, विवाह-विच्छेद।')],
      ['Special Marriage Act, 1954', '—', L('Civil marriage across faiths.', 'विभिन्न धर्मों के बीच सिविल विवाह।')],
      ['Hindu Succession Act, 1956', 'as amended in 2005', L('Succession to property, including daughters’ coparcenary rights.', 'संपत्ति में उत्तराधिकार, पुत्रियों के सहदायिक अधिकार सहित।')],
      ['Guardians and Wards Act, 1890', '—', L('Guardianship and custody of minors.', 'अवयस्कों की संरक्षकता और अभिरक्षा।')],
      ['Protection of Women from Domestic Violence Act, 2005', '—', L('Protection orders and residence.', 'संरक्षण आदेश और निवास।')],
      ['Bharatiya Nagarik Suraksha Sanhita, 2023', 's. 144', L('Maintenance of wives, children and parents.', 'पत्नी, संतान और माता-पिता का भरण-पोषण।')]
    ],
    fora: [L('Family Court', 'कुटुंब न्यायालय'), L('Magistrate (domestic violence and maintenance)', 'मजिस्ट्रेट (घरेलू हिंसा और भरण-पोषण)'), L('Allahabad High Court', 'इलाहाबाद उच्च न्यायालय'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('Identify the personal law and the relief sought.', 'लागू व्यक्तिगत विधि और माँगे गए अनुतोष की पहचान करें।'),
      L('Consider mediation and counselling, which family courts encourage.', 'मध्यस्थता और परामर्श पर विचार करें, जिसे कुटुंब न्यायालय प्रोत्साहित करते हैं।'),
      L('File the petition with the documents for the relief.', 'अनुतोष के दस्तावेज़ों सहित याचिका दाखिल करें।'),
      L('Interim orders on maintenance and custody where needed.', 'आवश्यकता होने पर भरण-पोषण और अभिरक्षा पर अंतरिम आदेश।'),
      L('Decree, and appeal if required.', 'डिक्री, और आवश्यक हो तो अपील।')
    ],
    time: L('Appeals from Family Court orders are time-bound; check the order date at once.', 'कुटुंब न्यायालय के आदेशों के विरुद्ध अपील समय-बद्ध है; आदेश की तिथि तुरंत देखें।')
  },
  {
    slug: 'banking', stream: 'banking',
    name: L('Banking and Recovery', 'बैंकिंग और वसूली'),
    short: L('SARFAESI, DRT, IBC, cheque cases', 'सरफ़ाएसी, डीआरटी, आईबीसी, चेक मामले'),
    head: L(
      'Disputes between lenders and borrowers: enforcement of security, recovery tribunals, insolvency applications and dishonoured cheques.',
      'ऋणदाताओं और उधारकर्ताओं के बीच विवाद: प्रतिभूति का प्रवर्तन, वसूली अधिकरण, दिवाला आवेदन और अनादृत चेक।'),
    laws: [
      ['SARFAESI Act, 2002', 'ss. 13, 17', L('Enforcement of security interest; application before the DRT.', 'प्रतिभूति हित का प्रवर्तन; डीआरटी में आवेदन।')],
      ['Recovery of Debts and Bankruptcy Act, 1993', '—', L('Debt Recovery Tribunals and Appellate Tribunals.', 'ऋण वसूली अधिकरण और अपीलीय अधिकरण।')],
      ['Insolvency and Bankruptcy Code, 2016', 'ss. 7, 9, 61', L('Initiation of insolvency and appeals to the NCLAT.', 'दिवाला की शुरुआत और एनसीएलएटी में अपीलें।')],
      ['Negotiable Instruments Act, 1881', 's. 138', L('Dishonour of cheques.', 'चेक का अनादर।')]
    ],
    fora: [L('Debt Recovery Tribunal', 'ऋण वसूली अधिकरण'), L('Debt Recovery Appellate Tribunal', 'ऋण वसूली अपीलीय अधिकरण'), L('NCLT and NCLAT (insolvency)', 'एनसीएलटी और एनसीएलएटी (दिवाला)'), L('High Court and Supreme Court', 'उच्च न्यायालय और सर्वोच्च न्यायालय')],
    steps: [
      L('Read the loan documents, the security and the notice served.', 'ऋण दस्तावेज़, प्रतिभूति और तामील किया गया नोटिस पढ़ें।'),
      L('Reply within the time the notice allows.', 'नोटिस द्वारा दिए गए समय में उत्तर दें।'),
      L('Apply to the DRT, or defend the recovery or insolvency application.', 'डीआरटी में आवेदन करें, या वसूली या दिवाला आवेदन का प्रतिवाद करें।'),
      L('Appeal to the appellate tribunal; pre-deposit rules apply.', 'अपीलीय अधिकरण में अपील; पूर्व-जमा के नियम लागू होते हैं।')
    ],
    time: L('Statutory periods here are short. Check the date of the notice or order first.', 'यहाँ वैधानिक अवधियाँ कम हैं। पहले नोटिस या आदेश की तिथि देखें।')
  },
  {
    slug: 'arbitration', stream: 'arbitration',
    name: L('Arbitration and Mediation', 'मध्यस्थता और सुलह'),
    short: L('Awards, interim relief, enforcement', 'पंचाट, अंतरिम राहत, प्रवर्तन'),
    head: L(
      'Commercial disputes resolved outside the ordinary court: appointment of arbitrators, interim relief, challenge to awards and enforcement.',
      'सामान्य न्यायालय के बाहर सुलझाए गए वाणिज्यिक विवाद: मध्यस्थों की नियुक्ति, अंतरिम राहत, पंचाट को चुनौती और प्रवर्तन।'),
    laws: [
      ['Arbitration and Conciliation Act, 1996', 'ss. 9, 11, 34, 36, 37', L('Interim measures, appointment, setting aside, enforcement, appeals.', 'अंतरिम उपाय, नियुक्ति, अपास्त करना, प्रवर्तन, अपीलें।')],
      ['Commercial Courts Act, 2015', '—', L('Commercial disputes of specified value.', 'निर्दिष्ट मूल्य के वाणिज्यिक विवाद।')],
      ['Mediation Act, 2023', '—', L('Mediation framework and settlement agreements.', 'मध्यस्थता की रूपरेखा और समझौता-करार।')]
    ],
    fora: [L('Arbitral tribunal', 'मध्यस्थ अधिकरण'), L('Court under the Act (commercial or district court)', 'अधिनियम के अधीन न्यायालय (वाणिज्यिक या जिला न्यायालय)'), L('High Court', 'उच्च न्यायालय'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('Read the arbitration clause: seat, number of arbitrators, rules.', 'मध्यस्थता खंड पढ़ें: स्थान, मध्यस्थों की संख्या, नियम।'),
      L('Notice invoking arbitration; appointment, by agreement or by the court.', 'मध्यस्थता आह्वान का नोटिस; सहमति से या न्यायालय द्वारा नियुक्ति।'),
      L('Pleadings, evidence and hearing before the tribunal.', 'अधिकरण के समक्ष अभिवचन, साक्ष्य और सुनवाई।'),
      L('Award; challenge under section 34 within the period the Act gives.', 'पंचाट; अधिनियम में दी गई अवधि में धारा 34 के अधीन चुनौती।')
    ],
    time: L('A challenge to an award is limited to three months, extendable by thirty days at most.', 'पंचाट की चुनौती तीन माह तक सीमित है, अधिकतम तीस दिन बढ़ाई जा सकती है।')
  },
  {
    slug: 'consumer', stream: 'consumer',
    name: L('Consumer Disputes', 'उपभोक्ता विवाद'),
    short: L('District, State and National Commissions', 'जिला, राज्य और राष्ट्रीय आयोग'),
    head: L(
      'Complaints about defective goods and deficient services, and unfair trade practices, brought before the Consumer Commissions on the basis of the value of the consideration paid.',
      'दोषपूर्ण वस्तुओं और त्रुटिपूर्ण सेवाओं तथा अनुचित व्यापार प्रथाओं की शिकायतें, जो चुकाए गए प्रतिफल के मूल्य के आधार पर उपभोक्ता आयोगों में लाई जाती हैं।'),
    laws: [
      ['Consumer Protection Act, 2019', 'ss. 34, 47, 58', L('Pecuniary jurisdiction of District, State and National Commissions.', 'जिला, राज्य और राष्ट्रीय आयोगों का आर्थिक क्षेत्राधिकार।')],
      ['Consumer Protection Act, 2019', 's. 35', L('How a complaint is filed.', 'परिवाद कैसे दाखिल होता है।')],
      ['Consumer Protection Act, 2019', 'ss. 41, 51, 67', L('Appeals to the State Commission, National Commission and Supreme Court.', 'राज्य आयोग, राष्ट्रीय आयोग और सर्वोच्च न्यायालय में अपीलें।')]
    ],
    fora: [L('District Commission', 'जिला आयोग'), L('State Commission', 'राज्य आयोग'), L('National Commission', 'राष्ट्रीय आयोग'), L('Supreme Court of India', 'भारत का सर्वोच्च न्यायालय')],
    steps: [
      L('Gather the bill, warranty, communications and proof of payment.', 'बिल, वारंटी, पत्राचार और भुगतान का प्रमाण जुटाएँ।'),
      L('Send a written notice to the seller or service provider.', 'विक्रेता या सेवा प्रदाता को लिखित नोटिस भेजें।'),
      L('File the complaint in the Commission with jurisdiction.', 'क्षेत्राधिकार वाले आयोग में परिवाद दाखिल करें।'),
      L('Reply by the opposite party, evidence by affidavit, final hearing.', 'विपक्षी का उत्तर, शपथपत्र पर साक्ष्य, अंतिम सुनवाई।')
    ],
    time: L('A complaint is filed within two years from the date the cause of action arises, subject to the Act.', 'परिवाद वाद-कारण उत्पन्न होने की तिथि से दो वर्ष के भीतर दाखिल होता है, अधिनियम के अधीन।')
  }
];
const PBY = Object.fromEntries(PRACTICE.map(p => [p.slug, p]));
