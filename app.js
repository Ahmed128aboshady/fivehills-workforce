/* ==========================================================================
   FIVE HILLS WORKFORCE & TECHNICAL SOLUTIONS - APPLICATION CORE
   Dubai UAE Global Mega-Hub | 3D Flight & Maritime Convergence Engine
   ========================================================================== */

// --- JOBS DATA ---
const VACANCIES_DATA = [
    {
        id: 'job-1',
        titleEn: 'Electrical Linemen (High Voltage)',
        titleAr: 'فنيين وكهربائيين خطوط هوائية (جهد عالي)',
        category: 'technical',
        countryEn: 'Saudi Arabia & UAE',
        countryAr: 'المملكة العربية السعودية والإمارات',
        flag: '🇸🇦 🇦🇪',
        expEn: 'Min 5 Years Experience',
        expAr: 'خبرة لا تقل عن 5 سنوات',
        reqEn: '12th pass or Technical ITI/Diploma Certificate required',
        reqAr: 'مؤهل متوسط أو دبلوم فني / شهادة مهنية معتمدة',
        salaryEn: 'Competitive Package + Overtime',
        salaryAr: 'راتب مجزي + ساعات إضافية',
        perksEn: 'Free Visa, Accommodation, Transport, Medical',
        perksAr: 'تأشيرة مجانية، سكن، مواصلات، تأمين طبي'
    },
    {
        id: 'job-2',
        titleEn: 'Heavy Trailer & Transport Drivers',
        titleAr: 'سائقين نقل ثقيل وتريلات',
        category: 'driver',
        countryEn: 'Saudi Arabia & GCC',
        countryAr: 'المملكة العربية السعودية والخليج',
        flag: '🇸🇦',
        expEn: 'Min 5 Years GCC / Valid KSA License',
        expAr: 'خبرة 5 سنوات مع رخصة قيادة سعودية أو خليجية سارية',
        reqEn: 'Valid GCC Heavy License, Clean driving abstract',
        reqAr: 'رخصة نقل ثقيل معتمدة وسجل قيادة نظيف',
        salaryEn: 'SAR 2,800 - 3,500 + Trip Allowance',
        salaryAr: '2,800 - 3,500 ريال + بدلات نقل ومسافات',
        perksEn: 'Free Accommodation & Transportation',
        perksAr: 'سكن ومواصلات مجانية'
    },
    {
        id: 'job-3',
        titleEn: 'Auto Equipment & Diesel Technicians',
        titleAr: 'فنيي ميكانيكا ومعدات سيارات وديزل',
        category: 'technical',
        countryEn: 'Saudi Arabia & UAE',
        countryAr: 'السعودية والإمارات',
        flag: '🇦🇪 🇸🇦',
        expEn: 'Min 5 Years in Fleet / Workshop',
        expAr: 'خبرة لا تقل عن 5 سنوات في ورش أساطيل النقل',
        reqEn: 'Auto Mechanical Diploma, Diagnostic Tools Expertise',
        reqAr: 'دبلوم ميكانيكا سيارات، خبرة بأجهزة الفحص والكمبيوتر',
        salaryEn: 'Competitive Package',
        salaryAr: 'راتب مجزي وبدلات فنية',
        perksEn: 'Free Accommodation & Transportation',
        perksAr: 'سكن ومواصلات مجانية'
    },
    {
        id: 'job-4',
        titleEn: 'Automotive Parts Sales Executives',
        titleAr: 'بائعي ومسؤولي مبيعات قطع غيار سيارات',
        category: 'corporate',
        countryEn: 'UAE & Saudi Arabia',
        countryAr: 'الإمارات والسعودية',
        flag: '🇦🇪 🇸🇦',
        expEn: 'Min 5 Years Auto Parts Sales',
        expAr: 'خبرة 5 سنوات في مبيعات قطع الغيار والتوزيع',
        reqEn: 'Graduation / Catalog & Inventory ERP proficiency',
        reqAr: 'مؤهل جامعي، معرفة بكتالوجات قطع الغيار وأنظمة ERP',
        salaryEn: 'Attractive Salary + Commission',
        salaryAr: 'راتب أساسي + عمولات مبيعات مغرية',
        perksEn: 'Free Accommodation & Transportation',
        perksAr: 'سكن ومواصلات مجانية'
    },
    {
        id: 'job-5',
        titleEn: 'Senior Corporate Accountant',
        titleAr: 'محاسب عام ومالي أول للشركات',
        category: 'corporate',
        countryEn: 'UAE (Dubai HQ)',
        countryAr: 'الإمارات (مقر دبي)',
        flag: '🇦🇪',
        expEn: 'Min 5 Years in Corporate Accounts',
        expAr: 'خبرة 5 سنوات في الحسابات العامة والشركات',
        reqEn: 'B.Com / Accounting Degree, ERP (Odoo/SAP) Master',
        reqAr: 'بكالوريوس تجارة/محاسبة، إتقان أنظمة ERP وبرامج المحاسبة',
        salaryEn: 'AED 6,000 - 8,500 Package',
        salaryAr: '6,000 - 8,500 درهم شهرياً',
        perksEn: 'Annual Ticket, Health Insurance, Visa',
        perksAr: 'تذكرة سنوية وتأمين طبي شامل وإقامة'
    },
    {
        id: 'job-6',
        titleEn: 'Industrial Plumbers & Pipe Fitters',
        titleAr: 'سباكين صناعيين وفنيي شبكات مياه',
        category: 'technical',
        countryEn: 'United Arab Emirates (Dubai)',
        countryAr: 'الإمارات العربية المتحدة (دبي)',
        flag: '🇦🇪',
        expEn: 'Min 3-5 Years in High-Rise Projects',
        expAr: 'خبرة 3-5 سنوات في مشاريع الأبراج والإنشاءات',
        reqEn: 'Blueprint reading, HDPE / PPR / Copper fitting',
        reqAr: 'قراءة المخططات الهندسية، تركيب شبكات PPR والنحاس',
        salaryEn: 'AED 2,200 - 2,800 + OT',
        salaryAr: '2,200 - 2,800 درهم + ساعات إضافية',
        perksEn: 'Free Accommodation, Visa & Travel',
        perksAr: 'تأشيرة وسكن ومواصلات مجانية'
    },
    {
        id: 'job-7',
        titleEn: 'Finishing & Shuttering Carpenters',
        titleAr: 'نجارين مسلح وديكور وتشطيبات',
        category: 'technical',
        countryEn: 'United Arab Emirates (Dubai)',
        countryAr: 'الإمارات العربية المتحدة (دبي)',
        flag: '🇦🇪',
        expEn: 'Min 4 Years Construction Experience',
        expAr: 'خبرة 4 سنوات في مقاولات الخرسانة والتشطيب',
        reqEn: 'Trade Test Certificate & Shuttering expertise',
        reqAr: 'اجتياز اختبار المهنة وخبرة بالأعمال الخرسانية',
        salaryEn: 'AED 2,000 - 2,600 + OT',
        salaryAr: '2,000 - 2,600 درهم + إضافي',
        perksEn: 'Full Company Visa & Camp Accommodations',
        perksAr: 'تأشيرة كاملة وسكن مجهز'
    },
    {
        id: 'job-8',
        titleEn: 'Civil Project Site Engineer',
        titleAr: 'مهندس موقع مدني وتنفيذي',
        category: 'corporate',
        countryEn: 'Qatar & Saudi Arabia',
        countryAr: 'قطر والسعودية',
        flag: '🇶🇦 🇸🇦',
        expEn: 'Min 6 Years in Infrastructure / Towers',
        expAr: 'خبرة 6 سنوات في مشاريع البنية التحتية والأبراج',
        reqEn: 'B.Sc. Civil Engineering, UPDA / MMUP Grade A/B',
        reqAr: 'بكالوريوس هندسة مدنية، اعتماد رسمي',
        salaryEn: 'QAR 8,000 - 12,000 Package',
        salaryAr: '8,000 - 12,000 ريال قطري شامل',
        perksEn: 'Annual Ticket, Medical, Transport Allowance',
        perksAr: 'تذاكر سنوية وتأمين وبدل مواصلات'
    }
];

