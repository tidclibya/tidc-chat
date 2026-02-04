// بيانات المدن والمواضيع
const citiesData = [
    {
        id: 1,
        name: "Tripoli",
        nameAr: "طرابلس",
        description: "عاصمة ليبيا وأكبر مدنها، تتميز بتاريخ عريق ومعالم أثرية وسياحية متنوعة",
        topics: 10,
        questions: 40,
        color: "#008753",
        icon: "fas fa-landmark",
        popular: true,
        historical: true
    },
    {
        id: 2,
        name: "Benghazi",
        nameAr: "بنغازي",
        description: "ثاني أكبر مدينة في ليبيا، تعرف بـ\"عروس المتوسط\" وتتميز بموقعها الساحلي",
        topics: 10,
        questions: 40,
        color: "#e70013",
        icon: "fas fa-umbrella-beach",
        popular: true,
        historical: true
    },
    {
        id: 3,
        name: "Sabratha",
        nameAr: "صبراتة",
        description: "مدينة تاريخية تضم آثار رومانية مهمة، مدرجة على قائمة اليونسكو للتراث العالمي",
        topics: 10,
        questions: 40,
        color: "#f39c12",
        icon: "fas fa-history",
        popular: false,
        historical: true
    },
    {
        id: 4,
        name: "Leptis Magna",
        nameAr: "لبدة الأثرية",
        description: "أهم وأكبر المدن الأثرية الرومانية في ليبيا، إحدى عجائب العالم الروماني",
        topics: 10,
        questions: 40,
        color: "#8e44ad",
        icon: "fas fa-monument",
        popular: true,
        historical: true
    },
    {
        id: 5,
        name: "Ghadames",
        nameAr: "غدامس",
        description: "مدينة الواحات التاريخية، تُعرف بـ\"لؤلؤة الصحراء\" وتتميز بطراز معماري فريد",
        topics: 10,
        questions: 40,
        color: "#d35400",
        icon: "fas fa-sun",
        popular: true,
        historical: true
    },
    {
        id: 6,
        name: "Shahat",
        nameAr: "شحات",
        description: "مدينة تاريخية تضم موقع قورينا الأثري، عاصمة الإقليم الشرقي في العهد الروماني",
        topics: 10,
        questions: 40,
        color: "#16a085",
        icon: "fas fa-mountain",
        popular: false,
        historical: true
    }
];

const topicsData = [
    {
        id: 1,
        name: "Hotels",
        nameAr: "الفنادق",
        description: "معلومات عن الفنادق والإقامة",
        icon: "fas fa-hotel",
        questions: 24
    },
    {
        id: 2,
        name: "Attractions",
        nameAr: "المعالم السياحية",
        description: "أهم المعالم والمواقع السياحية",
        icon: "fas fa-camera-retro",
        questions: 24
    },
    {
        id: 3,
        name: "Transport",
        nameAr: "النقل",
        description: "وسائل النقل والمواصلات",
        icon: "fas fa-bus",
        questions: 24
    },
    {
        id: 4,
        name: "Internet",
        nameAr: "الاتصالات",
        description: "خدمات الإنترنت والاتصالات",
        icon: "fas fa-wifi",
        questions: 24
    },
    {
        id: 5,
        name: "Restaurants",
        nameAr: "المطاعم",
        description: "أشهر المطاعم والمأكولات",
        icon: "fas fa-utensils",
        questions: 24
    },
    {
        id: 6,
        name: "Tips",
        nameAr: "نصائح السفر",
        description: "نصائح وإرشادات للزوار",
        icon: "fas fa-lightbulb",
        questions: 24
    },
    {
        id: 7,
        name: "Security",
        nameAr: "الأمن",
        description: "معلومات أمنية وإرشادات السلامة",
        icon: "fas fa-shield-alt",
        questions: 24
    },
    {
        id: 8,
        name: "Visa",
        nameAr: "التأشيرة",
        description: "معلومات التأشيرة ومتطلبات الدخول",
        icon: "fas fa-passport",
        questions: 24
    },
    {
        id: 9,
        name: "Culture",
        nameAr: "الثقافة",
        description: "العادات والتقاليد والثقافة المحلية",
        icon: "fas fa-theater-masks",
        questions: 24
    },
    {
        id: 10,
        name: "Shopping",
        nameAr: "التسوق",
        description: "أماكن التسوق والمنتجات المحلية",
        icon: "fas fa-shopping-bag",
        questions: 24
    }
];

