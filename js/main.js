/* =====================================================
   MAIN JAVASCRIPT – Excellence Public School
   Works on ALL pages safely
===================================================== */

/* -------------------------
   LANGUAGE TRANSLATIONS
------------------------- */
const translations = {
    en: {
        schoolName: "Excellence Public School",
        heroTitle: "Empowering Young Minds",
        heroSubtitle: "Where Excellence Meets Education",
        exploreBtn: "Explore More",
        students: "Students",
        faculty: "Faculty Members",
        successRate: "Success Rate",
        yearsLegacy: "Years Legacy"
    },
    hi: {
        schoolName: "एक्सीलेंस पब्लिक स्कूल",
        heroTitle: "युवा मन को सशक्त बनाना",
        heroSubtitle: "जहां उत्कृष्टता शिक्षा से मिलती है",
        exploreBtn: "और जानें",
        students: "छात्र",
        faculty: "संकाय सदस्य",
        successRate: "सफलता दर",
        yearsLegacy: "वर्षों की विरासत"
    }
};

let currentLanguage = "en";

/* -------------------------
   LANGUAGE SWITCHER
------------------------- */
const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");
const currentLang = document.getElementById("currentLang");
const currentFlag = document.getElementById("currentFlag");

if (languageBtn && languageDropdown) {
    languageBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        languageDropdown.classList.remove("active");
    });

    document.querySelectorAll(".language-option").forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang");
            changeLanguage(lang);

            document.querySelectorAll(".language-option")
                .forEach(o => o.classList.remove("selected"));

            option.classList.add("selected");
            languageDropdown.classList.remove("active");
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    if (currentFlag && currentLang) {
        currentFlag.textContent = lang === "en" ? "🇬🇧" : "🇮🇳";
        currentLang.textContent = lang === "en" ? "English" : "हिंदी";
    }

    /* Logo text */
    const logoText = document.querySelector(".logo span");
    if (logoText) logoText.textContent = t.schoolName;

    /* Navigation */
    document.querySelectorAll(".nav-links a").forEach(link => {
        const newText = link.getAttribute(`data-${lang}`);
        if (newText) link.textContent = newText;
    });

    /* Hero section (home only) */
    const heroTitle = document.querySelector(".hero h1");
    const heroSubtitle = document.querySelector(".hero p");
    const heroBtn = document.querySelector(".hero .btn");

    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroBtn) heroBtn.textContent = t.exploreBtn;

    /* Stats (home only) */
    const statLabels = document.querySelectorAll(".stat-label");
    if (statLabels.length >= 4) {
        statLabels[0].textContent = t.students;
        statLabels[1].textContent = t.faculty;
        statLabels[2].textContent = t.successRate;
        statLabels[3].textContent = t.yearsLegacy;
    }

     document.querySelectorAll("[data-en]").forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
}

/* -------------------------
   MOBILE MENU
------------------------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    /* Close menu when link clicked (mobile) */
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

/* -------------------------
   SMOOTH SCROLL (ONLY for same-page anchors)
------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* -------------------------
   SCROLL ANIMATIONS
------------------------- */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll(
    ".stat-card, .academic-card, .event-card, .employee-card"
).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});

/* -------------------------
   PAGE LOAD FADE-IN (optional polish)
------------------------- */
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
/* =========================
   HERO IMAGE SLIDER (FIXED)
========================= */

const hero = document.querySelector(".hero");

if (hero) {
    const images = [
        "images/image1.jpeg",
        "images/image2.jpeg",
        "images/image3.jpeg"
    ];

    let index = 0;

   
    hero.style.backgroundImage = `url('${images[0]}')`;

    setInterval(() => {
        index = (index + 1) % images.length;
        hero.style.backgroundImage = `url('${images[index]}')`;
    }, 4000);
}

