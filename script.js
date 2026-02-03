// ============================================
// PORTFOLIO INTERACTIVE FEATURES
// ============================================

// Hamburger Menu Toggle
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open")) {
        menu.style.maxHeight = "0";
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.glass-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simplified fade-in animations - removed opacity manipulation for better UX
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.section, .project-card, .experience-card, .info-card, .contact-card, .skill-category'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Typing animation removed for better UX - text displays immediately

// ============================================
// SKILL BARS ANIMATION
// ============================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
});

// Parallax effect removed for better UX

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('.section, .hero-section');
const navLinks = document.querySelectorAll('.nav-link, .menu-links a');

function highlightActiveSection() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ============================================
// PROJECT CARD HOVER EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ============================================
// FORM VALIDATION (if contact form is added)
// ============================================

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add form submission logic here
        const formData = new FormData(this);
        
        // Example: Send to server
        fetch('send_message.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
                this.reset();
            } else {
                alert('Error sending message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message. Please try again.');
        });
    });
}

// Page load animation removed for better UX

// ============================================
// COPY TO CLIPBOARD (for contact info)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('.contact-card a');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:') || this.href.startsWith('tel:')) {
                // Allow default behavior for mailto and tel links
                return;
            }
        });
    });
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            icon.classList.remove('open');
            menu.style.maxHeight = '0';
        }
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cWant to connect? Reach out at dchae22@gmail.com', 'color: #94a3b8; font-size: 12px;');
