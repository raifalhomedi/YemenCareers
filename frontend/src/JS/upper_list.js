setTimeout(() => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("backdrop");

  if (menuToggle && menuClose && mobileMenu && backdrop) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.remove("-translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      backdrop.classList.remove("hidden");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    });

    backdrop.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("-translate-x-full");
        backdrop.classList.add("hidden");
      }
    });
  }

  // التعامل مع جميع أزرار القائمة المنسدلة
  const accountButtons = document.querySelectorAll(".account-menu-button");

  accountButtons.forEach((btn) => {
    const dropdown = btn.nextElementSibling; // نفترض أن القائمة تأتي مباشرة بعد الزر
    const icon = btn.querySelector(".dropdown-icon");

    if (dropdown && icon) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
      });

      window.addEventListener("click", () => {
        dropdown.classList.add("hidden");
        icon.classList.remove("rotate-180");
      });

      dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  });

}, 100);
