// بيانات المدن والمواضيع مع تحديثات
const citiesData = [
    {
        id: 1,
        name: "Tripoli",
        nameAr: "طرابلس",
        description: "عاصمة ليبيا وأكبر مدنها، تتميز بتاريخ عريق ومعالم أثرية وسياحية متنوعة. تشتهر بقلعة السراي الحمراء والسوق القديم وشواطئها الجميلة.",
        topics: 10,
        questions: 40,
        color: "#0033a0",
        icon: "fas fa-landmark",
        popular: true,
        historical: true,
        coastal: true
    },
    {
        id: 2,
        name: "Benghazi",
        nameAr: "بنغازي",
        description: "ثاني أكبر مدينة في ليبيا، تعرف بـ\"عروس المتوسط\" وتتميز بموقعها الساحلي. تضم العديد من المعالم التاريخية والمتنزهات.",
        topics: 10,
        questions: 40,
        color: "#1e5aa8",
        icon: "fas fa-umbrella-beach",
        popular: true,
        historical: true,
        coastal: true
    },
    {
        id: 3,
        name: "Sabratha",
        nameAr: "صبراتة",
        description: "مدينة تاريخية تضم آثار رومانية مهمة، مدرجة على قائمة اليونسكو للتراث العالمي. تشتهر بمسرحها الروماني والمتحف الأثري.",
        topics: 10,
        questions: 40,
        color: "#0033a0",
        icon: "fas fa-history",
        popular: false,
        historical: true,
        coastal: true
    },
    {
        id: 4,
        name: "Leptis Magna",
        nameAr: "لبدة الأثرية",
        description: "أهم وأكبر المدن الأثرية الرومانية في ليبيا، إحدى عجائب العالم الروماني. تشتهر بقوس سبتيموس سيفيروس والمسرح الروماني.",
        topics: 10,
        questions: 40,
        color: "#1e5aa8",
        icon: "fas fa-monument",
        popular: true,
        historical: true,
        coastal: true
    },
    {
        id: 5,
        name: "Ghadames",
        nameAr: "غدامس",
        description: "مدينة الواحات التاريخية، تُعرف بـ\"لؤلؤة الصحراء\" وتتميز بطراز معماري فريد. مدرجة على قائمة اليونسكو للتراث العالمي.",
        topics: 10,
        questions: 40,
        color: "#0033a0",
        icon: "fas fa-sun",
        popular: true,
        historical: true,
        coastal: false
    },
    {
        id: 6,
        name: "Shahat",
        nameAr: "شحات",
        description: "مدينة تاريخية تضم موقع قورينا الأثري، عاصمة الإقليم الشرقي في العهد الروماني. تشتهر بمعبد زيوس والمسرح اليوناني.",
        topics: 10,
        questions: 40,
        color: "#1e5aa8",
        icon: "fas fa-mountain",
        popular: false,
        historical: true,
        coastal: false
    }
];

const topicsData = [
    {
        id: 1,
        name: "Hotels",
        nameAr: "الفنادق",
        description: "معلومات عن الفنادق والإقامة والخدمات الفندقية",
        icon: "fas fa-hotel",
        questions: 24
    },
    {
        id: 2,
        name: "Attractions",
        nameAr: "المعالم السياحية",
        description: "أهم المعالم والمواقع السياحية والتراثية",
        icon: "fas fa-camera-retro",
        questions: 24
    },
    {
        id: 3,
        name: "Transport",
        nameAr: "النقل",
        description: "وسائل النقل والمواصلات والتنقل داخل المدينة",
        icon: "fas fa-bus",
        questions: 24
    },
    {
        id: 4,
        name: "Internet",
        nameAr: "الاتصالات",
        description: "خدمات الإنترنت والاتصالات والشبكات",
        icon: "fas fa-wifi",
        questions: 24
    },
    {
        id: 5,
        name: "Restaurants",
        nameAr: "المطاعم",
        description: "أشهر المطاعم والمأكولات والمقاهي",
        icon: "fas fa-utensils",
        questions: 24
    },
    {
        id: 6,
        name: "Tips",
        nameAr: "نصائح السفر",
        description: "نصائح وإرشادات للزوار والسياح",
        icon: "fas fa-lightbulb",
        questions: 24
    },
    {
        id: 7,
        name: "Security",
        nameAr: "الأمن",
        description: "معلومات أمنية وإرشادات السلامة والأماكن الآمنة",
        icon: "fas fa-shield-alt",
        questions: 24
    },
    {
        id: 8,
        name: "Visa",
        nameAr: "التأشيرة",
        description: "معلومات التأشيرة ومتطلبات الدخول والإجراءات",
        icon: "fas fa-passport",
        questions: 24
    },
    {
        id: 9,
        name: "Culture",
        nameAr: "الثقافة",
        description: "العادات والتقاليد والثقافة المحلية والفنون",
        icon: "fas fa-theater-masks",
        questions: 24
    },
    {
        id: 10,
        name: "Shopping",
        nameAr: "التسوق",
        description: "أماكن التسوق والمنتجات المحلية والأسواق",
        icon: "fas fa-shopping-bag",
        questions: 24
    }
];

