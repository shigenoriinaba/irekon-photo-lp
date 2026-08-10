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

// Hero slideshow (4 photos, crossfade + Ken Burns zoom on each change)
// Thumbnail strip (bottom-right) mirrors the current slide and can jump to any slide on click.
const heroSlides = document.querySelectorAll('.hero-slide');
const heroThumbs = document.querySelectorAll('.hero-thumb');
if (heroSlides.length > 1) {
  let heroIndex = 0;
  let heroTimer = null;

  const goToHeroSlide = (nextIndex) => {
    heroSlides[heroIndex].classList.remove('active');
    heroThumbs[heroIndex]?.classList.remove('active');
    heroIndex = nextIndex;
    heroSlides[heroIndex].classList.add('active');
    heroThumbs[heroIndex]?.classList.add('active');
  };

  const startHeroTimer = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      goToHeroSlide((heroIndex + 1) % heroSlides.length);
    }, 5000);
  };

  heroThumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      if (i === heroIndex) return;
      goToHeroSlide(i);
      startHeroTimer();
    });
  });

  startHeroTimer();
}
