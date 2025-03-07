function openForm() {
    document.getElementById('contactForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('contactForm').style.display = 'none';
}

document.getElementById('contactFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
    setTimeout(() => {
        closeForm();
    }, 3000);
});