// بيانات الأسئلة (مثال موسع)
const sampleQuestions = [
    {
        id: 1,
        city: "Tripoli",
        cityAr: "طرابلس",
        topic: "Hotels",
        topicAr: "الفنادق",
        question_ar: "ما هي أفضل الفنادق الفاخرة في طرابلس؟",
        question_en: "What are the best luxury hotels in Tripoli?",
        answer_ar: "من أبرز الفنادق الفاخرة في طرابلس: فندق كورنثيا طرابلس (Corinthia Hotel Tripoli) وهو فندق 5 نجوم يطل على البحر ويوفر إطلالة رائعة على المدينة، فندق الروشة (Al Rosha Hotel) الذي يقع في وسط المدينة ويوفر خدمات فاخرة، وفندق باب البحر (Bab Al Bahr Hotel) الذي يتميز بموقعه بالقرب من البحر. تقدم هذه الفنادق خدمات متكاملة وتضم مرافق مثل حمامات السباحة والمطاعم الفاخرة ومراكز اللياقة البدنية وقاعات المؤتمرات.",
        answer_en: "Prominent luxury hotels in Tripoli include: Corinthia Hotel Tripoli (a 5-star hotel overlooking the sea with stunning city views), Al Rosha Hotel (located in the city center offering luxury services), and Bab Al Bahr Hotel (notable for its proximity to the sea). These hotels offer comprehensive services and facilities such as swimming pools, fine dining restaurants, fitness centers, and conference halls.",
        links: ["https://www.corinthia.com/tripoli", "https://www.alroshahotel.com", "https://www.babal-bahrhotel.ly", "https://www.tripadvisor.com/Hotels-g293807-Tripoli_Tripoli_District-Hotels.html"]
    },
    {
        id: 2,
        city: "Tripoli",
        cityAr: "طرابلس",
        topic: "Attractions",
        topicAr: "المعالم السياحية",
        question_ar: "ما هي أهم المعالم السياحية في طرابلس؟",
        question_en: "What are the main tourist attractions in Tripoli?",
        answer_ar: "من أهم المعالم السياحية في طرابلس: قلعة السراي الحمراء (Tripoli Castle) التي تعود للقرن السابع عشر وتعد رمزاً للمدينة، متحف السرايا الحمراء الذي يضم قطعاً أثرية مهمة، السوق القديم (المدينة القديمة) الذي يمتد تاريخه لقرون ويضم محلات الحرف التقليدية، قوس ماركوس أوريليوس الروماني، وكاتدرائية طرابلس. كما تشتهر طرابلس بشواطئها الجميلة مثل شاطئ الهانيبة وشاطئ جادو.",
        answer_en: "Main tourist attractions in Tripoli include: Tripoli Castle (dating back to the 17th century and a symbol of the city), Al-Saraya Al-Hamra Museum (housing important archaeological pieces), the Old Market (Old City) with centuries of history and traditional craft shops, the Arch of Marcus Aurelius, and Tripoli Cathedral. Tripoli is also famous for its beautiful beaches like Al-Haniba Beach and Jadu Beach.",
        links: ["https://www.tripoli.gov.ly/tourism", "https://www.libyanheritage.org", "https://www.tripadvisor.com/Attractions-g293807-Activities-Tripoli_Tripoli_District.html", "https://whc.unesco.org/en/tentativelists/1915/"]
    },
    {
        id: 3,
        city: "Benghazi",
        cityAr: "بنغازي",
        topic: "Hotels",
        topicAr: "الفنادق",
        question_ar: "ما هي خيارات الإقامة المتاحة في بنغازي؟",
        question_en: "What accommodation options are available in Benghazi?",
        answer_ar: "في بنغازي، تتوفر عدة خيارات للإقامة تناسب مختلف الميزانيات. من الفنادق الفاخرة: فندق تيبستي بنغازي (Tibesti Hotel Benghazi) وفندق الإدارة (Uzu Hotel). كما توجد فنادق متوسطة المستوى مثل فندق بنينا (Benina Hotel) وفندق الجولات (Julan Hotel). بالإضافة إلى شقق مفروشة للعائلات ومجمعات سكنية للسياح. ينصح بالحجز المسبق خاصة في مواسم الذروة والمهرجانات السياحية.",
        answer_en: "In Benghazi, several accommodation options are available to suit different budgets. Luxury hotels include: Tibesti Hotel Benghazi and Uzu Hotel. There are also mid-range hotels such as Benina Hotel and Julan Hotel. Additionally, there are furnished apartments for families and residential complexes for tourists. Advance booking is recommended, especially during peak seasons and tourist festivals.",
        links: ["https://www.tibestihotel.com", "https://www.uzuhotel.com", "https://www.booking.com/city/ly/benghazi", "https://www.tripadvisor.com/Hotels-g293813-Benghazi-Benghazi_District-Hotels.html"]
    }
];

