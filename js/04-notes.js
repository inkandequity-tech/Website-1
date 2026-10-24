/* Data: Ink & Equity Notes. Each carries sources and a review status. Bylines are left for the partners to assign. */
const NOTES = [
  {
    slug: 'mutation-is-not-title', date: '2026-10-24', area: 'land-revenue',
    title: L('Mutation is not title', 'दाखिल-खारिज स्वत्व नहीं है'),
    dek: L('What a khatauni entry proves, what it does not, and where title is actually decided.', 'खतौनी की प्रविष्टि क्या सिद्ध करती है, क्या नहीं, और स्वत्व वास्तव में कहाँ तय होता है।'),
    body: [
      L('In Uttar Pradesh, a name entered in the khatauni after mutation is often treated as proof of ownership. The courts do not treat it that way. Mutation is a record kept for fiscal purposes: it shows who is to pay the land revenue and who is in possession according to the record. It does not decide who owns the land.',
        'उत्तर प्रदेश में दाखिल-खारिज के बाद खतौनी में दर्ज नाम को अक्सर स्वामित्व का प्रमाण मान लिया जाता है। न्यायालय ऐसा नहीं मानते। दाखिल-खारिज राजकोषीय प्रयोजन का अभिलेख है: यह बताता है कि भू-राजस्व कौन देगा और अभिलेख के अनुसार कब्ज़ा किसका है। यह तय नहीं करता कि भूमि का स्वामी कौन है।'),
      L('The Supreme Court has said this repeatedly. In Sawarni v. Inder Kaur it held that mutation proceedings are summary and neither create nor extinguish title. Balwant Singh v. Daulat Singh repeated that an entry in the revenue record carries no presumption of title. Suraj Bhan v. Financial Commissioner applied the same view and added that such an entry does not confer title on the person named.',
        'सर्वोच्च न्यायालय ने यह बात बार-बार कही है। सावर्णी बनाम इंदर कौर में कहा गया कि दाखिल-खारिज की कार्यवाही संक्षिप्त है और स्वत्व न बनाती है, न समाप्त करती है। बलवंत सिंह बनाम दौलत सिंह में दोहराया गया कि राजस्व अभिलेख की प्रविष्टि से स्वत्व की कोई उपधारणा नहीं बनती। सूरज भान बनाम वित्तीय आयुक्त में यही दृष्टिकोण अपनाया गया और जोड़ा गया कि ऐसी प्रविष्टि नामित व्यक्ति को स्वत्व प्रदान नहीं करती।'),
      L('Under the Uttar Pradesh Revenue Code, 2006 the sequence is statutory. A person who takes possession by succession reports it to the Revenue Inspector under section 33. A person who takes possession by transfer reports it to the Tahsildar under section 34. The Tahsildar acts under section 35 after a proclamation and inquiry, and an appeal lies to the Sub-Divisional Officer within 30 days. Section 37 bars a suit or proceeding in a revenue court until the report is made.',
        'उत्तर प्रदेश राजस्व संहिता, 2006 में क्रम वैधानिक है। उत्तराधिकार से कब्ज़ा पाने वाला धारा 33 के अधीन राजस्व निरीक्षक को रिपोर्ट करता है। अंतरण से कब्ज़ा पाने वाला धारा 34 के अधीन तहसीलदार को रिपोर्ट करता है। तहसीलदार उद्घोषणा और जाँच के बाद धारा 35 के अधीन कार्रवाई करता है, और उप-जिलाधिकारी को 30 दिन में अपील होती है। रिपोर्ट किए जाने तक धारा 37 राजस्व न्यायालय में वाद या कार्यवाही को वर्जित करती है।'),
      L('The practical point is that a mutation order does not settle a title dispute, and the absence of one does not end a title. A party whose rights rest on a sale deed, a will or a decree should keep those documents in order. Where title is genuinely in dispute, the remedy that decides it is needed, such as a declaratory suit: under section 144 a person claiming to be a bhumidhar or asami may sue for a declaration of rights in the holding. Mutation still matters, because a person who is not in the record meets practical obstacles in dealing with the land.',
        'व्यावहारिक बात यह है कि दाखिल-खारिज का आदेश स्वत्व विवाद का निपटारा नहीं करता, और उसका अभाव स्वत्व समाप्त नहीं करता। जिसके अधिकार विक्रय-पत्र, वसीयत या डिक्री पर टिके हों, वह उन दस्तावेज़ों को व्यवस्थित रखे। जहाँ स्वत्व वास्तव में विवादित हो, वहाँ उसे तय करने वाला उपचार चाहिए, जैसे घोषणात्मक वाद: धारा 144 के अधीन भूमिधर या आसामी होने का दावा करने वाला जोत में अधिकारों की घोषणा के लिए वाद कर सकता है। दाखिल-खारिज फिर भी महत्त्वपूर्ण है, क्योंकि अभिलेख में नाम न होने पर भूमि के लेन-देन में व्यावहारिक बाधाएँ आती हैं।')
    ],
    src: [
      ['Sawarni v. Inder Kaur, (1996) 6 SCC 223', null],
      ['Balwant Singh v. Daulat Singh, (1997) 7 SCC 137', null],
      ['Suraj Bhan v. Financial Commissioner, (2007) 6 SCC 186', null],
      ['Uttar Pradesh Revenue Code, 2006, ss. 33, 34, 35, 37, 144', 'http://uprevenuecode.com/home/section_details/53']
    ]
  },
  {
    slug: 'writ-and-alternative-remedy', date: '2026-10-24', area: 'constitutional',
    title: L('The writ and the alternative remedy', 'रिट और वैकल्पिक उपचार'),
    dek: L('Why a High Court may refuse to hear a writ when an appeal exists, and the exceptions.', 'अपील उपलब्ध होने पर उच्च न्यायालय रिट सुनने से क्यों मना कर सकता है, और अपवाद क्या हैं।'),
    body: [
      L('A High Court has power under Article 226 to issue writs. It also follows a rule of its own making: it will ordinarily not entertain a writ petition where an effective alternative remedy exists. The rule is one of discretion. It is not a bar on the power.',
        'उच्च न्यायालय को अनुच्छेद 226 के अधीन रिट जारी करने की शक्ति है। वह स्वयं बनाए एक नियम का भी पालन करता है: जहाँ प्रभावी वैकल्पिक उपचार हो, वहाँ वह सामान्यतः रिट याचिका स्वीकार नहीं करता। यह नियम विवेक का है। यह शक्ति पर रोक नहीं है।'),
      L('In Whirlpool Corporation v. Registrar of Trade Marks the Supreme Court listed the situations in which a writ may be entertained despite an alternative remedy: enforcement of a fundamental right, violation of the principles of natural justice, an order or proceeding wholly without jurisdiction, and a challenge to the vires of an Act. Harbanslal Sahnia v. Indian Oil Corporation Ltd followed it and described the rule as one of self-imposed restraint.',
        'व्हर्लपूल कॉरपोरेशन बनाम रजिस्ट्रार ऑफ ट्रेड मार्क्स में सर्वोच्च न्यायालय ने वे स्थितियाँ गिनाईं जिनमें वैकल्पिक उपचार होने पर भी रिट स्वीकार हो सकती है: मौलिक अधिकार का प्रवर्तन, नैसर्गिक न्याय के सिद्धांतों का उल्लंघन, पूरी तरह क्षेत्राधिकार-रहित आदेश या कार्यवाही, और किसी अधिनियम की वैधता को चुनौती। हरबंसलाल साहनिया बनाम इंडियन ऑयल कॉरपोरेशन ने इसका अनुसरण किया और इसे स्व-आरोपित संयम का नियम बताया।'),
      L('In tax matters the Court has been firm. In Commissioner of Income Tax v. Chhabil Dass Agarwal it held that where a statute provides a complete machinery of appeal, the High Court should not ordinarily bypass it, and that the petitioner must show an exceptional circumstance.',
        'कर मामलों में न्यायालय दृढ़ रहा है। आयकर आयुक्त बनाम छबिल दास अग्रवाल में कहा गया कि जहाँ कानून अपील की पूर्ण व्यवस्था देता है, वहाँ उच्च न्यायालय को सामान्यतः उसे लाँघना नहीं चाहिए, और याचिकाकर्ता को असाधारण परिस्थिति दिखानी होगी।'),
      L('For a litigant the lesson is to read the order first for the remedy it points to. If a statutory appeal exists, use it within time. If a writ is still the right course, the petition should say why in the grounds, by reference to one of the recognised exceptions.',
        'वादकारी के लिए सीख यह है कि पहले आदेश में यह देखें कि वह किस उपचार की ओर इंगित करता है। यदि वैधानिक अपील है तो समय के भीतर उसका प्रयोग करें। यदि रिट फिर भी सही मार्ग है, तो याचिका के आधारों में मान्य अपवादों में से किसी का हवाला देकर कारण बताना चाहिए।')
    ],
    src: [
      ['Whirlpool Corporation v. Registrar of Trade Marks, (1998) 8 SCC 1', null],
      ['Harbanslal Sahnia v. Indian Oil Corporation Ltd, (2003) 2 SCC 107', null],
      ['Commissioner of Income Tax v. Chhabil Dass Agarwal, (2014) 1 SCC 603', null],
      ['Constitution of India, Art. 226', null]
    ]
  },
  {
    slug: 'counting-limitation', date: '2026-10-24', area: 'civil',
    title: L('Counting limitation without surprises', 'परिसीमा बिना चूक के गिनना'),
    dek: L('Five provisions that change the count, and one case where extension is not available.', 'पाँच प्रावधान जो गणना बदलते हैं, और एक मामला जिसमें विस्तार उपलब्ध नहीं।'),
    body: [
      L('Limitation is counted from the day the right to sue or appeal accrues, and the period is fixed by the Schedule to the Limitation Act, 1963. Article 113 supplies three years for any suit for which no period is provided elsewhere.',
        'परिसीमा उस दिन से गिनी जाती है जब वाद या अपील का अधिकार उत्पन्न होता है, और अवधि परिसीमा अधिनियम, 1963 की अनुसूची से तय होती है। अनुच्छेद 113 उन सभी वादों के लिए तीन वर्ष देता है जिनके लिए अन्यत्र अवधि न दी गई हो।'),
      L('Five provisions change the count in practice. Section 12 excludes the day of the order appealed from and the time needed to obtain a copy. Section 14 excludes time spent in good faith in a court that had no jurisdiction. Sections 18 and 19 start a fresh period when liability is acknowledged in writing or a part payment is made before the period expires. Section 5 allows delay in an appeal or application to be condoned for sufficient cause, but it does not apply to suits.',
        'व्यवहार में पाँच प्रावधान गणना बदलते हैं। धारा 12 जिस आदेश की अपील है उसका दिन और प्रति पाने में लगा समय अपवर्जित करती है। धारा 14 अधिकारहीन न्यायालय में सद्भाव से लगा समय अपवर्जित करती है। धारा 18 और 19 अवधि समाप्त होने से पहले दायित्व की लिखित स्वीकृति या आंशिक भुगतान होने पर नई अवधि आरंभ करती हैं। धारा 5 अपील या आवेदन में विलंब को पर्याप्त कारण पर क्षमा करने देती है, पर वादों पर लागू नहीं होती।'),
      L('Some statutes carry their own limit and exclude section 5. In Union of India v. Popular Construction Co. the Supreme Court held that section 5 does not apply to an application to set aside an arbitral award, because section 34(3) of the Arbitration and Conciliation Act, 1996 fixes three months and allows only a further thirty days.',
        'कुछ कानूनों की अपनी सीमा होती है और वे धारा 5 को बाहर रखते हैं। यूनियन ऑफ इंडिया बनाम पॉपुलर कंस्ट्रक्शन कंपनी में सर्वोच्च न्यायालय ने कहा कि पंचाट को अपास्त करने के आवेदन पर धारा 5 लागू नहीं होती, क्योंकि मध्यस्थता और सुलह अधिनियम, 1996 की धारा 34(3) तीन माह देती है और केवल तीस दिन और।'),
      L('A reliable habit is to write the dates down at the first meeting: the date of the order, the date the copy was applied for, the date it was received and the date the period ends. The limitation reference on this site lists the common periods, each with its provision.',
        'एक भरोसेमंद आदत है पहली बैठक में ही तिथियाँ लिख लेना: आदेश की तिथि, प्रति के लिए आवेदन की तिथि, प्रति मिलने की तिथि और अवधि समाप्त होने की तिथि। इस साइट का परिसीमा संदर्भ सामान्य अवधियों को उनके प्रावधान सहित देता है।')
    ],
    src: [
      ['Limitation Act, 1963, ss. 3, 5, 12, 14, 18, 19 and Art. 113', null],
      ['Union of India v. Popular Construction Co., (2001) 8 SCC 470', null],
      ['Arbitration and Conciliation Act, 1996, s. 34(3)', null]
    ]
  },
  {
    slug: 'bail-under-bnss', date: '2026-10-24', area: 'criminal',
    title: L('Bail under the BNSS: where to look', 'बीएनएसएस में जमानत: कहाँ देखें'),
    dek: L('The sections that moved, two Supreme Court decisions on arrest and anticipatory bail, and a drafting habit.', 'जो धाराएँ बदलीं, गिरफ़्तारी और अग्रिम जमानत पर सर्वोच्च न्यायालय के दो निर्णय, और प्रारूपण की एक आदत।'),
    body: [
      L('The Bharatiya Nagarik Suraksha Sanhita, 2023 replaced the Code of Criminal Procedure from 1 July 2024. The bail provisions kept their structure but were renumbered.',
        'भारतीय नागरिक सुरक्षा संहिता, 2023 ने 1 जुलाई 2024 से दंड प्रक्रिया संहिता का स्थान लिया। जमानत के प्रावधानों की संरचना वही रही, पर उनके क्रमांक बदल गए।'),
      L('Section 480 deals with bail in non-bailable offences. Section 482 deals with anticipatory bail, a direction to release a person on bail if arrested. Section 483 gives special powers on bail to the High Court and the Court of Session. Section 479 limits the detention of undertrial prisoners: a person who has served a stated fraction of the maximum sentence may be released on bail, with a lower fraction for a first offender. The fractions and the exceptions are in the section itself.',
        'धारा 480 अजमानतीय अपराधों में जमानत से संबंधित है। धारा 482 अग्रिम जमानत से संबंधित है, यानी गिरफ़्तारी की स्थिति में जमानत पर छोड़ने का निर्देश। धारा 483 उच्च न्यायालय और सत्र न्यायालय को जमानत की विशेष शक्तियाँ देती है। धारा 479 विचाराधीन बंदियों की निरुद्धि सीमित करती है: अधिकतम दंड का निर्धारित अंश भोग चुका व्यक्ति जमानत पर छोड़ा जा सकता है, प्रथम अपराधी के लिए छोटा अंश। अंश और अपवाद धारा में ही हैं।'),
      L('On arrest, section 35 requires the police, in the cases it lists, to issue a notice of appearance rather than arrest. In Arnesh Kumar v. State of Bihar the Supreme Court held that arrest should not be automatic in offences punishable up to seven years, and that the police must record their reasons.',
        'गिरफ़्तारी के समय धारा 35 उन मामलों में, जो उसमें गिनाए गए हैं, पुलिस से गिरफ़्तारी के बजाय उपस्थिति का नोटिस जारी करने की अपेक्षा करती है। अरनेश कुमार बनाम बिहार राज्य में सर्वोच्च न्यायालय ने कहा कि सात वर्ष तक के दंडनीय अपराधों में गिरफ़्तारी स्वतः नहीं होनी चाहिए, और पुलिस को कारण दर्ज करने होंगे।'),
      L('In Sushila Aggarwal v. State (NCT of Delhi) the Court held that anticipatory bail need not, as a rule, be limited in time, though a court may impose conditions in a given case.',
        'सुशीला अग्रवाल बनाम राज्य (दिल्ली) में न्यायालय ने कहा कि अग्रिम जमानत सामान्यतः समय-सीमित होना आवश्यक नहीं, यद्यपि किसी मामले में न्यायालय शर्तें लगा सकता है।'),
      L('In any new application, cite the section numbers of the Sanhita. Mention the Code equivalent only where an older judgment is relied on.',
        'किसी भी नए आवेदन में संहिता की धारा संख्याएँ उद्धृत करें। पुरानी संहिता का समतुल्य केवल तभी बताएँ जब किसी पुराने निर्णय पर भरोसा हो।')
    ],
    src: [
      ['Bharatiya Nagarik Suraksha Sanhita, 2023, ss. 35, 479, 480, 482, 483', null],
      ['Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273', null],
      ['Sushila Aggarwal v. State (NCT of Delhi), (2020) 5 SCC 1', null]
    ]
  },
  {
    slug: 'which-income-tax-act', date: '2026-10-24', area: 'tax',
    title: L('Which Income-tax Act does my notice come under?', 'मेरा नोटिस किस आयकर अधिनियम के अधीन है?'),
    dek: L('The year decides the Act, and the Act decides the section numbers.', 'वर्ष तय करता है कि कौन सा अधिनियम, और अधिनियम तय करता है कि कौन सी धारा।'),
    body: [
      L('The Income-tax Act, 2025 came into force on 1 April 2026. It has 536 sections against the 819 of the 1961 Act, and it applies from Tax Year 2026-27 onward. Earlier years, including financial year 2025-26, continue under the 1961 Act.',
        'आयकर अधिनियम, 2025 1 अप्रैल 2026 से लागू हुआ। इसमें 536 धाराएँ हैं, जबकि 1961 के अधिनियम में 819 थीं, और यह कर वर्ष 2026-27 से लागू है। पूर्व वर्ष, वित्त वर्ष 2025-26 सहित, 1961 के अधिनियम के अधीन चलते हैं।'),
      L('A notice received now can therefore cite either Act, and the section numbers differ. The return of income, section 139 of the old Act, is section 263 of the new one. The new tax regime, section 115BAC, is section 202. One source reports reassessment, sections 147 to 151A, as section 279 and marks it for verification. For other sections published tables disagree, so check the enacted text and the concordance notified by the Central Board of Direct Taxes.',
        'इसलिए अब मिलने वाला नोटिस किसी भी अधिनियम का हवाला दे सकता है, और धारा संख्याएँ अलग हैं। आय का विवरणी, पुराने अधिनियम की धारा 139, नए में धारा 263 है। नई कर व्यवस्था, धारा 115BAC, धारा 202 है। एक स्रोत पुनर्निर्धारण, धाराएँ 147 से 151A, को धारा 279 बताता है और उसे सत्यापन के लिए चिह्नित करता है। अन्य धाराओं पर प्रकाशित तालिकाएँ भिन्न हैं, इसलिए अधिनियमित पाठ और केंद्रीय प्रत्यक्ष कर बोर्ड द्वारा अधिसूचित समतुल्यता तालिका देखें।'),
      L('Check the notice first. The Income Tax Department offers an Authenticate Notice/Order check that needs no login. Communications issued since 1 October 2019 carry a Document Identification Number.',
        'पहले नोटिस की जाँच करें। आयकर विभाग बिना लॉगिन के ‘नोटिस/आदेश प्रमाणित करें’ सुविधा देता है। 1 अक्टूबर 2019 के बाद जारी संचार में दस्तावेज़ पहचान संख्या होती है।'),
      L('Then note the year, the Act, the section cited and the date by which a reply is asked. The Notice Decoder, a companion site, follows these steps.',
        'फिर वर्ष, अधिनियम, उद्धृत धारा और उत्तर की माँगी गई तिथि लिख लें। सहयोगी साइट नोटिस डिकोडर इन्हीं चरणों का अनुसरण करती है।')
    ],
    src: [
      ['TaxGuru: Income-tax Act 2025 vs 1961 section mapping', 'https://taxguru.in/income-tax/income-tax-act-2025-1961-section-mapping-cheat-sheet-sections-day.html'],
      ['Income Tax Department: Authenticate Notice/Order FAQ', 'https://www.incometax.gov.in/iec/foportal/help/authenticate-notice-faq']
    ]
  }
];
