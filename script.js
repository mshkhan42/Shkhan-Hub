// Load blog data from JSON file
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayLatestPosts(data.latestPosts);
        })
        .catch(error => {
            console.error('Error loading data:', error);
            // Fallback data if JSON file fails to load
            const fallbackData = {
                latestPosts: [
                    {
                        id: 1,
                        title: "The Future of Web Development",
                        excerpt: "Explore the latest trends in web development.",
                        date: "June 15, 2023",
                        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        category: "Technology"
                    },
                    {
                        id: 2,
                        title: "Effective Remote Work Strategies",
                        excerpt: "Maximize productivity while working from home.",
                        date: "June 10, 2023",
                        image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        category: "Lifestyle"
                    },
                    {
                        id: 3,
                        title: "Understanding AI and Machine Learning",
                        excerpt: "A beginner's guide to AI and ML concepts.",
                        date: "June 5, 2023",
                        image: "https://images.unsplash.com/photo-1677442135135-416f8aa26a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
                        category: "Technology"
                    },
                    {
                        id: 4,
                        title: "Healthy Eating for Programmers",
                        excerpt: "Nutrition tips for maintaining energy and focus.",
                        date: "June 12, 2023",
                        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
                        category: "Health"
                    },
                    {
                        id: 5,
                        title: "The Rise of Electric Vehicles",
                        excerpt: "How EVs are changing the automotive industry.",
                        date: "June 8, 2023",
                        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
                        category: "Technology"
                    },
                    {
                        id: 6,
                        title: "Mindfulness Meditation for Beginners",
                        excerpt: "Learn how to start a meditation practice.",
                        date: "June 3, 2023",
                        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                        category: "Wellness"
                    }
                ]
            };
            displayLatestPosts(fallbackData.latestPosts);
        });
});

// Display latest posts
function displayLatestPosts(posts) {
    const latestContainer = document.getElementById('latest-posts');
    latestContainer.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = createPostElement(post);
        latestContainer.appendChild(postElement);
    });
}

// Create post element
function createPostElement(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.setAttribute('data-id', post.id);
    
    postCard.innerHTML = `
        <div class="post-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-content">
            <div class="post-date">${post.date}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="post-details.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return postCard;
}