// حالة التطبيق
const appState = {
    currentCity: null,
    currentTopic: null,
    filteredCities: [...citiesData],
    searchResults: [],
    currentQuestions: []
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// تهيئة التطبيق
function initApp() {
    renderCities();
    renderTopics();
    setupEventListeners();
    updateStats();
    updateDate();
}

// عرض المدن
function renderCities() {
    const citiesContainer = document.getElementById('citiesContainer');
    
    if (!citiesContainer) return;
    
    citiesContainer.innerHTML = '';
    
    appState.filteredCities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.className = 'city-card';
        cityCard.dataset.cityId = city.id;
        
        cityCard.innerHTML = `
            <div class="city-image" style="background: linear-gradient(135deg, ${city.color}, ${city.color}99);">
                <i class="${city.icon}"></i>
            </div>
            <div class="city-content">
                <h3 class="city-name">${city.name}</h3>
                <p class="city-name-ar">${city.nameAr}</p>
                <p>${city.description}</p>
                <div class="city-stats">
                    <div class="stat">
                        <div class="stat-number">${city.topics}</div>
                        <div class="stat-label">موضوع</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">${city.questions}</div>
                        <div class="stat-label">سؤال</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">
                            <i class="fas ${city.coastal ? 'fa-umbrella-beach' : 'fa-mountain'}"></i>
                        </div>
                        <div class="stat-label">${city.coastal ? 'ساحلية' : 'داخلية'}</div>
                    </div>
                </div>
            </div>
        `;
        
        cityCard.addEventListener('click', () => {
            selectCity(city);
        });
        
        citiesContainer.appendChild(cityCard);
    });
}

// عرض المواضيع
function renderTopics() {
    const topicsContainer = document.getElementById('topicsContainer');
    
    if (!topicsContainer) return;
    
    topicsContainer.innerHTML = '';
    
    topicsData.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.dataset.topicId = topic.id;
        
        topicCard.innerHTML = `
            <div class="topic-icon">
                <i class="${topic.icon}"></i>
            </div>
            <h3 class="topic-name">${topic.name}</h3>
            <p class="topic-name-ar">${topic.nameAr}</p>
            <p>${topic.description}</p>
            <div class="stat-label">${topic.questions} سؤال</div>
        `;
        
        topicCard.addEventListener('click', () => {
            selectTopic(topic);
        });
        
        topicsContainer.appendChild(topicCard);
    });
}

