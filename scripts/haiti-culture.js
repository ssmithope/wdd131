document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', showMessage);

    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleBackToTop);

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Function to display a message when the form is submitted
    function showMessage(event) {
        event.preventDefault();
        const feedback = document.getElementById('form-feedback');
        feedback.textContent = "Thank you for contacting us! We'll get back to you soon.";
        feedback.style.color = "green";
        event.target.reset();
    }

    // Function to show/hide the back-to-top button
    function toggleBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }

    // Function to scroll back to the top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

console.log('Discover Haiti script loaded!');
