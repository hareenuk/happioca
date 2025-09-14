/**
 * Happioca — Onnu Vannu Noka
 * Premium Landing Site JavaScript
 * Vanilla JS for smooth interactions and accessibility
 */

// Configuration
const CONFIG = {
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  scrollOffset: 80, // Navbar height
  animationDuration: 300
};

// State management
const state = {
  mobileMenuOpen: false
};

/**
 * Mobile menu functionality removed - using simplified navbar
 */
function initMobileMenu() {
  // Mobile menu functionality removed for cleaner UX
  return;
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
        
        if (CONFIG.reducedMotion) {
          window.scrollTo(0, offsetTop);
        } else {
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
        
        // Track analytics if data-ga attribute exists
        const gaEvent = link.getAttribute('data-ga');
        if (gaEvent && typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            event_category: 'navigation',
            event_label: gaEvent
          });
        }
      }
    });
  });
}

/**
 * Initialize scroll animations for feature cards
 */
function initScrollAnimations() {
  if (CONFIG.reducedMotion) return;
  
  const animatedElements = document.querySelectorAll('.animate-fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity ${CONFIG.animationDuration}ms var(--easing-smooth), transform ${CONFIG.animationDuration}ms var(--easing-smooth)`;
    observer.observe(element);
  });
}

/**
 * Initialize navbar scroll behavior
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');
  const aboutSection = document.querySelector('.about-section');
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function updateNavbar() {
    const currentScrollY = window.scrollY;
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    
    // Show logo when hero logo section is scrolled past (mid of home screen)
    const triggerPoint = heroHeight * 0.4; // 40% down the hero section
    
    if (currentScrollY > triggerPoint) {
      navbar.classList.add('scrolled');
      navbar.setAttribute('data-scroll-state', 'scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbar.setAttribute('data-scroll-state', 'hero');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', updateNavbar, { passive: true });
  
  // Initial check
  updateNavbar();
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  initSmoothScrolling();
  initScrollAnimations();
  initNavbarScroll();
  
  // Add loaded class to body for any CSS animations
  document.body.classList.add('loaded');
  
  console.log('Happioca premium website initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