// تحديث التاريخ الحالي
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateElement.textContent = now.toLocaleDateString('ar-LY', options);
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // زر استكشاف المدن
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('cities').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // تصفية المدن
    const cityFilter = document.getElementById('cityFilter');
    if (cityFilter) {
        cityFilter.addEventListener('input', filterCities);
    }
    
    // أزرار تصفية المدن
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشط للزر المحدد
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            applyCityFilter(filter);
        });
    });
    
    // البحث
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // العودة إلى المدن
    const backToCitiesBtn = document.getElementById('backToCities');
    if (backToCitiesBtn) {
        backToCitiesBtn.addEventListener('click', () => {
            showSection('cities');
        });
    }
    
    // قائمة الهاتف المحمول
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
    
    // إغلاق النافذة المنبثقة
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    // النقر خارج النافذة المنبثقة لإغلاقها
    const modal = document.getElementById('questionModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // التبويب في النافذة المنبثقة
    const modalTabs = document.querySelectorAll('.modal-tab');
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchModalTab(lang);
        });
    });
    
    // التنقل في الصفحة
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشط من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            // إضافة النشط للرابط المحدد
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // إغلاق قائمة الهاتف المحمول إذا كانت مفتوحة
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    
    // إضافة حدث للمفاتيح (Escape) لإغلاق النافذة المنبثقة
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// تصفية المدن حسب النص
function filterCities() {
    const filterValue = document.getElementById('cityFilter').value.toLowerCase();
    
    appState.filteredCities = citiesData.filter(city => {
        return city.name.toLowerCase().includes(filterValue) || 
               city.nameAr.includes(filterValue) ||
               city.description.includes(filterValue);
    });
    
    renderCities();
}

// تطبيق مرشح المدن
function applyCityFilter(filter) {
    if (filter === 'all') {
        appState.filteredCities = [...citiesData];
    } else if (filter === 'popular') {
        appState.filteredCities = citiesData.filter(city => city.popular);
    } else if (filter === 'historical') {
        appState.filteredCities = citiesData.filter(city => city.historical);
    } else if (filter === 'coastal') {
        appState.filteredCities = citiesData.filter(city => city.coastal);
    }
    
    renderCities();
}

// اختيار مدينة
function selectCity(city) {
    appState.currentCity = city;
    
    // تحديث العنوان
    document.getElementById('currentCityTitle').innerHTML = `<i class="fas fa-city"></i> ${city.nameAr} (${city.name})`;
    document.getElementById('currentTopicTitle').textContent = 'اختر موضوعًا لعرض الأسئلة';
    
    // مسح الأسئلة السابقة
    appState.currentQuestions = [];
    renderQuestions();
    
    // إظهار قسم الأسئلة وإخفاء الأقسام الأخرى
    showSection('questions');
}

