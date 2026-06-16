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
