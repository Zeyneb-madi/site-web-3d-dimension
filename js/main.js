/* ========================================
   MAIN JAVASCRIPT - INTERACTIONS & ANIMATIONS
   ======================================== */

// Configuration GSAP
gsap.registerPlugin(ScrollTrigger);

// Variables globales
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

/* ========================================
   INITIALISATION
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNavigation();
    initScrollAnimations();
    initVideoControl();
    initCounters();
    initSmoothScroll();
    initParallax();
});

/* ========================================
   CURSEUR PERSONNALISÉ
   ======================================== */

function initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    // Mise à jour position souris
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Animation fluide du follower
    function animateFollower() {
        const diffX = mouseX - currentX;
        const diffY = mouseY - currentY;

        currentX += diffX * 0.1;
        currentY += diffY * 0.1;

        follower.style.left = currentX + 'px';
        follower.style.top = currentY + 'px';

        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Effets hover sur liens et boutons
    const interactiveElements = document.querySelectorAll('a, button, .experience-card, .contact-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            follower.style.transform = 'scale(1.5)';
            follower.style.borderColor = 'var(--color-magenta)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
            follower.style.borderColor = 'var(--color-cyan)';
        });
    });
}

/* ========================================
   NAVIGATION
   ======================================== */

function initNavigation() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.nav-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect sur navigation
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 10, 0.95), transparent)';
            nav.style.backdropFilter = 'blur(10px)';
        }

        lastScroll = currentScroll;
    });

    // Menu mobile toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

/* ========================================
   ANIMATIONS AU SCROLL
   ======================================== */

function initScrollAnimations() {
    // Hero animations déjà en CSS

    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Experience cards
    gsap.utils.toArray('.experience-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // About section
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact cards
    gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'back.out(1.7)'
        });
    });
}

/* ========================================
   CONTRÔLE VIDÉO
   ======================================== */

function initVideoControl() {
    const video = document.getElementById('hero-video');

    if (!video) return;

    // Assurer que la vidéo joue
    video.play().catch(error => {
        console.log('Autoplay bloqué:', error);
    });

    // Pause/Play au scroll
    let videoPlaying = true;

    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / window.innerHeight;

        if (scrollPercent > 0.8 && videoPlaying) {
            video.pause();
            videoPlaying = false;
        } else if (scrollPercent <= 0.8 && !videoPlaying) {
            video.play();
            videoPlaying = true;
        }
    });

    // Effet parallax sur vidéo
    gsap.to('.video-container video', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        scale: 1.2,
        y: 200,
        ease: 'none'
    });
}

/* ========================================
   COMPTEURS ANIMÉS
   ======================================== */

function initCounters() {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let hasAnimated = false;

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                if (!hasAnimated) {
                    animateCounter(stat, 0, target, 2000);
                    hasAnimated = true;
                }
            }
        });
    });
}

function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        element.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

/* ========================================
   EFFET PARALLAX
   ======================================== */

function initParallax() {
    // Parallax sur image about
    gsap.to('.about-image img', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: -50,
        ease: 'none'
    });

    // Parallax sur frame
    gsap.to('.image-frame', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: 50,
        ease: 'none'
    });

    // Parallax sur section numbers
    gsap.utils.toArray('.section-number').forEach(number => {
        gsap.to(number, {
            scrollTrigger: {
                trigger: number.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: -30,
            ease: 'none'
        });
    });
}

/* ========================================
   MISE À JOUR INFO CANVAS (pour Three.js)
   ======================================== */

function updateCanvasInfo(x, y, rotation) {
    const posXElement = document.getElementById('pos-x');
    const posYElement = document.getElementById('pos-y');
    const rotationElement = document.getElementById('rotation');

    if (posXElement) posXElement.textContent = x.toFixed(2);
    if (posYElement) posYElement.textContent = y.toFixed(2);
    if (rotationElement) rotationElement.textContent = rotation.toFixed(0) + '°';
}

// Exporter pour utilisation dans scene3d.js
window.updateCanvasInfo = updateCanvasInfo;

/* ========================================
   GLITCH EFFECT ON HOVER
   ======================================== */

document.querySelectorAll('.glitch').forEach(glitch => {
    glitch.addEventListener('mouseenter', () => {
        glitch.style.animation = 'rgbSplit 0.3s ease';
    });

    glitch.addEventListener('mouseleave', () => {
        glitch.style.animation = 'none';
    });
});

/* ========================================
   LOADING SCREEN (optionnel)
   ======================================== */

window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-overlay');

    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }
});

/* ========================================
   PERFORMANCE - Reduce motion
   ======================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Désactiver les animations complexes pour accessibilité
    gsap.globalTimeline.timeScale(100);
}

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log('%c🚀 DIMENSION', 'font-size: 2rem; font-weight: bold; color: #00fff5;');
console.log('%cExpérience 3D Interactive - Coded with ❤️', 'font-size: 1rem; color: #fff;');
console.log('%cPowered by Three.js & GSAP', 'font-size: 0.875rem; color: #888;');
