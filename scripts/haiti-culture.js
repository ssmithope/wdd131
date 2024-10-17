document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    console.log('Current Year:', currentYear);
    console.log('Last Modified:', lastModified);
});