// --- GLOBAL MOBILITY HUBS (DUBAI AS THE CENTRAL MEGA-HUB) ---
const GLOBAL_HUBS = [
    {
        id: 'hub-dubai',
        nameEn: 'Dubai, UAE (Global HQ & Command Center)',
        nameAr: 'دبي، الإمارات العربية المتحدة (المقر الرئيسي والعالمي)',
        flag: '🇦🇪',
        lat: 25.2048, lon: 55.2708,
        type: 'hq',
        badgeEn: '🌟 GLOBAL HEADQUARTERS & COMMAND CENTER',
        badgeAr: '🌟 المقر الرئيسي العالمي ومركز القيادة - دبي مارينا',
        descEn: 'The central epicenter of Five Hills ecosystem. Orchestrating worldwide workforce mobilization, cross-border corporate recruitment, and GCC project operations from Dubai Marina Plaza.',
        descAr: 'القلب النابض والمركز الرئيسي لمنظومة فايف هيلز في دبي مارينا بلازا. إدارة وتوجيه كافة رحلات استقدام الكوادر العالمية وتوزيعها على أضخم المشاريع في الإمارات والسعودية والخليج.',
        tagsEn: ['Global HQ', 'Workforce Command', 'Direct Mobilization', 'Executive Hub'],
        tagsAr: ['المقر الرئيسي العالمي', 'إدارة القوى العاملة', 'توجيه الكوادر', 'إدارة المشاريع'],
        color: 0xcfa15c,
        isHQ: true
    },
    {
        id: 'hub-ksa',
        nameEn: 'Saudi Arabia (Riyadh & NEOM)',
        nameAr: 'المملكة العربية السعودية (الرياض ونيوم)',
        flag: '🇸🇦',
        lat: 24.7136, lon: 46.6753,
        type: 'deployment',
        badgeEn: '🇸🇦 MAJOR DEPLOYMENT DESTINATION',
        badgeAr: '🇸🇦 وجهة التشغيل وتوريد العمالة الكبرى',
        descEn: 'Massive enterprise deployments from Dubai HQ for giga-projects, high-voltage linemen, heavy trailer fleets, and industrial power plants.',
        descAr: 'توريد وتشغيل آلاف الكوادر الفنية وسائقي النقل الثقيل وكهربائيين الخطوط للمشاريع الكبرى في الرياض والمنطقة الشرقية ونيوم.',
        tagsEn: ['Power Linemen', 'Heavy Fleet', 'NEOM Projects', 'Civil Teams'],
        tagsAr: ['كهربائيين خطوط', 'سائقين تريلات', 'مشاريع نيوم', 'طواقم مدنية'],
        color: 0x1b8243
    },
    {
        id: 'hub-india',
        nameEn: 'India (Mumbai & Delhi Sourcing Hub)',
        nameAr: 'الهند (مركز الفرز والتدريب - مومباي ونيودلهي)',
        flag: '🇮🇳',
        lat: 19.0760, lon: 72.8777,
        type: 'sourcing',
        badgeEn: '✈️ DIRECT FLIGHTS & TRADE LABS TO DUBAI',
        badgeAr: '✈️ رحلات طيران وورش فحص وتدريب مباشرة إلى دبي',
        descEn: 'Massive talent sourcing pipeline. State-of-the-art trade testing workshops training and dispatching certified linemen, mechanics, and drivers straight to Dubai HQ.',
        descAr: 'أكبر مراكز الفرز واختبار الكفاءة المهنية؛ تجهيز واعتماد فنيي الكهرباء وميكانيكا المعدات والسائقين وإرسالهم مباشرة عبر رحلات جوية إلى دبي.',
        tagsEn: ['✈️ Air Corridor to Dubai', 'Trade Testing', 'Linemen Pool', 'Heavy Drivers'],
        tagsAr: ['✈️ جسر جوي إلى دبي', 'مختبرات فحص المهن', 'فنيي كهرباء', 'سائقين'],
        color: 0xcfa15c
    },
    {
        id: 'hub-egypt',
        nameEn: 'Egypt (Cairo Executive Sourcing)',
        nameAr: 'مصر (مركز الكوادر المهنية والطبية - القاهرة)',
        flag: '🇪🇬',
        lat: 30.0444, lon: 31.2357,
        type: 'sourcing',
        badgeEn: '✈️ CORPORATE & ENGINEERING TALENT TO DUBAI',
        badgeAr: '✈️ استقطاب الكوادر الهندسية والمالية إلى دبي',
        descEn: 'Executive talent corridor sourcing certified chartered accountants, PMP civil engineers, medical staff, and bilingual corporate managers flying into Dubai.',
        descAr: 'استقطاب نخبة المحاسبين المعتمدين، مهندسي المشاريع PMP، الكوادر الطبية والإداريين وإلحاقهم بفرق العمل عبر دبي.',
        tagsEn: ['✈️ Direct Flights to Dubai', 'Senior Accountants', 'Civil Engineers', 'Medical'],
        tagsAr: ['✈️ رحلات مباشرة إلى دبي', 'محاسبين قانونيين', 'مهندسين PMP', 'كوادر طبية'],
        color: 0x1b8243
    },
    {
        id: 'hub-philippines',
        nameEn: 'Philippines (Manila Sourcing Hub)',
        nameAr: 'الفلبين (مانيلا - كوادر الصحة والضيافة)',
        flag: '🇵🇭',
        lat: 14.5995, lon: 120.9842,
        type: 'sourcing',
        badgeEn: '✈️ HEALTHCARE & HOSPITALITY PIPELINE TO DUBAI',
        badgeAr: '✈️ كوادر التمريض والضيافة المتجهة لدبي',
        descEn: 'Premier medical staffing and facility management corridor sending qualified nurses, technical teams, and hospitality professionals to Dubai HQ.',
        descAr: 'توريد الكوادر التمريضية والطبية المرخصة وطواقم إدارة المرافق والضيافة مباشرة لدبي.',
        tagsEn: ['✈️ Manila-Dubai Flights', 'Hospital Nurses', 'FM Crews', 'Hospitality'],
        tagsAr: ['✈️ رحلات مانيلا-دبي', 'تمريض مرخص', 'طواقم مرافق', 'ضيافة'],
        color: 0x0c3c66
    },
    {
        id: 'hub-pakistan',
        nameEn: 'Pakistan (Karachi & Islamabad Port Hub)',
        nameAr: 'باكستان (كراتشي وإسلام أباد - النقل واللوجستيات)',
        flag: '🇵🇰',
        lat: 24.8607, lon: 67.0011,
        type: 'sourcing',
        badgeEn: '🚢 AIR & MARITIME TRANSIT TO DUBAI PORTS',
        badgeAr: '🚢 خطوط ملاحة بحرية وجوية لموانئ دبي',
        descEn: 'Heavy transport logistics, trailer operators, and mechanical fabrication crews mobilized through Arabian Sea routes into Dubai / Jebel Ali Port.',
        descAr: 'سائقي النقل الثقيل ومشغلي المعدات وفرق الصيانة المنقولين بحراً وجواً عبر الخليج العربي إلى موانئ دبي (جبل علي).',
        tagsEn: ['🚢 Sea & Air to Dubai', 'Heavy Transport', 'Fabrication Crews'],
        tagsAr: ['🚢 نقل بحري وجوي لدبي', 'نقل ثقيل', 'لحام وتصنيع'],
        color: 0xcfa15c
    },
    {
        id: 'hub-qatar',
        nameEn: 'State of Qatar (Doha)',
        nameAr: 'دولة قطر (الدوحة)',
        flag: '🇶🇦',
        lat: 25.2854, lon: 51.5310,
        type: 'deployment',
        badgeEn: '🇶🇦 GCC DEPLOYMENT CORRIDOR',
        badgeAr: '🇶🇦 مسار التشغيل في دولة قطر',
        descEn: 'Infrastructure engineering, oil & gas welders, and commercial project managers mobilized from Dubai HQ.',
        descAr: 'توجيه وإمداد المهندسين وفنيي محطات الطاقة والغاز لمشاريع الدوحة.',
        tagsEn: ['Civil Engineers', '6G Welders', 'Plant Techs'],
        tagsAr: ['مهندسين مدني', 'لحام 6G', 'فنيي مصانع'],
        color: 0x0c3c66
    }
];

