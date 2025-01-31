// Select the theme toggle icon
var icon = document.getElementById('icon');

// Check if dark theme was previously enabled
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    if (document.body.classList.contains('dark-theme')) {
        icon.src = "img/sun-icon.png";
    } else {
        icon.src = "img/moon-icon.png";
    }
};

// document.querySelectorAll('a').forEach(link => {
//     link.setAttribute('target', '_blank');
// });

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
