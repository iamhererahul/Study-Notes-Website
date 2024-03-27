document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define an array of objects containing usernames and passwords
        const credentials = [
            { username: 'akhilkumar.k.varma@slrtce.in', password: '@pass123' },
            // Add more usernames and passwords as needed
        ];

        // Check if the entered username and password match any in the credentials array
        const validCredentials = credentials.some(cred => cred.username === username && cred.password === password);

        if (validCredentials) {
            alert('Login successful!');
            window.location.href = 'firstpage.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});