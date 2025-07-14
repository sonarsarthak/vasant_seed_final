// Vasant Seeds - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
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

// Fade in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-item, .product-card, .step, .testimonial-card, .tip-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Product card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Feature items hover effects
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Step cards hover effects
document.addEventListener('DOMContentLoaded', function() {
    const stepCards = document.querySelectorAll('.step');
    stepCards.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Tip cards hover effects
document.addEventListener('DOMContentLoaded', function() {
    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach(tip => {
        tip.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        tip.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Email signup form
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.querySelector('.email-signup');
    if (emailForm) {
        const input = emailForm.querySelector('input');
        const button = emailForm.querySelector('button');
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const email = input.value.trim();
            
            if (email && isValidEmail(email)) {
                // In a real application, this would send data to a server
                console.log('Email subscribed:', email);
                alert('Thank you for subscribing to our newsletter!');
                input.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add to Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.btn-primary[href="/contact.html"]');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real application, this would add to cart
            console.log('Product added to cart');
            alert('Product added to cart! Redirecting to contact page...');
            
            // Redirect to contact page after a short delay
            setTimeout(() => {
                window.location.href = '/contact.html';
            }, 1000);
        });
    }
});

// WhatsApp chat button enhancement
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-chat');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Add click tracking if needed
            console.log('WhatsApp chat initiated');
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Hero section parallax effect
window.addEventListener('scroll', function() {
    const heroBg = document.querySelector('.hero-bg-img');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px) scale(1.1)`;
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
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
});

// Contact form validation and WhatsApp redirect
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendWhatsApp();
        });
    }
});

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill in all required fields.');
        return null;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return null;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return null;
    }
    
    return { name, email, phone, subject, message };
}

// WhatsApp send function
function sendWhatsApp() {
    const formData = validateForm();
    if (!formData) return;

    // Create the message with proper line breaks
    const whatsappMessage = `*New Contact Form Submission - Vasant Seeds*

*Customer Details:*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📋 *Subject:* ${formData.subject}

*Message:*
${formData.message}

---
*Sent from Vasant Seeds Website*`;
    
    // Properly encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919423023411?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    document.getElementById('contactForm').reset();
}

// Mobile menu button animation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (this.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
});

// Product specifications animation
document.addEventListener('DOMContentLoaded', function() {
    const specs = document.querySelectorAll('.product-specs li');
    specs.forEach((spec, index) => {
        spec.style.animationDelay = `${index * 0.1}s`;
        spec.classList.add('fade-in');
    });
});

// Testimonial cards staggered animation
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.2}s`;
    });
});

// Growing tips cards staggered animation
document.addEventListener('DOMContentLoaded', function() {
    const tips = document.querySelectorAll('.tip-card');
    tips.forEach((tip, index) => {
        tip.style.animationDelay = `${index * 0.15}s`;
    });
});

// Feature items staggered animation
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
    });
});

// Step cards staggered animation
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.2}s`;
    });
});

// Social media links hover effects
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Button hover effects enhancement
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Console welcome message
console.log('🌱 Welcome to Vasant Seeds - Premium Onion Seeds!');
console.log('For the best growing experience, visit our growing guides section.'); 