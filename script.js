// Loading screen animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    // Simulate loading
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        setupAnimations();
    }, 1500);
});

// Falling Roses Container
function setupAnimations() {
    // Create falling roses container
    const rosesContainer = document.createElement('div');
    rosesContainer.className = 'falling-roses';
    document.body.appendChild(rosesContainer);

    // Create 100 falling roses
    for (let i = 0; i < 100; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        
        // Randomize starting position
        rose.style.left = Math.random() * 100 + 'vw';
        
        // Randomize animation duration (3-5 seconds)
        const duration = Math.random() * 2 + 3;
        rose.style.animationDuration = duration + 's';
        
        // Randomize animation delay (0-2 seconds)
        const delay = Math.random() * 2;
        rose.style.animationDelay = delay + 's';
        
        // Randomize rotation direction
        if (Math.random() > 0.5) {
            rose.style.transform = 'scaleX(-1)';
        }
        
        rosesContainer.appendChild(rose);
    }

    // Add subtle animations to interactive elements
    const interactiveElements = document.querySelectorAll('button, section, .gift-box, .letter-container, .gallery-item, .timeline-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-3px) scale(1.02)';
            element.style.boxShadow = '0 10px 25px rgba(255, 71, 87, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0) scale(1)';
            element.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });

    // Add hover effects to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.03)';
            img.style.filter = 'brightness(1.1)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(1)';
        });
    });

    // Add hover effects to timeline dots
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            dot.style.transform = 'scale(1.3)';
            dot.style.boxShadow = '0 0 10px rgba(255, 71, 87, 0.5)';
        });
        dot.addEventListener('mouseleave', () => {
            dot.style.transform = 'scale(1)';
            dot.style.boxShadow = '0 0 5px rgba(255, 71, 87, 0.3)';
        });
    });

    // Add hover effects to gift image
    const giftImage = document.querySelector('.gift-image');
    if (giftImage) {
        giftImage.addEventListener('mouseenter', () => {
            giftImage.style.transform = 'scale(1.03) rotate(2deg)';
            giftImage.style.filter = 'brightness(1.1)';
        });
        giftImage.addEventListener('mouseleave', () => {
            giftImage.style.transform = 'scale(1) rotate(0)';
            giftImage.style.filter = 'brightness(1)';
        });
    }
}

// Initialize animations
setupAnimations();

// Initialize all floating animations
function setupAllAnimations() {
    setupFloatingHeartsAnimation();
    setupFloatingBalloonsAnimation();
    setupFloatingStarsAnimation();
}

setupAllAnimations();

// Floating hearts animation
function setupFloatingHeartsAnimation() {
    // Create floating hearts container
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    document.body.appendChild(heartsContainer);

    // Function to create a new heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        
        // Randomize heart properties
        const randomSize = Math.random() * 5 + 12; // 12-17px
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        heart.style.fontSize = randomSize + 'px';
        heart.style.left = randomX + 'px';
        heart.style.top = randomY + 'px';
        heart.style.animationDelay = Math.random() * 4 + 's'; // Longer delay
        
        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 6000); // Match animation duration
    }

    // Create hearts periodically with reduced frequency
    function createHearts() {
        const createChance = Math.random();
        if (createChance < 0.3) { // 30% chance to create a heart
            createHeart();
        }
        requestAnimationFrame(createHearts);
    }

    // Start creating hearts
    createHearts();
}

// Floating balloons animation
function setupFloatingBalloonsAnimation() {
    // Create floating balloons container
    const balloonsContainer = document.createElement('div');
    balloonsContainer.className = 'floating-balloons';
    document.body.appendChild(balloonsContainer);

    // Function to create a new balloon
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = '🎈';
        
        // Randomize balloon properties
        const randomSize = Math.random() * 8 + 15; // 15-23px
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        balloon.style.fontSize = randomSize + 'px';
        balloon.style.left = randomX + 'px';
        balloon.style.top = randomY + 'px';
        balloon.style.animationDelay = Math.random() * 6 + 's';
        
        balloonsContainer.appendChild(balloon);

        // Remove balloon after animation completes
        setTimeout(() => {
            balloon.remove();
        }, 8000); // Match animation duration
    }

    // Create balloons periodically with reduced frequency
    function createBalloons() {
        const createChance = Math.random();
        if (createChance < 0.2) { // 20% chance to create a balloon
            createBalloon();
        }
        requestAnimationFrame(createBalloons);
    }

    // Start creating balloons
    createBalloons();
}

