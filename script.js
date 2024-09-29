document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && subject && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '!';
        formMessage.classList.remove('hidden');
        this.reset(); // Reset the form fields
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.remove('hidden');
    }
});






