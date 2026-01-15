let balance = 50000;

// تسجيل الدخول
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "esmat" && pass === "1234") {
        localStorage.setItem("logged", "yes");
        localStorage.setItem("balance", balance);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerHTML = "❌ بيانات غير صحيحة";
    }
}

// عند فتح لوحة الحساب
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("logged") !== "yes") {
        window.location.href = "index.html";
    }
    document.getElementById("balance").innerText =
        localStorage.getItem("balance") + " ريال";
}

// تحويل وهمي
function transfer() {
    let amount = document.getElementById("amount").value;
    let bal = parseInt(localStorage.getItem("balance"));

    if (amount > 0 && amount <= bal) {
        bal -= amount;
        localStorage.setItem("balance", bal);
        document.getElementById("balance").innerText = bal + " ريال";
        alert("✅ تم التحويل بنجاح");
    } else {
        alert("❌ رصيد غير كافٍ");
    }
}

// تسجيل خروج
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}