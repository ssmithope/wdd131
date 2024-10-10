document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
    });

    // Update the 'last-modified' span with the document's last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Update the footer with the current year for copyright purposes
    const currentYear = new Date().getFullYear();
    document.querySelector('footer').innerHTML += ` ${currentYear}`;
});