// --- COUNTRY VISA & DOCUMENT STANDARDS ---
const COUNTRY_DOCS_DATA = {
    ksa: {
        nameEn: 'Kingdom of Saudi Arabia (KSA)',
        nameAr: 'المملكة العربية السعودية',
        flag: '🇸🇦',
        photoEn: 'Color Photo: 4 x 6 cm | 6 Copies | Pure White Background',
        photoAr: 'صور شخصية: مقاس 4 × 6 سم | 6 صور | خلفية بيضاء نقية بدون شوائب',
        passportEn: 'Original Passport with minimum 6 months validity & minimum 2 blank visa pages.',
        passportAr: 'جواز سفر أصلي ساري المفعول لمدة لا تقل عن 6 أشهر مع صفحتين فارغتين على الأقل.',
        medicalEn: 'GAMCA / GCC Approved Medical Center Fitness Certificate & Bio-metric verification.',
        medicalAr: 'شهادة فحص طبي معتمدة من مراكز جامكا (GAMCA) مع البصمة الحيوية (تساهيل).',
        attestEn: 'Technical & Academic certificates must be attested by Saudi Embassy & Culture Bureau.',
        attestAr: 'توثيق المؤهلات الفنية والشهادات الأكاديمية من الملحق الثقافي والسفارة السعودية.'
    },
    uae: {
        nameEn: 'United Arab Emirates (UAE - Dubai HQ)',
        nameAr: 'الإمارات العربية المتحدة (مقر دبي الرئيسي)',
        flag: '🇦🇪',
        photoEn: 'Color Photo: 4.3 x 5.5 cm | 12 Copies | Pure White Background',
        photoAr: 'صور شخصية: مقاس 4.3 × 5.5 سم | 12 صورة | خلفية بيضاء نقية',
        passportEn: 'Valid Passport with minimum 6 months validity.',
        passportAr: 'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر.',
        medicalEn: 'UAE MOHAP / DHA pre-employment medical fitness certification.',
        medicalAr: 'فحص طبي وقائي معتمد قبل السفر واختبارات الصحة المهنية.',
        attestEn: 'Ministry of Foreign Affairs (MOFA) attestation for degrees & trade diplomas.',
        attestAr: 'توثيق وزارة الخارجية والسفارة الإماراتية للمؤهلات والشهادات المهنية.'
    },
    qatar: {
        nameEn: 'State of Qatar',
        nameAr: 'دولة قطر',
        flag: '🇶🇦',
        photoEn: 'Color Photo: Passport Size | 8 Copies | Any Clean Background',
        photoAr: 'صور شخصية: حجم جواز السفر القياسي | 8 صور | أي خلفية واضحة',
        passportEn: 'Passport validity over 6 months from entry date.',
        passportAr: 'صلاحية جواز السفر أكثر من 6 أشهر من تاريخ الدخول.',
        medicalEn: 'Qatar Visa Center (QVC) biometrics, contract signing, and medical testing.',
        medicalAr: 'إجراءات مركز تأشيرات قطر (QVC): الفحص الطبي، توثيق العقد والبصمات الحيوية.',
        attestEn: 'Educational degrees attested by Qatar Embassy & Chamber of Commerce.',
        attestAr: 'تصديق المؤهلات من وزارة الخارجية وسفارة دولة قطر.'
    },
    oman: {
        nameEn: 'Sultanate of Oman',
        nameAr: 'سلطنة عُمان',
        flag: '🇴🇲',
        photoEn: 'Color Photo: Passport Size | 24 Copies | Blue Background Required',
        photoAr: 'صور شخصية: حجم جواز السفر | 24 صورة | خلفية زرقاء إلزامية',
        passportEn: 'Passport validity over 6 months with clear bio page.',
        passportAr: 'جواز سفر ساري لأكثر من 6 أشهر.',
        medicalEn: 'GAMCA approved full physical fitness report.',
        medicalAr: 'شهادة فحص طبي شامل من المراكز المعتمدة من دول مجلس التعاون.',
        attestEn: 'Trade certificates stamped by Oman Embassy & relevant vocational bodies.',
        attestAr: 'اعتماد الشهادات المهنية من السفارة العُمانية ووزارة العمل.'
    },
    kuwait: {
        nameEn: 'State of Kuwait',
        nameAr: 'دولة الكويت',
        flag: '🇰🇼',
        photoEn: 'Color Photo: Passport Size | 16 Copies | White Background',
        photoAr: 'صور شخصية: حجم جواز السفر | 16 صورة | خلفية بيضاء',
        passportEn: 'Passport validity min 6 months & Police Clearance Certificate (PCC).',
        passportAr: 'جواز سفر ساري + صحيفة الحالة الجنائية (فيش وتشبيه خالي من السوابق).',
        medicalEn: 'Kuwait Medical Board / GAMCA certification.',
        medicalAr: 'فحص طبي شامل معتمد من جامكا والسفارة الكويتية.',
        attestEn: 'PCC and academic certificates attested by Ministry of Foreign Affairs & Kuwait Embassy.',
        attestAr: 'توثيق الصحيفة الجنائية والمؤهلات من الخارجية والسفارة الكويتية.'
    },
    bahrain: {
        nameEn: 'Kingdom of Bahrain',
        nameAr: 'مملكة البحرين',
        flag: '🇧🇭',
        photoEn: 'Color Photo: Passport Size | 16 Copies | White Background',
        photoAr: 'صور شخصية: حجم جواز السفر | 16 صورة | خلفية بيضاء',
        passportEn: 'Original Passport with at least 6 months validity.',
        passportAr: 'جواز سفر أصلي صالح لمدة 6 أشهر على الأقل.',
        medicalEn: 'LMRA compliant GAMCA medical clearance.',
        medicalAr: 'فحص طبي معتمد متوافق مع هيئة تنظيم سوق العمل البحرينية (LMRA).',
        attestEn: 'Certificates verified by Bahrain Embassy and Chamber.',
        attestAr: 'تصديق المؤهلات والخبرات من سفارة مملكة البحرين.'
    }
};