// بيانات الأسئلة (مثال)
const sampleQuestions = [
    {
        id: 1,
        city: "Tripoli",
        topic: "Hotels",
        question_ar: "ما هي أفضل الفنادق الفاخرة في طرابلس؟",
        question_en: "What are the best luxury hotels in Tripoli?",
        answer_ar: "من أبرز الفنادق الفاخرة في طرابلس: فندق كورنثيا طرابلس (Corinthia Hotel Tripoli) وهو فندق 5 نجوم يطل على البحر، وفندق الروشة (Al Rosha Hotel) الذي يوفر إطلالة رائعة على المدينة، وفندق باب البحر (Bab Al Bahr Hotel). تقدم هذه الفنادق خدمات فاخرة وتضم مرافق مثل حمامات السباحة والمطاعم الفاخرة ومراكز اللياقة البدنية.",
        answer_en: "Prominent luxury hotels in Tripoli include: Corinthia Hotel Tripoli (a 5-star hotel overlooking the sea), Al Rosha Hotel (offering stunning city views), and Bab Al Bahr Hotel. These hotels offer luxury services and facilities such as swimming pools, fine dining restaurants, and fitness centers.",
        links: ["https://www.corinthia.com/tripoli", "https://www.alroshahotel.com", "https://www.babal-bahrhotel.ly"]
    },
    {
        id: 2,
        city: "Tripoli",
        topic: "Attractions",
        question_ar: "ما هي أهم المعالم السياحية في طرابلس؟",
        question_en: "What are the main tourist attractions in Tripoli?",
        answer_ar: "من أهم المعالم السياحية في طرابلس: قلعة السراي الحمراء (Tripoli Castle) التي تعود للقرن السابع عشر، متحف السرايا الحمراء، السوق القديم (المدينة القديمة) الذي يمتد تاريخه لقرون، قوس ماركوس أوريليوس الروماني، وكاتدرائية طرابلس. كما تشتهر طرابلس بشواطئها الجميلة مثل شاطئ الهانيبة.",
        answer_en: "Main tourist attractions in Tripoli include: Tripoli Castle (dating back to the 17th century), Al-Saraya Al-Hamra Museum, the Old Market (Old City) with centuries of history, the Arch of Marcus Aurelius, and Tripoli Cathedral. Tripoli is also famous for its beautiful beaches like Al-Haniba Beach.",
        links: ["https://www.tripoli.gov.ly/tourism", "https://www.libyanheritage.org", "https://www.tripadvisor.com/Tourism-g293807-Tripoli_Tripoli_District-Vacations.html"]
    },
    {
        id: 3,
        city: "Benghazi",
        topic: "Hotels",
        question_ar: "ما هي خيارات الإقامة المتاحة في بنغازي؟",
        question_en: "What accommodation options are available in Benghazi?",
        answer_ar: "في بنغازي، تتوفر عدة خيارات للإقامة تناسب مختلف الميزانيات. من الفنادق الفاخرة: فندق تيبستي بنغازي (Tibesti Hotel Benghazi) وفندق الإدارة (Uzu Hotel). كما توجد فنادق متوسطة المستوى مثل فندق بنينا (Benina Hotel) وفندق الجولات (Julan Hotel). ينصح بالحجز المسبق خاصة في مواسم الذروة.",
        answer_en: "In Benghazi, several accommodation options are available to suit different budgets. Luxury hotels include: Tibesti Hotel Benghazi and Uzu Hotel. There are also mid-range hotels such as Benina Hotel and Julan Hotel. Advance booking is recommended, especially during peak seasons.",
        links: ["https://www.tibestihotel.com", "https://www.uzuhotel.com", "https://www.booking.com/city/ly/benghazi"]
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
            <div class="city-image" style="background-color: ${city.color};">
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
    }
    
    renderCities();
}

// اختيار مدينة
function selectCity(city) {
    appState.currentCity = city;
    
    // تحديث العنوان
    document.getElementById('currentCityTitle').textContent = `${city.nameAr} (${city.name})`;
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
    document.getElementById('currentTopicTitle').textContent = `موضوع: ${topic.nameAr}`;
    
    // توليد أسئلة عشوائية لهذه المدينة والموضوع
    generateQuestionsForCityTopic();
    
    // إظهار قسم الأسئلة
    showSection('questions');
}

