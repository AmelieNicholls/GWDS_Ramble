gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {

    

    gsap.from("#hero-image", {
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

    

    gsap.to(".intro-section", {
        opacity: 1,
        y: -50,
        duration: 1,
        scrollTrigger: {
            trigger: ".intro-section",
            start: "top 80%"
        }
    });

    

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

    

    gsap.from(".page-content", {
        opacity: 0,
        y: 40,
        duration: 1
    });

});

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");
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

const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

dateInput.addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const day = selectedDate.getDay();

    // using Sunday = 0
    // using Saturday = 6

    if (day === 0 || day === 6) {
        
        timeInput.min = "11:00";
        timeInput.max = "22:00";
    } else {
        
        timeInput.min = "17:00";
        timeInput.max = "22:00";
    }
});


gsap.from(".booking-hero-image", {
    opacity: 0,
    duration: 1.5
});

gsap.from(".decorative-image", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".booking-form",
        start: "top 80%"
    }
});