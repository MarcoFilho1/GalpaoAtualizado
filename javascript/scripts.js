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
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}