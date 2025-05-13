const darkModeToggle = document.getElementById("darkMode");
const body = document.body;

if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

if (localStorage.getItem("theme") === "dark" && darkModeToggle) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

const langToggle = document.getElementById("lang");
const registerTitle = document.getElementById("registerTitle");
const registerBtn = document.getElementById("registerBtn");
const n = document.getElementById("n");
const e = document.getElementById("e");
const p = document.getElementById("p");
const rp = document.getElementById("rp");

if (langToggle && registerTitle && n && e && p && rp && registerBtn) {
  langToggle.addEventListener("change", () => {
    if (langToggle.checked) {
      registerTitle.textContent = "إنشاء حساب";
      n.textContent = "اسم المستخدم";
      e.textContent = "البريد الإلكتروني";
      p.textContent = "كلمة المرور";
      rp.textContent = "تأكيد كلمة المرور";
      registerBtn.textContent = "إنشاء حساب";
      document.documentElement.setAttribute("dir", "lrt");
      document.documentElement.setAttribute("lang", "ar");
      localStorage.setItem("language", "ar");
    } else {
      registerTitle.textContent = "Create Account";
      n.textContent = "Username";
      e.textContent = "Email";
      p.textContent = "Password";
      rp.textContent = "Confirm Password";
      registerBtn.textContent = "Create Account";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      localStorage.setItem("language", "en");
    }
  });

  if (localStorage.getItem("language") === "ar") {
    registerTitle.textContent = "إنشاء حساب";
    n.textContent = "اسم المستخدم";
    e.textContent = "البريد الإلكتروني";
    p.textContent = "كلمة المرور";
    rp.textContent = "تأكيد كلمة المرور";
    registerBtn.textContent = "إنشاء حساب";
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "ar");
    langToggle.checked = true;
  }
}

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    const eyeIcon = togglePassword.querySelector(".eye-icon");
    if (eyeIcon) {
      eyeIcon.src = type === "password" ? "eye.png" : "eyeoff.png";
    }
  });
}

if (toggleConfirmPassword && confirmPasswordInput) {
  toggleConfirmPassword.addEventListener("click", () => {
    const type = confirmPasswordInput.type === "password" ? "text" : "password";
    confirmPasswordInput.type = type;
    const eyeIcon = toggleConfirmPassword.querySelector(".eye-icon");
    if (eyeIcon) {
      eyeIcon.src = type === "password" ? "eye.png" : "eyeoff.png";
    }
  });
}

const registerForm = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

if (registerForm && errorMessage && successMessage) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    console.log("Form submitted");
    
    if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "بعض الحقول مفقودة"
        : "Some fields are missing";
      successMessage.textContent = "";
      console.error("Missing input fields");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    console.log("Inputs:", { name, email, password, confirmPassword }); 
    
    if (!name || !email || !password || !confirmPassword) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "يرجى ملء جميع الحقول"
        : "Please fill all fields";
      successMessage.textContent = "";
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "كلمة المرور وتأكيدها غير متطابقين"
        : "Password and confirmation do not match";
      successMessage.textContent = "";
      return;
    }

    try {
      let users = [];
      try {
        users = JSON.parse(localStorage.getItem("users")) || [];
      } catch (parseError) {
        console.error("Error parsing users from localStorage:", parseError);
        users = [];
      }

      console.log("Current users:", users); 
      
      if (users.some((u) => u.email === email)) {
        errorMessage.textContent = langToggle && langToggle.checked
          ? "الإيميل مسجل مسبقًا"
          : "Email already registered";
        successMessage.textContent = "";
        return;
      }

      const newUser = { username: name, email, password };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("username", name);

      console.log("Saved users:", JSON.parse(localStorage.getItem("users"))); 
      
      successMessage.textContent = langToggle && langToggle.checked
        ? "تم إنشاء الحساب بنجاح! سيتم توجيهك إلى تسجيل الدخول..."
        : "Account created successfully! Redirecting to login...";
      errorMessage.textContent = "";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } catch (error) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "حدث خطأ، حاول مرة أخرى"
        : "An error occurred, please try again";
      successMessage.textContent = "";
      console.error("Error saving user:", error);
    }
  });
} else {
  console.error("Form or message elements not found");
}