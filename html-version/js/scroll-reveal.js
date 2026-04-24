/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tambahkan class 'reveal' ke elemen yang ingin dianimasikan
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    const skillTags = document.querySelectorAll('.tag');
    const contactCards = document.querySelectorAll('.contact-card');

    // Helper untuk membungkus elemen
    function addRevealClass(elements, delayIncrement = 0) {
        elements.forEach((el, index) => {
            el.classList.add('reveal');
            if (delayIncrement > 0) {
                el.style.transitionDelay = `${index * delayIncrement}s`;
            }
        });
    }

    // Hanya tambahkan ke section yang punya padding (mengabaikan hero yang animasi awalnya beda)
    sections.forEach(sec => {
        if (sec.id !== 'hero') sec.classList.add('reveal');
    });

    addRevealClass(projectCards, 0.1);
    addRevealClass(skillTags, 0.02);
    addRevealClass(contactCards, 0.15);

    // 2. Intersection Observer Setup
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animasi hanya 1x jalan
            }
        });
    }, revealOptions);

    // 3. Observe semua elemen '.reveal'
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => {
        revealOnScroll.observe(el);
    });
});
