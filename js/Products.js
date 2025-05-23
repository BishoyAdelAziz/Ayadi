document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-link");
  const products = document.querySelectorAll(".Category-Item");
  const sectionTitle = document.querySelector("section > h3"); // Select the h3 inside section
  const hoverText = document.querySelector(".hover-text"); // Get the hover text element

  function showProductsByCategory(category) {
    const allHoverSections = document.querySelectorAll(".hover-section");
    const HoverTitle = document.querySelectorAll(".hover-text");
    allHoverSections.forEach((section) => {
      section.classList.remove("active");
    });
    if (category === "all") {
      products.forEach((product) => {
        product.style.display = "flex";
      });
      sectionTitle.textContent = "All Products"; // Update section title
      hoverText.classList.add("hidden");
    } else {
      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");
        if (productCategory === category) {
          product.style.display = "flex";
        } else {
          product.style.display = "none";
        }
      });
      sectionTitle.textContent = category; // Update section title with selected category
    }
    if (category === "PP Compression Fittings PN16") {
      document
        .getElementById("compression-hover-section")
        .classList.add("active");
      hoverText.classList.remove("hidden");
    } else if (category === "PP Clamp Saddle") {
      document
        .getElementById("clamp-saddle-hover-section")
        .classList.add("active");
      hoverText.classList.remove("hidden");
    }
  }

  function setActiveLink(selectedLink) {
    categoryLinks.forEach((link) => {
      link.classList.remove("active");
    });
    selectedLink.classList.add("active");
  }

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedCategory = link.getAttribute("data-category");
      setActiveLink(link);
      showProductsByCategory(selectedCategory);
    });
  });

  // Show all products on initial load
  showProductsByCategory("all");
});

// Animation
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".Category-Item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});
// Auto Hovering Sections
document.addEventListener("DOMContentLoaded", function () {
  // AutoHover Controller Class
  class AutoHover {
    constructor(selector) {
      this.elements = document.querySelectorAll(selector);
      this.currentIndex = 0;
      this.interval = null;
      if (this.elements.length > 0) {
        this.init();
      }
    }

    init() {
      this.startInterval();

      this.elements.forEach((el) => {
        el.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
        el.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
      });
    }

    handleMouseEnter(e) {
      this.stopInterval();
      this.clearAllHovers();
      e.currentTarget.classList.add("active-hover");
    }

    handleMouseLeave(e) {
      this.startInterval();
      e.currentTarget.classList.remove("active-hover");
    }

    startInterval() {
      this.stopInterval();
      this.interval = setInterval(() => {
        this.clearAllHovers();
        this.elements[this.currentIndex].classList.add("auto-hover");
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
      }, 3000);
    }

    stopInterval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }

    clearAllHovers() {
      this.elements.forEach((el) => {
        el.classList.remove("auto-hover");
      });
    }
  }

  // Initialize all hover sections
  const hoverSections = [
    new AutoHover(".image-wrapper"), // First product section
    new AutoHover(".second-Hovering > div"), // Main items (Bolts)
    new AutoHover(".Component > div"), // Component parts (top/gasket/buttom)
  ];

  // Add dynamic styles
  const style = document.createElement("style");
  style.textContent = `
    /* Base hover effects */
    .auto-hover .info-box:not(.gasket .info-box),
    .active-hover .info-box:not(.gasket .info-box) {
      opacity: 1 !important;
      visibility: visible !important;
      top: 110% !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
    
    /* Gasket-specific positioning */
    .gasket.auto-hover .info-box,
    .gasket.active-hover .info-box {
      opacity: 1 !important;
      visibility: visible !important;
      left: -110% !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
    }
    
    .gasket .info-box::after {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 10px 0 10px 10px;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
    }
    
    /* Image scaling */
    .auto-hover img,
    .active-hover img {
      transform: scale(1.05) !important;
    }
    
    /* Component animations */
    .Component .auto-hover.top,
    .Component .active-hover.top {
      transform: translateY(-8px) !important;
    }
    
    .Component .auto-hover.gasket,
    .Component .active-hover.gasket {
      transform: translateY(-4px) !important;
    }
    
    .Component .auto-hover.buttom,
    .Component .active-hover.buttom {
      transform: translateY(-8px) !important;
    }
  `;
  document.head.appendChild(style);
});
