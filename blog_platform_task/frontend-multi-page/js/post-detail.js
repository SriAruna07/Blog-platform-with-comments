// Extended Post Analytics Visual Component
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    // Fetch dynamic record targets
    const mockPost = {
        id: postId,
        title: postId == 1 ? 'Architecting Scalable Microservices' : 'Introduction to Reactive Programming in Java',
        body: 'Building complex distributed ecosystems requires structured API boundaries, data pipelines, and clear component isolation models. In this post, we discuss strategic framework integration topologies.',
        author: 'Demo Author',
        date: 'Oct 11, 2026'
    };

    document.getElementById('postTitle').innerText = mockPost.title;
    document.getElementById('postAuthor').innerText = mockPost.author;
    document.getElementById('postDate').innerText = mockPost.date;
    document.getElementById('postBody').innerText = mockPost.body;

    // Display controls if user matches authorship rules
    document.getElementById('authorControls').style.display = 'block';

    const commentsList = document.getElementById('commentsList');
    const commentForm = document.getElementById('commentForm');

    const mockComments = [
        { id: 101, author: 'Sarah Jenkins', content: 'Incredibly detailed write-up. This resolved our immediate database serialization questions.' }
    ];

    function renderComments() {
        commentsList.innerHTML = '';
        mockComments.forEach(c => {
            const div = document.createElement('div');
            div.className = 'comment-card';
            div.innerHTML = `<strong>${c.author}</strong><p style="margin:0.5rem 0 0 0;">${c.content}</p>`;
            commentsList.appendChild(div);
        });
    }

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = document.getElementById('commentContent').value;
        const user = JSON.parse(localStorage.getItem('currentUser'));
        mockComments.push({ id: Date.now(), author: user.name, content: content });
        document.getElementById('commentContent').value = '';
        renderComments();
    });

    document.getElementById('deleteBtn').addEventListener('click', () => {
        if(confirm('Are you sure you want to permanently delete this post content from database catalogs?')) {
            window.location.href = 'dashboard.html';
        }
    });

    renderComments();
});
