// Parse URL parameters for language selection
const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang') || 'en';

// Set language and direction on the HTML tag
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

// Update switcher link
const langSwitchBtn = document.getElementById('langSwitchBtn');
if (langSwitchBtn) {
    langSwitchBtn.href = `?lang=${currentLang === 'ar' ? 'en' : 'ar'}`;
    langSwitchBtn.textContent = currentLang === 'ar' ? 'English' : 'عربي';
}

// Dictionary
const translations = {
    "en": {
        "logo": "SYS WMS Pro",
        "contactBtn": "Contact Support",
        "exploreBtn": "Explore Features",
        "learnMore": "Learn More",
        "morning": "Good Morning",
        "afternoon": "Good Afternoon",
        "evening": "Good Evening",
        "welcome": "to the Comprehensive Worker Management System!",
        "heroSubtitle": "Your integrated platform for registering worker data, tracking daily attendance, and organizing salaries and advances with ease and professionalism.",
        "card1Title": "Fast & Secure Attendance",
        "card1Desc": "Use the barcode scanning system to log workers in seconds, with real-time, accurate, and highly secure overtime management.",
        "card2Title": "Cloud Synchronized",
        "card2Desc": "All your worker data and logs seamlessly integrate with your central Google Sheets database for easy analytics and safe-keeping.",
        "card3Title": "Scalable Performance",
        "card3Desc": "Designed to scale dynamically whether you have 10 workers or a massive 10,000-person enterprise operation.",
        "modalTitle": "Get in Touch",
        "modalDesc": "Our support team is available 24/7 to help you efficiently manage your workforce.",
        "modalEmail": "Email:",
        "modalPhone": "Phone:",
        "whatsapp": "(WhatsApp Included)",
        "footer": "SYS WMS Pro. All rights reserved."
    },
    "ar": {
        "logo": "نظام إدارة العمال",
        "contactBtn": "اتصل بالدعم",
        "exploreBtn": "استكشف الميزات",
        "learnMore": "اعرف المزيد",
        "morning": "صباح الخير",
        "afternoon": "مساء الخير",
        "evening": "مساء الخير",
        "welcome": "مرحباً بك في نظام إدارة العمال الشامل!",
        "heroSubtitle": "منصتك المتكاملة لتسجيل بيانات العمال، تتبع الحضور اليومي، وتنظيم الرواتب والسلف بكل سهولة واحترافية.",
        "card1Title": "تسجيل حضور سريع وآمن",
        "card1Desc": "استخدم نظام مسح الباركود لتسجيل دخول العمال في ثوانٍ، مع إدارة لحظية لساعات العمل الإضافية بدقة وأمان تام.",
        "card2Title": "مزامنة سحابية",
        "card2Desc": "تتكامل جميع بيانات العمال وسجلاتهم بسلاسة مع قاعدة بيانات Google Sheets المركزية لسهولة التحليل والحفظ الآمن.",
        "card3Title": "أداء قابل للتوسع",
        "card3Desc": "مصمم ليتوسع ديناميكيًا سواء كان لديك 10 عمال أو عملية مؤسسية ضخمة تضم 10,000 شخص.",
        "modalTitle": "تواصل معنا",
        "modalDesc": "فريق الدعم متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في إدارة القوى العاملة بكفاءة.",
        "modalEmail": "البريد الإلكتروني:",
        "modalPhone": "الهاتف:",
        "whatsapp": "(متاح على واتساب)",
        "footer": "جميع الحقوق محفوظة."
    }
};

const t = translations[currentLang] || translations["en"];

// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Apply translations
document.getElementById('t-logo').textContent = t.logo;
document.getElementById('t-contactBtn').textContent = t.contactBtn;
document.getElementById('t-exploreBtn').textContent = t.exploreBtn;
document.getElementById('t-learnMore').textContent = t.learnMore;
document.getElementById('t-heroSubtitle').textContent = t.heroSubtitle;
document.getElementById('t-card1Title').textContent = t.card1Title;
document.getElementById('t-card1Desc').textContent = t.card1Desc;
document.getElementById('t-card2Title').textContent = t.card2Title;
document.getElementById('t-card2Desc').textContent = t.card2Desc;
document.getElementById('t-card3Title').textContent = t.card3Title;
document.getElementById('t-card3Desc').textContent = t.card3Desc;
document.getElementById('t-modalTitle').textContent = t.modalTitle;
document.getElementById('t-modalDesc').textContent = t.modalDesc;
document.getElementById('t-modalEmail').textContent = t.modalEmail;
document.getElementById('t-modalPhone').textContent = t.modalPhone;
document.getElementById('t-whatsapp').textContent = t.whatsapp;
document.getElementById('t-footer').textContent = (currentLang === "ar" ? t.logo + " " + t.footer : t.logo + ". " + t.footer);

// Dynamic greeting
window.onload = function () {
    const hour = new Date().getHours();
    let greetingPrefix = t.morning;
    if (hour >= 18) greetingPrefix = t.evening;
    else if (hour >= 12) greetingPrefix = t.afternoon;

    const titleEl = document.getElementById('greeting');
    if (currentLang === "ar") {
        titleEl.textContent = t.welcome;
    } else {
        titleEl.textContent = greetingPrefix + " " + t.welcome;
    }
};

// UI Interactions
function alertCard(featureName) {
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    
    if (btn.tagName === 'BUTTON') {
        btn.innerHTML = currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...';
        setTimeout(() => btn.innerHTML = originalText, 800);
    } else {
        const originalBg = btn.style.backgroundColor;
        btn.style.backgroundColor = '#fff0d4';
        setTimeout(() => btn.style.backgroundColor = originalBg, 300);
    }
}

// Modal Logic
const modal = document.getElementById("contactModal");
function openModal() { modal.style.display = "block"; }
function closeModal() { modal.style.display = "none"; }
window.onclick = function (event) {
    if (event.target == modal) closeModal();
}
