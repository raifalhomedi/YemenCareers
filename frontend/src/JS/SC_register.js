import axiosInstance from "./config.js";

const input = document.getElementById("customFileInput");
const profileImage = document.getElementById("profileImage");

input.addEventListener("change", function () {
  if (this.files.length > 0) {
    profileImage.textContent = this.files[0].name;
  } else {
    profileImage.textContent = "اختيار الصورة";
  }
});

document.getElementById("signup").addEventListener("click", function (event) {
  event.preventDefault();

  const company_name = document.getElementById("company-name").value.trim();
  const description = document.getElementById("description").value.trim();
  const email = document.getElementById("email").value.trim();
  const company_type = document.getElementById("company_type").value.trim();
  let phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const website = document.getElementById("website").value.trim();
  const social_url_1 = document.getElementById("social_url_1").value.trim();
  const social_url_2 = document.getElementById("social_url_2").value.trim();
  const social_url_3 = document.getElementById("social_url_3").value.trim();
  const social_url_4 = document.getElementById("social_url_4").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm_password = document
    .getElementById("confirm-password")
    .value.trim();
  //Check Name no have any numbers or symbols
  const nameIsValid = /^[a-zA-Z\u0600-\u06FF\s]+$/.test(company_name);
  //Check Valid Email
  const emailIsValid =
    email.length >= 5 &&
    email.length <= 255 &&
    /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|info|io|co)$/i.test(email);

  const descriptionIsValid =
    description.length >= 10 && description.length <= 1000;
  const companyTypeIsValid =
    company_type.length >= 3 && company_type.length <= 100;
  // إذا لم يبدأ بـ +967، نضيفها يدويًا
  if (!phone.startsWith("+967")) {
    phone = "+967" + phone;
  }
  const phoneIsValid = /^\+967\d{9}$/.test(phone); // نتحقق من أن الرقم بعد +967 يحتوي على 9 أرقام
  const addressIsValid = address.length >= 3 && address.length <= 255;
  const websiteIsValid =
    website === "" || /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(website);
  const socialLinks = [social_url_1, social_url_2, social_url_3, social_url_4];
  const allSocialsValid = socialLinks.every(
    (link) =>
      link === "" || /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(link)
  );
  const passwordIsValid =
    /^((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,512}$/.test(
      password
    );
  const passwordsMatch = password === confirm_password;

  if (
    !company_name ||
    !description ||
    !company_type ||
    !phone ||
    !address ||
    !email ||
    !password ||
    !confirm_password
  ) {
    Swal.fire({
      icon: "warning",
      title: "حقول ناقصة",
      text: "يرجى تعبئة جميع الحقول المطلوبة.",
      confirmButtonColor: "#efb700",
    });
  } else if (!nameIsValid) {
    Swal.fire({
      icon: "error",
      title: "اسم الشركة غير صالح",
      text: "يجب أن يكون بين 2 إلى 255 حرف و بدون رموز أو أرقام.",
      confirmButtonColor: "#d33",
    });
  } else if (!emailIsValid) {
    Swal.fire({
      icon: "error",
      title: "البريد الإلكتروني غير صالح",
      text: "يرجى إدخال بريد إلكتروني صحيح، ويجب أن يكون بين 5 إلى 255 حرف",
      confirmButtonColor: "#d33",
    });
  } else if (!descriptionIsValid) {
    return Swal.fire({
      icon: "error",
      title: "الوصف غير صحيح",
      text: "يجب أن يكون بين 10 إلى 1000 حرف.",
      confirmButtonColor: "#d33",
    });
  } else if (!companyTypeIsValid) {
    return Swal.fire({
      icon: "error",
      title: "نوع الشركة غير صحيح",
      text: "يجب أن يتراوح بين 3 إلى 100 حرف.",
      confirmButtonColor: "#d33",
    });
  } else if (!phoneIsValid) {
    return Swal.fire({
      icon: "error",
      title: "رقم الهاتف غير صحيح",
      text: "يجب أن يبدء بـ7 ومكون من 9 أرقام.",
      confirmButtonColor: "#d33",
    });
  } else if (!addressIsValid) {
    return Swal.fire({
      icon: "error",
      title: "العنوان غير صحيح",
      text: "يجب أن يكون بين 3 إلى 255 حرف.",
      confirmButtonColor: "#d33",
    });
  } else if (!websiteIsValid) {
    return Swal.fire({
      icon: "error",
      title: "رابط الموقع غير صحيح",
      text: "يرجى إدخال رابط صحيح يبدأ بـ http أو https.",
      confirmButtonColor: "#d33",
    });
  } else if (!allSocialsValid) {
    return Swal.fire({
      icon: "error",
      title: "روابط التواصل غير صحيحة",
      text: "يرجى التأكد من صحة جميع الروابط.",
      confirmButtonColor: "#d33",
    });
  } else if (!passwordIsValid) {
    return Swal.fire({
      icon: "warning",
      title: "كلمة المرور ضعيفة ⚠️",
      text: "يجب أن تحتوي على أحرف كبيره وصغيره، وأرقام، ورموز، ويكون طولها 8 أحرف على الأقل.",
      confirmButtonColor: "#d33",
    });
  } else if (!passwordsMatch) {
    return Swal.fire({
      icon: "error",
      title: "تأكيد كلمة المرور ليست متطابقة لكلمة المرور",
      text: "يرجى إدخال تأكيد كلمة المرور الصحيحة.",
      confirmButtonColor: "#d33",
    });
  } else {
    const formData = new FormData();
    formData.append("name", company_name);
    formData.append("description", description);
    formData.append("email", email);
    formData.append("company_type", company_type);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("confirmation", confirm_password);

    // رفع الصورة إن وُجدت
    if (input.files.length > 0) {
      formData.append("profileImage", input.files[0]);
    }

    if (website) {
      formData.append("website", website);
    }

    if (social_url_1) {
      formData.append("social_url_1", social_url_1);
    }
    if (social_url_2) {
      formData.append("social_url_2", social_url_2);
    }
    if (social_url_3) {
      formData.append("social_url_3", social_url_3);
    }
    if (social_url_4) {
      formData.append("social_url_4", social_url_4);
    }
    console.log(typeof website);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    axiosInstance
      .post(`/api/v1/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Save token to local storage
        localStorage.setItem("accessToken", response.data.accessToken);

        Swal.fire({
          icon: "success",
          title: "🎉تم التسجيل بنجاح",
          text: "تم إنشاء حسابك!",
          confirmButtonColor: "#efb700",
        }).then(() => {
          window.location.href = "/src/HTML/signin.html";
        });
      })
      .catch((error) => {
        if (error.response) {
          const status = error.response.status;

          console.error("Error Response Data:", error.response.data);
          console.error("Status Code:", status);

          if (status === 302) {
            Swal.fire({
              icon: "error",
              title: "البريد موجود مسبقاً",
              text: "هذا البريد الإلكتروني مسجل بالفعل.",
              confirmButtonColor: "#d33",
            });
          } else if (status === 400) {
            Swal.fire({
              icon: "warning",
              title: "بيانات غير مكتملة أو غير صحيحة",
              text: "يرجى التأكد من جميع الحقول، وخاصة تأكيد كلمة المرور.",
              confirmButtonColor: "#efb700",
            });
          } else if (status === 429) {
            Swal.fire({
              icon: "warning",
              title: "طلبات كثيرة جداً",
              text: "يرجى المحاولة لاحقاً، تم تجاوز الحد المسموح للطلبات.",
              confirmButtonColor: "#d33",
            });
          } else if (status === 500) {
            Swal.fire({
              icon: "error",
              title: "خطأ في الخادم",
              text: "حدث خلل داخلي، يرجى المحاولة لاحقاً أو الإبلاغ عبر GitHub.",
              confirmButtonColor: "#d33",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "خطأ غير معروف",
              text: err.response?.data?.message || "حدث خطأ غير متوقع.",
              confirmButtonColor: "#d33",
            });
          }
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.error("No Response Received:", error.request);
          Swal.fire({
            icon: "error",
            title: "حدث خطأ في الإدخال",
            text: error.response.data.message,
            confirmButtonColor: "#d33",
          });
        }
      });
  }
});

//toggle for password field
document
  .getElementById("togglePassword1")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon1");

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

// toggle for confirm password field
document
  .getElementById("togglePassword2")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("confirm-password");
    const eyeIcon = document.getElementById("eyeIcon2");
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
