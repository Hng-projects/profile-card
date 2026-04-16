document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (!timeElement) {
    console.log("Time element not found");
    return;
  }

  timeElement.textContent = Date.now();
});
