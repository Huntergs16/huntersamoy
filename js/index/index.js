// JavaScript for Typewriter Effect
const titles = ['Software Engineer', 'Music Producer', 'Designer', 'Web Developer'];
const typewriter = document.getElementById('typewriter');
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < titles[index].length) {
    typewriter.innerHTML += titles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed (milliseconds)
  } else {
    setTimeout(erase, 1500); // Adjust pause between typing and erasing (milliseconds)
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.innerHTML = titles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
  } else {
    index++;
    if (index >= titles.length) {
      index = 0;
    }
    setTimeout(type, 500); // Adjust pause between phrases (milliseconds)
  }
}

document.addEventListener('DOMContentLoaded', type);