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
const userName = document.getElementById("userName");
const courseTitle = document.getElementById("courseTitle");
const htmlStructureTitle = document.getElementById("htmlStructureTitle");
const htmlStructureDesc = document.getElementById("htmlStructureDesc");
const headingsTitle = document.getElementById("headingsTitle");
const headingsDesc = document.getElementById("headingsDesc");
const brTitle = document.getElementById("brTitle");
const brDesc = document.getElementById("brDesc");
const listsTitle = document.getElementById("listsTitle");
const listsDesc = document.getElementById("listsDesc");
const tableTitle = document.getElementById("tableTitle");
const tableDesc = document.getElementById("tableDesc");
const imgTitle = document.getElementById("imgTitle");
const imgDesc = document.getElementById("imgDesc");
const iframeTitle = document.getElementById("iframeTitle");
const iframeDesc = document.getElementById("iframeDesc");
const textFormattingTitle = document.getElementById("textFormattingTitle");
const textFormattingDesc = document.getElementById("textFormattingDesc");

if (langToggle && userName && courseTitle) {
  langToggle.addEventListener("change", () => {
    if (langToggle.checked) {
      userName.textContent = `مرحبًا، ${localStorage.getItem("username") || "User"}`;
      courseTitle.textContent = "دورة HTML للمبتدئين";
      htmlStructureTitle.textContent = "هيكل ملف HTML";
      htmlStructureDesc.textContent = "الهيكل الأساسي لأي صفحة HTML بيتكون من العناصر التالية: <html>, <head>, و<body>.";
      headingsTitle.textContent = "العناوين";
      headingsDesc.textContent = "العناوين بتستخدم لتحديد أهمية النصوص، من <h1> (الأكبر) لـ <h6> (الأصغر).";
      brTitle.textContent = "فاصل السطور";
      brDesc.textContent = "التاج <br> بيعمل فاصل بين السطور بدون ما نبدأ فقرة جديدة.";
      listsTitle.textContent = "القوائم";
      listsDesc.textContent = "<ul> بتعمل قايمة غير مرقمة (نقاط)، و<ol> بتعمل قايمة مرقمة.";
      tableTitle.textContent = "الجداول";
      tableDesc.textContent = "<table> بتعمل جدول، وborder, bordercolor, bgcolor بيضيفوا تنسيق.";
      imgTitle.textContent = "الصور";
      imgDesc.textContent = "<img> بيضيف صورة، وheight, width, border, bordercolor بيضيفوا تنسيق.";
      iframeTitle.textContent = "الفيديو/الصوت";
      iframeDesc.textContent = "<iframe> بيضيف محتوى خارجي زي فيديوهات، وwidth, height بيحددوا الحجم.";
      textFormattingTitle.textContent = "تنسيق النصوص";
      textFormattingDesc.textContent = "التاجات دي بتستخدم لتنسيق النصوص: <p>, <b>, <u>, <i>, <sub>, <sup>, <big>, <small>.";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "ar");
      localStorage.setItem("language", "ar");

      document.querySelectorAll(".try-btn").forEach(btn => btn.textContent = "جرب بنفسك");
      document.querySelectorAll(".try-area button").forEach(btn => btn.textContent = "تشغيل");
    } else {
      userName.textContent = `Welcome, ${localStorage.getItem("username") || "User"}`;
      courseTitle.textContent = "HTML Course for Beginners";
      htmlStructureTitle.textContent = "HTML File Structure";
      htmlStructureDesc.textContent = "The basic structure of any HTML page consists of the following elements: <html>, <head>, and <body>.";
      headingsTitle.textContent = "Headings";
      headingsDesc.textContent = "Headings are used to define the importance of text, from <h1> (largest) to <h6> (smallest).";
      brTitle.textContent = "Line Break";
      brDesc.textContent = "The <br> tag creates a line break without starting a new paragraph.";
      listsTitle.textContent = "Lists";
      listsDesc.textContent = "<ul> creates an unordered list (bullets), and <ol> creates an ordered list (numbers).";
      tableTitle.textContent = "Tables";
      tableDesc.textContent = "<table> creates a table, and border, bordercolor, bgcolor add styling.";
      imgTitle.textContent = "Images";
      imgDesc.textContent = "<img> adds an image, and height, width, border, bordercolor add styling.";
      iframeTitle.textContent = "Video/Audio";
      iframeDesc.textContent = "<iframe> adds external content like videos, and width, height define the size.";
      textFormattingTitle.textContent = "Text Formatting";
      textFormattingDesc.textContent = "These tags are used for text formatting: <p>, <b>, <u>, <i>, <sub>, <sup>, <big>, <small>.";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      localStorage.setItem("language", "en");

    
      document.querySelectorAll(".try-btn").forEach(btn => btn.textContent = "Try It Yourself");
      document.querySelectorAll(".try-area button").forEach(btn => btn.textContent = "Run");
    }
  });

  if (localStorage.getItem("language") === "ar") {
    userName.textContent = `مرحبًا، ${localStorage.getItem("username") || "User"}`;
    courseTitle.textContent = "دورة HTML للمبتدئين";
    htmlStructureTitle.textContent = "هيكل ملف HTML";
    htmlStructureDesc.textContent = "الهيكل الأساسي لأي صفحة HTML بيتكون من العناصر التالية: <html>, <head>, و<body>.";
    headingsTitle.textContent = "العناوين";
    headingsDesc.textContent = "العناوين بتستخدم لتحديد أهمية النصوص، من <h1> (الأكبر) لـ <h6> (الأصغر).";
    brTitle.textContent = "فاصل السطور";
    brDesc.textContent = "التاج <br> بيعمل فاصل بين السطور بدون ما نبدأ فقرة جديدة.";
    listsTitle.textContent = "القوائم";
    listsDesc.textContent = "<ul> بتعمل قايمة غير مرقمة (نقاط)، و<ol> بتعمل قايمة مرقمة.";
    tableTitle.textContent = "الجداول";
    tableDesc.textContent = "<table> بتعمل جدول، وborder, bordercolor, bgcolor بيضيفوا تنسيق.";
    imgTitle.textContent = "الصور";
    imgDesc.textContent = "<img> بيضيف صورة، وheight, width, border, bordercolor بيضيفوا تنسيق.";
    iframeTitle.textContent = "الفيديو/الصوت";
    iframeDesc.textContent = "<iframe> بيضيف محتوى خارجي زي فيديوهات، وwidth, height بيحددوا الحجم.";
    textFormattingTitle.textContent = "تنسيق النصوص";
    textFormattingDesc.textContent = "التاجات دي بتستخدم لتنسيق النصوص: <p>, <b>, <u>, <i>, <sub>, <sup>, <big>, <small>.";
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "ar");
    langToggle.checked = true;

    document.querySelectorAll(".try-btn").forEach(btn => btn.textContent = "جرب بنفسك");
    document.querySelectorAll(".try-area button").forEach(btn => btn.textContent = "تشغيل");
  } else {
    userName.textContent = `Welcome, ${localStorage.getItem("username") || "User"}`;
  }
}

function showTryIt(section) {
  const tryArea = document.getElementById(`try-${section}`);
  tryArea.style.display = tryArea.style.display === "block" ? "none" : "block";
}

function runCode(section) {
  const code = document.getElementById(`code-${section}`).value;
  const resultFrame = document.getElementById(`result-${section}`);
  const frameDoc = resultFrame.contentDocument || resultFrame.contentWindow.document;
  frameDoc.open();
  frameDoc.write(code);
  frameDoc.close();
}