// GSAP animation for social icons
gsap.from(".social-icons a", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.5
});

// GSAP animation for contact info
gsap.from(".contact-info div", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
    delay: 1
});

// ScrollReveal animations for the footer section
ScrollReveal().reveal("footer", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    reset: true
});
