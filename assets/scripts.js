const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) {
        sec.classList.add("active");
      }
    });
  });
});


  const skillCards = document.querySelectorAll('.skills-list li');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

        const bar = entry.target.querySelector('.skill-bar span');
        bar.style.width = getComputedStyle(entry.target)
          .getPropertyValue('--level');
      }
    });
  }, { threshold: 0.4 });

  skillCards.forEach(card => observer.observe(card));



// mobile nav toggle
const mobileNavBtn = document.getElementById("mobileNavButton");
const navLinks = document.getElementById("navLinks");

mobileNavBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden-mobile");
});

 const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');

    const isLight = body.classList.contains('light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
      });

      