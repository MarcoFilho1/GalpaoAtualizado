document.addEventListener('DOMContentLoaded', function() {
    // Cookie Notice
    const cookieNotice = document.querySelector('.cookie-notice');
    if(cookieNotice) {
        const cookieButton = cookieNotice.querySelector('button');
        if(!localStorage.getItem('cookieAccepted')) {
            cookieNotice.style.display = 'block';
        }
        cookieButton.addEventListener('click', function() {
            cookieNotice.style.display = 'none';
            localStorage.setItem('cookieAccepted', 'true');
        });
    }

    // Carrossel
    const track = document.querySelector('.carousel-track');
    if(track) {
        const slides = Array.from(track.children);
        let index = 0;
        
        slides.forEach(slide => {
            const bgUrl = slide.getAttribute('data-bg');
            slide.style.setProperty('--bg', `url(/GalpaoAtualizado/${bgUrl})`);
        });

        const moveTo = (i) => {
            track.style.transform = `translateX(-${i * 100}%)`;
            index = i;
        };

        document.querySelector('.prev-btn')?.addEventListener('click', () => {
            moveTo((index - 1 + slides.length) % slides.length);
        });

        document.querySelector('.next-btn')?.addEventListener('click', () => {
            moveTo((index + 1) % slides.length);
        });
    }

// Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if(hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            this.classList.toggle('fa-times');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if(!e.target.closest('nav') && !e.target.closest('.hamburger')) {
                nav.classList.remove('active');
                hamburger.classList.remove('fa-times');
            }
        });

        // Dropdown Mobile
        document.querySelectorAll('.dropdown > a').forEach(link => {
            link.addEventListener('click', function(e) {
                if(window.innerWidth <= 768) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        });

        // Fechar menu ao clicar em links
        document.querySelectorAll('nav a:not(.dropdown > a)').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('fa-times');
                }
            });
        });
    }

    // Restante do código mantido
});