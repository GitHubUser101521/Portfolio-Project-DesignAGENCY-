const emailSubmit = document.getElementById('submit-email-btn');
const emailInput = document.getElementById('email-input');

emailSubmit.addEventListener('click', () => {
    if (emailInput.value) {
        alert(`Thank you for submitting! Please check your email for further confirmation. Your email: ${emailInput.value}`);
    } else {
        alert('Please enter your email address properly.')
    }
})

