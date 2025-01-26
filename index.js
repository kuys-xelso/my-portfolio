//navigation 
document.querySelectorAll('nav .nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


// Active link highlighting on scroll
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {

        navLinks.forEach(nav => nav.classList.remove('active'));
     
        this.classList.add('active');
    });
});


//button aboutme
document.querySelector('.hector-button').addEventListener('click', () => {
    document.querySelector('.hector-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.christian-button').addEventListener('click', () => {
    document.querySelector('.christian-section').scrollIntoView({ behavior: 'smooth' });
});


// Contact form validation
const contactForm = document.querySelector('.contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function (event) {

    event.preventDefault();

    // Retrieve form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate inputs
    let isValid = true;
    let errorMessage = '';

    // Name validation
    if (name === '') {
        isValid = false;
        errorMessage += 'Name is required.\n';
    } else if (name.length < 3) {
        isValid = false;
        errorMessage += 'Name must be at least 3 characters long.\n';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Email is not valid.\n';
    }

    // Message validation
    if (message === '') {
        isValid = false;
        errorMessage += 'Message is required.\n';
    } else if (message.length < 10) {
        isValid = false;
        errorMessage += 'Message must be at least 10 characters long.\n';
    }

    // Show error messages or submit form
    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Form submitted successfully!');
        contactForm.reset(); // Optionally reset the form
    }
});