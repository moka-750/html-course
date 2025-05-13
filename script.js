window.addEventListener("DOMContentLoaded", function () {
  var darkToggle = document.getElementById("darkMode");
  var langToggle = document.getElementById("lang");

  if (darkToggle) {
    darkToggle.addEventListener("change", function () {
      if (darkToggle.checked) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener("change", function () {
      if (langToggle.checked) {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "ltr";
        document.getElementById("signupbtn").textContent = "التسجيل";
        document.getElementById("ghost").textContent = "وضع الشبح"; document.getElementById("des").textContent = "مرحبا بكم في الموقع الخاص بنا";
        document.getElementById("loginbtn").textContent = "تسجيل الدخول";
        document.getElementById("about").textContent = "معلومات عني";
        document.getElementById("feedback").textContent = "الشكاوي";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
       
        document.getElementById("des").textContent = "Welcome To My Web Site";
        document.getElementById("signupbtn").textContent = "Signup";  
        document.getElementById("ghost").textContent = "Ghost";          
        document.getElementById("loginbtn").textContent = "Login";
        document.getElementById("about").textContent = "about";
        document.getElementById("feedback").textContent = "feedback";
      }
    });
  }

  var switchWrappers = document.querySelectorAll(".switch-wrapper");
  for (var i = 0; i < switchWrappers.length; i++) {
    (function (wrapper) {
      var icon = wrapper.querySelector(".switch-icon");
      var input = wrapper.querySelector("input");

      if (icon && input) {
        icon.addEventListener("click", function () {
          input.checked = !input.checked;
          var changeEvent = document.createEvent("HTMLEvents");
          changeEvent.initEvent("change", true, false);
          input.dispatchEvent(changeEvent);
        });
      }
    })(switchWrappers[i]);
  }
});
window.addEventListener('load', function(){
   document.getElementById("webox").style.display = "block"
   document.getElementById("mein").style.display = "none"
   
});
document.getElementById("webox").addEventListener('click', function(){
    document.getElementById("webox").style.display = "none"
    document.getElementById("mein").style.display = "block"
});