// Floating stars animation
function setupFloatingStarsAnimation() {
    // Create floating stars container
    const starsContainer = document.createElement('div');
    starsContainer.className = 'floating-stars';
    document.body.appendChild(starsContainer);

    // Function to create a new star
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = '⭐';
        
        // Randomize star properties
        const randomSize = Math.random() * 6 + 10; // 10-16px
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        star.style.fontSize = randomSize + 'px';
        star.style.left = randomX + 'px';
        star.style.top = randomY + 'px';
        star.style.animationDelay = Math.random() * 8 + 's';
        
        starsContainer.appendChild(star);

        // Remove star after animation completes
        setTimeout(() => {
            star.remove();
        }, 10000); // Match animation duration
    }

    // Create stars periodically with reduced frequency
    function createStars() {
        const createChance = Math.random();
        if (createChance < 0.15) { // 15% chance to create a star
            createStar();
        }
        requestAnimationFrame(createStars);
    }

    // Start creating stars
    createStars();
}

// Initialize all floating animations
function setupAllAnimations() {
    setupFloatingHeartsAnimation();
    setupFloatingBalloonsAnimation();
    setupFloatingStarsAnimation();
}

// Initialize floating hearts animation
setupFloatingHeartsAnimation();

// Memory carousel initialization
const memoryCarousel = document.querySelector('.memory-carousel');
const memories = [
    {
        image: 'https://via.placeholder.com/400x300',
        title: 'Our First Date',
        description: 'The day I knew you were special.'
    },
    {
        image: 'https://via.placeholder.com/400x300',
        title: 'Our Favorite Place',
        description: 'Where we share our best moments.'
    },
    {
        image: 'https://via.placeholder.com/400x300',
        title: 'Happy Moments',
        description: 'Every moment with you is special.'
    }
];

memories.forEach(memory => {
    const memoryCard = document.createElement('div');
    memoryCard.className = 'memory-card';
    memoryCard.innerHTML = `
        <img src="${memory.image}" alt="${memory.title}" class="memory-image">
        <div class="memory-content">
            <h4>${memory.title}</h4>
            <p>${memory.description}</p>
        </div>
    `;
    memoryCarousel.appendChild(memoryCard);
});

// Gallery initialization
const galleryGrid = document.querySelector('.gallery-grid');
const photos = [
    // Add your photos here
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400'
];

photos.forEach(photo => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${photo}" alt="Our Memory">`;
    galleryGrid.appendChild(galleryItem);
});

// Timeline initialization
const timeline = document.querySelector('.timeline');
const timelineItems = [
    {
        date: '2024-01-01',
        title: 'Our First Meeting',
        description: 'The day we first met and sparks flew.'
    },
    {
        date: '2024-06-15',
        title: 'First Date',
        description: 'The magical evening that changed everything.'
    },
    {
        date: '2025-07-20',
        title: 'Your Birthday',
        description: 'A special day to celebrate you!'
    }
];

timelineItems.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
        <div class="timeline-content">
            <h4>${item.title}</h4>
            <p><strong>${new Date(item.date).toLocaleDateString()}</strong></p>
            <p>${item.description}</p>
        </div>
    `;
    timeline.appendChild(timelineItem);
});

// Letter functionality
const letterContainer = document.querySelector('.letter-container');
letterContainer.addEventListener('click', () => {
    letterContainer.classList.add('letter-open');
    setTimeout(() => {
        letterContainer.classList.add('letter-reveal');
    }, 500);
});

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('2025-07-20T00:00:00');
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Music player functionality
let isPlaying = false;
const playBtn = document.querySelector('.play-btn');
const volumeBtn = document.querySelector('.volume-btn');
const progress = document.querySelector('.progress');
const music = new Audio('your-song.mp3'); // Replace with your song

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        music.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

music.addEventListener('timeupdate', () => {
    const progressPercentage = (music.currentTime / music.duration) * 100;
    progress.style.width = progressPercentage + '%';
});

// Gift functionality
const giftBox = document.querySelector('.gift-box');
const openGiftBtn = document.querySelector('.open-gift');
const giftReveal = document.querySelector('.gift-reveal');

openGiftBtn.addEventListener('click', () => {
    // Remove any existing confetti
    const existingConfetti = document.querySelectorAll('.gift-confetti');
    existingConfetti.forEach(confetti => confetti.remove());

    // Show the reveal section
    giftReveal.classList.remove('hidden');
    
    // Add reveal animation
    giftReveal.style.opacity = '0';
    giftReveal.style.transform = 'scale(0.5)';
    
    // Animate the reveal
    setTimeout(() => {
        giftReveal.style.opacity = '1';
        giftReveal.style.transform = 'scale(1)';
        
        // Add confetti animation
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'gift-confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            giftBox.appendChild(confetti);
        }
    }, 100);
});

// Add interactive elements with hover effects
const interactiveElements = document.querySelectorAll('.memory-card, .message-container, .gift-box, .gallery-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.floating-text, .floating-title');
    elements.forEach(element => {
        const scrolled = window.pageYOffset;
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
