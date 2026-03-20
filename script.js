const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const translations = {
  am: {
    pageTitle: 'Kalkidan | የእኔ ሙቀት',
    pageDescription: 'የካልኪዳን የአንድ ገጽ ድህረ ገጽ',
    navReach: 'አግኙኝ ✨',
    heroEyebrow: 'የኔ ቆንጆ 🔥',
    heroTitle: 'ሰላም፣ እኔ ቃልኪዳን ነኝ 💖',
    heroSubtitle:
      'እንቅስቃሴዬ በለስላሳ ጉልበት፣ በድፍረት እና በጥቂት ምስጢራዊነት የታጀበ ነው። አሪፍ ሁኔታዎችን ከቀልድና ከፈገግታ ጋር የምትወድ ከሆነ፣ ልክ እኔ መሆን የምፈልግበት ቦታ ላይ ነህ ✨',
    heroCtaPrimary: 'አገልግሎቶቼን እይ 🌟',
    heroCtaSecondary: 'መልዕክት ላክልኝ 💬',
    servicesEyebrow: 'የማቀርባቸው አገልግሎቶች 🎀',
    servicesTitle: 'አገልግሎቶቼ 💫',
    servicesSubtitle: 'የምሰጥህ ነገሮች በሙሉ በሞቅታ የተሞሉ እና ወደ እኔ ይበልጥ እንዲያቀርቡህ ተደርገው የተዘጋጁ ናቸው 🤍',
    service1Title: 'ጣፋጭ ወሬ 💬',
    service2Title: 'ቀጥታ የቪዲዮ ጥሪ 📹',
    service3Title: 'የድምፅ ጥሪ 🎙️',
    service4Title: 'ፎቶ + ወሬ 📸',
    service5Title: 'ስቲከር + ፎቶ 🧸',
    contactEyebrow: 'ወደ እኔ ለመቅረብ 🤍',
    contactTitle: 'በቀጥታ አግኙኝ 📲',
    callMe: 'ደውሉልኝ 📞',
    textTelegram: 'በቴሌግራም ✉️',
    contactClosing: 'እወድሃለሁ የኔ ማር! 🍯',
    footerText: 'በፍቅር የተዘጋጀ በKalkidan 💕 · ©'
  },
  en: {
    pageTitle: 'Kalkidan | My Cozy Space',
    pageDescription: 'Kalkidan personal one-page website',
    navReach: 'Reach Me ✨',
    heroEyebrow: 'My Soft Temptation 🔥',
    heroTitle: 'Hey, I am Kalkidan 💖',
    heroSubtitle:
      'I move with soft energy, bold confidence, and a little mystery. If you love cozy moods with a teasing touch, you are exactly where I want you ✨',
    heroCtaPrimary: 'See My Services 🌟',
    heroCtaSecondary: 'Message Me 💬',
    servicesEyebrow: 'What I Offer 🎀',
    servicesTitle: 'My Services 💫',
    servicesSubtitle: 'Everything I offer is warm, personal, and designed to make you feel close to me 🤍',
    service1Title: 'Sweet Chat 💬',
    service2Title: 'Live Video 📹',
    service3Title: 'Voice Call 🎙️',
    service4Title: 'Photo + Chat 📸',
    service5Title: 'Sticker + Photo 🧸',
    contactEyebrow: 'Come Closer 🤍',
    contactTitle: 'Reach Me Directly 📲',
    callMe: 'Call Me 📞',
    textTelegram: 'Text Me On Telegram ✉️',
    contactClosing: 'I love you babe! 🍯💖',
    footerText: 'Made with love by Kalkidan 💕 · ©'
  }
};

const langToggle = document.getElementById('langToggle');
let currentLang = 'am';

function applyLanguage(lang) {
  const dict = translations[lang] || translations.am;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', dict.pageDescription);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === 'am' ? 'English 🌐' : 'አማርኛ 🌐';
    langToggle.setAttribute(
      'aria-label',
      lang === 'am' ? 'Switch to English' : 'Switch to Amharic'
    );
  }
}

applyLanguage('am');

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'am' ? 'en' : 'am';
    applyLanguage(nextLang);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
