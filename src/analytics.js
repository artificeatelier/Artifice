// Analytics events. Every track() call feeds Google Tag Manager (dataLayer) and, when
// REACT_APP_PLAUSIBLE_DOMAIN is set, Plausible (the script loads only with that env var).
const DOMAIN = process.env.REACT_APP_PLAUSIBLE_DOMAIN;

export function initAnalytics() {
  if (!DOMAIN || typeof document === "undefined" || document.querySelector("script[data-analytics]")) return;
  const s = document.createElement("script");
  s.defer = true;
  s.src = "https://plausible.io/js/script.tagged-events.js";
  s.dataset.domain = DOMAIN;
  s.dataset.analytics = "plausible";
  document.head.appendChild(s);
  window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
}

export function track(name, props) {
  if (typeof window === "undefined") return;
  // Google Tag Manager: each event lands in dataLayer as { event: name, ...props }.
  (window.dataLayer = window.dataLayer || []).push({ event: name, ...props });
  if (window.plausible) window.plausible(name, props ? { props } : undefined);
}
