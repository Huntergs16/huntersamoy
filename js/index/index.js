// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter");
  const titles = [
    "Software Engineer.",
    "Music Producer.",
    "Designer.",
    "Web Developer.",
    "Creator.",
  ];
  const typingDelay = 100; // Delay between each character (in milliseconds)
  const titleDelay = 2000; // Delay between each title (in milliseconds)

  let titleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < titles[titleIndex].length) {
      typewriterElement.textContent += titles[titleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, titleDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = titles[titleIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, typingDelay);
    } else {
      titleIndex++;
      if (titleIndex >= titles.length) {
        titleIndex = 0;
      }
      setTimeout(type, typingDelay);
    }
  }

  // Start the typewriter effect
  type();
});
