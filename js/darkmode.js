document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Materialize jika tersedia
  if (typeof M !== "undefined") {
    // Sidenav
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Dropdown
    const dropdown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdown, {
      coverTrigger: false,
    });
  }

  // Default mode
  document.body.classList.add("light-mode");

  function setDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }

    // Ganti gambar slider
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

      if (toggleMobile) {
        toggleMobile.checked = this.checked;
      }
    });
  }

  if (toggleMobile) {
    toggleMobile.checked = false;

    toggleMobile.addEventListener("change", function () {
      setDarkMode(this.checked);

      if (toggleDesktop) {
        toggleDesktop.checked = this.checked;
      }
    });
  }
});
