// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile nav toggle
// Body scroll is locked while the drawer is open — on iOS Safari, scrolling
// the page behind a fixed+transformed nav panel causes it to detach/ghost.
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
let lockedScrollY = 0;

const openNav = () => {
  lockedScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.width = '100%';
  nav.classList.add('open');
};

const closeNav = () => {
  nav.classList.remove('open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, lockedScrollY);
};

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('open')) closeNav();
  else openNav();
});
nav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeNav);
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
