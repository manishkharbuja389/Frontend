document.addEventListener('DOMContentLoaded', function () {
    // Handle buy button clicks
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Thank you for your purchase!');
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }
});
