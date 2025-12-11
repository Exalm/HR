// animations.js - универсальный Intersection Observer
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми анимируемыми элементами
  document.querySelectorAll('header, .about, .why, .stage, .way, .service, .contact, .wayItem, h1, h2, h3, ul, p, img, button')
    .forEach(el => observer.observe(el));
};
