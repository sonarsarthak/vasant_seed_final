// Testimonials Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Video Functionality
    const videoCards = document.querySelectorAll('.video-card');

    // Handle video play functionality
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        const playButton = card.querySelector('.play-button');
        const playOverlay = card.querySelector('.play-overlay');

        // Play video when clicking play button
        if (playButton) {
            playButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (video.paused) {
                    video.play();
                    card.classList.add('playing');
                } else {
                    video.pause();
                    card.classList.remove('playing');
                }
            });
        }

        // Handle video events
        video.addEventListener('play', function() {
            card.classList.add('playing');
        });

        video.addEventListener('pause', function() {
            card.classList.remove('playing');
        });

        video.addEventListener('ended', function() {
            card.classList.remove('playing');
        });

        // Pause other videos when one starts playing
        video.addEventListener('play', function() {
            videoCards.forEach(otherCard => {
                if (otherCard !== card) {
                    const otherVideo = otherCard.querySelector('video');
                    if (!otherVideo.paused) {
                        otherVideo.pause();
                        otherCard.classList.remove('playing');
                    }
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.video-card, .gallery-item, .stat-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Video duration calculation (if needed)
    function calculateVideoDuration(videoElement) {
        return new Promise((resolve) => {
            videoElement.addEventListener('loadedmetadata', function() {
                const duration = Math.floor(videoElement.duration);
                const minutes = Math.floor(duration / 60);
                const seconds = duration % 60;
                resolve(`${minutes}:${seconds.toString().padStart(2, '0')}`);
            });
        });
    }

    // Update video durations if needed
    const videoElements = document.querySelectorAll('.video-thumbnail video');
    videoElements.forEach(async (video, index) => {
        try {
            const duration = await calculateVideoDuration(video);
            const durationElement = video.parentElement.querySelector('.video-duration');
            if (durationElement) {
                durationElement.textContent = duration;
            }
        } catch (error) {
            console.log('Could not calculate video duration');
        }
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Mobile menu functionality - ensure it works properly
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    console.log('Mobile menu elements found:', { mobileMenuBtn: !!mobileMenuBtn, navLinks: !!navLinks });

    if (mobileMenuBtn && navLinks) {
        // Remove any existing event listeners to prevent conflicts
        const newMobileMenuBtn = mobileMenuBtn.cloneNode(true);
        mobileMenuBtn.parentNode.replaceChild(newMobileMenuBtn, mobileMenuBtn);
        
        newMobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Mobile menu toggled - Active:', navLinks.classList.contains('active')); // Debug log
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                newMobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Mobile menu closed via link click');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!newMobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                newMobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Test mobile menu on page load
        console.log('Mobile menu functionality initialized');
    } else {
        console.error('Mobile menu elements not found');
    }

    // Statistics counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.textContent.includes('+')) {
                        counter.textContent = Math.ceil(current) + '+';
                    } else if (counter.textContent.includes('/')) {
                        counter.textContent = (current / 10).toFixed(1) + '/5';
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent.replace(/[^\d]/g, '') + 
                        (counter.textContent.includes('+') ? '+' : '') +
                        (counter.textContent.includes('/') ? '/5' : '');
                }
            };
            
            updateCounter();
        });
    }

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Gallery lightbox enhancement
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2'
        });
    }

            // Add loading states for video cards
        videoCards.forEach(card => {
            const video = card.querySelector('video');
            if (video) {
                video.addEventListener('loadstart', () => {
                    card.classList.add('loading');
                });
                
                video.addEventListener('canplay', () => {
                    card.classList.remove('loading');
                    // Ensure video is bright and visible
                    video.style.filter = 'brightness(1.1) contrast(1.1)';
                });
                
                video.addEventListener('error', () => {
                    card.classList.remove('loading');
                    video.setAttribute('data-error', 'true');
                    console.log('Video failed to load');
                });

                // Ensure video loads properly
                video.addEventListener('loadeddata', () => {
                    card.classList.remove('loading');
                });

                // Handle video metadata loading
                video.addEventListener('loadedmetadata', () => {
                    card.classList.remove('loading');
                });
            }
        });

    // Smooth scroll to top functionality
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        // Any scroll-based functionality can go here
    }, 100);

    window.addEventListener('scroll', debouncedScrollHandler);
}); 
}); 