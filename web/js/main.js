// ===== Smart Chicken — enlaces a WhatsApp =====
// Número en formato internacional sin signos ni espacios (Perú +51).
const WHATSAPP = "51949240863";
const MSG_DEFAULT = "Hola Smart Chicken, quiero hacer un pedido 🍗";

function waLink(msg) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg || MSG_DEFAULT);
}

document.querySelectorAll("[data-wa]").forEach(function (el) {
  el.setAttribute("href", waLink(el.getAttribute("data-msg")));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// ===== Animaciones (GSAP + ScrollTrigger) =====
// Regla de rendimiento: solo animamos transform y opacity.
(function () {
  const html = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Si no hay animación posible, mostramos todo tal cual (sin estado oculto).
  if (reduce || !window.gsap) {
    html.classList.remove("anim");
    return;
  }

  const { gsap } = window;
  gsap.registerPlugin(ScrollTrigger);

  // --- Hero: entrada al cargar ---
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .fromTo(".hero__bg",
      { autoAlpha: 0, scale: 1.12 },
      { autoAlpha: 1, scale: 1, duration: 1.6, ease: "power2.out" })
    .fromTo(".hero__content > *",
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 },
      "-=1.05");

  // --- Reveal individual al hacer scroll (fade + leve subida) ---
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.fromTo(el,
      { autoAlpha: 0, y: 34 },
      {
        autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 86%", once: true }
      });
  });

  // --- Reveal en grupos con stagger (tarjetas) ---
  gsap.utils.toArray("[data-reveal-group]").forEach(function (group) {
    gsap.fromTo(group.children,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12,
        scrollTrigger: { trigger: group, start: "top 82%", once: true }
      });
  });

  // --- FAB de WhatsApp: latido sutil (solo scale) ---
  gsap.to(".fab", {
    scale: 1.07, duration: 0.75, repeat: -1, yoyo: true, ease: "sine.inOut",
    transformOrigin: "center center"
  });

  // Recalcular posiciones cuando todo (fuentes/imágenes) terminó de cargar.
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();

// ===== Pestañas de formas de pago =====
(function () {
  const tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  if (!tabs.length) return;

  function activate(tab) {
    tabs.forEach(function (t) {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) { panel.hidden = !on; panel.classList.toggle("is-active", on); }
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { activate(tab); });
    tab.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = tabs[(i + dir + tabs.length) % tabs.length];
      next.focus();
      activate(next);
    });
  });
})();