// اختيار موضوع
function selectTopic(topic) {
    if (!appState.currentCity) {
        alert('يرجى اختيار مدينة أولاً');
        document.getElementById('cities').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    appState.currentTopic = topic;
    
    // تحديث العنوان
    document.getElementById('currentTopicTitle').innerHTML = `<i class="${topic.icon}"></i> موضوع: ${topic.nameAr}`;
    
    // توليد أسئلة عشوائية لهذه المدينة والموضوع
    generateQuestionsForCityTopic();
    
    // إظهار قسم الأسئلة
    showSection('questions');
}

// توليد أسئلة للمدينة والموضوع المحددين
function generateQuestionsForCityTopic() {
    appState.currentQuestions = [];
    
    // توليد 4 أسئلة عشوائية
    const questionTemplates = [
        {
            question_ar: `ما أهم المعلومات حول ${appState.currentTopic.nameAr} في مدينة ${appState.currentCity.nameAr}؟`,
            question_en: `What are the main information about ${appState.currentTopic.name} in ${appState.currentCity.name}?`,
            answer_ar: `توفر مدينة ${appState.currentCity.nameAr} خدمات مميزة في مجال ${appState.currentTopic.nameAr}، حيث تضم العديد من الخيارات والمرافق التي تناسب مختلف احتياجات الزوار. تشمل هذه الخدمات أماكن معروفة وموثوقة تمتاز بجودة الخدمة والموقع الاستراتيجي. يُنصح الزوار بالتخطيط المسبق للزيارة، والاستعلام من مصادر موثوقة، والاستفادة من الخدمات المحلية لضمان تجربة مريحة وآمنة وممتعة.`,
            answer_en: `${appState.currentCity.name} provides distinctive services in the field of ${appState.currentTopic.name}, featuring many options and facilities that suit various visitor needs. These services include well-known and reliable places known for service quality and strategic location. Visitors are advised to plan their visit in advance, consult reliable sources, and utilize local services to ensure a comfortable, safe, and enjoyable experience.`
        },
        {
            question_ar: `كيف يمكن للزوار الاستفادة من خدمات ${appState.currentTopic.nameAr} في ${appState.currentCity.nameAr}؟`,
            question_en: `How can visitors benefit from ${appState.currentTopic.name} services in ${appState.currentCity.name}?`,
            answer_ar: `يمكن للزوار الاستفادة من خدمات ${appState.currentTopic.nameAr} في مدينة ${appState.currentCity.nameAr} من خلال عدة طرق. أولاً، يجب تحديد الاحتياجات والميزانية المخصصة. ثانياً، البحث عن الخيارات المتاحة عبر الإنترنت أو من خلال مكاتب المعلومات السياحية. ثالثاً، مراعاة مواقع الخدمات والقرب من الأماكن التي يخطط الزائر لزيارتها. أخيراً، قراءة التقييمات والمراجعات من الزوار السابقين لاتخاذ القرار المناسب.`,
            answer_en: `Visitors can benefit from ${appState.currentTopic.name} services in ${appState.currentCity.name} in several ways. First, determine needs and allocated budget. Second, research available options online or through tourist information offices. Third, consider service locations and proximity to places the visitor plans to visit. Finally, read ratings and reviews from previous visitors to make the appropriate decision.`
        },
        {
            question_ar: `ما هي التكاليف المتوقعة لخدمات ${appState.currentTopic.nameAr} في ${appState.currentCity.nameAr}؟`,
            question_en: `What are the expected costs for ${appState.currentTopic.name} services in ${appState.currentCity.name}?`,
            answer_ar: `تختلف تكاليف خدمات ${appState.currentTopic.nameAr} في مدينة ${appState.currentCity.nameAr} حسب نوع الخدمة ومستواها وموقعها. بشكل عام، تتوفر خيارات تناسب مختلف الميزانيات بدءاً من الخدمات الاقتصادية وصولاً إلى الخدمات الفاخرة. ينصح بالاستفسار المباشر عن الأسعار قبل الحجز، ومراعاة أن الأسعار قد تتغير حسب الموسم والطلب. تقدم بعض الجهات خصومات للحجوزات المبكرة أو للمجموعات.`,
            answer_en: `Costs for ${appState.currentTopic.name} services in ${appState.currentCity.name} vary depending on service type, level, and location. Generally, options are available to suit different budgets, ranging from economical services to luxury services. It is recommended to inquire directly about prices before booking, and note that prices may change according to season and demand. Some entities offer discounts for early bookings or groups.`
        },
        {
            question_ar: `ما هي نصائحكم للزوار فيما يتعلق ب${appState.currentTopic.nameAr} في ${appState.currentCity.nameAr}؟`,
            question_en: `What are your tips for visitors regarding ${appState.currentTopic.name} in ${appState.currentCity.name}?`,
            answer_ar: `ننصح الزوار فيما يتعلق ب${appState.currentTopic.nameAr} في مدينة ${appState.currentCity.nameAr} بالتالي: 1- التخطيط المسبق والبحث عن المعلومات الدقيقة. 2- التأكد من جودة الخدمات وسمعة مقدميها. 3- مراعاة العادات والتقاليد المحلية أثناء استخدام الخدمات. 4- الاحتفاظ بأرقام الطوارئ والمعلومات المهمة. 5- الاستفسار عن أي استفسارات من مكاتب المعلومات السياحية الرسمية التابعة لوزارة السياحة والصناعات التقليدية.`,
            answer_en: `We advise visitors regarding ${appState.currentTopic.name} in ${appState.currentCity.name} as follows: 1- Plan ahead and search for accurate information. 2- Ensure service quality and reputation of providers. 3- Respect local customs and traditions when using services. 4- Keep emergency numbers and important information. 5- Inquire about any questions from official tourist information offices of the Ministry of Tourism and Traditional Industries.`
        }
    ];
    
    questionTemplates.forEach((template, index) => {
        const question = {
            id: index + 1,
            city: appState.currentCity.name,
            cityAr: appState.currentCity.nameAr,
            topic: appState.currentTopic.name,
            topicAr: appState.currentTopic.nameAr,
            question_ar: template.question_ar,
            question_en: template.question_en,
            answer_ar: template.answer_ar,
            answer_en: template.answer_en,
            links: [
                "https://www.tourism.gov.ly",
                "https://www.tidc.gov.ly",
                "https://www.libyaheritage.org",
                "https://www.visittripoli.com"
            ]
        };
        
        appState.currentQuestions.push(question);
    });
    
    renderQuestions();
}

// عرض الأسئلة
function renderQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    
    if (!questionsContainer) return;
    
    questionsContainer.innerHTML = '';
    
    if (appState.currentQuestions.length === 0) {
        questionsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-question-circle"></i>
                <h3>لم يتم اختيار موضوع بعد</h3>
                <p>يرجى اختيار مدينة ثم موضوع لعرض الأسئلة المتعلقة بهما.</p>
                <p>يمكنك العودة إلى <a href="#cities" class="text-link">قائمة المدن</a> لاختيار مدينة.</p>
            </div>
        `;
        return;
    }
    
    appState.currentQuestions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.dataset.questionId = question.id;
        
        questionCard.innerHTML = `
            <div class="question-title">
                <span><i class="fas fa-question-circle"></i> ${question.question_ar}</span>
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="question-text">
                ${question.answer_ar.substring(0, 180)}...
            </div>
            <div class="question-links">
                <i class="fas fa-external-link-alt"></i> ${question.links.length} روابط مفيدة
            </div>
        `;
        
        questionCard.addEventListener('click', () => {
            openQuestionModal(question);
        });
        
        questionsContainer.appendChild(questionCard);
    });
}

// البحث
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchAr = document.getElementById('searchAr').checked;
    const searchEn = document.getElementById('searchEn').checked;
    
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('يرجى إدخال كلمة للبحث');
        searchInput.focus();
        return;
    }
    
    // البحث في بيانات العينة
    appState.searchResults = sampleQuestions.filter(question => {
        let matches = false;
        
        if (searchAr) {
            matches = matches || 
                question.question_ar.toLowerCase().includes(searchTerm) ||
                question.answer_ar.toLowerCase().includes(searchTerm) ||
                question.cityAr.toLowerCase().includes(searchTerm) ||
                question.topicAr.toLowerCase().includes(searchTerm);
        }
        
        if (searchEn) {
            matches = matches || 
                question.question_en.toLowerCase().includes(searchTerm) ||
                question.answer_en.toLowerCase().includes(searchTerm) ||
                question.city.toLowerCase().includes(searchTerm) ||
                question.topic.toLowerCase().includes(searchTerm);
        }
        
        return matches;
    });
    
    // إذا لم تكن هناك نتائج، عرض رسالة مناسبة
    if (appState.searchResults.length === 0) {
        displayNoResults(searchTerm);
    } else {
        displaySearchResults();
    }
    
    // الانتقال إلى قسم البحث
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

// عرض نتائج البحث
function displaySearchResults() {
    const searchResultsContainer = document.getElementById('searchResults');
    
    if (!searchResultsContainer) return;
    
    searchResultsContainer.innerHTML = '';
    
    appState.searchResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        resultItem.innerHTML = `
            <h4 class="result-title"><i class="fas fa-search"></i> ${result.question_ar}</h4>
            <div class="result-details">
                <span><i class="fas fa-city"></i> ${result.cityAr}</span>
                <span><i class="fas fa-list"></i> ${result.topicAr}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date().toLocaleDateString('ar-LY')}</span>
            </div>
            <div class="result-answer">
                ${result.answer_ar.substring(0, 250)}...
            </div>
            <button class="btn-secondary view-result-btn" data-question-id="${result.id}">
                <i class="fas fa-eye"></i> عرض التفاصيل الكاملة
            </button>
        `;
        
        searchResultsContainer.appendChild(resultItem);
    });
    
    // إضافة مستمعي الأحداث لأزرار عرض التفاصيل
    const viewButtons = document.querySelectorAll('.view-result-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.dataset.questionId);
            const question = sampleQuestions.find(q => q.id === questionId);
            
            if (question) {
                openQuestionModal(question);
            }
        });
    });
}

// عرض رسالة عدم وجود نتائج
function displayNoResults(searchTerm) {
    const searchResultsContainer = document.getElementById('searchResults');
    
    if (!searchResultsContainer) return;
    
    searchResultsContainer.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search-minus"></i>
            <h3>لم يتم العثور على نتائج لـ "${searchTerm}"</h3>
            <p>جرب استخدام كلمات بحث أخرى أو قم بتعديل خيارات البحث.</p>
            <p>يمكنك أيضاً:</p>
            <ul style="text-align: right; margin-top: 15px;">
                <li>التأكد من كتابة كلمة البحث بشكل صحيح</li>
                <li>استخدام كلمات بحث أكثر عمومية</li>
                <li>البحث في مواضيع محددة من خلال <a href="#topics" class="text-link">قائمة المواضيع</a></li>
                <li>تصفح <a href="#cities" class="text-link">المدن السياحية</a> للحصول على معلومات شاملة</li>
            </ul>
        </div>
    `;
}