// --- BILINGUAL DICTIONARY ---
const I18N_DICTIONARY = {
    en: {
        nav_home: 'Home',
        nav_divisions: 'Divisions',
        nav_vacancies: 'Live Vacancies',
        nav_process: 'Hiring Process',
        nav_industries: 'Industries',
        nav_visas: 'Visa & Docs',
        btn_hire_workforce: 'Hire Workforce',
        hero_badge: 'Global HQ: Dubai Marina &bull; Worldwide Mobilization',
        hero_title: 'From Dubai to the World: <span class="gold-gradient-text">Unlocking Global Elite Workforce</span>',
        hero_desc: 'Headquartered in Dubai, UAE — Five Hills connects elite technical manpower and corporate leadership from worldwide sourcing hubs directly to UAE, Saudi Arabia, and the Gulf region with 4+ decades of proven mastery.',
        hero_cta_hire: 'Request Manpower Supply',
        hero_cta_vacancies: 'Explore Open Vacancies',
        stat_1: 'Professionals Deployed',
        stat_2: 'Client Retention Rate',
        stat_3: 'Global Sourcing Corridors',
        stat_4: 'Dubai Marina Plaza',
        div_badge: 'Specialized Operations',
        div_title: 'Tailored Workforce Architecture',
        div_desc: 'Two autonomous, dedicated business divisions built to provide surgical precision for both industrial field operations and corporate boardroom talent.',
        tab_technical: 'Division A: Technical & Manpower Supply',
        tab_corporate: 'Division B: Corporate & HR Recruitment',
        
        // Division A: Technical
        srv_tech_1_title: 'Electrical & Power Linemen',
        srv_tech_1_desc: 'High-voltage transmission technicians, certified linemen, industrial electricians, and substation maintenance crews ready for immediate mobilization.',
        srv_tech_1_t1: 'Linemen', srv_tech_1_t2: 'HV / LV Grid', srv_tech_1_t3: 'Trade Certified',
        
        srv_tech_2_title: 'Mechanical & Piping Specialists',
        srv_tech_2_desc: 'Plumbers, pipe fitters, 6G certified welders, duct fabricators, and HVAC technicians for commercial towers and industrial plants.',
        srv_tech_2_t1: 'Plumbing', srv_tech_2_t2: '6G Welding', srv_tech_2_t3: 'HVAC Plant',
        
        srv_tech_3_title: 'Heavy Drivers & Equipment Operators',
        srv_tech_3_desc: 'Licensed GCC heavy trailer drivers, crane operators, forklift drivers, and earth-moving machinery specialists with validated driving records.',
        srv_tech_3_t1: 'Heavy Trailer', srv_tech_3_t2: 'Tower Crane', srv_tech_3_t3: 'GCC Licensed',
        
        srv_tech_4_title: 'Civil Construction & Finishing',
        srv_tech_4_desc: 'Carpenters, steel fixers, masons, gypsum board technicians, and scaffolding crews for large-scale infrastructure projects.',
        srv_tech_4_t1: 'Carpentry', srv_tech_4_t2: 'Steel Fixing', srv_tech_4_t3: 'Scaffolding',
        
        srv_tech_5_title: 'Auto & Heavy Equipment Technicians',
        srv_tech_5_desc: 'Automotive mechanics, diesel engine troubleshooters, hydraulic repair specialists, and auto parts sales executives.',
        srv_tech_5_t1: 'Auto Diagnostic', srv_tech_5_t2: 'Hydraulics', srv_tech_5_t3: 'Parts Sales',
        
        srv_tech_6_title: 'Facility Management & Camp Operations',
        srv_tech_6_desc: 'Complete turn-key site manpower, facility maintenance, camp wardens, housekeeping teams, and catering crews.',
        srv_tech_6_t1: 'FM Maintenance', srv_tech_6_t2: 'Camp Staff', srv_tech_6_t3: 'HSE Certified',

        // Division B: Corporate
        srv_corp_1_title: 'Finance & Senior Accounting',
        srv_corp_1_desc: 'Chartered accountants, financial analysts, audit managers, ERP finance controllers, and accounts payable/receivable specialists.',
        srv_corp_1_t1: 'CPA / ACCA', srv_corp_1_t2: 'IFRS Reporting', srv_corp_1_t3: 'ERP Financials',
        
        srv_corp_2_title: 'Engineering & Project Management',
        srv_corp_2_desc: 'Civil, mechanical, electrical, and structural engineers, PMP certified project directors, and planning / QA/QC managers.',
        srv_corp_2_t1: 'PMP Certified', srv_corp_2_t2: 'Civil / MEP', srv_corp_2_t3: 'QA / QC',
        
        srv_corp_3_title: 'Business Administration & HR',
        srv_corp_3_desc: 'HR directors, talent acquisition leads, executive assistants, bilingual office administrators, and supply chain coordinators.',
        srv_corp_3_t1: 'HR Director', srv_corp_3_t2: 'Procurement', srv_corp_3_t3: 'Bilingual Admin',
        
        srv_corp_4_title: 'Sales, Marketing & Commercial',
        srv_corp_4_desc: 'B2B sales managers, corporate business development specialists, digital growth heads, and automotive showroom consultants.',
        srv_corp_4_t1: 'B2B Sales', srv_corp_4_t2: 'Commercial Lead', srv_corp_4_t3: 'Auto Retail',
        
        srv_corp_5_title: 'Healthcare & Medical Staffing',
        srv_corp_5_desc: 'Specialist doctors, registered nurses, laboratory technicians, and hospital administrators holding SCFHS and DHA credentials.',
        srv_corp_5_t1: 'SCFHS Licensed', srv_corp_5_t2: 'Registered Nurse', srv_corp_5_t3: 'Diagnostics',
        
        srv_corp_6_title: 'IT, Cyber & Enterprise Systems',
        srv_corp_6_desc: 'Full-stack developers, network infrastructure engineers, ERP system implementers, and cybersecurity analysts.',
        srv_corp_6_t1: 'Odoo / SAP', srv_corp_6_t2: 'Cybersecurity', srv_corp_6_t3: 'Cloud Infra',

        // Vacancies & Filters
        vac_badge: 'Current Openings',
        vac_title: 'Verified Career Vacancies',
        vac_desc: 'Explore actively recruiting positions with leading enterprise clients across UAE, Saudi Arabia, and the Gulf Region. Free visa, accommodation, and transportation provided.',
        search_placeholder: 'Search by job title, skill, or keyword...',
        filter_all: 'All Roles',
        filter_technical: 'Technical / Field',
        filter_corporate: 'Corporate / HR',
        filter_driver: 'Heavy Transport',

        // 5-Step Process
        proc_badge: 'Deployment Lifecycle',
        proc_title: 'The 5-Step Mobilization Protocol',
        proc_desc: 'A rigorous, transparent recruitment and deployment framework ensuring 100% compliance, technical verification, and on-schedule onboarding.',
        step_1_title: 'Demand Analysis',
        step_1_desc: 'Receiving detailed client manpower specs, salary structures, job descriptions, and project deployment milestones.',
        step_2_title: 'Sourcing & Pre-screening',
        step_2_desc: 'Tapping our global talent reservoir in India, Egypt, and Asia to shortlist top-tier qualified candidates.',
        step_3_title: 'Trade Testing & Vetting',
        step_3_desc: 'Hands-on practical workshop trade tests and rigorous technical interviews conducted by certified evaluators.',
        step_4_title: 'Medical & Visa Stamping',
        step_4_desc: 'GAMCA medical clearances, background checks, document attestation, and rapid embassy visa endorsement.',
        step_5_title: 'Flight & Onboarding',
        step_5_desc: 'Ticketing, pre-departure orientation, GCC airport reception, camp settling, and immediate site integration.',

        // Industries
        ind_badge: 'Industry Expertise',
        ind_title: 'Powering Crucial Sectors Globally',
        ind_desc: 'Delivering tailored manpower solutions for complex megaprojects and enterprise industries.',
        ind_1_title: 'Oil & Gas / Petrochemicals', ind_1_desc: 'Refinery operators, pipeline welders, safety engineers, and maintenance shutdowns.',
        ind_2_title: 'Mega Infrastructure & Civil', ind_2_desc: 'High-rise developments, bridge construction, metro projects, and earth-moving teams.',
        ind_3_title: 'Electro-Mechanical (MEP)', ind_3_desc: 'Substation specialists, commercial electrical distribution, and industrial plumbing.',
        ind_4_title: 'Healthcare & Medical Centers', ind_4_desc: 'Specialized nurses, doctors, allied health workers, and clinical technicians.',
        ind_5_title: 'Processing Plants & Manufacturing', ind_5_desc: 'Assembly line operators, CNC machinists, quality control inspectors, and plant supervisors.',
        ind_6_title: 'Hospitality, Catering & Facilities', ind_6_desc: 'Chefs, hotel operations, housekeeping squads, and facility maintenance teams.',
        ind_7_title: 'Logistics, Fleet & Warehousing', ind_7_desc: 'Heavy transport drivers, supply chain managers, warehouse dispatchers, and forklift crews.',
        ind_8_title: 'Finance & Corporate Governance', ind_8_desc: 'Executive leadership, audit managers, ERP accounting leads, and administrative officers.',

        // Visa Hub & Footer
        visa_badge: 'Document Compliance',
        visa_title: 'Country-Specific Visa & Photo Guide',
        visa_desc: 'Accurate, up-to-date embassy documentation standards and photograph dimensions for seamless visa processing.',
        footer_about: 'Headquartered in Dubai Marina Plaza, UAE. Part of the Five Hills ecosystem, mobilizing world-class workforce from global sourcing corridors to the GCC.',
        footer_divisions: 'Divisions',
        footer_link_tech: 'Technical Manpower',
        footer_link_corp: 'Corporate Recruitment',
        footer_link_heavy: 'Heavy Machinery & Drivers',
        footer_link_fm: 'Facility Management',
        footer_destinations: 'GCC Hubs',
        footer_contact: 'Contact & Inquiries'
    },
    ar: {
        nav_home: 'الرئيسية',
        nav_divisions: 'أقسام العمل',
        nav_vacancies: 'الوظائف الشاغرة',
        nav_process: 'مسار التوظيف',
        nav_industries: 'القطاعات',
        nav_visas: 'التأشيرات والمستندات',
        btn_hire_workforce: 'طلب عمالة للشركات',
        hero_badge: 'المقر الرئيسي: دبي مارينا &bull; استقدام وتوجيه عالمي',
        hero_title: 'من دبي إلى العالم: <span class="gold-gradient-text">استقدام وتشغيل أفضل الكوادر العالمية</span>',
        hero_desc: 'من مقرنا الرئيسي في دبي، الإمارات العربية المتحدة — تقود فايف هيلز حركة استقدام وتوريد العمالة الفنية والكوادر المهنية من كافة قارات العالم وربطها بمشاريع الإمارات والسعودية والخليج بخبرة عريقة تتجاوز 4 عقود.',
        hero_cta_hire: 'طلب توريد كوادر وعمالة',
        hero_cta_vacancies: 'تصفح الوظائف المتاحة',
        stat_1: 'كادر ومهني تم توظيفهم',
        stat_2: 'نسبة رضا واحتفاظ العملاء',
        stat_3: 'مسارات استقدام ورحلات دولية',
        stat_4: 'دبي مارينا بلازا',
        div_badge: 'الهيكلة التخصصية',
        div_title: 'أقسام عمل مستقلة ومتخصصة',
        div_desc: 'قسمان مستقلان تماماً لتقديم أعلى درجات الكفاءة: قسم مخصص لتوريد وتشغيل العمالة الفنية والميدانية، وقسم مخصص للتوظيف المهني والكوادر المؤسسية.',
        tab_technical: 'القسم الأول: الخدمات الفنية وتوريد العمالة',
        tab_corporate: 'القسم الثاني: التوظيف المهني والمؤسسي',
        
        // Division A: Technical (Arabic)
        srv_tech_1_title: 'فنيين وكهربائيين خطوط هوائية (جهد عالي)',
        srv_tech_1_desc: 'فنيي شبكات النقل والجهد العالي، كهربائيين صناعيين معتمدين، طواقم صيانة محطات التحويل جاهزون للتشغيل الفوري بالمشاريع.',
        srv_tech_1_t1: 'خطوط هوائية', srv_tech_1_t2: 'جهد عالي ومتوسط', srv_tech_1_t3: 'مهن معتمدة',

        srv_tech_2_title: 'فنيي ميكانيكا وسباكة وشبكات أنابيب',
        srv_tech_2_desc: 'سباكين صناعيين، فنيي تركيب شبكات مياه، لحامين 6G معتمدين، فنيي دكت وتكييف مركزي للأبراج والمصانع.',
        srv_tech_2_t1: 'سباكة ومواسير', srv_tech_2_t2: 'لحام 6G', srv_tech_2_t3: 'تكييف مركزي',

        srv_tech_3_title: 'سائقين نقل ثقيل ومشغلي معدات',
        srv_tech_3_desc: 'سائقين تريلات ونقل ثقيل برخص خليجية سارية، مشغلي رافعات برجية، سائقي شوكة (فوركلفت) ومعدات الحفر مع سجل قيادة موثق.',
        srv_tech_3_t1: 'تريلات ونقل ثقيل', srv_tech_3_t2: 'رافعات برجية', srv_tech_3_t3: 'رخص خليجية',

        srv_tech_4_title: 'أعمال الإنشاءات والنجارة والتشطيب',
        srv_tech_4_desc: 'نجارين مسلح وتشطيب، حدادين خرسانة، بناءين، فنيي ألواح جبس وديكور، وطواقم السقالات الإنشائية للمشاريع الضخمة.',
        srv_tech_4_t1: 'نجارة مسلحة', srv_tech_4_t2: 'حدادة مسلحة', srv_tech_4_t3: 'سقالات وأمان',

        srv_tech_5_title: 'فنيي ميكانيكا سيارات ومعدات ديزل',
        srv_tech_5_desc: 'ميكانيكا سيارات ومحركات ديزل، فنيي فحص كمبيوتر وتشخيص أعطال، مهندسي هيدروليك، وبائعي ومسؤولي قطع غيار.',
        srv_tech_5_t1: 'فحص وتشخيص', srv_tech_5_t2: 'أنظمة هيدروليك', srv_tech_5_t3: 'مبيعات قطع غيار',

        srv_tech_6_title: 'إدارة المرافق وتشغيل المجمعات السكنية',
        srv_tech_6_desc: 'حلول عمالة متكاملة لتشغيل المواقع، صيانة المنشآت والمرافق، مشرفي مخيمات عمالية، طواقم نظافة وضيافة وإعاشة.',
        srv_tech_6_t1: 'صيانة مرافق', srv_tech_6_t2: 'إدارة مجمعات', srv_tech_6_t3: 'معايير HSE',

        // Division B: Corporate (Arabic)
        srv_corp_1_title: 'المالية والمحاسبة وإدارة الحسابات',
        srv_corp_1_desc: 'محاسبين قانونيين معتمدين (CPA/ACCA)، محللين ماليين، مدراء تدقيق، مسؤولي ERP، ومحاسبي مدفوعات ومقبوضات.',
        srv_corp_1_t1: 'محاسب قانوني', srv_corp_1_t2: 'معايير IFRS', srv_corp_1_t3: 'أنظمة ERP',

        srv_corp_2_title: 'الهندسة وإدارة المشاريع (PMP)',
        srv_corp_2_desc: 'مهندسين مدني، ميكانيكا، كهرباء وإنشاءات، مدراء مشاريع معتمدين PMP، ومهندسي تخطيط وجودة وسلامة مهنية QA/QC.',
        srv_corp_2_t1: 'شهادة PMP', srv_corp_2_t2: 'هندسة مدنية/MEP', srv_corp_2_t3: 'مراقبة الجودة QA/QC',

        srv_corp_3_title: 'الموارد البشرية والإدارة التنفيذية',
        srv_corp_3_desc: 'مدراء موارد بشرية (HR)، مسؤولي استقطاب الكفاءات، مساعدين تنفيذيين، إداريين ثنائيي اللغة، ومنسقي سلاسل الإمداد.',
        srv_corp_3_t1: 'مدير HR', srv_corp_3_t2: 'سلاسل الإمداد', srv_corp_3_t3: 'إدارة ثنائية اللغة',

        srv_corp_4_title: 'المبيعات والتسويق والتطوير التجاري',
        srv_corp_4_desc: 'مدراء مبيعات شركات B2B، مسؤولي تطوير أعمال، مدراء تسويق ونمو رقمي، واستشاريي مبيعات سيارات ومعارض تجارية.',
        srv_corp_4_t1: 'مبيعات B2B', srv_corp_4_t2: 'تطوير أعمال', srv_corp_4_t3: 'مبيعات المعارض',

        srv_corp_5_title: 'الكوادر الطبية والرعاية الصحية',
        srv_corp_5_desc: 'أطباء استشاريين وأخصائيين، ممرضين وممرضات مرخصين، فنيي مختبرات وأشعة، وإداريي مستشفيات حاصلين على تراخيص الهيئة.',
        srv_corp_5_t1: 'ترخيص الهيئة الصحية', srv_corp_5_t2: 'تمريض معتمد', srv_corp_5_t3: 'تشخيص ومختبرات',

        srv_corp_6_title: 'تقنية المعلومات والأمن السيبراني',
        srv_corp_6_desc: 'مطوري برمجيات وأنظمة، مهندسي شبكات وبنية تحتية، مسؤولي تطبيق أنظمة ERP (Odoo/SAP)، ومحللي أمن معلومات.',
        srv_corp_6_t1: 'أنظمة Odoo/SAP', srv_corp_6_t2: 'أمن سيبراني', srv_corp_6_t3: 'سحابة وبنية تحتية',

        // Vacancies & Filters (Arabic)
        vac_badge: 'فرص عمل معتمدة',
        vac_title: 'الوظائف المتاحة حالياً بالإمارات والخليج',
        vac_desc: 'تصفح أحدث الوظائف المطلوبة لكبرى الشركات في الإمارات والسعودية والخليج. تأشيرات وسكن ومواصلات مجانية وتأمين شامل.',
        search_placeholder: 'ابحث بالمسمى الوظيفي، التخصص، أو الكلمات المفتاحية...',
        filter_all: 'كافة الوظائف',
        filter_technical: 'وظائف فنية وتشغيل',
        filter_corporate: 'وظائف إدارية ومحاسبة',
        filter_driver: 'نقل ثقيل وسائقين',

        // 5-Step Process (Arabic)
        proc_badge: 'دورة الاستقدام والتشغيل',
        proc_title: 'بروتوكول التوظيف والتشغيل خماسي المراحل',
        proc_desc: 'إطار عمل دقيق وشفاف يضمن مطابقة الكفاءات، الفحص الفني المعتمد، والتسليم في المواعيد المحددة.',
        step_1_title: 'تحليل وتحديد الاحتياج',
        step_1_desc: 'استلام مواصفات العمالة المطلوبة من العميل، سلم الرواتب، التوصيف الوظيفي، ومواعيد وصول الكوادر للمشروع.',
        step_2_title: 'الاستقطاب والفرز الأولي',
        step_2_desc: 'البحث في مخزون الكوادر العالمية في الهند ومصر وآسيا لترشيح أفضل الكفاءات المطابقة للشروط.',
        step_3_title: 'اختبار المهن والفحص العملي',
        step_3_desc: 'إجراء اختبارات عملية في ورش مهنية متخصصة ومقابلات فنية دقيقة بإشراف خبراء تقييم معتمدين.',
        step_4_title: 'الفحص الطبي وإصدار التأشيرة',
        step_4_desc: 'استخراج شهادات اللياقة الطبية (جامكا)، الصحيفة الجنائية، توثيق الشهادات وتصديق التأشيرات من السفارة.',
        step_5_title: 'حجز الطيران والاستقبال بالمشروع',
        step_5_desc: 'حجز التذاكر، التوجيه قبل السفر، الاستقبال في مطار الوصول ونقل العمالة للسكن والبدء الفوري بالموقع.',

        // Industries (Arabic)
        ind_badge: 'خبرة القطاعات',
        ind_title: 'خدمة كبرى القطاعات الاستراتيجية',
        ind_desc: 'توفير وتجهيز العمالة المتخصصة للمشاريع الكبرى والمصانع والمنشآت الإقليمية.',
        ind_1_title: 'النفط والغاز والبتروكيماويات', ind_1_desc: 'مشغلي مصافي، لحامي خطوط أنابيب، مهندسي سلامة، وطواقم إغلاق وصيانة دورية.',
        ind_2_title: 'البنية التحتية والمقاولات الكبرى', ind_2_desc: 'مشاريع الأبراج الشاهقة، الجسور والأنفاق، شبكات المترو، وفرق الحفر والخرسانة.',
        ind_3_title: 'الكهروميكانيك والشبكات (MEP)', ind_3_desc: 'أخصائيي محطات التحويل، التمديدات الكهربائية للمباني، والسباكة الصناعية.',
        ind_4_title: 'المستشفيات والمراكز الصحية', ind_4_desc: 'كوادر التمريض المتخصص، الأطباء، الفنيين الطبيين ومساعدي الرعاية الصحية.',
        ind_5_title: 'المصانع وخطوط الإنتاج', ind_5_desc: 'مشغلي خطوط التجميع، فنيي ماكينات CNC، مسؤولي مراقبة الجودة، ومشرفي الإنتاج.',
        ind_6_title: 'الضيافة والمطاعم وإدارة المرافق', ind_6_desc: 'طهاة محترفين، مسؤولي عمليات الفنادق، فرق النظافة والتدبير المنزلي والإعاشة.',
        ind_7_title: 'النقل الثقيل واللوجستيات والمستودعات', ind_7_desc: 'سائقي تريلات وشاحنات ثقيلة، مدراء سلاسل إمداد، مسؤولي شحن، ومشغلي فوركلفت.',
        ind_8_title: 'المالية والمؤسسات والشركات', ind_8_desc: 'القيادات التنفيذية، مدراء التدقيق، مسؤولي الحسابات، والمستشارين الإداريين.',

        // Visa Hub & Footer (Arabic)
        visa_badge: 'دليل المستندات والشروط',
        visa_title: 'دليل مواصفات الصور وتأشيرات دول الخليج',
        visa_desc: 'المعايير المعتمدة من السفارات لمقاسات الصور الشخصية واشتراطات الجوازات والشهادات الطبية لكل دولة.',
        footer_about: 'المقر الرئيسي في دبي مارينا بلازا، الإمارات العربية المتحدة. إحدى أذرع منظومة فايف هيلز الرائدة في استقدام وتشغيل القوى العاملة العالمية.',
        footer_divisions: 'أقسام العمل',
        footer_link_tech: 'توريد العمالة الفنية',
        footer_link_corp: 'التوظيف المؤسسي والكوادر',
        footer_link_heavy: 'المعدات الثقيلة والسائقين',
        footer_link_fm: 'تشغيل وإدارة المرافق',
        footer_destinations: 'دول مجلس التعاون',
        footer_contact: 'التواصل والاستفسارات'
    }
};

