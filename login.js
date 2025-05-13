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
const loginTitle = document.getElementById("loginTitle");
const loginBtn = document.getElementById("loginBtn");
const e = document.getElementById("e");
const p = document.getElementById("p");

if (langToggle && loginTitle && loginBtn && e && p) {
  langToggle.addEventListener("change", () => {
    if (langToggle.checked) {
      loginTitle.textContent = "تسجيل الدخول";
      loginBtn.textContent = "تسجيل الدخول";
      e.textContent = "البريد الإلكتروني";
      p.textContent = "كلمة المرور";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "ar");
      localStorage.setItem("language", "ar");
    } else {
      loginTitle.textContent = "Login";
      loginBtn.textContent = "Login";
      e.textContent = "Email";
      p.textContent = "Password";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      localStorage.setItem("language", "en");
    }
  });

  if (localStorage.getItem("language") === "ar") {
    loginTitle.textContent = "تسجيل الدخول";
    loginBtn.textContent = "تسجيل الدخول";
    e.textContent = "البريد الإلكتروني";
    p.textContent = "كلمة المرور";
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "ar");
    langToggle.checked = true;
  }
}

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    const eyeIcon = togglePassword.querySelector(".eye-icon");
    if (eyeIcon) {
      eyeIcon.src = type === "password" ? "img/eye.png" : "img/eyeoff.png";
    }
  });
}

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

if (loginForm && errorMessage && successMessage) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    console.log("Form submitted"); 
    
    if (!emailInput || !passwordInput) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "بعض الحقول مفقودة"
        : "Some fields are missing";
      successMessage.textContent = "";
      console.error("Missing input fields");
      return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    console.log("Inputs:", { email, password }); 
    
    if (!email || !password) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "يرجى ملء جميع الحقول"
        : "Please fill all fields";
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
      
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("username", user.username);
        successMessage.textContent = langToggle && langToggle.checked
          ? "تم تسجيل الدخول بنجاح! سيتم توجيهك إلى الصفحة الرئيسية..."
          : "Logged in successfully! Redirecting to home...";
        errorMessage.textContent = "";
        console.log("User found:", user);
        
        setTimeout(() => {
          window.location.href = "home.html";
        }, 2000);
      } else {
        errorMessage.textContent = langToggle && langToggle.checked
          ? "البريد الإلكتروني أو كلمة المرور غير صحيح"
          : "Invalid email or password";
        successMessage.textContent = "";
        console.log("No user found with email:", email);
      }
    } catch (error) {
      errorMessage.textContent = langToggle && langToggle.checked
        ? "حدث خطأ، حاول مرة أخرى"
        : "An error occurred, please try again";
      successMessage.textContent = "";
      console.error("Error during login:", error);
    }
  });
} else {
  console.error("Form or message elements not found");
}