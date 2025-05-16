document.addEventListener('DOMContentLoaded', function() {
    // ========= COOKIE NOTICE =========
    const cookieNotice = document.querySelector('.cookie-notice');
    if (cookieNotice) {
        const cookieButton = cookieNotice.querySelector('button');
        if (!localStorage.getItem('cookieAccepted')) {
            cookieNotice.style.display = 'block';
        }
        cookieButton.addEventListener('click', function() {
            cookieNotice.style.display = 'none';
            localStorage.setItem('cookieAccepted', 'true');
        });
    }

    // ========= CARROSSEL =========
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        let index = 0;

        // Configurar imagens de fundo
        slides.forEach(slide => {
            const bgUrl = slide.getAttribute('data-bg');
            slide.style.setProperty('--bg', `url(/GalpaoAtualizado/${bgUrl})`);
        });

        // Fun??o de movimento do carrossel
        const moveTo = (i) => {
            track.style.transform = `translateX(-${i * 100}%)`;
            index = i;
        };

        // Bot?o anterior
        document.querySelector('.prev-btn')?.addEventListener('click', () => {
            moveTo((index - 1 + slides.length) % slides.length);
        });

        // Pr?ximo bot?o
        document.querySelector('.next-btn')?.addEventListener('click', () => {
            moveTo((index + 1) % slides.length);
        });
    }

    // ========= MENU HAMBURGUER =========
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.nav-overlay');
    
    if (hamburger && nav) {
        // Abrir/fechar menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            overlay.style.display = nav.classList.contains('active') ? 'block' : 'none';
            this.classList.toggle('fa-times');
        });

        // Fechar ao clicar fora
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
                nav.classList.remove('active');
                hamburger.classList.remove('fa-times');
                overlay.style.display = 'none';
            }
        });

        // Fechar ao rolar
        window.addEventListener('scroll', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('fa-times');
                overlay.style.display = 'none';
            }
        });

        // Dropdown mobile
        document.querySelectorAll('.dropdown > a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        });

        // Fechar menu ao clicar em links
        document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            // se for mobile e NÃO estiver dentro de um .dropdown
            if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
            nav.classList.remove('active');
            hamburger.classList.remove('fa-times');
            overlay.style.display = 'none';
            }
        });
        });

        // Fecha o menu ao clicar no overlay
        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('fa-times');
            overlay.style.display = 'none';
        });
    }
});
