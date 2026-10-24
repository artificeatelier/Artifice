// Privacy-friendly analytics (Plausible). Loads only when REACT_APP_PLAUSIBLE_DOMAIN is set;
// track() is a no-op otherwise, so callers never need to check.
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
  if (typeof window !== "undefined" && window.plausible) window.plausible(name, props ? { props } : undefined);
}
