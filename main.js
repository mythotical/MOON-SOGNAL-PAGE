(function () {
  // Mobile menu
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.style.display === "block";
      menu.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", String(!open));
    });
  }

  // Smooth scroll with sticky header offset
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top, behavior: "smooth" });
      if (menu) menu.style.display = "none";
    });
  });

  // FAQ accordion
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const was = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!was) item.classList.add("open");
    });
  });

  // Placeholder external links (avoid dead clicks)
  document.querySelectorAll("[data-external]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      if (href === "#" || href.trim() === "") {
        e.preventDefault();
        alert("Link not set yet. Add your Chrome Web Store / Stripe URL here.");
      }
    });
  });
})();
