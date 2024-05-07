// lenis smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap animations

gsap.from(
  ".wrapper p", { 
    duration: 0.5, 
    delay: 0.2, 
    y: 20, 
    opacity: 0, 
    stagger: 0.3, 
    ease: "power2.out" 
});

gsap.from(
  ".weather-widget", { 
    duration: 0.5, 
    delay: 1, 
    y: 20, 
    opacity: 0, 
    ease: "power2.out" 
});

gsap.utils.toArray(".wrapper, input, textarea, label, .wrapper ul li, .service").forEach(service => {
  gsap.from(service, {
    scrollTrigger: {
      trigger: service,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.5
  });
});

gsap.from(
  ".rotate-heading-left", { 
    duration: 1, 
    y: -30, 
    opacity: 0, 
    ease: "power1.out" 
});

gsap.from(
  ".hero-content h1", { 
    duration: 1, 
    y: -200, 
    opacity: 0, 
    ease: "power2.slow" 
});

gsap.from(
  ".hero-content p", { 
    duration: 1, 
    y: 200, 
    opacity: 0, 
    ease: "power2.slow" 
});


// navigation

// Store the current scroll position
let lastScrollTop = 0;

// Get the navigation element
const nav = document.getElementsByClassName('nav-header');

// Function to handle scroll events
function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check scroll direction
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        gsap.to(nav, { top: '-100px', duration: 0.3 }); // Hide navigation
    } else {
        // Scrolling up
        gsap.to(nav, { top: '0', duration: 0.3 }); // Show navigation
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);
