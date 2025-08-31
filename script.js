// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  setHeaderHeightVar();
}

// Typing effect
const typingElement = document.getElementById("typing");
const texts = ["Aspiring Developer", "Tech Enthusiast", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1200);
  }
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

const headerEl = document.getElementById('pageHeader');

function setHeaderHeightVar() {
  const h = headerEl.offsetHeight || 90;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}

function enhanceAnchorScroll() {
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      const headerH = headerEl.offsetHeight;
      const y = target.getBoundingClientRect().top + window.scrollY - headerH - 6;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  });
}

window.addEventListener('load', () => {
  setHeaderHeightVar();
  enhanceAnchorScroll();
  type();
});
window.addEventListener('resize', setHeaderHeightVar);