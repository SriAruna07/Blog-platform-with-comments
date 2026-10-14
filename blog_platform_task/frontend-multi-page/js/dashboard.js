// Dashboard Manager Script
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('authToken')) {
        window.location.href = 'index.html';
        return;
    }

    const postGrid = document.getElementById('postGrid');
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });

    // Mock Database Fetch Simulation (Replaces GET /api/posts)
    const mockPosts = [
        { id: 1, title: 'Architecting Scalable Microservices', body: 'Deep dive exploration into domain-driven microservice strategies...', author: 'Demo Author', date: 'Oct 11, 2026' },
        { id: 2, title: 'Introduction to Reactive Programming in Java', body: 'Analyzing the paradigm shifts inside concurrent network layers...', author: 'Alex Rivera', date: 'Oct 09, 2026' }
    ];

    postGrid.innerHTML = '';
    mockPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body.substring(0, 100)}...</p>
            <div style="font-size:0.8rem; color:#64748b; margin-top:1rem;">By ${post.author} - ${post.date}</div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `post.html?id=${post.id}`;
        });
        postGrid.appendChild(card);
    });
});
