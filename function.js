(function() {
    const langSwitcherHtml = `
        <div class="lang-switcher flex items-center gap-2 ml-4 px-3 py-1.5 border border-[var(--border)] rounded-full text-[9px] tracking-[2px]">
            <button onclick="switchLanguage('en')" class="lang-btn hover:text-[var(--g1)] transition-colors" id="btn-en">EN</button>
            <span class="text-[var(--dimmer)]">|</span>
            <button onclick="switchLanguage('fr')" class="lang-btn hover:text-[var(--g1)] transition-colors" id="btn-fr">FR</button>
            <span class="text-[var(--dimmer)]">|</span>
            <button onclick="switchLanguage('ar')" class="lang-btn hover:text-[var(--g1)] transition-colors" id="btn-ar">AR</button>
        </div>
    `;

    window.switchLanguage = function(lang) {
        localStorage.setItem('preferredLang', lang);
        applyLanguage(lang);
    };

    function applyLanguage(lang) {
        const dict = window.translations[lang];
        if (!dict) return;

        // Apply RTL/LTR
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update active state of buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('text-[var(--g1)]', 'font-bold');
            btn.classList.add('text-[var(--dim)]');
        });
        const activeBtn = document.getElementById(`btn-${lang}`);
        if (activeBtn) {
            activeBtn.classList.add('text-[var(--g1)]', 'font-bold');
            activeBtn.classList.remove('text-[var(--dim)]');
        }

        // Adjust fonts for Arabic
        if (lang === 'ar') {
            document.body.style.fontFamily = "'Cormorant Garamond', 'DM Mono', serif";
        } else {
            document.body.style.fontFamily = "'DM Mono', monospace";
        }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        // Inject switcher into nav
        const nav = document.getElementById('nav');
        if (nav) {
            const badge = nav.querySelector('.nbadge');
            if (badge) {
                badge.insertAdjacentHTML('afterend', langSwitcherHtml);
            }
        }

        const savedLang = localStorage.getItem('preferredLang') || 'en';
        applyLanguage(savedLang);
    });
})();
