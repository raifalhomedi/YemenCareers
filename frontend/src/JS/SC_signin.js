import axiosInstance from "./config.js";

document
  .getElementById("signInBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    //Check Valid Username
    const emailIsValid =
      email.length >= 5 &&
      email.length <= 255 &&
      /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|info|io|co)$/i.test(email);
    //Check Valid Password
    const passwordIsValid =
      /^((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,512}$/.test(
        password
      );

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "حقل ناقص",
        text: "يرجى تعبئة كلاً من الحقلين البريد الإلكتروني و كلمة المرور",
        confirmButtonColor: "#d33",
      });
      return;
    } else if (!emailIsValid) {
      Swal.fire({
        icon: "error",
        title: "البريد الإلكتروني غير صالح",
        text: "يرجى إدخال بريد إلكتروني صحيح، ويجب أن يكون بين 5 إلى 255 حرف",
        confirmButtonColor: "#d33",
      });
      return; // ← هذا يمنع استمرار الكود
    } else if (!passwordIsValid) {
      Swal.fire({
        icon: "warning",
        title: "كلمة المرور ضعيفة ⚠️",
        text: "يجب أن تحتوي على أحرف كبيره وصغيره، وأرقام، ورموز، ويكون طولها 8 أحرف على الأقل.",
        confirmButtonColor: "#efb700",
      });
      return; // ← هذا يمنع استمرار الكود
    }

    axiosInstance
      .post(`/api/v1/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        // Save token to local storage
        localStorage.setItem("accessToken", response.data.accessToken);

        window.location.href = "/src/HTML/home.html";
      })
      .catch((error) => {
        console.error("❌ خطأ في التسجيل:", error);

        let errorMessage = "حدث خطأ. يُرجى المحاولة مرة أخرى.";

        if (error.response) {
          console.error("Error Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);

          if (error.response.status === 400) {
            errorMessage = "اسم المستخدم أو كلمة المرور غير صحيحة.";
          } else if (error.response.status === 401) {
            errorMessage = "كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى.";
          } else if (error.response.status === 429) {
            errorMessage = "عدد محاولات تسجيل الدخول كبير جدًا. الرجاء المحاولة لاحقًا.";
          } else if (error.response.status === 404) {
            errorMessage = "المستخدم غير موجود أو لم يتم التسجيل بعد.";
          } else if (error.response.status === 451) {
            errorMessage = "بياناتك قيد المراجعة حالياً.";
          } else if (error.response.status === 500) {
            errorMessage = "حدث خطأ في الخادم. الرجاء المحاولة لاحقًا.";
          }
        }

        Swal.fire({
          icon: "error",
          title: "خطأ في التسجيل ❌",
          text: errorMessage,
          confirmButtonColor: "#d33",
        }).then(() => {
          document.getElementById("password").value = "";
        });
      });
  });

//toggle for password field
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  });
