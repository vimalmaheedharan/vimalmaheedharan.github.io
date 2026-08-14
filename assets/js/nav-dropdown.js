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

  function openMenu() {
    dropdown.classList.add("open");
    if (chevron) chevron.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    dropdown.classList.remove("open");
    if (chevron) chevron.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  // On mouse-driven devices, open on hover like any other nav dropdown;
  // touch devices fall back to the click handler above, since hover
  // doesn't map cleanly to a tap.
  var hoverCapable = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function toggleMenu(e) {
    e.stopPropagation();
    if (hoverCapable) {
      // Hover already opens it before a click can land — if a click
      // toggled state here too, a deliberate click on an already
      // hover-opened menu would instantly close it again. Make click
      // idempotent-open instead; hovering away is what closes it.
      openMenu();
      return;
    }
    if (dropdown.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggle.addEventListener("click", toggleMenu);
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  if (hoverCapable) {
    var closeTimer = null;
    menu.addEventListener("mouseenter", function () {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      openMenu();
    });
    menu.addEventListener("mouseleave", function () {
      closeTimer = setTimeout(closeMenu, 200);
    });
  }
})();
