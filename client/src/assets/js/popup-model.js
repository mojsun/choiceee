// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("modal-container");
  const modalForm = document.getElementById("modal-form");
  const closeButton = document.getElementById("close-button");
  const submittedMessage = document.getElementById("submitted-message");
  // Show the modal after 10 seconds
  setTimeout(() => {
    modalContainer.style.display = "flex";
  }, 5000);

  // Close the modal
  closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  // Handle form submission (you can add your form handling logic here)
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // alert("Form submitted!");
    submittedMessage.style.display = "block";
    modalForm.reset();
    // modalContainer.style.display = "none";
  });
});
