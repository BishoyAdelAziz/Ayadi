document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-link");
  const products = document.querySelectorAll(".Category-Item");
  const sectionTitle = document.querySelector("section > h3"); // Select the h3 inside section

  function showProductsByCategory(category) {
    if (category === "all") {
      products.forEach((product) => {
        product.style.display = "flex";
      });
      sectionTitle.textContent = "All Products"; // Update section title
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
