const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

// Open the menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// Close the menu
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Move elements with mouse
const moveElements = (e) => {
    const shapes = document.querySelectorAll(".shape");
    const tracker = document.querySelector(".tracker");

    tracker.style.top = `${e.clientY}px`;
    tracker.style.left = `${e.clientX}px`;
    tracker.style.opacity = 1;

    shapes.forEach((shape) => {
        const shapeOffset = shape.getAttribute("data-offset");

        let offsetX = (window.innerWidth - e.clientX) * shapeOffset;
        let offsetY = (window.innerHeight - e.clientY) * shapeOffset;

        shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
};

document.addEventListener("mousemove", moveElements);



const timelines = document.querySelectorAll(".timeline__right");

const trackers = document.querySelectorAll(".timeline__tracker");

window.addEventListener(
  "scroll",
  (e) => {
    timelines.forEach((timeline, i) => {
      //  Animate on scroll
      if (trackers[i].offsetTop > 0) {
        timeline
          .querySelector(".timeline__content")
          .classList.add("animate-on-scroll");
      } else {
        timeline
          .querySelector(".timeline__content")
          .classList.remove("animate-on-scroll");
      }
      // linear-gradient(#ff7448, #ff4848 51%, #6248ff)
      //       Timeline progress
      timeline.style.background = `linear-gradient(180deg, #ff4848 0%, #6248ff ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) 100%)`;
    });
  },
  { passive: true }
);
