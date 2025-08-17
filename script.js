// تنبيه ترحيبي يظهر فقط في الصفحة الرئيسية
window.addEventListener("load", function () {
  // يعمل الترحيب فقط إذا كنا في index.html أو المسار الجذر
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("index.html") || path === "/" || path === "" ) {
    alert("مرحباً بك في موقع الأخبار اليوم!");
  }
});

// التحقق من نموذج الاتصال إن وُجد
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
      return;
    }

    // تحقق بسيط من بنية البريد الإلكتروني
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      alert("يرجى إدخال بريد إلكتروني صالح.");
      return;
    }

    alert("تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا!");
    form.reset();
  });
});
