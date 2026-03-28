const revealTargets = document.querySelectorAll(
  ".intro-card, .feature-card, .world-card, .contact-box, .metric, .signal-card, .game-item, .catalog-card, .detail-card, .game-shot-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});
