// Improved JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Enhanced dropdown functionality
  document.querySelectorAll(".dropbtn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.closest(".dropdown");
        const content = this.nextElementSibling;

        // Close other open dropdowns
        document.querySelectorAll(".dropdown-content").forEach((dc) => {
          if (dc !== content) dc.style.display = "none";
        });

        // Toggle current dropdown
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown") && window.innerWidth <= 768) {
      document.querySelectorAll(".dropdown-content").forEach((dc) => {
        dc.style.display = "none";
      });
    }
  });
});
