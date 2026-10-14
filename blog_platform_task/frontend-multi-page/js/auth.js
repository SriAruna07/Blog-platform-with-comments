// Authentication Script Mocking Dynamic API Client Actions
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In full stack, invoke POST /api/auth/login
            localStorage.setItem('authToken', 'mock-jwt-token-thiranex');
            localStorage.setItem('currentUser', JSON.stringify({id: 1, name: 'Demo Author', email: 'author@demo.com'}));
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('User registration successful! Proceeding to signature portal.');
            window.location.href = 'index.html';
        });
    }
});
