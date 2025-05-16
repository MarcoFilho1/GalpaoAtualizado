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

        // Função de movimento do carrossel
        const moveTo = (i) => {
            track.style.transform = `translateX(-${i * 100}%)`;
            index = i;
        };

        // Botão anterior
        document.querySelector('.prev-btn')?.addEventListener('click', () => {
            moveTo((index - 1 + slides.length) % slides.length);
        });

        // Botão próximo
        document.querySelector('.next-btn')?.addEventListener('click', () => {
            moveTo((index + 1) % slides.length);
        });
    }

    // ========= MENU HAMBURGUER =========
    const hamburger = document.querySelector('.hamburger');
    const nav       = document.querySelector('nav');
    const overlay   = document.querySelector('.nav-overlay');

    // Helper para fechar menu + submenus
    function closeMenu() {
        nav.classList.remove('active');
        hamburger.classList.remove('fa-times');
        overlay.style.display = 'none';
        document.querySelectorAll('.dropdown.active')
            .forEach(dd => dd.classList.remove('active'));
    }

    if (hamburger && nav) {
        // Abre / fecha menu
        hamburger.addEventListener('click', e => {
            e.stopPropagation();
            if (nav.classList.contains('active')) {
                closeMenu();
            } else {
                nav.classList.add('active');
                hamburger.classList.add('fa-times');
                overlay.style.display = 'block';
            }
        });

        // Fechar ao clicar fora
        document.addEventListener('click', e => {
            if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
                closeMenu();
            }
        });

        // Fechar ao rolar
        window.addEventListener('scroll', () => {
            if (nav.classList.contains('active')) {
                closeMenu();
            }
        });

        // Dropdown mobile (toggle exclusivo)
        document.querySelectorAll('.dropdown > a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const thisDropdown = this.parentElement;
                    // fecha todos os outros
                    document.querySelectorAll('.dropdown.active')
                        .forEach(dd => {
                            if (dd !== thisDropdown) dd.classList.remove('active');
                        });
                    // abre/fecha o clicado
                    thisDropdown.classList.toggle('active');
                }
            });
        });

        // Fechar menu ao clicar em links (exceto dropdown-toggle)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', e => {
                if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
                    closeMenu();
                }
            });
        });

        // Fechar ao clicar no overlay
        overlay.addEventListener('click', () => {
            closeMenu();
        });
    }

    // ========= FETCH FORMULÁRIO DE CONTATO =========
    const contatoContainer = document.getElementById('contato');
    if (contatoContainer) {
        fetch('assets/includes/contato.html')
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.text();
            })
            .then(html => {
                contatoContainer.innerHTML = html;

                // se a URL tiver ?scrollTo=contato
                const urlParams = new URLSearchParams(window.location.search);
                const scrollTo = urlParams.get('scrollTo');
                if (scrollTo === 'contato') {
                    // pequeno delay para garantir renderização
                    setTimeout(() => {
                        const target = document.getElementById(scrollTo);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            })
            .catch(err => {
                console.error(err);
                contatoContainer.textContent = 'Erro ao carregar formulário.';
            });
    }
});