// توليد أسئلة للمدينة والموضوع المحددين
function generateQuestionsForCityTopic() {
    appState.currentQuestions = [];
    
    // توليد 4 أسئلة عشوائية (في التطبيق الحقيقي، سيتم جلبها من قاعدة البيانات)
    for (let i = 1; i <= 4; i++) {
        const question = {
            id: i,
            city: appState.currentCity.name,
            cityAr: appState.currentCity.nameAr,
            topic: appState.currentTopic.name,
            topicAr: appState.currentTopic.nameAr,
            question_ar: `ما أهم المعلومات حول ${appState.currentTopic.nameAr} في مدينة ${appState.currentCity.nameAr}؟ (سؤال ${i})`,
            question_en: `What are the main information about ${appState.currentTopic.name} in ${appState.currentCity.name}? (Question ${i})`,
            answer_ar: `توفر مدينة ${appState.currentCity.nameAr} خدمات جيدة في مجال ${appState.currentTopic.nameAr}، وتشمل أماكن معروفة ومرافق مناسبة للزوار. يُنصح بالتخطيط المسبق، والاستعلام من مصادر موثوقة، والاستفادة من الخدمات المحلية لضمان تجربة مريحة وآمنة.`,
            answer_en: `${appState.currentCity.name} provides good services in the field of ${appState.currentTopic.name}, including well-known places and facilities for visitors. It is recommended to plan ahead, consult reliable sources, and use local services for a safe and comfortable experience.`,
            links: ["https://www.booking.com/", "https://www.tripadvisor.com/", "https://maps.google.com/"]
        };
        
        appState.currentQuestions.push(question);
    }
    
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
                ${question.answer_ar.substring(0, 150)}...
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
        return;
    }
    
    // في التطبيق الحقيقي، سيتم البحث في قاعدة البيانات
    // هنا نستخدم بيانات عينة للبحث
    appState.searchResults = sampleQuestions.filter(question => {
        let matches = false;
        
        if (searchAr) {
            matches = matches || 
                question.question_ar.toLowerCase().includes(searchTerm) ||
                question.answer_ar.toLowerCase().includes(searchTerm);
        }
        
        if (searchEn) {
            matches = matches || 
                question.question_en.toLowerCase().includes(searchTerm) ||
                question.answer_en.toLowerCase().includes(searchTerm);
        }
        
        return matches;
    });
    
    displaySearchResults();
    
    // الانتقال إلى قسم البحث
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

// عرض نتائج البحث
function displaySearchResults() {
    const searchResultsContainer = document.getElementById('searchResults');
    
    if (!searchResultsContainer) return;
    
    searchResultsContainer.innerHTML = '';
    
    if (appState.searchResults.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب استخدام كلمات بحث أخرى أو قم بتعديل خيارات البحث.</p>
            </div>
        `;
        return;
    }
    
    appState.searchResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        resultItem.innerHTML = `
            <h4 class="result-title">${result.question_ar}</h4>
            <div class="result-details">
                <span><i class="fas fa-city"></i> ${result.city}</span> |
                <span><i class="fas fa-list"></i> ${result.topicAr}</span>
            </div>
            <div class="result-answer">
                ${result.answer_ar.substring(0, 200)}...
            </div>
            <button class="btn-secondary view-result-btn" data-question-id="${result.id}">
                عرض التفاصيل
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

// فتح نافذة عرض السؤال
function openQuestionModal(question) {
    const modal = document.getElementById('questionModal');
    const modalQuestionTitle = document.getElementById('modalQuestionTitle');
    const modalAnswerAr = document.getElementById('modalAnswerAr');
    const modalAnswerEn = document.getElementById('modalAnswerEn');
    const modalLinks = document.getElementById('modalLinks');
    
    // تعبئة البيانات
    modalQuestionTitle.textContent = question.question_ar;
    modalAnswerAr.textContent = question.answer_ar;
    modalAnswerEn.textContent = question.answer_en;
    
    // تعبئة الروابط
    modalLinks.innerHTML = '';
    question.links.forEach(link => {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item';
        
        linkItem.innerHTML = `
            <a href="${link}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i>
                ${link}
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
    const sections = ['home', 'cities', 'topics', 'search', 'questions', 'about'];
    
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
        cities: citiesData,
        topics: topicsData,
        sampleQuestions: sampleQuestions,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = 'libya-tourism-data.json';
    downloadLink.click();
}

// إضافة زر التصدير (لأغراض التطوير)
function addExportButton() {
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'تصدير البيانات';
    exportBtn.className = 'btn-secondary';
    exportBtn.style.position = 'fixed';
    exportBtn.style.bottom = '20px';
    exportBtn.style.left = '20px';
    exportBtn.style.zIndex = '1000';
    
    exportBtn.addEventListener('click', exportData);
    
    document.body.appendChild(exportBtn);
}

// تهيئة زر التصدير (لأغراض التطوير فقط)
// addExportButton();