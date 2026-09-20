/**
 * Tailwind CSS Configuration via CDN
 */
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#6b21a8', // Purple
                'primary-dark': '#4c1d95',
                secondary: '#fbbf24', // Amber/Gold
                'secondary-dark': '#d97706',
                dark: '#0f172a',
                'dark-card': '#1e293b',
                light: '#f8fafc',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'theater': '0 10px 40px -10px rgba(107, 33, 168, 0.5)',
            }
        }
    }
}
