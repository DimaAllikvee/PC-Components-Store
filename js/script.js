document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('header-nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});