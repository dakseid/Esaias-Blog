// Function to search content in videos and news articles
function searchContent() {
    const searchQuery = document.querySelector('.search-bar input').value.toLowerCase();
    const videos = document.querySelectorAll('.video-card');
    const news = document.querySelectorAll('.news-card');

    // Filter videos based on search query
    videos.forEach(video => {
        const title = video.querySelector('h3').textContent.toLowerCase();
        video.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });

    // Filter news articles based on search query
    news.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        article.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
}

// Carousel functionality for videos
let currentIndex = 0;

function changeVideo(direction) {
    const videos = document.querySelectorAll('.video-card');
    const totalVideos = videos.length;

    // Hide all videos
    videos.forEach(video => {
        video.classList.remove('active');
    });

    // Update currentIndex with wrap-around logic
    currentIndex = (currentIndex + direction + totalVideos) % totalVideos;

    // Show the current video
    videos[currentIndex].classList.add('active');

    // Move the video container to show the current video
    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.transform = `translateX(-${currentIndex * (100 / 8)}%)`; // Adjust for 8 videos
}

// Initially display the first video
document.querySelector('.video-card').classList.add('active');

// Newsletter subscription function
function subscribeNewsletter(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const email = document.getElementById('newsletter-email').value;

    // Here, you would typically send the email to your server or an email marketing service
    console.log(`Subscribed with email: ${email}`);

    // Show a confirmation message
    alert('Thank you for subscribing to our newsletter!');

    // Clear the input field
    document.getElementById('newsletter-email').value = '';
}

// Event listeners for carousel controls
document.querySelector('.prev').addEventListener('click', () => changeVideo(-1));
document.querySelector('.next').addEventListener('click', () => changeVideo(1));

// Event listener for search
document.querySelector('.search-bar button').addEventListener('click', searchContent);
