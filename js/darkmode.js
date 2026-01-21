document.addEventListener("DOMContentLoaded", function () {
  // init sidenav
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  // init dropdown
  var elemsDropdown = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elemsDropdown, { coverTrigger: false });

  // default mode
  document.body.classList.add("light-mode");

  function setDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }

    // Update gambar slider
    document.querySelectorAll("#sliderhero img").forEach((img) => {
      const darkSrc = img.getAttribute("data-dark");
      const lightSrc =
        img.getAttribute("data-light") || img.getAttribute("src");

      if (isDarkMode && darkSrc) {
        img.setAttribute("data-light", lightSrc);
        img.setAttribute("src", darkSrc);
      } else if (!isDarkMode && lightSrc) {
        img.setAttribute("src", lightSrc);
      }
    });
  }

  const toggleDesktop = document.getElementById("darkmodetoggle");
  const toggleMobile = document.getElementById("darkmodetoggle-mobile");

  if (toggleDesktop) {
    toggleDesktop.checked = false;
    toggleDesktop.addEventListener("change", function () {
      setDarkMode(this.checked);
      if (toggleMobile) toggleMobile.checked = this.checked;
    });
  }

  if (toggleMobile) {
    toggleMobile.checked = false;
    toggleMobile.addEventListener("change", function () {
      setDarkMode(this.checked);
      if (toggleDesktop) toggleDesktop.checked = this.checked;
    });
  }
});

 // Ambil elemen toggle
  const toggleNavbar = document.getElementById('darkmodetoggle-navbar');
  const toggleMobile = document.getElementById('darkmodetoggle-mobile');

  // Fungsi untuk mengaktifkan/menonaktifkan dark mode
  function setDarkMode(enabled) {
    if (enabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Sinkronisasi kedua toggle
    if (toggleNavbar) toggleNavbar.checked = enabled;
    if (toggleMobile) toggleMobile.checked = enabled;
  }

  // Event listener untuk navbar toggle
  if (toggleNavbar) {
    toggleNavbar.addEventListener('change', function() {
      setDarkMode(this.checked);
    });
  }

  // Event listener untuk mobile toggle
  if (toggleMobile) {
    toggleMobile.addEventListener('change', function() {
      setDarkMode(this.checked);
    });
  }

  // (Opsional) Simpan preferensi di localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    setDarkMode(true);
  }

  // Update localStorage setiap kali toggle berubah
  [toggleNavbar, toggleMobile].forEach(toggle => {
    if (toggle) {
      toggle.addEventListener('change', function() {
        localStorage.setItem('darkMode', this.checked);
      });
    }
  });




