// ================= GSAP SETUP =================

gsap.registerPlugin(ScrollTrigger);

// ================= PAGE LOAD =================

window.addEventListener("load", function () {

    // HERO FADE IN

    gsap.from("#hero-image", {
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

    // INTRO POP UP

    gsap.to(".intro-section", {
        opacity: 1,
        y: -50,
        duration: 1,
        scrollTrigger: {
            trigger: ".intro-section",
            start: "top 80%"
        }
    });

    // FOOD IMAGES SLIDE IN

    gsap.from(".meal-image", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".food-section",
            start: "top 80%"
        }
    });

    // MENU PAGE FADE IN

    gsap.from(".page-content", {
        opacity: 0,
        y: 40,
        duration: 1
    });

});

// ================= NAVBAR COLOUR CHANGE =================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

document.querySelectorAll(".meal-image").forEach(image => {
  image.addEventListener("mouseenter", () => {
    gsap.to(image, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });
  image.addEventListener("mouseleave", () => {
    gsap.to(image, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});