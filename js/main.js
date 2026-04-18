document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav');
    const header = document.querySelector('header');

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('bi-list', 'bi-x');
                navMenu.style.display = 'block';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'white';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                const ul = navMenu.querySelector('ul');
                ul.style.flexDirection = 'column';
                ul.style.gap = '15px';
            } else {
                icon.classList.replace('bi-x', 'bi-list');
                navMenu.style.display = '';
            }
        });
    }

    // Sticky Header Evolution
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 5%';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 5%';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
