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
        countryEn: 'UAE (Dubai & Abu Dhabi Grid)',
        countryAr: 'الإمارات (شبكات دبي وأبوظبي)',
        flag: '🇦🇪',
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
        countryEn: 'United Arab Emirates (Dubai & Ports)',
        countryAr: 'الإمارات العربية المتحدة (دبي والموانئ)',
        flag: '🇦🇪',
        expEn: 'Min 5 Years UAE / Valid UAE Heavy License',
        expAr: 'خبرة 5 سنوات مع رخصة نقل ثقيل إماراتية سارية',
        reqEn: 'Valid UAE Heavy License No. 4/6, Clean driving abstract',
        reqAr: 'رخصة نقل ثقيل إماراتية معتمدة وسجل قيادة نظيف',
        salaryEn: 'AED 3,200 - 4,200 + Trip Allowance',
        salaryAr: '3,200 - 4,200 درهم + بدلات نقل ومسافات',
        perksEn: 'Free Accommodation & Transportation',
        perksAr: 'سكن ومواصلات مجانية'
    },
    {
        id: 'job-3',
        titleEn: 'Auto Equipment & Diesel Technicians',
        titleAr: 'فنيي ميكانيكا ومعدات سيارات وديزل',
        category: 'technical',
        countryEn: 'United Arab Emirates (Dubai Fleet)',
        countryAr: 'الإمارات (ورش وأساطيل دبي)',
        flag: '🇦🇪',
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
        countryEn: 'UAE (Dubai & Northern Emirates)',
        countryAr: 'الإمارات (دبي والإمارات الشمالية)',
        flag: '🇦🇪',
        expEn: 'Min 5 Years Auto Parts Sales in UAE',
        expAr: 'خبرة 5 سنوات في مبيعات قطع الغيار والتوزيع بالإمارات',
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
        countryEn: 'United Arab Emirates (Dubai & Abu Dhabi)',
        countryAr: 'الإمارات (دبي وأبوظبي)',
        flag: '🇦🇪',
        expEn: 'Min 6 Years in UAE Infrastructure / Towers',
        expAr: 'خبرة 6 سنوات في مشاريع الأبراج والبنية التحتية بالإمارات',
        reqEn: 'B.Sc. Civil Engineering, SOE UAE registered',
        reqAr: 'بكالوريوس هندسة مدنية، عضوية جمعية المهندسين الإماراتية',
        salaryEn: 'AED 10,000 - 15,000 Package',
        salaryAr: '10,000 - 15,000 درهم شامل',
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
        descEn: 'The central epicenter of Five Hills ecosystem. Orchestrating worldwide workforce mobilization, cross-border corporate recruitment, and turnkey deployments across the United Arab Emirates from Dubai Marina Plaza.',
        descAr: 'القلب النابض والمركز الرئيسي لمنظومة فايف هيلز في دبي مارينا بلازا. إدارة وتوجيه كافة رحلات استقدام الكوادر العالمية وتوزيعها على أضخم مشاريع وشركات دولة الإمارات العربية المتحدة.',
        tagsEn: ['Global HQ', 'Workforce Command', 'Direct Mobilization', 'Executive Hub'],
        tagsAr: ['المقر الرئيسي العالمي', 'إدارة القوى العاملة', 'توجيه الكوادر', 'إدارة المشاريع'],
        color: 0xcfa15c,
        isHQ: true
    },
    {
        id: 'hub-abudhabi',
        nameEn: 'Abu Dhabi (Capital Energy & Infrastructure Hub)',
        nameAr: 'أبوظبي (مشاريع الطاقة والبنية التحتية بالعاصمة)',
        flag: '🇦🇪',
        lat: 24.4539, lon: 54.3773,
        type: 'deployment',
        badgeEn: '🇦🇪 UAE CAPITAL ENERGY & INFRASTRUCTURE',
        badgeAr: '🇦🇪 قطاعات الطاقة والمقاولات في العاصمة أبوظبي',
        descEn: 'Strategic deployment corridor from Dubai HQ delivering certified high-voltage linemen, oil & gas shutdown crews, industrial welders, and civil engineering teams across Abu Dhabi & Al Dhafra.',
        descAr: 'توريد وتشغيل فرق الصيانة الفنية ومهندسي الطاقة وفنيي خطوط الكهرباء والشبكات لمشاريع العاصمة والظفرة.',
        tagsEn: ['Power Linemen', 'Oil & Gas Shutdown', 'MEP Teams', 'Infrastructure'],
        tagsAr: ['طاقة وكهرباء', 'عمرات نفط وغاز', 'أعمال MEP', 'بنية تحتية'],
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
        id: 'hub-northern',
        nameEn: 'Sharjah & Northern Emirates',
        nameAr: 'الشارقة والإمارات الشمالية (المراكز اللوجستية والصناعية)',
        flag: '🇦🇪',
        lat: 25.3463, lon: 55.4209,
        type: 'deployment',
        badgeEn: '🇦🇪 INDUSTRIAL & LOGISTICS DEPLOYMENT',
        badgeAr: '🇦🇪 المناطق الصناعية واللوجستية بالإمارات الشمالية',
        descEn: 'Mobilizing heavy transport drivers, fabrication technicians, warehouse crews, and facility maintenance teams across Sharjah, Ajman, and Ras Al Khaimah.',
        descAr: 'توريد وتشغيل سائقي النقل الثقيل وطواقم المستودعات وفنيي التشغيل للمدن الصناعية والموانئ في الإمارات الشمالية.',
        tagsEn: ['Heavy Transport', 'Fleet Technicians', 'Warehousing', 'FM Teams'],
        tagsAr: ['نقل ثقيل', 'فنيي أساطيل', 'مستودعات', 'صيانة وتشغيل'],
        color: 0x0c3c66
    }
];

