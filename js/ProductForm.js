document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquiryForm");
  const productNameInput = document.getElementById("ProductName");
  const emailInput = document.getElementById("Email");
  const inquiryInput = document.getElementById("Inquiry");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll(".error-message").forEach((el) => {
      el.style.display = "none";
    });

    // Validate Product Name
    if (productNameInput.value.trim() === "") {
      document.getElementById("productNameError").textContent =
        "Product name is required";
      document.getElementById("productNameError").style.display = "block";
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validate Inquiry
    if (inquiryInput.value.trim() === "") {
      document.getElementById("inquiryError").textContent =
        "Inquiry is required";
      document.getElementById("inquiryError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Submit form via AJAX
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showFormMessage("success", data.message);
            form.reset();
          } else {
            showFormMessage("error", data.message);
          }
        })
        .catch((error) => {
          showFormMessage("error", "An error occurred. Please try again.");
        });
    }
  });

  function showFormMessage(type, message) {
    formMessage.textContent = message;
    formMessage.className = "form-message " + type;
    formMessage.style.display = "block";

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }
});
