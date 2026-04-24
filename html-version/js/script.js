/* ============================================
   PORTFOLIO WEBSITE - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------
       1. MOBILE NAVIGATION TOGGLE
       ---------------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Tutup menu saat link di-klik
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    /* ----------------------------------------
       2. HEADER SCROLL EFFECT
       ---------------------------------------- */
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    function handleHeaderScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll Progress Bar calculation
        const scrollTotal = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTotal / height) * 100;
        
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Back to top button visibility
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY >= 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Back to top click handler
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ----------------------------------------
       3. ACTIVE NAV LINK ON SCROLL
       ---------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function highlightNavLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink, { passive: true });

    /* ----------------------------------------
       4. SCROLL ANIMATIONS (Intersection Observer)
       ---------------------------------------- */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delay
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    /* ----------------------------------------
       5. STAT COUNTER ANIMATION
       ---------------------------------------- */
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        function updateCount() {
            current += step;
            if (current >= target) {
                el.textContent = target;
                return;
            }
            el.textContent = Math.floor(current);
            requestAnimationFrame(updateCount);
        }

        updateCount();
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));

    /* ----------------------------------------
       6. PROJECT FILTER
       ---------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ----------------------------------------
       7. SMOOTH SCROLL for anchor links
       ---------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ----------------------------------------
       7. PRELOADER & TERMINAL ANIMATION
       ---------------------------------------- */
    const preloader = document.getElementById('preloader');
    const terminal = document.getElementById('terminal-loader');
    
    if (preloader && terminal) {
        const lines = [
            'booting RF.dev',
            '> Initializing systems...',
            '> Role : Software Engineer',
            '> Status : Ready to build'
        ];

        const spinner = document.querySelector('.preloader__spinner');

        function updateSpinner(step) {
            if (!spinner) return;
            const colors = ['#0ea5e9', '#3b82f6', '#6366f1', '#a855f7'];
            const speeds = ['3s', '2s', '1s', '0.5s'];
            const glows = ['5px', '10px', '20px', '30px'];
            
            spinner.style.setProperty('--loader-color', colors[step]);
            spinner.style.setProperty('--loader-speed', speeds[step]);
            spinner.style.setProperty('--loader-glow', glows[step]);
        }

        async function typeLine(text, index) {
            const lineEl = document.createElement('div');
            lineEl.className = 'terminal-line';
            terminal.appendChild(lineEl);
            
            const isFirst = index === 0;
            const isLast = index === lines.length - 1;

            if (isFirst) {
                lineEl.innerHTML = text.replace('RF.dev', '<span class="accent">RF.dev</span>');
                const content = lineEl.innerHTML;
                lineEl.innerHTML = '';
                for (let i = 0; i < text.length; i++) {
                    lineEl.textContent += text[i];
                    await new Promise(r => setTimeout(r, 30));
                }
                lineEl.innerHTML = content;
            } else {
                for (let i = 0; i < text.length; i++) {
                    lineEl.textContent += text[i];
                    await new Promise(r => setTimeout(r, 20));
                }
                if (text.includes('Ready')) {
                    lineEl.innerHTML = lineEl.innerHTML.replace('Ready', '<span class="accent">Ready</span>');
                }
            }
            
            const cursor = document.createElement('span');
            cursor.className = 'terminal-cursor';
            lineEl.appendChild(cursor);
            
            updateSpinner(index);
            return new Promise(r => setTimeout(r, 800)); // Sedikit lebih cepat
        }

        async function startTerminal() {
            // Initial state
            spinner.style.setProperty('--loader-color', 'rgba(255,255,255,0.1)');
            spinner.style.setProperty('--loader-speed', '5s');
            spinner.style.setProperty('--loader-glow', '0px');

            for (let i = 0; i < lines.length; i++) {
                const prevCursor = terminal.querySelector('.terminal-cursor');
                if (prevCursor) prevCursor.remove();
                await typeLine(lines[i], i);
            }
            
            // Finish state
            spinner.style.borderTopColor = '#22c55e'; // Success green
            spinner.style.borderBottomColor = '#22c55e';
            spinner.style.setProperty('--loader-glow', '40px');
            spinner.style.setProperty('--loader-color', '#22c55e');

            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        }

        window.addEventListener('load', () => {
            startTerminal();
        });
    }

    /* ----------------------------------------
       8. CUSTOM CURSOR
       ---------------------------------------- */
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');
    
    // Hanya aktifkan jika bukan di HP (layar > 768px)
    if (cursor && follower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Cursor dot mengikuti secara instan
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Follower mengikuti dengan sedikit jeda (easing)
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Efek hover pada semua link dan tombol
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .filter-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                follower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                follower.classList.remove('hover');
            });
        });
    }
    /* ----------------------------------------
       9. INTERACTIVE PARTICLE BACKGROUND
       ---------------------------------------- */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };
        
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        class Particle {
            constructor(x, y, vx, vy, radius) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.radius = radius;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = document.body.classList.contains('light-theme') ? 'rgba(2, 132, 199, 0.15)' : 'rgba(14, 165, 233, 0.25)';
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
                if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;
                
                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    if (mouse.x < this.x && this.x < canvas.width - this.radius * 10) this.x += 2;
                    if (mouse.x > this.x && this.x > this.radius * 10) this.x -= 2;
                    if (mouse.y < this.y && this.y < canvas.height - this.radius * 10) this.y += 2;
                    if (mouse.y > this.y && this.y > this.radius * 10) this.y -= 2;
                }

                this.x += this.vx;
                this.y += this.vy;
                this.draw();
            }
        }

        function initParticles() {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 15000;
            // Cap particles for performance
            numberOfParticles = Math.min(numberOfParticles, 100);
            
            for (let i = 0; i < numberOfParticles; i++) {
                let radius = Math.random() * 2 + 1;
                let x = Math.random() * (canvas.width - radius * 2) + radius;
                let y = Math.random() * (canvas.height - radius * 2) + radius;
                let vx = (Math.random() - 0.5) * 0.8;
                let vy = (Math.random() - 0.5) * 0.8;
                particles.push(new Particle(x, y, vx, vy, radius));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                 ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = document.body.classList.contains('light-theme') ? 
                            `rgba(2, 132, 199, ${opacityValue * 0.05})` : 
                            `rgba(14, 165, 233, ${opacityValue * 0.12})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
            requestAnimationFrame(animate);
        }

        resizeCanvas();
        animate();
    }
});
