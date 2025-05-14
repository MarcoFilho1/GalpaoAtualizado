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
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

// Script para controlar a rotação das imagens
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const totalImages = images.length;

    function changeImage() {
        // Esconde todas as imagens
        images.forEach(image => {
            image.style.display = 'none';
        });

        // Mostra a imagem atual
        images[currentIndex].style.display = 'block';

        // Atualiza o índice da imagem
        currentIndex = (currentIndex + 1) % totalImages;
    }

    // Inicializa com a primeira imagem
    changeImage();
    // Troca a imagem a cada 5 segundos
    setInterval(changeImage, 5000);
});
