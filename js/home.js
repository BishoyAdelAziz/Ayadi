document.addEventListener("DOMContentLoaded", () => {
  const aboutUsFirst = document.querySelector(".About-Us-First");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  if (aboutUsFirst) {
    observer.observe(aboutUsFirst);
  }
});
// Post Initial Animation
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("title").classList.add("active-title");
  document.getElementById("text").classList.add("active-text");
  document.getElementById("image").classList.add("active-image");
});
// Clients Logos Animations
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".logo-track");
  let isDown = false;
  let startX;
  let scrollLeft;
  let animation;

  // Pause animation on drag start
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.animationPlayState = "paused";
    track.style.cursor = "grabbing";
  });

  // Touch support
  track.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.animationPlayState = "paused";
  });

  // Handle dragging
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast factor
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch move
  track.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Resume animation when drag ends
  track.addEventListener("mouseup", () => {
    isDown = false;
    track.style.animationPlayState = "running";
    track.style.cursor = "grab";
  });

  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.style.animationPlayState = "running";
  });

  track.addEventListener("touchend", () => {
    isDown = false;
    track.style.animationPlayState = "running";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const content = entry.target.querySelector(".Quote-Content");
          const image = entry.target.querySelector(".Quote-Media-Wrapper img");

          if (content) content.classList.add("animate");
          if (image) image.classList.add("animate");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const quoteSection = document.querySelector(".Quote-Main");
  if (quoteSection) {
    observer.observe(quoteSection);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".Who-We-Are-Section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          observer.unobserve(section); // Only animate once
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".Solution-Section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          observer.unobserve(section); // Only animate once
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  observer.observe(section);
});
// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document
    .querySelectorAll(".animate-title, .animate-text, .animate-image")
    .forEach((el) => {
      observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements you want to animate
  const image = document.getElementById("image");
  const title = document.getElementById("title");
  const text = document.getElementById("text");

  // Create the observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the animate-* classes to trigger the animation
          entry.target.classList.remove(
            "animate-image",
            "animate-title",
            "animate-text"
          );
          // Optionally, unobserve if you only want the animation once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the element is visible
    }
  );

  // Observe each element
  [image, title, text].forEach((el) => observer.observe(el));
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(
          "animate-image",
          "animate-title",
          "animate-text"
        );
      } else {
        entry.target.classList.add(
          "animate-image",
          "animate-title",
          "animate-text"
        );
      }
    });
  },
  { threshold: 0.3 }
);

[image, title, text].forEach((el) => observer.observe(el));
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section-Products");
  if (section) {
    // Add the visible class to trigger the transition
    section.classList.add("visible");
  }
});
