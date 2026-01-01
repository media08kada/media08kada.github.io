// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi sidenav Materialize
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  // Fungsi toggle dark mode
  function setDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // Default: selalu Light Mode
  document.body.classList.remove("dark-mode");

  // Event listener untuk switch desktop
  const toggleDesktop = document.getElementById("darkmodetoggle");
  if (toggleDesktop) {
    toggleDesktop.checked = false; // pastikan default tidak dicentang
    toggleDesktop.addEventListener("change", function () {
      setDarkMode(this.checked);
      // Sinkronkan dengan toggle mobile
      const toggleMobile = document.getElementById("darkmodetoggle-mobile");
      if (toggleMobile) toggleMobile.checked = this.checked;
    });
  }

  // Event listener untuk switch mobile
  const toggleMobile = document.getElementById("darkmodetoggle-mobile");
  if (toggleMobile) {
    toggleMobile.checked = false; // pastikan default tidak dicentang
    toggleMobile.addEventListener("change", function () {
      setDarkMode(this.checked);
      // Sinkronkan dengan toggle desktop
      const toggleDesktop = document.getElementById("darkmodetoggle");
      if (toggleDesktop) toggleDesktop.checked = this.checked;
    });
  }
});


