// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0 && projectCards.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      projectCards.forEach(card => {
        card.style.display =
          category === 'all' || card.dataset.category === category
            ? 'block'
            : 'none';
      });
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// Contact form validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Message sent successfully! ✅');
      form.reset();
    } else {
      alert('Oops! Something went wrong. ❌');
    }
  } catch (error) {
    alert('Error: Unable to send message. ❌');
  }
});

// Scroll-to-top button
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.classList.add('scroll-top-btn');
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

// Typing effect in hero section
const textEl = document.querySelector('.hero-section .text h2');
if (textEl) {
  const text = "Hi, I'm Huri 👋";
  let idx = 0;

  function typeEffect() {
    if (idx < text.length) {
      textEl.innerHTML += text[idx];
      idx++;
      setTimeout(typeEffect, 100);
    }
  }
  textEl.innerHTML = "";
  typeEffect();
}

// Initialize AOS after everything else
AOS.init({
  duration: 1000,  // animation duration
  once: true,      // run only once
});