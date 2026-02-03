/* ===== SMOOTH REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => revealObserver.observe(el));

/* ===== HERO PARALLAX ===== */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  hero.style.backgroundPositionY = scroll * 0.4 + "px";
});

/* ===== MAGNETIC BUTTON ===== */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* ===== GALLERY DEPTH ===== */
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("mousemove", e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;
    const rotateY = (centerX - x) / 18;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});