let currentLang = 'en';
let currentTheme = 'light';
let currentJobCategory = 'all';
let activeHubIndex = 0; // Starts focused on Dubai HQ

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initDubaiGlobal3DEarth();
    renderJobs();
    renderCountryDetails('uae');
    initTheme();
});

// --- THEME SWITCHER (DEFAULT: LIGHT MODE) ---
function initTheme() {
    const savedTheme = localStorage.getItem('fh_theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fh_theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// --- LANGUAGE SWITCHER (EN / AR) ---
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N_DICTIONARY[currentLang][key]) {
            el.innerHTML = I18N_DICTIONARY[currentLang][key];
        }
    });

    const searchInput = document.getElementById('jobSearchInput');
    if (searchInput && I18N_DICTIONARY[currentLang]['search_placeholder']) {
        searchInput.placeholder = I18N_DICTIONARY[currentLang]['search_placeholder'];
    }

    renderJobs();
    const activeCountryBtn = document.querySelector('.country-tab-btn.active');
    const activeCountryKey = activeCountryBtn ? activeCountryBtn.getAttribute('data-key') || 'uae' : 'uae';
    renderCountryDetails(activeCountryKey);
    updateHubCardUI(activeHubIndex);
}

// --- DIVISION TABS SWITCHER ---
function switchDivision(divName, btnEl) {
    document.querySelectorAll('.division-tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    document.querySelectorAll('.division-panel').forEach(p => p.classList.remove('active'));
    const targetPanel = document.getElementById(`panel-${divName}`);
    if (targetPanel) targetPanel.classList.add('active');
}

// --- RENDER JOBS & FILTERING ---
function renderJobs() {
    const container = document.getElementById('jobsGrid');
    if (!container) return;

    const searchTerm = (document.getElementById('jobSearchInput')?.value || '').toLowerCase();

    const filtered = VACANCIES_DATA.filter(job => {
        const matchesCategory = currentJobCategory === 'all' || job.category === currentJobCategory;
        const title = (currentLang === 'ar' ? job.titleAr : job.titleEn).toLowerCase();
        const req = (currentLang === 'ar' ? job.reqAr : job.reqEn).toLowerCase();
        const matchesSearch = title.includes(searchTerm) || req.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
                <div style="font-size:2.5rem; margin-bottom:10px;">🔍</div>
                <h3>${currentLang === 'ar' ? 'لم يتم العثور على وظائف مطابقة' : 'No Matching Vacancies Found'}</h3>
                <p style="color:var(--text-muted);">${currentLang === 'ar' ? 'جرب البحث بكلمات أخرى أو اختر كافة التخصصات' : 'Try adjusting your search keywords or category filters.'}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(job => `
        <div class="job-card">
            <div>
                <div class="job-header">
                    <span class="job-country-badge">
                        <span>${job.flag}</span> ${currentLang === 'ar' ? job.countryAr : job.countryEn}
                    </span>
                    <span class="pill-badge gold" style="font-size:0.7rem;">SHORTLISTING</span>
                </div>
                <h3 class="job-title">${currentLang === 'ar' ? job.titleAr : job.titleEn}</h3>
                <div class="job-meta-list">
                    <div class="job-meta-item">
                        <span>⏳</span>
                        <span>${currentLang === 'ar' ? job.expAr : job.expEn}</span>
                    </div>
                    <div class="job-meta-item">
                        <span>📜</span>
                        <span>${currentLang === 'ar' ? job.reqAr : job.reqEn}</span>
                    </div>
                    <div class="job-meta-item">
                        <span>🎁</span>
                        <span>${currentLang === 'ar' ? job.perksAr : job.perksEn}</span>
                    </div>
                </div>
            </div>
            <div class="job-footer">
                <div>
                    <span style="font-size:0.75rem; color:var(--text-muted); display:block;">${currentLang === 'ar' ? 'الراتب والبدلات' : 'Salary Package'}</span>
                    <span class="salary-tag">${currentLang === 'ar' ? job.salaryAr : job.salaryEn}</span>
                </div>
                <button class="btn-primary" style="padding:8px 18px; font-size:0.85rem;" onclick="openApplyModal('${job.id}')">
                    ${currentLang === 'ar' ? 'قدم الآن' : 'Apply Now'}
                </button>
            </div>
        </div>
    `).join('');
}

function setJobCategory(cat, btnEl) {
    currentJobCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderJobs();
}

function filterJobs() {
    renderJobs();
}

// --- COUNTRY VISA DETAILS HUB ---
function switchCountry(countryKey, btnEl) {
    document.querySelectorAll('.country-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.removeAttribute('data-key');
    });
    if (btnEl) {
        btnEl.classList.add('active');
        btnEl.setAttribute('data-key', countryKey);
    }
    renderCountryDetails(countryKey);
}

function renderCountryDetails(countryKey) {
    const data = COUNTRY_DOCS_DATA[countryKey] || COUNTRY_DOCS_DATA['uae'];
    const container = document.getElementById('countryDetailsBox');
    if (!container) return;

    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:28px; padding-bottom:18px; border-bottom:1px solid var(--border-subtle);">
            <span style="font-size:2.2rem;">${data.flag}</span>
            <div>
                <span class="pill-badge emerald" style="font-size:0.72rem; margin-bottom:4px;">EMBASSY REQUIREMENTS</span>
                <h3 style="font-size:1.5rem; margin:0;">${currentLang === 'ar' ? data.nameAr : data.nameEn}</h3>
            </div>
        </div>
        <div class="country-info-grid">
            <div class="info-block">
                <h4>📸 ${currentLang === 'ar' ? 'مواصفات الصور الشخصية' : 'Photographs Standards'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.photoAr : data.photoEn}</li>
                    <li>${currentLang === 'ar' ? 'صورة حديثة وواضحة الملامح بدون نظارات عاكسة' : 'Recent clear facial image without tinted glasses'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>🛂 ${currentLang === 'ar' ? 'اشتراطات جواز السفر' : 'Passport Specifications'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.passportAr : data.passportEn}</li>
                    <li>${currentLang === 'ar' ? 'نسخ ضوئية مصدقة واضحة للبيانات والتمديد' : 'High-resolution notarized photocopies of bio pages'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>🏥 ${currentLang === 'ar' ? 'الفحص الطبي والبصمات' : 'Medical & Biometrics'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.medicalAr : data.medicalEn}</li>
                    <li>${currentLang === 'ar' ? 'تقرير اللياقة المهنية والسلامة من الأمراض المعدية' : 'Full physical fitness and communicable disease clearance'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>📜 ${currentLang === 'ar' ? 'توثيق الشهادات والمهنة' : 'Attestation & Trade Tests'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.attestAr : data.attestEn}</li>
                    <li>${currentLang === 'ar' ? 'شهادات مزاولة المهنة المعتمدة' : 'Accredited vocational trade certification'}</li>
                </ul>
            </div>
        </div>
    `;
}

// --- MODAL CONTROLS ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openApplyModal(jobId) {
    const job = VACANCIES_DATA.find(j => j.id === jobId);
    const titleEl = document.getElementById('applyModalJobTitle');
    if (job && titleEl) {
        titleEl.textContent = `${currentLang === 'ar' ? 'التقديم لوظيفة:' : 'Apply for:'} ${currentLang === 'ar' ? job.titleAr : job.titleEn}`;
    }
    openModal('applyModal');
}

function handleFileSelected(input) {
    if (input.files && input.files[0]) {
        const span = document.getElementById('selectedFileName');
        if (span) span.textContent = `✓ Selected: ${input.files[0].name} (${(input.files[0].size/1024/1024).toFixed(2)} MB)`;
    }
}

function handleApplySubmit(e) {
    e.preventDefault();
    alert(currentLang === 'ar' 
        ? 'تم استلام طلبك وسيرتك الذاتية بنجاح! ستقوم لجنة الفرز بالاتصال بك قريباً.' 
        : 'Your application & CV have been received successfully! Our shortlisting committee will reach out shortly.');
    closeModal('applyModal');
}

function handleEmployerSubmit(e) {
    e.preventDefault();
    alert(currentLang === 'ar' 
        ? 'شكراً لك! تم استلام طلب العمالة، وسيقوم مدير الاستقدام والتشغيل بالتواصل معكم خلال ساعتين.' 
        : 'Thank you! Your workforce requirement has been submitted. Our mobilization director will contact you within 2 hours.');
    closeModal('employerModal');
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});



// --- ULTRA-VISIBLE 3D REAL EARTH: MAJESTIC BURJ KHALIFA & AIR FLEET WITH CONTRAILS ---
let globeCamera, targetQuaternion, globeGroup, beaconMeshes = [];
let targetCamDist = 4.8;

function initDubaiGlobal3DEarth() {
    const canvas = document.getElementById('hero-globe-canvas');
    if (!canvas) return;

    const container = canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    globeCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    globeCamera.position.set(0, 0, targetCamDist);

    // Warm daylight & gold ambient lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(5, 4, 5);
    scene.add(sunLight);

    const goldLight = new THREE.DirectionalLight(0xcfa15c, 1.2);
    goldLight.position.set(-5, -2, -3);
    scene.add(goldLight);

    globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const R = 2.0;

    // High-Res NASA Earth Textures
    const texLoader = new THREE.TextureLoader();
    const dayMap  = texLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    const bumpMap = texLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
    const specMap = texLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
    const cldMap  = texLoader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png');

    // 1. Earth Sphere
    const earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R, 64, 64),
        new THREE.MeshPhongMaterial({
            map: dayMap,
            normalMap: bumpMap,
            normalScale: new THREE.Vector2(0.9, 0.9),
            specularMap: specMap,
            specular: new THREE.Color(0x334455),
            shininess: 25
        })
    );
    globeGroup.add(earthMesh);

    // 2. Clouds
    const cloudMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.015, 64, 64),
        new THREE.MeshStandardMaterial({ map: cldMap, transparent: true, opacity: 0.38 })
    );
    globeGroup.add(cloudMesh);

    // 3. Atmosphere
    const atmMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.1, 48, 48),
        new THREE.MeshBasicMaterial({ color: 0x0c3c66, transparent: true, opacity: 0.14, side: THREE.BackSide })
    );
    globeGroup.add(atmMesh);

    // Coordinate conversion
    function ll2xyz(lat, lon, r = R + 0.02) {
        const phi = (90 - lat) * Math.PI / 180;
        const theta = (lon + 180) * Math.PI / 180;
        return new THREE.Vector3(
            -r * Math.sin(phi) * Math.cos(theta),
             r * Math.cos(phi),
             r * Math.sin(phi) * Math.sin(theta)
        );
    }

    // 4. MAJESTIC, HIGHLY VISIBLE 3D BURJ KHALIFA LANDMARK IN DUBAI
    const dubaiLat = 25.2048;
    const dubaiLon = 55.2708;
    const dubaiPos = ll2xyz(dubaiLat, dubaiLon, R);
    const dubaiNormal = dubaiPos.clone().normalize();

    const landmarkGroup = new THREE.Group();
    landmarkGroup.position.copy(dubaiPos);
    landmarkGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dubaiNormal);

    // High-visibility Gold / Platinum materials
    const towerMat = new THREE.MeshStandardMaterial({
        color: 0xf5deb3,
        emissive: 0xcfa15c,
        emissiveIntensity: 0.45,
        metalness: 0.9,
        roughness: 0.15
    });

    const towerGoldAccent = new THREE.MeshBasicMaterial({ color: 0xffd700 });

    // Multi-tiered stepped skyscraper (Instantly recognizable Burj Khalifa silhouette)
    // Tier 1 Base Podium
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.075, 0.07, 16), towerMat);
    t1.position.y = 0.035;
    landmarkGroup.add(t1);

    // Tier 2 Middle Spire
    const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.045, 0.09, 16), towerMat);
    t2.position.y = 0.115;
    landmarkGroup.add(t2);

    // Tier 3 High Spire
    const t3 = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.03, 0.11, 12), towerMat);
    t3.position.y = 0.215;
    landmarkGroup.add(t3);

    // Pinnacle Spire Needle
    const needle = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.18, 10), towerGoldAccent);
    needle.position.y = 0.355;
    landmarkGroup.add(needle);

    // Glowing Summit Beacon at top of Burj Khalifa
    const summitBeacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.024, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    summitBeacon.position.y = 0.45;
    landmarkGroup.add(summitBeacon);

    // Dubai Glowing Radar Landing Pad
    const landingPad = new THREE.Mesh(
        new THREE.RingGeometry(0.04, 0.085, 32),
        new THREE.MeshBasicMaterial({ color: 0xffd700, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
    );
    landingPad.rotation.x = Math.PI / 2;
    landmarkGroup.add(landingPad);

    globeGroup.add(landmarkGroup);

    // 5. SOURCING HUBS (India, Egypt, Philippines, Pakistan)
    const sourceHubs = [
        { name: 'India (Mumbai)', flag: '🇮🇳', lat: 19.0760, lon: 72.8777, color: 0xffd700 },
        { name: 'Egypt (Cairo)', flag: '🇪🇬', lat: 30.0444, lon: 31.2357, color: 0x1b8243 },
        { name: 'Philippines (Manila)', flag: '🇵🇭', lat: 14.5995, lon: 120.9842, color: 0x38bdf8 },
        { name: 'Pakistan (Karachi)', flag: '🇵🇰', lat: 24.8607, lon: 67.0011, color: 0xffd700 }
    ];

    sourceHubs.forEach(hub => {
        const p = ll2xyz(hub.lat, hub.lon, R + 0.02);
        const node = new THREE.Mesh(
            new THREE.SphereGeometry(0.038, 16, 16),
            new THREE.MeshBasicMaterial({ color: hub.color })
        );
        node.position.copy(p);
        globeGroup.add(node);

        const nodeRing = new THREE.Mesh(
            new THREE.TorusGeometry(0.065, 0.005, 8, 32),
            new THREE.MeshBasicMaterial({ color: hub.color, transparent: true, opacity: 0.8 })
        );
        nodeRing.position.copy(p);
        nodeRing.lookAt(0, 0, 0);
        globeGroup.add(nodeRing);
    });

    // 6. DETAILED, HIGHLY VISIBLE 3D AIRPLANE WITH GLOWING WINGS & ENGINES
    function createBoldAirplaneMesh() {
        const airplane = new THREE.Group();

        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.3,
            roughness: 0.2,
            emissive: 0xffffff,
            emissiveIntensity: 0.4
        });
        const wingMat = new THREE.MeshStandardMaterial({
            color: 0x0c3c66,
            metalness: 0.6,
            roughness: 0.3
        });
        const goldMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        const jetGlow = new THREE.MeshBasicMaterial({ color: 0x00ffff });

        // Fuselage (Large & Sleek)
        const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.028, 0.18, 12), bodyMat);
        fuselage.rotation.x = Math.PI / 2;
        airplane.add(fuselage);

        // Cockpit & Nose Cone
        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.06, 12), bodyMat);
        nose.rotation.x = -Math.PI / 2;
        nose.position.z = 0.12;
        airplane.add(nose);

        // Swept Wings (Wide & Visible)
        const wingGeo = new THREE.BoxGeometry(0.24, 0.008, 0.065);
        const wings = new THREE.Mesh(wingGeo, wingMat);
        wings.position.set(0, 0, 0.015);
        airplane.add(wings);

        // Wingtip Navigation Lights
        const tipL = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        tipL.position.set(0.12, 0, 0.015);
        airplane.add(tipL);

        const tipR = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        tipR.position.set(-0.12, 0, 0.015);
        airplane.add(tipR);

        // Tail Fin (Golden)
        const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.05, 0.055), goldMat);
        tailFin.position.set(0, 0.03, -0.075);
        airplane.add(tailFin);

        // Horizontal Stabilizers
        const horizTail = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.006, 0.03), wingMat);
        horizTail.position.set(0, 0.01, -0.075);
        airplane.add(horizTail);

        // Jet Engine Exhaust Glows
        const engL = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), jetGlow);
        engL.position.set(0.055, -0.012, -0.025);
        airplane.add(engL);

        const engR = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), jetGlow);
        engR.position.set(-0.055, -0.012, -0.025);
        airplane.add(engR);

        return airplane;
    }

    // 7. FLIGHT FLEET & GLOWING PARABOLIC ARCS
    const fleet = [];

    function addFlightRoute(lat, lon, name, speed = 0.005, startProgress = 0) {
        const srcPos = ll2xyz(lat, lon, R + 0.02);
        const dstPos = ll2xyz(dubaiLat, dubaiLon, R + 0.03);

        const dist = srcPos.distanceTo(dstPos);
        const mid = srcPos.clone().add(dstPos).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(R + dist * 0.45); // High curved parabolic flight

        const curve = new THREE.QuadraticBezierCurve3(srcPos, mid, dstPos);

        // Vibrant Glowing Flight Arc
        const pts = curve.getPoints(50);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const arcMat = new THREE.LineBasicMaterial({
            color: 0xffd700,
            transparent: true,
            opacity: 0.6,
            linewidth: 2
        });
        globeGroup.add(new THREE.Line(arcGeo, arcMat));

        // 3D Airplane Mesh
        const airplane = createBoldAirplaneMesh();
        globeGroup.add(airplane);

        // Glowing Particle Contrail behind Airplane
        const contrailGeo = new THREE.BufferGeometry();
        const contrailPos = new Float32Array(15 * 3);
        contrailGeo.setAttribute('position', new THREE.BufferAttribute(contrailPos, 3));
        const contrailMat = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });
        const contrailLine = new THREE.Line(contrailGeo, contrailMat);
        globeGroup.add(contrailLine);

        fleet.push({
            plane: airplane,
            curve: curve,
            name: name,
            progress: startProgress,
            speed: speed,
            contrail: contrailLine,
            history: []
        });
    }

    // Launch bold flight routes
    addFlightRoute(19.0760, 72.8777, 'India', 0.0055, 0.0);        // India -> Dubai
    addFlightRoute(30.0444, 31.2357, 'Egypt', 0.005, 0.35);        // Egypt -> Dubai
    addFlightRoute(14.5995, 120.9842, 'Philippines', 0.004, 0.7);  // Philippines -> Dubai
    addFlightRoute(24.8607, 67.0011, 'Pakistan', 0.006, 0.2);     // Pakistan -> Dubai

    // 8. CAMERA & ORBIT (CENTERED SQUARELY ON DUBAI BURJ KHALIFA)
    function getQuaternionForPos(pos) {
        const norm = pos.clone().normalize();
        const camDir = new THREE.Vector3(0, 0, 1);
        return new THREE.Quaternion().setFromUnitVectors(norm, camDir);
    }

    targetQuaternion = new THREE.Quaternion();
    targetQuaternion.copy(getQuaternionForPos(dubaiPos));
    globeGroup.quaternion.copy(targetQuaternion);

    // Zoom & Reset
    let isDrag = false, prevMouse = { x: 0, y: 0 };
    canvas.addEventListener('mousedown', e => { isDrag = true; prevMouse = { x: e.clientX, y: e.clientY }; });
    window.addEventListener('mouseup', () => { isDrag = false; });
    window.addEventListener('mousemove', e => {
        if (!isDrag) return;
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * 0.005);
        const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 0.005);
        targetQuaternion.premultiply(qY).premultiply(qX);
        prevMouse = { x: e.clientX, y: e.clientY };
    });

    // Touch
    let touchStart = { x: 0, y: 0 };
    canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
            isDrag = true;
            touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    }, { passive: true });
    canvas.addEventListener('touchmove', e => {
        if (isDrag && e.touches.length === 1) {
            const dx = e.touches[0].clientX - prevMouse.x;
            const dy = e.touches[0].clientY - prevMouse.y;
            const qY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * 0.006);
            const qX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 0.006);
            targetQuaternion.premultiply(qY).premultiply(qX);
            prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    }, { passive: true });
    window.addEventListener('touchend', () => { isDrag = false; });

    document.getElementById('btnGlobeZoomIn')?.addEventListener('click', () => { targetCamDist = Math.max(3.2, targetCamDist - 0.6); });
    document.getElementById('btnGlobeZoomOut')?.addEventListener('click', () => { targetCamDist = Math.min(8.0, targetCamDist + 0.6); });
    document.getElementById('btnGlobeReset')?.addEventListener('click', () => {
        targetQuaternion.copy(getQuaternionForPos(dubaiPos));
        targetCamDist = 4.8;
    });

    // 9. ANIMATION LOOP
    let time = 0;
    let landingPulse = 0;

    function animateGlobeLoop() {
        requestAnimationFrame(animateGlobeLoop);
        time += 0.035;

        // Auto slow rotation
        if (!isDrag) {
            const autoRot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.0006);
            targetQuaternion.premultiply(autoRot);
        }

        cloudMesh.rotation.y += 0.0005;
        globeCamera.position.z += (targetCamDist - globeCamera.position.z) * 0.1;
        globeGroup.quaternion.slerp(targetQuaternion, 0.08);

        // Summit Beacon Pulse on Burj Khalifa
        summitBeacon.scale.setScalar(1 + Math.sin(time * 4) * 0.45);

        // Dubai Landing Radar Pulse
        landingPulse += 0.05;
        const ringScale = 1 + (landingPulse % 2.2) * 1.3;
        landingPad.scale.set(ringScale, ringScale, 1);
        landingPad.material.opacity = Math.max(0, 0.9 - (landingPulse % 2.2) * 0.4);

        // Update Fleet (Takeoff -> Cruise -> Touchdown at Burj Khalifa -> Loop)
        fleet.forEach(f => {
            f.progress += f.speed;

            // When plane reaches Dubai landmark, reset loop
            if (f.progress >= 0.985) {
                f.progress = 0.0;
                f.history = [];
            }

            const curPos = f.curve.getPoint(f.progress);
            const nextPos = f.curve.getPoint(Math.min(0.999, f.progress + 0.02));

            f.plane.position.copy(curPos);

            // Orient plane along flight tangent
            const matrix = new THREE.Matrix4();
            matrix.lookAt(curPos, nextPos, curPos.clone().normalize());
            f.plane.quaternion.setFromRotationMatrix(matrix);

            // Scale & Fade at takeoff and landing
            let s = 1.0;
            if (f.progress < 0.08) {
                s = f.progress / 0.08;
            } else if (f.progress > 0.92) {
                s = (0.985 - f.progress) / 0.065;
            }
            f.plane.scale.setScalar(Math.max(0.01, s));

            // Update Contrail
            f.history.unshift(curPos.clone());
            if (f.history.length > 10) f.history.pop();

            const posArray = f.contrail.geometry.attributes.position.array;
            for (let i = 0; i < 10; i++) {
                if (f.history[i]) {
                    posArray[i * 3]     = f.history[i].x;
                    posArray[i * 3 + 1] = f.history[i].y;
                    posArray[i * 3 + 2] = f.history[i].z;
                }
            }
            f.contrail.geometry.attributes.position.needsUpdate = true;
        });

        // Dubai Screen-Projected Floating HQ Badge
        const badge = document.getElementById('hub-badge-0');
        if (badge) {
            const tempVec = dubaiPos.clone();
            globeGroup.localToWorld(tempVec);
            const camDir = globeCamera.position.clone().sub(tempVec).normalize();
            const dot = tempVec.clone().normalize().dot(camDir);

            if (dot < 0.15) {
                badge.style.opacity = '0';
            } else {
                tempVec.project(globeCamera);
                const rect = canvas.getBoundingClientRect();
                const x = (tempVec.x * 0.5 + 0.5) * rect.width;
                const y = -(tempVec.y * 0.5 - 0.5) * rect.height;
                badge.style.opacity = '1';
                badge.style.transform = `translate(-50%, -100%) translate(${x}px, ${y - 40}px)`;
            }
        }

        renderer.render(scene, globeCamera);
    }
    animateGlobeLoop();

    window.addEventListener('resize', () => {
        if (!canvas.parentElement) return;
        const w = canvas.parentElement.clientWidth;
        const h = canvas.parentElement.clientHeight;
        globeCamera.aspect = w / h;
        globeCamera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
}

// --- MOBILE MENU DRAWER CONTROLLER ---
function toggleMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (!drawer) return;
    const isOpen = drawer.classList.contains('active');
    
    if (isOpen) {
        drawer.classList.remove('active');
        backdrop?.classList.remove('active');
        menuBtn?.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        drawer.classList.add('active');
        backdrop?.classList.add('active');
        menuBtn?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