// --- UAE VISA & DOCUMENT COMPLIANCE STANDARDS (EXCLUSIVELY FOR UAE) ---
const COUNTRY_DOCS_DATA = {
    employment: {
        nameEn: 'Standard UAE Employment Visa (2-Year MoHRE Residency)',
        nameAr: 'تأشيرة العمل والتوظيف العادية (إقامة سنتين معتمدة من وزارة الموارد البشرية)',
        flag: '🇦🇪',
        badgeEn: 'MOHRE 2-YEAR WORK RESIDENCY',
        badgeAr: 'إقامة عمل رسمية - سنتين',
        photoEn: 'Color Photo: 4.3 x 5.5 cm (or 3.5 x 4.5 cm) | 8 Copies | Pure White Background | 80% Facial View | Neutral Expression.',
        photoAr: 'صور شخصية: مقاس 4.3 × 5.5 سم (أو 3.5 × 4.5 سم) | 8 صور | خلفية بيضاء نقية تماماً بدون نظارات أو مؤثرات.',
        passportEn: 'Original Passport with minimum 6 months validity & minimum 2 blank visa pages for UAE residency stamping.',
        passportAr: 'جواز سفر أصلي ساري المفعول لمدة لا تقل عن 6 أشهر مع صفحتين فارغتين على الأقل لتثبيت الإقامة.',
        medicalEn: 'UAE MOHAP / DHA pre-employment medical fitness certification (Blood test & Chest X-ray) + Emirates ID biometrics.',
        medicalAr: 'فحص اللياقة الطبية المعتمد من وزارة الصحة أو هيئة الصحة بدبي (MOHAP/DHA) مع تبصيم الهوية الإماراتية.',
        attestEn: 'Ministry of Foreign Affairs (MOFA) attestation for degrees, trade certificates, and MoHRE labor contract activation.',
        attestAr: 'تصديق المؤهلات من وزارة الخارجية وسفارة دولة الإمارات، مع توثيق عقد العمل الإلكتروني وتسجيل نظام حماية الأجور WPS.'
    },
    mission: {
        nameEn: 'Temporary Project & Mission Work Permit (Short-Term Deployment)',
        nameAr: 'تصريح مهمة عمل وإنجاز مشاريع مؤقتة (توريد سريع للمشاريع الكبرى)',
        flag: '⚡',
        badgeEn: 'FAST-TRACK PROJECT DEPLOYMENT',
        badgeAr: 'تصريح فوري لمشاريع الطاقة والمقاولات',
        photoEn: 'High-resolution digital photo: Pure White Background | 300+ DPI | Clear facial biometric specifications.',
        photoAr: 'صورة رقمية عالية الدقة: خلفية بيضاء نقية مطابقة لاشتراطات الهيئة الاتحادية للهوية والجنسية (ICP).',
        passportEn: 'Valid passport with at least 6 months validity from expected UAE entry date.',
        passportAr: 'جواز سفر ساري المفعول لأكثر من 6 أشهر من تاريخ الوصول المتوقع لدولة الإمارات.',
        medicalEn: 'Certified preventive medical fitness report from origin country approved center.',
        medicalAr: 'شهادة فحص طبي وقائي معتمد من المراكز الصحية المعتمدة قبل السفر لدخول مواقع العمل.',
        attestEn: 'Mission permit issued directly under client project quota with accelerated governmental clearance.',
        attestAr: 'إصدار تصريح مهمة العمل فورياً تحت كفالة المشروع المعتمد وبدون اشتراطات تصديق معقدة.'
    },
    skilled: {
        nameEn: 'Technical Skilled Trades & Engineering Attestation',
        nameAr: 'الكوادر المهنية الفنية والهندسية (اختبارات الكفاءة وتصديق المؤهلات)',
        flag: '🛠️',
        badgeEn: 'TRADE TESTED & CERTIFIED TALENT',
        badgeAr: 'مهن معتمدة واختبارات ورش عملية',
        photoEn: 'Color Photo: 4.3 x 5.5 cm | 8 Copies | Pure White Background | Studio Lighting.',
        photoAr: 'صور شخصية: مقاس 4.3 × 5.5 سم | 8 صور | خلفية بيضاء وإضاءة استوديو واضحة.',
        passportEn: 'Passport validity over 6 months with clear biometric page scans.',
        passportAr: 'جواز سفر ساري المفعول لأكثر من 6 أشهر مع صور ضوئية ملونة عالية الدقة لصفحة البيانات.',
        medicalEn: 'Comprehensive pre-departure medical fitness plus occupational safety health clearance in the UAE.',
        medicalAr: 'فحص اللياقة البدنية والمهنية الشامل وفحوصات السلامة المهنية المعتمدة لمواقع العمل.',
        attestEn: 'Trade Test certification + Technical diploma authenticated by UAE Embassy and MOFA UAE.',
        attestAr: 'شهادة اجتياز اختبار المهنة العملي وتوثيق المؤهلات من سفارة الإمارات والخارجية الإماراتية.'
    },
    golden: {
        nameEn: 'Executive, Healthcare & Golden Residency Pathway',
        nameAr: 'الكوادر التنفيذية والطبية والإقامة الخضراء / الذهبية',
        flag: '🌟',
        badgeEn: 'SPECIALIZED TALENT & EXECUTIVE VISAS',
        badgeAr: 'مسار الكفاءات الاستثنائية والقيادات',
        photoEn: 'Digital Passport Size Photo: Pure White Background | Compliant with UAE ICP Smart Services.',
        photoAr: 'صورة رقمية حديثة مطابقة للمواصفات الذكية للهيئة الاتحادية للهوية والجنسية.',
        passportEn: 'Original Passport with minimum 6 months validity.',
        passportAr: 'جواز سفر أصلي صالح لمدة 6 أشهر على الأقل.',
        medicalEn: 'VIP express DHA / MOHAP Medical Examination and immediate VIP Emirates ID bio-metric appointment.',
        medicalAr: 'فحص طبي لكبار الشخصيات (VIP) وتبصيم فوري لإصدار بطاقة الهوية الإماراتية.',
        attestEn: 'University degree equivalency from UAE Ministry of Education + Professional license (DHA/SOE) & Executive contract.',
        attestAr: 'معادلة المؤهل الجامعي من وزارة التعليم العالي الإماراتية، ترخيص المهنة (DHA / SOE)، وعقود التوظيف العليا.'
    }
};
// Aliases for compatibility
COUNTRY_DOCS_DATA.uae = COUNTRY_DOCS_DATA.employment;
COUNTRY_DOCS_DATA.ksa = COUNTRY_DOCS_DATA.mission;
COUNTRY_DOCS_DATA.qatar = COUNTRY_DOCS_DATA.skilled;
COUNTRY_DOCS_DATA.oman = COUNTRY_DOCS_DATA.golden;
COUNTRY_DOCS_DATA.kuwait = COUNTRY_DOCS_DATA.employment;
COUNTRY_DOCS_DATA.bahrain = COUNTRY_DOCS_DATA.skilled;

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
        hero_badge: 'Exclusive UAE Operations &bull; Headquartered in Dubai Marina Plaza',
        hero_title: 'From Dubai to All Emirates: <span class="gold-gradient-text">Unlocking Global Elite Workforce for the UAE</span>',
        hero_desc: 'Headquartered in Dubai Marina Plaza, UAE — Five Hills connects elite technical manpower and corporate leadership from worldwide sourcing hubs directly to enterprises and megaprojects across the United Arab Emirates with 4+ decades of proven mastery.',
        hero_cta_hire: 'Request Manpower Supply',
        hero_cta_vacancies: 'Explore Open Vacancies',
        stat_1: 'Professionals Deployed',
        stat_2: 'Client Retention Rate',
        stat_3: 'Global Sourcing Corridors',
        stat_4: 'Dubai Marina Plaza HQ',
        div_badge: 'Specialized Operations',
        div_title: 'Tailored Workforce Architecture',
        div_desc: 'Two autonomous, dedicated business divisions built to provide surgical precision for both industrial field operations and corporate boardroom talent in the UAE.',
        tab_technical: 'Division A: Technical & Manpower Supply',
        tab_corporate: 'Division B: Corporate & HR Recruitment',
        
        // Division A: Technical
        srv_tech_1_title: 'Electrical & Power Linemen',
        srv_tech_1_desc: 'High-voltage transmission technicians, certified linemen, industrial electricians, and substation maintenance crews ready for immediate mobilization across the UAE.',
        srv_tech_1_t1: 'Linemen', srv_tech_1_t2: 'HV / LV Grid', srv_tech_1_t3: 'Trade Certified',
        
        srv_tech_2_title: 'Mechanical & Piping Specialists',
        srv_tech_2_desc: 'Plumbers, pipe fitters, 6G certified welders, duct fabricators, and HVAC technicians for commercial towers and industrial plants.',
        srv_tech_2_t1: 'Plumbing', srv_tech_2_t2: '6G Welding', srv_tech_2_t3: 'HVAC Plant',
        
        srv_tech_3_title: 'Heavy Drivers & Equipment Operators',
        srv_tech_3_desc: 'Licensed UAE heavy trailer drivers, crane operators, forklift drivers, and earth-moving machinery specialists with validated driving records.',
        srv_tech_3_t1: 'Heavy Trailer', srv_tech_3_t2: 'Tower Crane', srv_tech_3_t3: 'UAE Licensed',
        
        srv_tech_4_title: 'Civil Construction & Finishing',
        srv_tech_4_desc: 'Carpenters, steel fixers, masons, gypsum board technicians, and scaffolding crews for large-scale infrastructure projects across Dubai and Abu Dhabi.',
        srv_tech_4_t1: 'Carpentry', srv_tech_4_t2: 'Steel Fixing', srv_tech_4_t3: 'Scaffolding',
        
        srv_tech_5_title: 'Auto & Heavy Equipment Technicians',
        srv_tech_5_desc: 'Automotive mechanics, diesel engine troubleshooters, hydraulic repair specialists, and auto parts sales executives.',
        srv_tech_5_t1: 'Auto Diagnostic', srv_tech_5_t2: 'Hydraulics', srv_tech_5_t3: 'Parts Sales',
        
        srv_tech_6_title: 'Building Maintenance & Technical Facility Operations',
        srv_tech_6_desc: 'Comprehensive commercial & residential building operations, preventive HVAC maintenance, MEP repairs, camp management, and 24/7 technical callout teams in the UAE.',
        srv_tech_6_t1: 'Building Maintenance', srv_tech_6_t2: '24/7 Technical MEP', srv_tech_6_t3: 'HSE Certified',

        // Division B: Corporate & Professional Solutions
        srv_corp_1_title: 'Global Recruitment Services',
        srv_corp_1_desc: 'Rapid international talent acquisition across Asia, Europe, Africa, and Arab corridors delivering verified professionals straight to the UAE.',
        srv_corp_1_t1: 'Global Sourcing', srv_corp_1_t2: 'Fast-Track Hiring', srv_corp_1_t3: 'Rigorous Vetting',
        
        srv_corp_2_title: 'Visa Processing Services',
        srv_corp_2_desc: 'End-to-end UAE work visa issuance, MoHRE contract approvals, medical fitness clearances, embassy document attestation, and rapid residency permit endorsements.',
        srv_corp_2_t1: 'Express Visas', srv_corp_2_t2: 'Work Permits', srv_corp_2_t3: 'MoHRE & Stamping',
        
        srv_corp_3_title: 'Payroll Services & WPS Compliance',
        srv_corp_3_desc: 'Automated multi-currency payroll processing, 100% UAE Wage Protection System (WPS) compliance, tax filings, overtime administration, and gratuity calculations.',
        srv_corp_3_t1: 'WPS Compliance', srv_corp_3_t2: 'Automated Payroll', srv_corp_3_t3: 'Gratuity & Tax',
        
        srv_corp_4_title: 'Employee Engagement & Team Building',
        srv_corp_4_desc: 'Structured employee welfare, cross-cultural onboarding, productivity coaching, conflict mitigation, and team development workshops for maximum retention in the UAE.',
        srv_corp_4_t1: 'Team Building', srv_corp_4_t2: 'Talent Retention', srv_corp_4_t3: 'Productivity & Culture',
        
        srv_corp_5_title: 'Executive Search & Headhunting',
        srv_corp_5_desc: 'Confidential C-suite recruitment, board advisors, general managers, and project directors for UAE conglomerates, mega-developers, and enterprises.',
        srv_corp_5_t1: 'C-Suite Search', srv_corp_5_t2: 'Confidential', srv_corp_5_t3: 'P&L Leaders',
        
        srv_corp_6_title: 'Healthcare, IT & Enterprise Staffing',
        srv_corp_6_desc: 'Licensed medical staff (DHA/MOHAP/DoH), cybersecurity analysts, cloud infrastructure engineers, and specialized ERP (Odoo/SAP) enterprise implementers in the UAE.',
        srv_corp_6_t1: 'DHA/MOHAP Licensed', srv_corp_6_t2: 'Cybersecurity', srv_corp_6_t3: 'Odoo/SAP ERP',

        // Accelerated Mobilization SLAs
        sla_badge: 'Accelerated Mobilization SLAs',
        sla_title: 'Guaranteed Speed & Operational Velocity Across the UAE',
        sla_desc: 'We solve the #1 pain point of UAE enterprises: eliminating recruitment bottlenecks and bureaucratic visa delays through our rapid mobilization engine.',
        sla_m1_title: 'Rapid Deployment',
        sla_m1_desc: 'Candidate sourcing to flight arrival for urgent technical crews.',
        sla_m2_title: 'Express Visa Stamping',
        sla_m2_desc: 'Fast-track UAE entry permits and governmental clearances.',
        sla_m3_title: 'On-Time WPS Payroll',
        sla_m3_desc: 'Automated UAE wage compliance with zero delayed pay cycles.',
        sla_m4_title: 'Technical FM SLAs',
        sla_m4_desc: 'Rapid on-site building maintenance and MEP emergency teams.',

        // Vacancies & Filters
        vac_badge: 'Current Openings',
        vac_title: 'Verified Career Vacancies in UAE',
        vac_desc: 'Explore actively recruiting positions with leading enterprise clients across Dubai, Abu Dhabi, and the UAE. Free visa, accommodation, and transportation provided.',
        search_placeholder: 'Search by job title, skill, or keyword...',
        filter_all: 'All Roles',
        filter_technical: 'Technical / Field',
        filter_corporate: 'Corporate / HR',
        filter_driver: 'Heavy Transport',

        // 5-Step Process
        proc_badge: 'Deployment Lifecycle',
        proc_title: 'The 5-Step Mobilization Protocol',
        proc_desc: 'A rigorous, transparent recruitment and deployment framework ensuring 100% compliance, technical verification, and on-schedule onboarding into the UAE.',
        step_1_title: 'Demand Analysis',
        step_1_desc: 'Receiving detailed client manpower specs, salary structures, job descriptions, and UAE project deployment milestones.',
        step_2_title: 'Sourcing & Pre-screening',
        step_2_desc: 'Tapping our global talent reservoir in India, Egypt, and Asia to shortlist top-tier qualified candidates.',
        step_3_title: 'Trade Testing & Vetting',
        step_3_desc: 'Hands-on practical workshop trade tests and rigorous technical interviews conducted by certified evaluators.',
        step_4_title: 'Medical & Visa Stamping',
        step_4_desc: 'Medical clearances, background checks, document attestation, and rapid UAE entry permit endorsement.',
        step_5_title: 'Flight & Onboarding',
        step_5_desc: 'Ticketing, pre-departure orientation, UAE airport reception, camp settling, and immediate site integration.',

        // Industries
        ind_badge: 'Industry Expertise',
        ind_title: 'Powering Crucial Sectors in the UAE',
        ind_desc: 'Delivering tailored manpower solutions for complex megaprojects and enterprise industries across the Emirates.',
        ind_1_title: 'Oil & Gas / Petrochemicals', ind_1_desc: 'Refinery operators, pipeline welders, safety engineers, and maintenance shutdowns in Abu Dhabi.',
        ind_2_title: 'Mega Infrastructure & Civil', ind_2_desc: 'High-rise developments, bridge construction, metro projects, and earth-moving teams in Dubai & UAE.',
        ind_3_title: 'Electro-Mechanical (MEP)', ind_3_desc: 'Substation specialists, commercial electrical distribution, and industrial plumbing.',
        ind_4_title: 'Healthcare & Medical Centers', ind_4_desc: 'Specialized nurses, doctors, allied health workers, and clinical technicians holding DHA & MOHAP licenses.',
        ind_5_title: 'Processing Plants & Manufacturing', ind_5_desc: 'Assembly line operators, CNC machinists, quality control inspectors, and plant supervisors.',
        ind_6_title: 'Hospitality, Catering & Facilities', ind_6_desc: 'Chefs, hotel operations, housekeeping squads, and facility maintenance teams.',
        ind_7_title: 'Logistics, Fleet & Warehousing', ind_7_desc: 'Heavy transport drivers, supply chain managers, warehouse dispatchers, and forklift crews in Jebel Ali & UAE.',
        ind_8_title: 'Finance & Corporate Governance', ind_8_desc: 'Executive leadership, audit managers, ERP accounting leads, and administrative officers.',

        // Visa Hub & Footer
        visa_badge: 'UAE MoHRE & ICP Standards',
        visa_title: 'UAE Work Visa & Compliance Standards',
        visa_desc: 'Official Ministry of Human Resources (MoHRE), ICP & Embassy documentation, photograph dimensions, and medical clearances for deploying workforce exclusively across the United Arab Emirates.',
        visa_tab_emp: '🇦🇪 Standard Employment Visa',
        visa_tab_mission: '⚡ Project & Mission Permit',
        visa_tab_skilled: '🛠️ Technical Skilled Trades',
        visa_tab_golden: '🌟 Executive & Golden Visa',
        footer_about: 'Headquartered in Dubai Marina Plaza, UAE. Part of the Five Hills ecosystem, mobilizing world-class workforce exclusively across the United Arab Emirates.',
        footer_divisions: 'Divisions & Services',
        footer_link_tech: 'Technical & Field Crew',
        footer_link_corp: 'Corporate Recruitment',
        footer_link_heavy: 'Heavy Machinery & Drivers',
        footer_link_fm: 'Building & FM Maintenance',
        footer_destinations: 'UAE Operations',
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
        hero_badge: 'عمليات حصرية داخل دولة الإمارات &bull; المقر الرئيسي: دبي مارينا بلازا',
        hero_title: 'من دبي لكافة إمارات الدولة: <span class="gold-gradient-text">توريد وتشغيل نخبة الكوادر العالمية في الإمارات</span>',
        hero_desc: 'من مقرنا الرئيسي في دبي مارينا بلازا، الإمارات العربية المتحدة — نوفر ونورد الكوادر الفنية المتخصصة والقيادات المؤسسية من ممرات التوظيف العالمية مباشرة لكبرى شركات ومشاريع دولة الإمارات العربية المتحدة بخبرة عريقة تتجاوز 4 عقود.',
        hero_cta_hire: 'طلب توريد كوادر وعمالة',
        hero_cta_vacancies: 'تصفح الوظائف المتاحة',
        stat_1: 'كادر ومهني تم توظيفهم',
        stat_2: 'نسبة رضا واحتفاظ العملاء',
        stat_3: 'مسارات استقدام ورحلات دولية',
        stat_4: 'مقر دبي مارينا بلازا',
        div_badge: 'الهيكلة التخصصية',
        div_title: 'أقسام عمل مستقلة ومتخصصة',
        div_desc: 'قسمان مستقلان تماماً لتقديم أعلى درجات الكفاءة: قسم مخصص لتوريد وتشغيل العمالة الفنية والميدانية، وقسم مخصص للتوظيف المهني والكوادر المؤسسية في الإمارات.',
        tab_technical: 'القسم الأول: الخدمات الفنية وتوريد العمالة',
        tab_corporate: 'القسم الثاني: التوظيف المهني والمؤسسي',
        
        // Division A: Technical (Arabic)
        srv_tech_1_title: 'فنيين وكهربائيين خطوط هوائية (جهد عالي)',
        srv_tech_1_desc: 'فنيي شبكات النقل والجهد العالي، كهربائيين صناعيين معتمدين، طواقم صيانة محطات التحويل جاهزون للتشغيل الفوري بكافة إمارات الدولة.',
        srv_tech_1_t1: 'خطوط هوائية', srv_tech_1_t2: 'جهد عالي ومتوسط', srv_tech_1_t3: 'مهن معتمدة',

        srv_tech_2_title: 'فنيي ميكانيكا وسباكة وشبكات أنابيب',
        srv_tech_2_desc: 'سباكين صناعيين، فنيي تركيب شبكات مياه، لحامين 6G معتمدين، فنيي دكت وتكييف مركزي للأبراج والمصانع.',
        srv_tech_2_t1: 'سباكة ومواسير', srv_tech_2_t2: 'لحام 6G', srv_tech_2_t3: 'تكييف مركزي',

        srv_tech_3_title: 'سائقين نقل ثقيل ومشغلي معدات',
        srv_tech_3_desc: 'سائقين تريلات ونقل ثقيل برخص إماراتية سارية (فئة 4/6)، مشغلي رافعات برجية، سائقي شوكة (فوركلفت) ومعدات الحفر مع سجل قيادة موثق.',
        srv_tech_3_t1: 'تريلات ونقل ثقيل', srv_tech_3_t2: 'رافعات برجية', srv_tech_3_t3: 'رخص إماراتية',

        srv_tech_4_title: 'أعمال الإنشاءات والنجارة والتشطيب',
        srv_tech_4_desc: 'نجارين مسلح وتشطيب، حدادين خرسانة، بناءين، فنيي ألواح جبس وديكور، وطواقم السقالات الإنشائية للمشاريع الضخمة في دبي وأبوظبي.',
        srv_tech_4_t1: 'نجارة مسلحة', srv_tech_4_t2: 'حدادة مسلحة', srv_tech_4_t3: 'سقالات وأمان',

        srv_tech_5_title: 'فنيي ميكانيكا سيارات ومعدات ديزل',
        srv_tech_5_desc: 'ميكانيكا سيارات ومحركات ديزل، فنيي فحص كمبيوتر وتشخيص أعطال، مهندسي هيدروليك، وبائعي ومسؤولي قطع غيار بالأساطيل.',
        srv_tech_5_t1: 'فحص وتشخيص', srv_tech_5_t2: 'أنظمة هيدروليك', srv_tech_5_t3: 'مبيعات قطع غيار',

        srv_tech_6_title: 'صيانة المباني والتشغيل الفني للمرافق والخدمات التكنيكال',
        srv_tech_6_desc: 'تشغيل وصيانة متكاملة للمباني السكنية والتجارية ومجمعات العمال: صيانة وقائية للتكييف والكهرباء والسباكة، طوارئ فنية 24/7، ومعايير السلامة المهنية HSE بالإمارات.',
        srv_tech_6_t1: 'صيانة مباني', srv_tech_6_t2: 'طوارئ فنية 24/7', srv_tech_6_t3: 'معايير HSE',

        // Division B: Corporate (Arabic)
        srv_corp_1_title: 'خدمات التوظيف والتعيينات الدولية (Global Recruitment)',
        srv_corp_1_desc: 'استقطاب سريع للكوادر التخصصية من ممرات التوظيف في آسيا، أوروبا، وإفريقيا وتوريدهم مباشرة لكبرى شركات دولة الإمارات مع اختبارات عملية وتدقيق.',
        srv_corp_1_t1: 'استقطاب دولي', srv_corp_1_t2: 'تعيينات سريعة', srv_corp_1_t3: 'فحص وتدقيق الكفاءات',

        srv_corp_2_title: 'خدمات تخليص وتأشيرات العمل والفيز (Visa Processing)',
        srv_corp_2_desc: 'إصدار سريع لتصاريح العمل من وزارة الموارد البشرية (MoHRE)، الفحص الطبي، توثيق المستندات من الخارجية، وختم وتثبيت الإقامات الرسمية بالإمارات.',
        srv_corp_2_t1: 'تأشيرات عمل فورية', srv_corp_2_t2: 'تصاريح إقامة', srv_corp_2_t3: 'اعتماد MoHRE وتوثيق',

        srv_corp_3_title: 'خدمات إدارة الرواتب وحماية الأجور (Payroll & WPS)',
        srv_corp_3_desc: 'أتمتة كشوف الرواتب الشهرية وتوافق كامل 100% مع نظام حماية الأجور الإماراتي (WPS)، الامتثال الضريبي، متابعة البدلات ومكافآت نهاية الخدمة.',
        srv_corp_3_t1: 'نظام حماية الأجور WPS', srv_corp_3_t2: 'أتمتة الرواتب', srv_corp_3_t3: 'حسابات ومكافآت',

        srv_corp_4_title: 'إدارة واندماج الموظفين وبناء فرق العمل (Team Building)',
        srv_corp_4_desc: 'برامج احترافية لرعاية واستقرار الموظفين، التدريب الثقافي وتهيئة بيئة العمل، ورش بناء فرق العمل، وحلول رفع الإنتاجية والولاء المؤسسي بالإمارات.',
        srv_corp_4_t1: 'بناء فرق العمل', srv_corp_4_t2: 'استقرار الموظفين', srv_corp_4_t3: 'تطوير الإنتاجية',

        srv_corp_5_title: 'استقطاب الكفاءات والقيادات التنفيذية (Executive Search)',
        srv_corp_5_desc: 'استقطاب سري ومباشر للرؤساء التنفيذيين (C-Suite)، أعضاء مجالس الإدارة، ومدراء المشاريع الكبرى للشركات والمطورين في دولة الإمارات.',
        srv_corp_5_t1: 'قيادات تنفيذية', srv_corp_5_t2: 'استقطاب سري', srv_corp_5_t3: 'مدراء قطاعات',

        srv_corp_6_title: 'الكوادر المتخصصة (الرعاية الصحية، التقنية، وأنظمة ERP)',
        srv_corp_6_desc: 'توفير الكوادر الطبية المرخصة (DHA/MOHAP/DoH)، مهندسي الأمن السيبراني والشبكات، وخبراء تطبيق وتطوير أنظمة ERP (Odoo/SAP).',
        srv_corp_6_t1: 'تراخيص صحية معتمدة', srv_corp_6_t2: 'أمن سيبراني', srv_corp_6_t3: 'أنظمة Odoo/SAP',

        // Accelerated Mobilization SLAs (Arabic)
        sla_badge: 'تسارع التعيينات والضمانات التشغيلية',
        sla_title: 'سرعة قياسية وأعلى كفاءة في توفير الكوادر والتأشيرات بدولة الإمارات',
        sla_desc: 'نقضي على أكبر تحديات الشركات في الإمارات: تسريع إجراءات التعيينات، تخليص تأشيرات العمل، وأتمتة الرواتب بنظام WPS والصيانة الفنية بدون أي تعطيل.',
        sla_m1_title: 'سرعة الاستقدام',
        sla_m1_desc: 'من اختيار المرشح حتى وصول المطار للكوادر الفنية العاجلة.',
        sla_m2_title: 'تخليص سريع للفيز',
        sla_m2_desc: 'تسريع تصاريح الدخول والإجراءات الحكومية بدولة الإمارات.',
        sla_m3_title: 'رواتب بنظام WPS',
        sla_m3_desc: 'أتمتة كشوف الأجور وتحويل الرواتب دون أي تأخير قانوني بالإمارات.',
        sla_m4_title: 'استجابة صيانة المباني',
        sla_m4_desc: 'طوارئ فنية وتشغيل مرافق وصيانة MEP معتمدة على مدار الساعة.',

        // Vacancies & Filters (Arabic)
        vac_badge: 'فرص عمل معتمدة',
        vac_title: 'الوظائف المتاحة حالياً بدولة الإمارات',
        vac_desc: 'تصفح أحدث الوظائف المطلوبة لكبرى الشركات في دبي وأبوظبي ودولة الإمارات. تأشيرات وسكن ومواصلات مجانية وتأمين شامل.',
        search_placeholder: 'ابحث بالمسمى الوظيفي، التخصص، أو الكلمات المفتاحية...',
        filter_all: 'كافة الوظائف',
        filter_technical: 'وظائف فنية وتشغيل',
        filter_corporate: 'وظائف إدارية ومحاسبة',
        filter_driver: 'نقل ثقيل وسائقين',

        // 5-Step Process (Arabic)
        proc_badge: 'دورة الاستقدام والتشغيل',
        proc_title: 'بروتوكول التوظيف والتشغيل خماسي المراحل',
        proc_desc: 'إطار عمل دقيق وشفاف يضمن مطابقة الكفاءات، الفحص الفني المعتمد، والتسليم في المواعيد المحددة داخل دولة الإمارات.',
        step_1_title: 'تحليل وتحديد الاحتياج',
        step_1_desc: 'استلام مواصفات العمالة المطلوبة من العميل، سلم الرواتب، التوصيف الوظيفي، ومواعيد وصول الكوادر لمشاريع الإمارات.',
        step_2_title: 'الاستقطاب والفرز الأولي',
        step_2_desc: 'البحث في مخزون الكوادر العالمية في الهند ومصر وآسيا لترشيح أفضل الكفاءات المطابقة للشروط.',
        step_3_title: 'اختبار المهن والفحص العملي',
        step_3_desc: 'إجراء اختبارات عملية في ورش مهنية متخصصة ومقابلات فنية دقيقة بإشراف خبراء تقييم معتمدين.',
        step_4_title: 'الفحص الطبي وإصدار التأشيرة',
        step_4_desc: 'استخراج شهادات اللياقة الطبية، الصحيفة الجنائية، وتصديق التأشيرات وتصاريح الدخول للإمارات.',
        step_5_title: 'حجز الطيران والاستقبال بالمشروع',
        step_5_desc: 'حجز التذاكر، التوجيه قبل السفر، الاستقبال في مطارات الإمارات (دبي/أبوظبي) ونقل العمالة للسكن والبدء الفوري بالموقع.',

        // Industries (Arabic)
        ind_badge: 'خبرة القطاعات',
        ind_title: 'خدمة كبرى القطاعات الاستراتيجية في الإمارات',
        ind_desc: 'توفير وتجهيز العمالة المتخصصة للمشاريع الكبرى والمصانع والمنشآت بدولة الإمارات.',
        ind_1_title: 'النفط والغاز والبتروكيماويات', ind_1_desc: 'مشغلي مصافي، لحامي خطوط أنابيب، مهندسي سلامة، وطواقم إغلاق وصيانة دورية بأبوظبي.',
        ind_2_title: 'البنية التحتية والمقاولات الكبرى', ind_2_desc: 'مشاريع الأبراج الشاهقة، الجسور والأنفاق، شبكات المترو، وفرق الحفر والخرسانة في دبي والإمارات.',
        ind_3_title: 'الكهروميكانيك والشبكات (MEP)', ind_3_desc: 'أخصائيي محطات التحويل، التمديدات الكهربائية للمباني، والسباكة الصناعية.',
        ind_4_title: 'المستشفيات والمراكز الصحية', ind_4_desc: 'كوادر التمريض المتخصص، الأطباء، الفنيين الطبيين الحاصلين على تراخيص DHA وMOHAP.',
        ind_5_title: 'المصانع وخطوط الإنتاج', ind_5_desc: 'مشغلي خطوط التجميع، فنيي ماكينات CNC، مسؤولي مراقبة الجودة، ومشرفي الإنتاج.',
        ind_6_title: 'الضيافة والمطاعم وإدارة المرافق', ind_6_desc: 'طهاة محترفين، مسؤولي عمليات الفنادق، فرق النظافة والتدبير المنزلي والإعاشة.',
        ind_7_title: 'النقل الثقيل واللوجستيات والمستودعات', ind_7_desc: 'سائقي تريلات وشاحنات ثقيلة، مدراء سلاسل إمداد، مسؤولي شحن، ومشغلي فوركلفت في جبل علي والإمارات.',
        ind_8_title: 'المالية والمؤسسات والشركات', ind_8_desc: 'القيادات التنفيذية، مدراء التدقيق، مسؤولي الحسابات، والمستشارين الإداريين.',

        // Visa Hub & Footer (Arabic)
        visa_badge: 'معايير وزارة الموارد البشرية والهوية بالإمارات',
        visa_title: 'دليل تأشيرات العمل والامتثال القانوني بدولة الإمارات',
        visa_desc: 'المعايير المعتمدة من وزارة الموارد البشرية والتوطين (MoHRE) والهيئة الاتحادية للهوية والجنسية (ICP) لمقاسات الصور، الفحص الطبي، وتوثيق تصاريح العمل داخل دولة الإمارات.',
        visa_tab_emp: '🇦🇪 تأشيرة العمل العادية',
        visa_tab_mission: '⚡ تصاريح مهمة العمل والمشاريع',
        visa_tab_skilled: '🛠️ الكوادر الفنية وتوثيق المهن',
        visa_tab_golden: '🌟 الكوادر التنفيذية والإقامة الذهبية',
        footer_about: 'المقر الرئيسي في دبي مارينا بلازا، الإمارات العربية المتحدة. إحدى أذرع منظومة فايف هيلز الرائدة في استقدام وتوجيه القوى العاملة العالمية لكافة إمارات الدولة.',
        footer_divisions: 'الأقسام والخدمات',
        footer_link_tech: 'الكوادر الفنية والميدانية',
        footer_link_corp: 'التوظيف المؤسسي والدولي',
        footer_link_heavy: 'المعدات الثقيلة والنقل',
        footer_link_fm: 'صيانة المباني وإدارة المرافق',
        footer_destinations: 'مراكز العمل بالإمارات',
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
    const themeBtns = document.querySelectorAll('#themeToggleBtn, .theme-toggle-btn');
    themeBtns.forEach(btn => {
        btn.textContent = theme === 'light' ? '🌙' : '☀️';
    });
}

