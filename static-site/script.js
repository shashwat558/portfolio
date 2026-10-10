// Theme toggle (default light, like next-themes defaultTheme="light")
(function () {
  var root = document.documentElement;
  var moon = document.getElementById("moonIcon");
  var sun = document.getElementById("sunIcon");
  function paint() {
    var dark = root.classList.contains("dark");
    if (moon) moon.style.display = dark ? "none" : "block";
    if (sun) sun.style.display = dark ? "block" : "none";
  }
  var btn = document.getElementById("themeBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      paint();
    });
  }
  paint();
})();

// Mobile menu
(function () {
  var btn = document.getElementById("menuBtn");
  var menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", function () {
    var open = menu.hasAttribute("hidden");
    if (open) { menu.removeAttribute("hidden"); btn.setAttribute("aria-expanded", "true"); }
    else { menu.setAttribute("hidden", ""); btn.setAttribute("aria-expanded", "false"); }
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// Project accordion (mirrors Projects.tsx expanded state)
(function () {
  document.querySelectorAll(".project").forEach(function (card) {
    var btn = card.querySelector(".project-btn");
    var content = card.querySelector(".project-content");
    var plus = card.querySelector(".plus");
    if (!btn || !content) return;
    btn.addEventListener("click", function () {
      var isOpen = card.classList.contains("open");
      // close others (single-expanded, like useState<string|null>)
      document.querySelectorAll(".project.open").forEach(function (other) {
        other.classList.remove("open");
        var oc = other.querySelector(".project-content");
        var ob = other.querySelector(".project-btn");
        var op = other.querySelector(".plus");
        if (oc) oc.classList.remove("expanded");
        if (ob) ob.setAttribute("aria-expanded", "false");
        if (op) op.textContent = "+";
      });
      if (!isOpen) {
        card.classList.add("open");
        content.classList.add("expanded");
        btn.setAttribute("aria-expanded", "true");
        if (plus) plus.textContent = "\u2212";
      }
    });
  });
})();

// Live age (born 26 Sep 2004, same math as LiveAge.tsx)
(function () {
  var el = document.getElementById("liveAge");
  if (!el) return;
  var birth = new Date(2004, 8, 26, 0, 0, 0, 0).getTime();
  var msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
  function tick() {
    var diff = Math.max(0, Date.now() - birth);
    el.textContent = (diff / msPerYear).toFixed(9);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// Background audio + mini player (mirrors BackgroundAudio.tsx + AudioPlayer.tsx)
(function () {
  var audio = document.getElementById("bgAudio");
  var playBtn = document.getElementById("playBtn");
  var playIcon = document.getElementById("playIcon");
  var pauseIcon = document.getElementById("pauseIcon");
  var prog = document.getElementById("prog");
  var cur = document.getElementById("curTime");
  var dur = document.getElementById("durTime");
  if (!audio || !playBtn) return;
  audio.volume = 0.3;

  function fmt(s) {
    if (isNaN(s) || !isFinite(s)) return "0:00";
    var m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ":" + String(sec).padStart(2, "0");
  }
  function paint() {
    var playing = !audio.paused;
    if (playIcon) playIcon.style.display = playing ? "none" : "block";
    if (pauseIcon) pauseIcon.style.display = playing ? "block" : "none";
    playBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
    if (dur) dur.textContent = fmt(audio.duration);
  }
  playBtn.addEventListener("click", function () {
    if (audio.paused) { audio.play().catch(function () {}); }
    else { audio.pause(); }
  });
  audio.addEventListener("play", paint);
  audio.addEventListener("pause", paint);
  audio.addEventListener("loadedmetadata", paint);
  function loop() {
    if (cur) cur.textContent = fmt(audio.currentTime);
    if (prog && audio.duration) prog.style.width = ((audio.currentTime / audio.duration) * 100) + "%";
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  // Autoplay after first interaction (browsers block autoplay before gesture)
  var started = false;
  function kick() {
    if (started) return; started = true;
    audio.play().catch(function () {});
  }
  ["click", "touchstart", "keydown", "scroll", "mousemove"].forEach(function (ev) {
    document.addEventListener(ev, kick, { once: true, passive: true });
  });
  paint();
})();

// Eye button: live cursors / visitor count need Firebase + /api/visitors from Next.js
(function () {
  var btn = document.getElementById("eyeBtn");
  var toast = document.getElementById("toast");
  if (!btn || !toast) return;
  var timer;
  btn.addEventListener("click", function () {
    toast.textContent = "Live visitors & cursors need the Next.js backend — disabled in this static copy.";
    toast.removeAttribute("hidden");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.setAttribute("hidden", ""); }, 2600);
  });
})();
