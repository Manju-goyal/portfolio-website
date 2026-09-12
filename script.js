// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Contact form validation
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  if (name.length < 2) {
    setError('nameError', 'Please enter your name.');
    valid = false;
  } else {
    setError('nameError', '');
  }

  if (!isValidEmail(email)) {
    setError('emailError', 'Please enter a valid email address.');
    valid = false;
  } else {
    setError('emailError', '');
  }

  if (message.length < 10) {
    setError('messageError', 'Message should be at least 10 characters.');
    valid = false;
  } else {
    setError('messageError', '');
  }

  if (valid) {
    successMsg.textContent = 'Thanks! Your message has been noted (demo form — connect a backend to actually send it).';
    form.reset();
  }
});
