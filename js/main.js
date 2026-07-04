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

// WhatsApp chat button enhancement & Chatbot Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Hide old button if it exists
    const oldWhatsappBtn = document.querySelector('.whatsapp-chat');
    if (oldWhatsappBtn) {
        oldWhatsappBtn.style.display = 'none';
    }

    // Create chatbot elements dynamically
    const chatbotWidget = document.createElement('div');
    chatbotWidget.className = 'whatsapp-chatbot-widget';
    
    chatbotWidget.innerHTML = `
        <button class="whatsapp-chatbot-toggle" aria-label="Open chat assistant">
            <i class="fab fa-whatsapp"></i>
            <span class="notification-badge">1</span>
        </button>
        <div class="whatsapp-chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-avatar">
                    <img src="img/logo.webp" alt="Vasant Seeds Support">
                    <span class="online-indicator"></span>
                </div>
                <div class="chatbot-header-info">
                    <h3>Vasant Seeds Support</h3>
                    <p><span class="status-dot"></span> Online (Typically replies instantly)</p>
                </div>
                <button class="chatbot-close-btn" aria-label="Close chat">&times;</button>
            </div>
            <div class="chatbot-messages"></div>
            <div class="chatbot-input-area">
                <input type="text" placeholder="Type a message..." class="chatbot-input">
                <button class="chatbot-send-btn" aria-label="Send message">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatbotWidget);

    const toggleBtn = chatbotWidget.querySelector('.whatsapp-chatbot-toggle');
    const closeBtn = chatbotWidget.querySelector('.chatbot-close-btn');
    const chatWindow = chatbotWidget.querySelector('.whatsapp-chatbot-window');
    const messagesContainer = chatbotWidget.querySelector('.chatbot-messages');
    const chatInput = chatbotWidget.querySelector('.chatbot-input');
    const sendBtn = chatbotWidget.querySelector('.chatbot-send-btn');
    const badge = chatbotWidget.querySelector('.notification-badge');

    let hasOpened = false;

    // Toggle Chatbot window
    toggleBtn.addEventListener('click', function() {
        chatWindow.classList.toggle('active');
        if (badge) {
            badge.style.display = 'none'; // Hide notification badge once opened
        }
        if (chatWindow.classList.contains('active')) {
            if (!hasOpened) {
                // First open, trigger welcome messages
                showWelcome();
                hasOpened = true;
            }
            setTimeout(() => chatInput.focus(), 300);
        }
    });

    closeBtn.addEventListener('click', function() {
        chatWindow.classList.remove('active');
    });

    // Close window when clicking outside
    document.addEventListener('click', function(e) {
        if (!chatbotWidget.contains(e.target) && chatWindow.classList.contains('active')) {
            chatWindow.classList.remove('active');
        }
    });

    const botNumber = "919423023411";

    const chatbotData = {
        mainMenu: {
            text: "Namaskar! 🙏 Welcome to **Vasant Seeds** support.\n\nHow can we help you today? Please choose from one of the options below:",
            options: [
                { label: "🌱 Seed Varieties", next: "varieties" },
                { label: "🔬 Germination & Quality", next: "quality" },
                { label: "🚚 Delivery & Shipping", next: "delivery" },
                { label: "💰 Price & How to Order", next: "order" },
                { label: "💬 Chat on WhatsApp", next: "direct_chat" }
            ]
        },
        varieties: {
            text: "We specialize in premium, high-yielding onion seeds tailored for Indian climates:\n\n• **Bhima Shakti**: Best Rabi onion. Deep red color, uniform shapes, and exceptional storage life (5-6 months).\n• **Phule Samarth**: Excellent Rabi/Late Kharif onion. High disease resistance and great yield.\n\nWhich variety would you like to know more about?",
            options: [
                { label: "🌾 Bhima Shakti Info", next: "bhima_info" },
                { label: "🌾 Phule Samarth Info", next: "phule_info" },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        bhima_info: {
            text: "🌾 **Bhima Shakti Onion Seeds**\n\n• **Season**: Rabi (Winter crop)\n• **Bulb Color**: Attractive dark red\n• **Bulb Shape**: Round & uniform\n• **Maturity**: 120 - 130 days from transplanting\n• **Storage**: Excellent (up to 5-6 months)\n• **Yield**: 40 - 45 tons/ha under proper management\n• **Key benefit**: Highly resistant to bolting.",
            options: [
                { label: "💬 Order Bhima Shakti", url: `https://wa.me/${botNumber}?text=Hello,%20I'm%20interested%20in%20ordering%20Bhima%20Shakti%20onion%20seeds.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        phule_info: {
            text: "🌾 **Phule Samarth Onion Seeds**\n\n• **Season**: Late Kharif / Rabi\n• **Bulb Color**: Uniform dark red\n• **Bulb Shape**: Flat-round / Globe\n• **Maturity**: 115 - 125 days\n• **Storage**: Good (up to 4-5 months)\n• **Yield**: 35 - 40 tons/ha\n• **Key benefit**: Tolerant to thrips and foliar diseases.",
            options: [
                { label: "💬 Order Phule Samarth", url: `https://wa.me/${botNumber}?text=Hello,%20I'm%20interested%20in%20ordering%20Phule%20Samarth%20onion%20seeds.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        quality: {
            text: "🔬 **Quality Excellence**\n\n• **Germination Rate**: Minimum 90%+ guaranteed.\n• **Purity**: 99% genetic purity.\n• **Seed Type**: Certified Non-GMO and chemically treated for initial protection.\n• **Testing**: Every batch is scientifically tested for vigor before packaging.",
            options: [
                { label: "💬 Ask Quality Inquiry", url: `https://wa.me/${botNumber}?text=Hello,%20I%20have%20a%20question%20regarding%20the%20quality%20and%20germination%20of%20your%20seeds.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        delivery: {
            text: "🚚 **Delivery & Shipping**\n\n• **Pan-India**: We deliver to all pincodes in India.\n• **Partners**: Fast delivery via DTDC, Speed Post, or professional logistics.\n• **Timeframe**: Usually takes 3-7 business days.\n• **COD**: Cash on Delivery available in select regions.",
            options: [
                { label: "💬 Check My Pincode", url: `https://wa.me/${botNumber}?text=Hello,%20I'm%20interested%20in%20checking%20delivery%20availability%20for%20my%20pincode.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        order: {
            text: "💰 **Pricing & Ordering**\n\nOur onion seed prices depend on order size (we offer bulk discounts for wholesale quantities).\n\nTo place your order:\n1. Choose your variety (Bhima Shakti / Phule Samarth)\n2. Provide your order quantity (e.g. 1kg, 10kg, 100kg)\n3. Click the button below to get an instant quote on WhatsApp!",
            options: [
                { label: "💬 Get Current Price List", url: `https://wa.me/${botNumber}?text=Hello,%20please%20send%20me%20the%20current%20price%20list%20for%20your%20onion%20seeds.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        },
        direct_chat: {
            text: "Directly chat with our seed specialists on WhatsApp for personalized support, farming guidance, or bulk ordering.",
            options: [
                { label: "💬 Start WhatsApp Chat", url: `https://wa.me/${botNumber}?text=Hello%20Vasant%20Seeds,%20I%20need%20assistance.` },
                { label: "🔙 Back to Menu", next: "mainMenu" }
            ]
        }
    };

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    function addMessage(text, sender, isOption = false) {
        const msgContainer = document.createElement('div');
        msgContainer.className = `chatbot-msg-container ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'chatbot-bubble';
        
        // Parse markdown-like bold text (e.g., **text** to <strong>text</strong>)
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Replace newlines with breaks
        formattedText = formattedText.replace(/\n/g, '<br>');
        
        bubble.innerHTML = `${formattedText} <span class="chatbot-time">${getCurrentTime()}</span>`;
        msgContainer.appendChild(bubble);
        messagesContainer.appendChild(msgContainer);
        
        // Auto scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msgContainer;
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chatbot-msg-container bot typing-indicator-temp';
        indicator.innerHTML = `
            <div class="chatbot-bubble chatbot-typing-bubble">
                <span class="chatbot-typing-dot"></span>
                <span class="chatbot-typing-dot"></span>
                <span class="chatbot-typing-dot"></span>
            </div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return indicator;
    }

    function removeTypingIndicator() {
        const indicator = messagesContainer.querySelector('.typing-indicator-temp');
        if (indicator) {
            indicator.remove();
        }
    }

    function displayBotStep(stepKey) {
        const step = chatbotData[stepKey];
        if (!step) return;

        const typing = showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            addMessage(step.text, 'bot');
            
            // Add options if any
            if (step.options && step.options.length > 0) {
                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'chatbot-options-container';
                
                step.options.forEach(opt => {
                    if (opt.url) {
                        const link = document.createElement('a');
                        link.href = opt.url;
                        link.target = '_blank';
                        link.className = 'chatbot-option-btn';
                        link.innerHTML = `<i class="fab fa-whatsapp"></i> ${opt.label}`;
                        optionsContainer.appendChild(link);
                    } else if (opt.next) {
                        const btn = document.createElement('button');
                        btn.className = 'chatbot-option-btn';
                        btn.textContent = opt.label;
                        btn.addEventListener('click', () => {
                            // User selects option
                            addMessage(opt.label, 'user');
                            // Clear option buttons
                            optionsContainer.remove();
                            // Go to next step
                            displayBotStep(opt.next);
                        });
                        optionsContainer.appendChild(btn);
                    }
                });
                
                messagesContainer.appendChild(optionsContainer);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }, 1000);
    }

    function showWelcome() {
        displayBotStep('mainMenu');
    }

    function handleUserInput() {
        const userText = chatInput.value.trim();
        if (!userText) return;

        // Display user message
        addMessage(userText, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            
            // Reply contextually or generic redirect to WhatsApp
            const welcomeText = "Thank you for reaching out! To get a detailed reply and chat directly with our experts, click below to send your query to our WhatsApp support.";
            addMessage(welcomeText, 'bot');
            
            // Create options with custom user query
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'chatbot-options-container';
            
            const encodedQuery = encodeURIComponent(`Hello Vasant Seeds, I have an inquiry: ${userText}`);
            const whatsappLink = `https://wa.me/${botNumber}?text=${encodedQuery}`;
            
            const link = document.createElement('a');
            link.href = whatsappLink;
            link.target = '_blank';
            link.className = 'chatbot-option-btn';
            link.style.background = '#25D366';
            link.style.color = '#ffffff';
            link.style.borderColor = '#25D366';
            link.innerHTML = `<i class="fab fa-whatsapp"></i> Send via WhatsApp`;
            optionsContainer.appendChild(link);
            
            const menuBtn = document.createElement('button');
            menuBtn.className = 'chatbot-option-btn';
            menuBtn.textContent = "🔙 Main Menu";
            menuBtn.addEventListener('click', () => {
                addMessage("Main Menu", 'user');
                optionsContainer.remove();
                displayBotStep('mainMenu');
            });
            optionsContainer.appendChild(menuBtn);
            
            messagesContainer.appendChild(optionsContainer);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
    }

    // Input handlers
    sendBtn.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
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