// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animations on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

fadeInElements.forEach(element => { 
    appearOnScroll.observe(element);
});

// Header shadow effect on scroll
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Testimonial interactions
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach((testimonial, index) => {
    testimonial.addEventListener('click', () => {
        testimonials.forEach(t => t.classList.remove('active'));
        testimonial.classList.add('active');
    });
});
