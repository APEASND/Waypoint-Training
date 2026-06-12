document.addEventListener('DOMContentLoaded', function () {

    // Mobile nav toggle
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    // Close mobile nav on link click
    links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });

    // Nav scroll effect
    var nav = document.getElementById('nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });

    // Scroll-triggered fade-in
    var fadeEls = document.querySelectorAll(
        '.intro, .features__card, .step, .classes__card, ' +
        '.testimonials__card, .promise__content, .promise__visual, ' +
        '.values__card, .contact__info, .contact__form-wrap'
    );

    fadeEls.forEach(function (el) {
        el.classList.add('fade-up');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) {
        observer.observe(el);
    });

    // Contact form
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'SENT';
        btn.disabled = true;
        btn.style.background = '#1A5276';
        btn.style.opacity = '0.7';

        setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.opacity = '1';
            form.reset();
        }, 3000);
    });
});
