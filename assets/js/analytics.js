// e-diversify — shared Google Analytics (GA4) loader
// Include on any page with: <script src="/assets/js/analytics.js"></script>

(function () {
  var GA_MEASUREMENT_ID = "G-WK2XMV6GB8";

  // Load the gtag.js library
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(gtagScript);

  // Set up the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
})();