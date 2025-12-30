// darkmode.js

// Inisialisasi sidenav Materialize
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  // Fungsi set dark mode
  function setDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // Event listener untuk switch besar (desktop)
  const toggleDesktop = document.getElementById("darkmodetoggle");
  if (toggleDesktop) {
    toggleDesktop.addEventListener("change", function () {
      setDarkMode(this.checked);
      // Sinkronkan dengan toggle mobile
      const toggleMobile = document.getElementById("darkmodetoggle-mobile");
      if (toggleMobile) toggleMobile.checked = this.checked;
    });
  }

  // Event listener untuk switch kecil (mobile)
  const toggleMobile = document.getElementById("darkmodetoggle-mobile");
  if (toggleMobile) {
    toggleMobile.addEventListener("change", function () {
      setDarkMode(this.checked);
      // Sinkronkan dengan toggle desktop
      const toggleDesktop = document.getElementById("darkmodetoggle");
      if (toggleDesktop) toggleDesktop.checked = this.checked;
    });
  }

  // Event listener untuk tombol biasa
  const darkToggle = document.getElementById("darkToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      saveThemePreference();
    });
  }

  // Cek preferensi saat halaman dimuat
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleDesktop) toggleDesktop.checked = true;
    if (toggleMobile) toggleMobile.checked = true;
  }
});

// Fungsi toggle manual (dipanggil dari tombol navbar)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  saveThemePreference();
}

// Simpan preferensi ke localStorage
function saveThemePreference() {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// darkmode.js
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // simpan preferensi ke localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// cek preferensi saat halaman dimuat
window.onload = function() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

const toggleMobile = document.getElementById("darkmodetoggle-mobile");
if (toggleMobile) {
  toggleMobile.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
    localStorage.setItem("theme", this.checked ? "dark" : "light");
  });
}

/* Layar Kecil */



