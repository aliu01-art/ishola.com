const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const overlay = document.querySelector('.overlay');

if (navbarToggle && navbarMenu && overlay) {
    navbarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        overlay.classList.remove('active');
        navbarToggle.classList.remove('active');
    });

    // Optional: close menu when a link is clicked
    navbarMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navbarMenu.classList.remove('active');
            overlay.classList.remove('active');
            navbarToggle.classList.remove('active');
        }
    });
}