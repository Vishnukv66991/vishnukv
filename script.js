// Setup current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    const icon = menuIcon.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('bx-menu', 'bx-x');
    } else {
        icon.classList.replace('bx-x', 'bx-menu');
    }
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const observeElements = document.querySelectorAll('.section-title, .about-intro, .floating-card, .project-card, .contact-wrapper');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observeElements.forEach(el => {
    el.classList.add('hide-animate');
    observer.observe(el);
});
