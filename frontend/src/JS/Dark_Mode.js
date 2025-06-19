document.addEventListener("DOMContentLoaded", () => {
  // تحديد حالة الوضع الحالي من localStorage أو النظام
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

  // تحديد كل أزرار التبديل، الأيقونات، والنصوص
  const toggleButtons = document.querySelectorAll(".ThemeToggle");
  const icons = document.querySelectorAll(".ThemeIcon");
  const texts = document.querySelectorAll(".themeText");

  // دالة لتحديث الأيقونة
  function updateIcon(iconElement, dark) {
    if (!iconElement) return;

    iconElement.style.opacity = "0";
    iconElement.style.transform = "rotate(180deg) scale(1.2)";

    setTimeout(() => {
      iconElement.src = dark ? "/src/Images/sun.svg" : "/src/Images/moon.svg";
      iconElement.alt = dark ? "Sun Icon" : "Moon Icon";

      iconElement.style.opacity = "1";
      iconElement.style.transform = "rotate(0deg) scale(1)";
    }, 200);
  }

  // عند تحميل الصفحة: تفعيل الوضع المظلم إن لزم
  document.documentElement.classList.toggle("dark", isDark);

  // تحديث الأيقونات والنصوص عند بداية التحميل
  icons.forEach((icon) => updateIcon(icon, isDark));
  texts.forEach((text) => {
    text.textContent = isDark ? "الوضع الفاتح" : "الوضع المظلم";
  });

  // عند النقر على أي زر تبديل
  toggleButtons.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      const isDarkNow = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDarkNow ? "dark" : "light");

      icons.forEach((icon) => updateIcon(icon, isDarkNow));
      texts.forEach((text) => {
        text.textContent = isDarkNow ? "الوضع الفاتح" : "الوضع المظلم";
      });
    });
  });
});



//تغيير زر الرجوع في الوضع المظلم
document.addEventListener("DOMContentLoaded", () => {
  const backArrow = document.getElementById("backArrow");
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

  if (isDark) {
    document.documentElement.classList.add("dark");
    if (backArrow) {
      backArrow.src = "/src/Images/arrow-light.svg";
    }
  } else {
    document.documentElement.classList.remove("dark");
    if (backArrow) {
      backArrow.src = "/src/Images/arrow-dark.svg";
    }
  }
});
