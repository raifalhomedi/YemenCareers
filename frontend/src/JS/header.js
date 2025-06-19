document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = ` <!-- الهيدر -->
    <header
      class="box-shadow shadow-md h-24 flex justify-between items-center md:h-19 md:px-6 lg:h-27 lg:px-12 xl:px-10"
    >
      <!-- الجانب الايمن للشاشات الكبيرة -->
      <ul id = "myList"
        class="flex items-center pt-4 md:space-x-6 lg:space-x-8 xl:space-x-8"
      >
        <li
          class="text-light-blue font-bold text-3xl pr-3 sm:text-4xl sm:pr-4 md:pr-0 md:text-4xl lg:text-[30px] xl:text-[35px] dark:text-dark-primary-color"
        >
        <a href="/src/HTML/home.html" alt="يمن كريرز">
          يمن كريرز
          </a>
        </li>
        <li
          class="hidden lg:block w-0.5 h-8 bg-primary-color/40 rounded-full"
        ></li>
        <li
          class="text-light-blue hidden lg:block lg:text-lg xl:text-xl font-bold dark:text-dark-secondary-color"
        >
        <a href="/src/HTML/home.html" alt="الصفحة الرئيسية">
          الصفحة الرئيسية
          </a>
        </li>
        <li
          class="hidden lg:block lg:text-lg xl:text-xl font-bold cursor-pointer dark:text-[#FFFFFF]"
        >
          <a href="/src/HTML/search_for_job.html">البحث</a>
        </li>
        <li
          class="hidden lg:hidden lg:text-lg xl:text-xl font-bold cursor-pointer"
        >
          <a href="/src/HTML/add_new_job.html">اضف طلب توظيف جديد</a>
        </li>
        <li
          class="hidden lg:hidden lg:text-lg xl:text-xl font-bold cursor-pointer"
        >
          <a href="/src/HTML/Myjob.html">وظائفي</a>
        </li>
        <!-- زر القائمة للشاشة الأقل من أو يساوي md -->
        <button
          id="menu-toggle"
          class="text-gray-500 focus:outline-none z-30 absolute left-10 lg:hidden"
        >
          <span id="menu-icon"><img src="/src/Images/list.svg" alt="" /></span>
        </button>

        <!-- تراك شفاف للخلفية -->
        <div id="backdrop" class="fixed inset-0 bg-opacity-0 z-30 hidden"></div>
        <!-- القائمة الجانبية -->
        <div
          id="mobile-menu"
          class="fixed top-0 left-0 h-full w-64 bg-white dark:bg-[var(--color-dark-theme-color)] shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-40 text-right"
        >
          <!-- رأس القائمة -->
          <div
            class="flex items-center justify-between p-4 border-b text-gray-300 mx-4"
          >
            <button id="menu-close" class="text-gray-500 text-6xl">
              &times;
            </button>
            <div class="relative group">
              <button
                id="mobile-account-menu-button"
                class="flex items-center w-[160px] h-[40px] mt-4 mr-6 space-x-2 bg-light-blue px-2 py-2 rounded-full hover:bg-gray-200 transition"
              >
                <span class="font-Cairo-bold text-[12px] text-white">
                  سجل لنشر اول طلب توظيف
                </span>
              </button>
            </div>
          </div>

          <!-- الحاوية الكاملة -->
          <div
            class="flex flex-col justify-between h-[calc(100%-80px)] px-4 py-6 space-y-8 overflow-y-auto"
          >
            <!-- روابط التنقل الخاص بالجوال -->
            <nav
              class="flex flex-col items-center space-y-4 font-Cairo-bold text-xl"
            >
              <a
                href="/src/HTML/home.html"
                class="text-light-blue font-bold hover:text-primary-color"
              >
                الصفحة الرئيسية
              </a>
              <a
                href="/src/HTML/search_job.html"
                class="hover:text-primary-color dark:text-[#FFFFFF]"
                >البحث</a
              >
              <a
                href="/src/HTML/add_new_job.html"
                class="hidden hover:text-primary-color dark:text-[#FFFFFF]"
                >اضف طلب توظيف جديد</a
              >
              <a
                href="/src/HTML/Myjob.html"
                class="hidden hover:text-primary-color dark:text-[#FFFFFF]"
                >وظائفي</a
              >
            </nav>

            <!-- فاصل -->
            <div class="border-b border-gray-300 w-full"></div>

            <!-- النص التعريفي مع زر التسجيل -->
            <div class="text-center space-y-4 mt-70">
              <p class="text-gray-700 text-base leading-relaxed dark:text-[#FFFFFF]">
                هل لديك وظيفة شاغرة تريد الإعلان عنها؟ قم بإنشاء حساب واعلن عن
                الوظائف المتاحة لتنمية فريقك أو شركتك!
              </p>
              <div
                class="bg-light-blue w-[190px] h-[40px] rounded-full flex items-center justify-center hover:bg-primary-color transition mx-auto"
              >
                <a
                  href="/src/HTML/register.html"
                  class="text-white font-Cairo-bold"
                >
                  انشئ حسابك الآن
                </a>
              </div>
            </div>

            <!-- التذييل -->
            <footer class="text-center text-gray-500 text-sm space-y-2 pt-4">
              <span class="text-light-blue font-Cairo-bold text-lg">
                يمن كريرز
              </span>
              <div
                class="flex justify-center items-center space-x-1 rtl:space-x-reverse dark:text-[#FFFFFF]"
              >
                <span class="text-primary-color text-xl pt-1">©</span>
                <span>جميع الحقوق محفوظة ليمن كريرز</span>
              </div>
            </footer>
          </div>
        </div>
      </ul>

      <!-- زر الوضع الداكن للشاشات الكبيرة قبل تسجيل الدخول -->
      <button
        
        class="hidden ThemeToggle lg:flex lg:pr-60 xl:pr-120 cursor-pointer dark:text-[#FFFFFF]"
      >
          <img src="/src/Images/moon.svg" alt="Theme Icon" class="ThemeIcon w-6 h-6 transition-all duration-500 ease-in-out" />
      </button>

      <!-- Left Side -->
      <div
        class="hidden box-shadow bg-light-blue rounded-2xl px-4 h-12 lg:flex justify-center items-center hover:bg-secondary-color transition-colors duration-300 ease-in-out"
      >
        <a
          href="/src/HTML/signin.html"
          class="md:text-[10px] lg:text-sm xl:text-sm font-bold text-white"
          >سجل لنشر اول طلب توظيف</a
        >
      </div>

        
    </header> `;

  // إدراج الهيدر داخل عنصر في الصفحة
  const container = document.getElementById("header-container");
  if (container) container.innerHTML = headerHTML;

});