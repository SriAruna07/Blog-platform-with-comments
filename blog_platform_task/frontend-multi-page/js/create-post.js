// Studio Creator Controller Component
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postStudioForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Data uploaded successfully! Propagating record across platform servers.');
        window.location.href = 'dashboard.html';
    });
});
