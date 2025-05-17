document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Image zoom effect
  const productImage = document.querySelector(".product-image");
  const imageContainer = document.querySelector(".product-image-container");

  imageContainer.addEventListener("mousemove", (e) => {
    const containerRect = imageContainer.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    productImage.style.transformOrigin = `${x}px ${y}px`;
    productImage.style.transform = "scale(1.5)";
  });

  imageContainer.addEventListener("mouseleave", () => {
    productImage.style.transform = "scale(1)";
  });
});
