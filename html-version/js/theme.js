/* ============================================
   THEME SWITCHER (Dark/Light Mode)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    // Apply saved theme or default to dark
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateIcon('light');
    }

    // Toggle theme on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            let currentTheme = 'dark';
            if (document.body.classList.contains('light-theme')) {
                currentTheme = 'light';
            }
            
            // Save to localStorage
            localStorage.setItem('portfolio-theme', currentTheme);
            
            // Update icon
            updateIcon(currentTheme);
        });
    }

    function updateIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.innerText = '🌙'; // Tampilkan bulan (untuk balik ke dark)
        } else {
            themeIcon.innerText = '☀️'; // Tampilkan matahari (untuk ubah ke light)
        }
    }
});
