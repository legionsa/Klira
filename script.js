// Loading screen and page transition functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainPage = document.getElementById('main-page');
    const ctaButton = document.querySelector('.cta-button');
    
    // Show loading screen for 3 seconds, then transition to main page
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.style.transition = 'opacity 0.8s ease-out';
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            // Hide loading screen and show main page
            loadingScreen.classList.add('hidden');
            mainPage.classList.remove('hidden');
            
            // Trigger entrance animation for main page
            mainPage.style.opacity = '0';
            mainPage.style.transition = 'opacity 0.8s ease-in';
            
            setTimeout(() => {
                mainPage.style.opacity = '1';
            }, 50);
        }, 800);
    }, 3000);
    
    // CTA Button click handler
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(0px) scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // You can add functionality here like opening a contact form
            // or redirecting to a contact page
            console.log('Discuss project button clicked!');
            
            // Example: Open email client
            // window.location.href = 'mailto:hello@klirastudio.com?subject=Project Discussion';
        });
    }
    
    // Add smooth scrolling for any future navigation
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
    
    // Add parallax effect to background image on scroll (for future sections)
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.background-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxUpdate);
    
    // Add resize handler for responsive adjustments
    function handleResize() {
        // Adjust any dynamic sizing if needed
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on load
    
    // Add intersection observer for future animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation (can be expanded for future content)
    document.querySelectorAll('.logo-container, .location-text, .cta-button').forEach(el => {
        observer.observe(el);
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to go back to loading screen (for demo purposes)
        if (e.key === 'Escape' && !loadingScreen.classList.contains('hidden')) {
            location.reload();
        }
        
        // Enter key on CTA button
        if (e.key === 'Enter' && document.activeElement === ctaButton) {
            ctaButton.click();
        }
    });
    
    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger navigation to next section
                console.log('Swipe up detected');
            } else {
                // Swipe down - could trigger navigation to previous section
                console.log('Swipe down detected');
            }
        }
    }
    
    // Performance optimization: Preload critical resources
    function preloadResources() {
        const criticalImages = [
            './assets/background.png',
            './assets/logo-vector.svg',
            './assets/logo-text.svg'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadResources();
    
    // Add error handling for missing assets
    document.querySelectorAll('img, svg').forEach(element => {
        element.addEventListener('error', function() {
            console.warn(`Failed to load resource: ${this.src || this.href}`);
            // Could add fallback behavior here
        });
    });
    
    console.log('KliraStudio landing page initialized successfully!');
});
/* ---------- logo hover lottie ---------- */
const logoLottie = document.querySelector('.logo-lottie');
if (logoLottie) logoLottie.setAttribute('hover', 'true');