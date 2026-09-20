document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // 2. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const setTheme = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.querySelectorAll('#theme-toggle-dark-icon, .theme-toggle-dark-icon').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('#theme-toggle-light-icon, .theme-toggle-light-icon').forEach(el => el.classList.remove('hidden'));
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.querySelectorAll('#theme-toggle-light-icon, .theme-toggle-light-icon').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('#theme-toggle-dark-icon, .theme-toggle-dark-icon').forEach(el => el.classList.remove('hidden'));
        }
    };

    // Initialize Theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle Theme
    document.querySelectorAll('#theme-toggle, .theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            setTheme(!isDark);
        });
    });

    // 3. RTL Toggle Logic
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    
    const setRTL = (isRTL) => {
        if (isRTL) {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar'); // Or any RTL language
            localStorage.setItem('dir', 'rtl');
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', 'en');
            localStorage.setItem('dir', 'ltr');
        }
    };

    const savedDir = localStorage.getItem('dir');
    if (savedDir === 'rtl') {
        setRTL(true);
    } else {
        setRTL(false);
    }

    document.querySelectorAll('#rtl-toggle, .rtl-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isRTL = htmlElement.getAttribute('dir') === 'rtl';
            setRTL(!isRTL);
        });
    });

    // 4. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (menuIconOpen && menuIconClose) {
                menuIconOpen.classList.toggle('hidden');
                menuIconClose.classList.toggle('hidden');
            }
        });
    }

    // 5. Dashboard Sidebar Mobile Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const dashboardSidebar = document.getElementById('dashboard-sidebar');
    if(sidebarToggle && dashboardSidebar) {
        sidebarToggle.addEventListener('click', () => {
            dashboardSidebar.classList.toggle('-translate-x-full');
            // RTL specific logic if needed can be added based on dir
            if(htmlElement.getAttribute('dir') === 'rtl') {
                dashboardSidebar.classList.toggle('translate-x-full');
            }
        });
    }
});
