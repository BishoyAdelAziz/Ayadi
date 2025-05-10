document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  // Toggle mobile menu
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Mobile dropdown functionality
  document.querySelectorAll(".dropbtn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.parentElement;
        const content = dropdown.querySelector(".dropdown-content");
        content.classList.toggle("active");
      }
    });
  });

  // Close menu when clicking outside (for mobile)
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      !e.target.closest(".Links-Container") &&
      !e.target.closest(".menu-icon")
    ) {
      navLinks.classList.remove("active");
      document.querySelectorAll(".dropdown-content").forEach((dc) => {
        dc.classList.remove("active");
      });
    }
  });
});