// فتح نافذة عرض السؤال
function openQuestionModal(question) {
    const modal = document.getElementById('questionModal');
    const modalQuestionTitle = document.getElementById('modalQuestionTitle');
    const modalAnswerAr = document.getElementById('modalAnswerAr');
    const modalAnswerEn = document.getElementById('modalAnswerEn');
    const modalLinks = document.getElementById('modalLinks');
    
    // تعبئة البيانات
    modalQuestionTitle.innerHTML = `<i class="fas fa-question-circle"></i> ${question.question_ar}`;
    modalAnswerAr.textContent = question.answer_ar;
    modalAnswerEn.textContent = question.answer_en;
    
    // تعبئة الروابط
    modalLinks.innerHTML = '';
    question.links.forEach(link => {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item';
        
        // استخراج اسم النطاق للعرض
        const domain = link.replace('https://', '').replace('www.', '').split('/')[0];
        
        linkItem.innerHTML = `
            <a href="${link}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i>
                ${domain}
                <span class="link-url">(${link})</span>
            </a>
        `;
        
        modalLinks.appendChild(linkItem);
    });
    
    // إظهار النافذة
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // إعادة تعيين التبويب للعربية
    switchModalTab('ar');
}

// إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('questionModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// تبديل تبويب النافذة المنبثقة
function switchModalTab(lang) {
    // تحديث أزرار التبويب
    const modalTabs = document.querySelectorAll('.modal-tab');
    modalTabs.forEach(tab => {
        if (tab.dataset.lang === lang) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // تحديث محتوى التبويب
    const tabContents = document.querySelectorAll('.modal-tab-content');
    tabContents.forEach(content => {
        if (content.id === `tab${lang.charAt(0).toUpperCase() + lang.slice(1)}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// إظهار قسم معين وإخفاء الآخرين
function showSection(sectionId) {
    // جميع الأقسام الرئيسية
    const sections = ['home', 'cities', 'topics', 'search', 'services', 'questions', 'about'];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            if (id === sectionId) {
                section.style.display = 'block';
                // تمرير إلى القسم
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                section.style.display = 'none';
            }
        }
    });
    
    // تحديث القائمة النشطة
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// تحديث الإحصائيات
function updateStats() {
    // إجمالي المدن
    document.getElementById('statCities').textContent = citiesData.length;
    
    // إجمالي المواضيع
    document.getElementById('statTopics').textContent = topicsData.length;
    
    // إجمالي الأسئلة (40 سؤال لكل مدينة × 6 مدن)
    document.getElementById('statQuestions').textContent = citiesData.length * 40;
    
    // إجمالي الروابط (3 روابط لكل سؤال)
    document.getElementById('statLinks').textContent = citiesData.length * 40 * 3;
}

// تصدير البيانات (وظيفة إضافية)
function exportData() {
    const data = {
        ministry: "وزارة السياحة والصناعات التقليدية",
        center: "مركز المعلومات والتوثيق السياحي",
        cities: citiesData,
        topics: topicsData,
        sampleQuestions: sampleQuestions,
        exportDate: new Date().toISOString(),
        copyright: "تصميم وبرمجة مركز المعلومات والتوثيق السياحي © 2026"
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = 'tidc-tourism-data.json';
    downloadLink.click();
}

// إضافة رابط تصدير البيانات (لأغراض التطوير)
function addExportButton() {
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'تصدير البيانات';
    exportBtn.className = 'btn-secondary';
    exportBtn.style.position = 'fixed';
    exportBtn.style.bottom = '20px';
    exportBtn.style.left = '20px';
    exportBtn.style.zIndex = '1000';
    exportBtn.style.fontSize = '0.8rem';
    exportBtn.style.padding = '8px 15px';
    
    exportBtn.addEventListener('click', exportData);
    
    document.body.appendChild(exportBtn);
}

// تهيئة زر التصدير (لأغراض التطوير فقط)
// addExportButton();
