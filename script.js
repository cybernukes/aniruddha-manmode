function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Ensure elements are found
    if (navLinks && hamburger) {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    }
}

// Hide menu when a menu item is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        if (navLinks && hamburger) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});