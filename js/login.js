document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check user and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = '1-banking.html';
    }
});





