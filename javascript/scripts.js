document.addEventListener('DOMContentLoaded', function() {
    const cookieNotice = document.querySelector('.cookie-notice');
    const cookieButton = cookieNotice.querySelector('button');

    // Verifica se o usuário já aceitou o cookie
    if (!localStorage.getItem('cookieAccepted')) {
        cookieNotice.style.display = 'block';
    }

    // Esconde o aviso de cookies e salva no localStorage
    cookieButton.addEventListener('click', function() {
        cookieNotice.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });
});

function showDetails(element) {
    const details = element.querySelector('.galpao-details');
    details.style.display = 'block';
}

function hideDetails(element) {
    const details = element.querySelector('.galpao-details');
    details.style.display = 'none';
}

window.addEventListener('load', function () {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
});

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }

  // Para dropdown funcionar no mobile
  document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = item.parentElement;

      // Fechar outros dropdowns abertos
      document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop !== parent) {
          drop.classList.remove("active");
        }
      });

      // Abrir o dropdown clicado
      parent.classList.toggle("active");
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const track  = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  let index    = 0;

  // Inicializa a variável --bg em cada slide
    slides.forEach(slide => {
        const bgUrl = slide.getAttribute('data-bg');
        slide.style.setProperty('--bg', `url(/GalpaoAtualizado/${bgUrl})`);
    });

  // Função de movimento
  const moveTo = (i) => {
    track.style.transform = `translateX(-${i * 100}%)`;
    index = i;
  };

  document.querySelector('.prev-btn').addEventListener('click', () => {
    const newIndex = index <= 0 ? slides.length - 1 : index - 1;
    moveTo(newIndex);
  });

  document.querySelector('.next-btn').addEventListener('click', () => {
    const newIndex = index >= slides.length - 1 ? 0 : index + 1;
    moveTo(newIndex);
  });
});