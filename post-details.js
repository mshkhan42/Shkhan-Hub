// Load specific post details
document.addEventListener('DOMContentLoaded', function() {
    // Get post ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const post = data.latestPosts.find(p => p.id == postId);
                if (post) {
                    displayPostDetails(post);
                } else {
                    document.getElementById('post-details-content').innerHTML = `
                        <div class="error-message">
                            <h2>Post Not Found</h2>
                            <p>The requested post could not be found.</p>
                        </div>
                    `;
                }
            })
            .catch(error => {
                console.error('Error loading data:', error);
                document.getElementById('post-details-content').innerHTML = `
                    <div class="error-message">
                        <h2>Error Loading Post</h2>
                        <p>There was an error loading the post content. Please try again later.</p>
                    </div>
                `;
            });
    } else {
        document.getElementById('post-details-content').innerHTML = `
            <div class="error-message">
                <h2>No Post Specified</h2>
                <p>No post ID was specified in the URL.</p>
            </div>
        `;
    }
});

// Display post details
function displayPostDetails(post) {
    const postDetailsContent = document.getElementById('post-details-content');
    
    postDetailsContent.innerHTML = `
        <div class="post-details-content">
            <img src="${post.image}" alt="${post.title}" class="post-details-image">
            <h1 class="post-details-title">${post.title}</h1>
            <div class="post-details-meta">
                <span class="post-details-date">${post.date}</span>
                <span class="post-details-category">${post.category}</span>
            </div>
            <div class="post-details-body">
                ${post.content}
            </div>
        </div>
    `;
}