document.addEventListener("DOMContentLoaded", function () {
  // Wrap your code in a function to ensure variables are scoped locally
  function setupChat() {
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");
    const closeChatButton = document.querySelector(".close-button");

    // Check if elements exist before accessing their properties
    if (chatButton && chatWindow && closeChatButton) {
      // Show chat window and hide chat button when chat button is clicked
      chatButton.addEventListener("click", function () {
        chatButton.style.display = "none";
        chatWindow.style.display = "block";
      });

      // Hide chat window and show chat button when close chat button is clicked
      closeChatButton.addEventListener("click", function () {
        chatButton.style.display = "block";
        chatWindow.style.display = "none";
      });
    }
  }

  // Call the setupChat function when the DOM is ready
  setupChat();
});
