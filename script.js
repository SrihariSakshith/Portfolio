document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize EmailJS
emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS User ID

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name: name,
            email: email,
            message: message,
        }).then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById('contact-form').reset();
        }).catch((error) => {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('send-message').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const subject = `Message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        const mailtoLink = `mailto:kotichintalasriharisakshith@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    } else {
        alert('Please fill out all fields.');
    }
});