// --- LANGUAGE SWITCHER (EN / AR) ---
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);

    const langBtns = document.querySelectorAll('.lang-btn, #langToggleBtn, #mobileLangToggleBtn');
    langBtns.forEach(btn => {
        btn.textContent = currentLang === 'en' ? 'العربية' : 'English';
    });

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
    const data = COUNTRY_DOCS_DATA[countryKey] || COUNTRY_DOCS_DATA['employment'];
    const container = document.getElementById('countryDetailsBox');
    if (!container) return;

    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:28px; padding-bottom:18px; border-bottom:1px solid var(--border-subtle);">
            <span style="font-size:2.4rem;">${data.flag}</span>
            <div>
                <span class="pill-badge emerald" style="font-size:0.72rem; margin-bottom:4px;">${currentLang === 'ar' ? data.badgeAr : data.badgeEn}</span>
                <h3 style="font-size:1.45rem; margin:0; color:var(--text-title);">${currentLang === 'ar' ? data.nameAr : data.nameEn}</h3>
            </div>
        </div>
        <div class="country-info-grid">
            <div class="info-block">
                <h4>📸 ${currentLang === 'ar' ? 'مواصفات الصور الشخصية الرقمية' : 'Photographs & Digital Specs'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.photoAr : data.photoEn}</li>
                    <li>${currentLang === 'ar' ? 'صورة حديثة وواضحة الملامح متوافقة مع معايير الهيئة الاتحادية ICP' : 'Recent clear biometric facial image meeting UAE ICP digital specifications'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>🛂 ${currentLang === 'ar' ? 'اشتراطات جواز السفر وتصريح الدخول' : 'Passport & Entry Permit'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.passportAr : data.passportEn}</li>
                    <li>${currentLang === 'ar' ? 'نسخ ضوئية ملونة عالية الدقة لصفحة البيانات والتأشيرات السابقة' : 'High-resolution notarized digital color scans of data pages'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>🏥 ${currentLang === 'ar' ? 'الفحص الطبي والهوية الإماراتية' : 'Medical Fitness & Emirates ID'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.medicalAr : data.medicalEn}</li>
                    <li>${currentLang === 'ar' ? 'فحص اللياقة البدنية والمهنية والسلامة من الأمراض المعتمد بالدولة' : 'Full UAE occupational fitness clearance and communicable disease testing'}</li>
                </ul>
            </div>
            <div class="info-block">
                <h4>📜 ${currentLang === 'ar' ? 'اعتماد الموارد البشرية ونظام WPS' : 'MoHRE Approval & WPS Compliance'}</h4>
                <ul>
                    <li>${currentLang === 'ar' ? data.attestAr : data.attestEn}</li>
                    <li>${currentLang === 'ar' ? 'تسجيل إلكتروني فوري بنظام حماية الأجور الإماراتي وتوثيق المؤهلات' : 'Official registration in UAE Wage Protection System (WPS) and verified trade testing'}</li>
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
