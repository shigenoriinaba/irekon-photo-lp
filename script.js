// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});
