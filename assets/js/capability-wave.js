// e-diversify — capability wave (continuous marquee)
// An infinitely looping sine-wave conveyor of 18 capability icons that
// drifts left-to-right on its own, pauses on hover, cycles its gradient
// hue over time, and links each node straight through to its own page.

(function () {
  "use strict";

  var CAPABILITIES = [
    {
      title: "Architecture Strategy",
      slug: "architecture-strategy",
      desc: "Turning business goals into a clear, long-term technology roadmap.",
      icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>'
    },
    {
      title: "Solution Architecture",
      slug: "solution-architecture",
      desc: "Designing systems that are modular, scalable, and built to evolve.",
      icon: '<path d="M12 3l7 4-7 4-7-4 7-4z"/><path d="M5 11l7 4 7-4"/><path d="M5 15l7 4 7-4"/>'
    },
    {
      title: "Security by Design",
      slug: "security-by-design",
      desc: "Baking compliance and protection into every layer, from day one.",
      icon: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3z"/><path d="M9.2 12l2 2 3.6-3.8"/>'
    },
    {
      title: "Cloud &amp; Infrastructure",
      slug: "cloud-infrastructure",
      desc: "Building resilient, cost-efficient platforms that stay available under load.",
      icon: '<path d="M7 18a4 4 0 01-1-7.9A5 5 0 0115.9 8 4.5 4.5 0 0117 17H7z"/>'
    },
    {
      title: "Data &amp; AI Enablement",
      slug: "data-ai-enablement",
      desc: "Turning raw data into AI-ready pipelines that drive smarter decisions.",
      icon: '<rect x="5" y="13" width="3" height="6" rx="0.6"/><rect x="10.5" y="9" width="3" height="10" rx="0.6"/><rect x="16" y="5" width="3" height="14" rx="0.6"/>'
    },
    {
      title: "Integration Excellence",
      slug: "integration-excellence",
      desc: "Connecting systems, teams, and processes without friction.",
      icon: '<rect x="3.5" y="8" width="8" height="8" rx="2.4"/><rect x="12.5" y="8" width="8" height="8" rx="2.4"/><path d="M11.5 12h1"/>'
    },
    {
      title: "Engineering Leadership",
      slug: "engineering-leadership",
      desc: "Growing teams that build, ship, and own what they create.",
      icon: '<circle cx="9" cy="8.5" r="2.6"/><circle cx="16" cy="9.5" r="2.1"/><path d="M4 19c0-3 2.3-5 5-5s5 2 5 5"/><path d="M14.5 14.3c2.2.2 3.9 2 3.9 4.7"/>'
    },
    {
      title: "Continuous Impact",
      slug: "continuous-impact",
      desc: "Measuring what matters and improving it, sprint after sprint.",
      icon: '<path d="M4 16l4.5-6 3.5 4 6-8"/><path d="M14.5 6h4v4"/>'
    },
    {
      title: "Cyber Security",
      slug: "cyber-security",
      desc: "Zero-trust access, threat modeling, and defense that scales with the platform.",
      icon: '<rect x="6" y="11" width="12" height="8" rx="1.6"/><path d="M8.5 11V8a3.5 3.5 0 017 0v3"/><circle cx="12" cy="15" r="1.1" fill="currentColor" stroke="none"/>'
    },
    {
      title: "Site Reliability",
      slug: "site-reliability",
      desc: "Keeping production healthy with SLOs, on-call discipline, and fast recovery.",
      icon: '<path d="M3 12h4l2 6 4-12 2 6h6"/>'
    },
    {
      title: "DevOps &amp; CI/CD",
      slug: "devops-cicd",
      desc: "Shipping safely and often, with pipelines that catch problems before users do.",
      icon: '<path d="M8 6a4 4 0 000 8h1"/><path d="M16 18a4 4 0 000-8h-1"/><path d="M4.5 10L8 6.5 11.5 10"/><path d="M19.5 14L16 17.5 12.5 14"/>'
    },
    {
      title: "Containers &amp; Kubernetes",
      slug: "containers-kubernetes",
      desc: "Orchestrating workloads that self-heal, scale, and recover on their own.",
      icon: '<path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"/><path d="M12 3v18M5 7l7 4 7-4"/>'
    },
    {
      title: "Observability",
      slug: "observability",
      desc: "Seeing inside distributed systems before small issues become outages.",
      icon: '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.6"/>'
    },
    {
      title: "Identity &amp; Access",
      slug: "identity-access",
      desc: "OAuth2, OIDC, and access governance that scales across tenants.",
      icon: '<circle cx="8.5" cy="8.5" r="3.5"/><path d="M11 11l8.5 8.5"/><path d="M16 15l2-2M18.5 17.5l2-2"/>'
    },
    {
      title: "Incident Response",
      slug: "incident-response",
      desc: "Calm, structured command when things break, and a postmortem that fixes the root cause.",
      icon: '<path d="M12 4l9 15H3l9-15z"/><path d="M12 10v4"/><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"/>'
    },
    {
      title: "Cost &amp; FinOps",
      slug: "cost-finops",
      desc: "Right-sizing infrastructure so performance never comes with a runaway bill.",
      icon: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5v9M14.5 9.8c0-1-1-1.8-2.5-1.8s-2.5.8-2.5 1.8 1 1.5 2.5 1.7c1.5.2 2.5.8 2.5 1.8s-1 1.8-2.5 1.8-2.5-.8-2.5-1.8"/>'
    },
    {
      title: "API &amp; Platform Design",
      slug: "api-platform-design",
      desc: "APIs and platforms other teams can build on without reading your mind.",
      icon: '<path d="M4 8l4-3 4 3-4 3-4-3z"/><path d="M4 13l4 3 4-3"/><path d="M12 8l4-3 4 3-4 3-4-3z"/>'
    },
    {
      title: "Mentorship &amp; Team Building",
      slug: "mentorship-team-building",
      desc: "Helping engineers grow into architects, not just closing tickets faster.",
      icon: '<path d="M12 4L3 8l9 4 9-4-9-4z"/><path d="M7 10.5V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5"/>'
    }
  ];

  var viewportEl = document.getElementById("wave-viewport");
  var trackEl = document.getElementById("wave-track");
  var svgEl = document.getElementById("wave-svg");
  var iconsEl = document.getElementById("wave-icons");
  var labelsEl = document.getElementById("wave-labels");
  var tooltipEl = document.getElementById("cap-tooltip");

  if (!viewportEl || !trackEl || !svgEl || !iconsEl || !labelsEl) return;

  var NODE_SPACING = 168;
  var START_X = 90;
  var BASELINE = 78;
  var AMPLITUDE = 20;
  var PERIOD_NODES = 2.75; // nodes per full sine cycle
  var TRACK_HEIGHT = 190;
  var ICON_R = 28;
  var DRIFT_SPEED = 0.42; // px per animation tick

  var n = CAPABILITIES.length;
  var LOOP_SPAN = n * NODE_SPACING; // exact distance between a node and its duplicate
  var setCount = 2; // render two copies back to back for a seamless loop
  var totalNodes = n * setCount;
  var trackWidth = START_X + (totalNodes - 1) * NODE_SPACING + START_X;

  function waveY(x, phase) {
    return BASELINE + AMPLITUDE * Math.sin((x / NODE_SPACING) * (2 * Math.PI / PERIOD_NODES) + phase);
  }

  trackEl.style.width = trackWidth + "px";
  trackEl.style.height = TRACK_HEIGHT + "px";
  svgEl.setAttribute("width", trackWidth);
  svgEl.setAttribute("height", TRACK_HEIGHT);
  svgEl.setAttribute("viewBox", "0 0 " + trackWidth + " " + TRACK_HEIGHT);
  iconsEl.style.width = trackWidth + "px";
  labelsEl.style.width = trackWidth + "px";

  // --- gradient + filter setup ---------------------------------------------
  var NS = "http://www.w3.org/2000/svg";
  var defs = document.createElementNS(NS, "defs");

  var grad = document.createElementNS(NS, "linearGradient");
  grad.setAttribute("id", "wave-grad");
  grad.setAttribute("gradientUnits", "userSpaceOnUse");
  grad.setAttribute("x1", "0");
  grad.setAttribute("x2", trackWidth);
  grad.setAttribute("y1", "0");
  grad.setAttribute("y2", "0");

  // Base hues for the four gradient stops — a slowly rotating offset is
  // added to all of them each frame, so the whole wave's palette drifts
  // continuously instead of sitting at a fixed cyan-to-magenta gradient.
  var STOP_BASE_HUES = [190, 215, 255, 300];
  var stopEls = STOP_BASE_HUES.map(function (hue, i) {
    var st = document.createElementNS(NS, "stop");
    st.setAttribute("offset", (i / (STOP_BASE_HUES.length - 1)) * 100 + "%");
    st.setAttribute("stop-color", "hsl(" + hue + ",85%,64%)");
    grad.appendChild(st);
    return st;
  });

  var glowFilter = document.createElementNS(NS, "filter");
  glowFilter.setAttribute("id", "wave-glow");
  glowFilter.setAttribute("x", "-20%");
  glowFilter.setAttribute("y", "-200%");
  glowFilter.setAttribute("width", "140%");
  glowFilter.setAttribute("height", "500%");
  var blur = document.createElementNS(NS, "feGaussianBlur");
  blur.setAttribute("stdDeviation", "4");
  blur.setAttribute("result", "blur");
  glowFilter.appendChild(blur);

  defs.appendChild(glowFilter);
  defs.appendChild(grad);
  svgEl.appendChild(defs);

  var glowPath = document.createElementNS(NS, "path");
  glowPath.setAttribute("fill", "none");
  glowPath.setAttribute("stroke", "url(#wave-grad)");
  glowPath.setAttribute("stroke-width", "7");
  glowPath.setAttribute("stroke-linecap", "round");
  glowPath.setAttribute("opacity", "0.35");
  glowPath.setAttribute("filter", "url(#wave-glow)");
  svgEl.appendChild(glowPath);

  var basePath = document.createElementNS(NS, "path");
  basePath.setAttribute("fill", "none");
  basePath.setAttribute("stroke", "url(#wave-grad)");
  basePath.setAttribute("stroke-width", "2.2");
  basePath.setAttribute("stroke-linecap", "round");
  basePath.setAttribute("stroke-linejoin", "round");
  basePath.setAttribute("opacity", "0.9");
  svgEl.appendChild(basePath);

  var flowPath = document.createElementNS(NS, "path");
  flowPath.setAttribute("fill", "none");
  flowPath.setAttribute("stroke", "#ecfeff");
  flowPath.setAttribute("stroke-width", "2.4");
  flowPath.setAttribute("stroke-linecap", "round");
  flowPath.setAttribute("stroke-linejoin", "round");
  var STREAK_LEN = 90;
  flowPath.setAttribute("stroke-dasharray", STREAK_LEN + " " + trackWidth * 2);
  flowPath.setAttribute("opacity", "0.55");
  svgEl.appendChild(flowPath);

  // --- smooth curve (Catmull-Rom -> Bezier) --------------------------------
  var SAMPLES_PER_GAP = 5;

  function buildD(phase) {
    var pts = [];
    var totalSamples = (totalNodes - 1) * SAMPLES_PER_GAP;
    for (var s = 0; s <= totalSamples; s++) {
      var x = START_X + (s / totalSamples) * (trackWidth - 2 * START_X);
      pts.push([x, waveY(x, phase)]);
    }
    pts.unshift([0, pts[0][1]]);
    pts.push([trackWidth, pts[pts.length - 1][1]]);

    var d = "M" + pts[0][0].toFixed(1) + "," + pts[0][1].toFixed(1) + " ";
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i === 0 ? i : i - 1];
      var p1 = pts[i];
      var p2 = pts[i + 1];
      var p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
      var c1x = p1[0] + (p2[0] - p0[0]) / 6;
      var c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6;
      var c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += "C" + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) + " " + p2[0].toFixed(1) + "," + p2[1].toFixed(1) + " ";
    }
    return d;
  }

  // --- nodes (two copies, back to back, for the seamless loop) ------------
  var nodeEls = [];

  for (var copy = 0; copy < setCount; copy++) {
    CAPABILITIES.forEach(function (cap, i) {
      var idx = copy * n + i;
      var x = START_X + idx * NODE_SPACING;
      var href = "./capabilities/" + cap.slug + ".html";

      var wrap = document.createElement("a");
      wrap.className = "wave-node";
      wrap.href = href;
      wrap.style.left = x + "px";
      wrap.setAttribute("aria-label", cap.title.replace(/&amp;/g, "&") + ": " + cap.desc);

      var circle = document.createElement("div");
      circle.className = "wave-node-circle";
      circle.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        cap.icon +
        "</svg>";
      wrap.appendChild(circle);
      iconsEl.appendChild(wrap);
      nodeEls.push({ el: wrap, x: x, hueIndex: i });

      var label = document.createElement("div");
      label.className = "wave-label";
      label.style.left = x + "px";
      label.innerHTML = cap.title;
      labelsEl.appendChild(label);

      function show() {
        positionTooltip(wrap, cap, href);
      }
      wrap.addEventListener("mouseenter", show);
      wrap.addEventListener("mouseleave", scheduleHide);
      wrap.addEventListener("focus", show);
      wrap.addEventListener("blur", scheduleHide);

      // The wave keeps redrawing every frame, and on some browsers a
      // moving target under the cursor gets treated as a drag rather
      // than a click, silently swallowing the native anchor navigation.
      // Pointerdown/up with a small distance+time budget sidesteps that
      // entirely, while still leaving modified clicks (new tab, etc.)
      // to the browser's normal anchor behavior.
      var pointerStart = null;
      wrap.addEventListener("pointerdown", function (e) {
        paused = true;
        pointerStart = { x: e.clientX, y: e.clientY, t: Date.now() };
      });
      wrap.addEventListener("pointerup", function (e) {
        if (!pointerStart) return;
        var dx = Math.abs(e.clientX - pointerStart.x);
        var dy = Math.abs(e.clientY - pointerStart.y);
        var dt = Date.now() - pointerStart.t;
        pointerStart = null;
        if (dx < 10 && dy < 10 && dt < 800 && e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
          window.location.href = href;
        }
      });
    });
  }

  // --- tooltip --------------------------------------------------------------
  var hideTimer = null;

  function positionTooltip(node, cap, href) {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    tooltipEl.innerHTML =
      '<a class="cap-tooltip-link" href="' + href + '">' +
      '<span class="cap-tooltip-title">' + cap.title + "</span>" +
      '<span class="cap-tooltip-desc">' + cap.desc + "</span>" +
      '<span class="cap-tooltip-cta">See the blueprint &rarr;</span>' +
      "</a>";
    tooltipEl.classList.add("show");

    var rect = node.getBoundingClientRect();
    var ttRect = tooltipEl.getBoundingClientRect();
    var left = rect.left + rect.width / 2 - ttRect.width / 2;
    var minLeft = 8;
    var maxLeft = window.innerWidth - ttRect.width - 8;
    left = Math.max(minLeft, Math.min(maxLeft, left));
    var top = rect.top - ttRect.height - 12;
    if (top < 8) top = rect.bottom + 12;

    tooltipEl.style.left = left + "px";
    tooltipEl.style.top = top + "px";
  }

  // A delay before hiding lets the cursor travel from the icon up into
  // the tooltip without it vanishing mid-move; entering the tooltip
  // itself cancels the hide outright.
  function scheduleHide() {
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(hideTooltip, 5000);
  }

  function hideTooltip() {
    tooltipEl.classList.remove("show");
  }

  tooltipEl.addEventListener("mouseenter", function () {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
  });
  tooltipEl.addEventListener("mouseleave", scheduleHide);

  // --- pause on hover -------------------------------------------------------
  var paused = false;
  viewportEl.addEventListener("mouseenter", function () { paused = true; });
  viewportEl.addEventListener("mouseleave", function () { paused = false; hideTooltip(); });
  viewportEl.addEventListener("focusin", function () { paused = true; });
  viewportEl.addEventListener("focusout", function () { paused = false; });

  // --- continuous animation: drift + vertical bob + hue cycle -------------
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phase = 0;
  var driftX = 0;
  var hueOffset = 0;
  var streakOffset = 0;
  var frame = 0;
  var running = true;

  function applyHue(offset) {
    stopEls.forEach(function (st, i) {
      var hue = (STOP_BASE_HUES[i] + offset) % 360;
      st.setAttribute("stop-color", "hsl(" + hue + ",85%,64%)");
    });
    nodeEls.forEach(function (nd) {
      var hue = (STOP_BASE_HUES[Math.min(3, Math.floor((nd.hueIndex / (n - 1)) * 3))] + offset) % 360;
      nd.el.style.setProperty("--node-color", "hsl(" + hue + ",85%,64%)");
    });
  }

  function render(phaseVal, driftVal) {
    var d = buildD(phaseVal);
    glowPath.setAttribute("d", d);
    basePath.setAttribute("d", d);
    flowPath.setAttribute("d", d);
    trackEl.style.transform = "translateX(-" + driftVal.toFixed(1) + "px)";
    nodeEls.forEach(function (nd) {
      var y = waveY(nd.x, phaseVal);
      nd.el.style.transform = "translate(-50%, " + (y - ICON_R) + "px)";
    });
  }

  function tick() {
    if (!running) return;
    frame++;
    if (!paused) {
      driftX += DRIFT_SPEED;
      if (driftX >= LOOP_SPAN) driftX -= LOOP_SPAN;
      if (frame % 2 === 0) phase += reduceMotion ? 0 : 0.014;
      hueOffset = (hueOffset + 0.08) % 360;
      streakOffset -= reduceMotion ? 0 : 1.1;
    }
    if (frame % 3 === 0) applyHue(hueOffset);
    render(phase, driftX);
    flowPath.style.strokeDashoffset = String(streakOffset);
    requestAnimationFrame(tick);
  }

  // initial static frame so there's no flash before the first tick
  applyHue(0);
  render(0, 0);

  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        running = entries[0].isIntersecting;
        if (running) requestAnimationFrame(tick);
      },
      { threshold: 0.05 }
    );
    io.observe(viewportEl);
  } else if (!reduceMotion) {
    requestAnimationFrame(tick);
  }
})();
