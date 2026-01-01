document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  let isDark = false;

  function setDarkMode(isDarkMode) {
    isDark = isDarkMode;
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Update gambar slider
    document.querySelectorAll("#sliderhero img").forEach((img) => {
      const darkSrc = img.getAttribute("data-dark");
      const lightSrc =
        img.getAttribute("data-light") || img.getAttribute("src");

      if (isDark && darkSrc) {
        img.setAttribute("data-light", lightSrc);
        img.setAttribute("src", darkSrc);
      } else if (!isDark && lightSrc) {
        img.setAttribute("src", lightSrc);
      }
    });
  }

  const toggleDesktop = document.getElementById("darkmodetoggle");
  if (toggleDesktop) {
    toggleDesktop.checked = false;
    toggleDesktop.addEventListener("change", function () {
      setDarkMode(this.checked);
      const toggleMobile = document.getElementById("darkmodetoggle-mobile");
      if (toggleMobile) toggleMobile.checked = this.checked;
    });
  }

  const toggleMobile = document.getElementById("darkmodetoggle-mobile");
  if (toggleMobile) {
    toggleMobile.checked = false;
    toggleMobile.addEventListener("change", function () {
      setDarkMode(this.checked);
      const toggleDesktop = document.getElementById("darkmodetoggle");
      if (toggleDesktop) toggleDesktop.checked = this.checked;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var elemsDropdown = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elemsDropdown, { coverTrigger: false });
});


