// e-diversify — "The Blueprint" nav dropdown
// Included on every page so the capability menu works whether or not
// the homepage's capability wave is present.

(function () {
  "use strict";

  var menu = document.getElementById("blueprint-menu");
  var toggle = document.getElementById("blueprint-toggle");
  var dropdown = document.getElementById("blueprint-dropdown");
  var chevron = document.getElementById("blueprint-chevron");

  if (!menu || !toggle || !dropdown) return;

  function closeMenu() {
    dropdown.classList.remove("open");
    if (chevron) chevron.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu(e) {
    e.stopPropagation();
    var willOpen = !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", willOpen);
    if (chevron) chevron.classList.toggle("open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  }

  toggle.addEventListener("click", toggleMenu);
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
