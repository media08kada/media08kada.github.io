// =====================================
// MEDIA KELAPA DUA - SCRIPT.JS FINAL
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // MATERIALIZE INIT
  // =========================
  if (typeof M !== "undefined") {
    // Dropdown
    const dropdowns = document.querySelectorAll(".dropdown-trigger");

    if (dropdowns.length) {
      M.Dropdown.init(dropdowns, {
        coverTrigger: false,
        constrainWidth: false,
        alignment: "left",
        closeOnClick: true,
      });
    }

    // Sidenav
    const sidenavs = document.querySelectorAll(".sidenav");

    if (sidenavs.length) {
      M.Sidenav.init(sidenavs);
    }

    // Slider Hero
    const heroSlider = document.querySelector("#sliderhero");

    if (heroSlider) {
      M.Slider.init(heroSlider, {
        indicators: false,
        height: 400,
        transition: 600,
        interval: 3000,
      });
    }

    // Slider Berita
    const beritaSliders = document.querySelectorAll(".berita-slider");

    if (beritaSliders.length) {
      M.Slider.init(beritaSliders, {
        indicators: true,
        height: 300,
        duration: 500,
        interval: 5000,
      });
    }

    // Parallax
    const parallax = document.querySelectorAll(".parallax");

    if (parallax.length) {
      M.Parallax.init(parallax);
    }

    // Materialbox
    const materialboxed = document.querySelectorAll(".materialboxed");

    if (materialboxed.length) {
      M.Materialbox.init(materialboxed);
    }

    // Scrollspy
    const scrollspy = document.querySelectorAll(".scrollspy");

    if (scrollspy.length) {
      M.ScrollSpy.init(scrollspy, {
        scrollOffset: 50,
      });
    }

    // Modal
    const modals = document.querySelectorAll(".modal");

    if (modals.length) {
      M.Modal.init(modals, {
        dismissible: true,
        opacity: 0.5,
        inDuration: 300,
        outDuration: 200,
      });
    }

    // Floating Action Button
    const fabs = document.querySelectorAll(".fixed-action-btn");

    if (fabs.length) {
      M.FloatingActionButton.init(fabs, {
        direction: "left",
        hoverEnabled: false,
      });
    }
  } else {
    console.warn("Materialize JS tidak ditemukan.");
  }

  // =========================
  // TOMBOL CLOSE ICON
  // =========================
  const closeBtn = document.getElementById("close");

  const icons = document.getElementById("icons");

  if (closeBtn && icons) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      icons.style.display = "none";
    });
  }

  // =========================
  // BERITA WILAYAH
  // =========================
  const showMoreBtn = document.getElementById("show-more-btn");

  if (showMoreBtn) {
    const hiddenItems = document.querySelectorAll(".item-hidden");

    let opened = false;

    hiddenItems.forEach((item) => {
      item.style.display = "none";
    });

    showMoreBtn.addEventListener("click", () => {
      opened = !opened;

      hiddenItems.forEach((item) => {
        item.style.display = opened ? "block" : "none";
      });

      showMoreBtn.textContent = opened ? "Close" : "Open";
    });
  }

  // =========================
  // GALLERY
  // =========================
  const galleryBtn = document.getElementById("gallery-btn");

  if (galleryBtn) {
    const galleryItems = document.querySelectorAll(".gallery .hidden");

    let opened = false;

    galleryItems.forEach((item) => {
      item.style.display = "none";
    });

    galleryBtn.addEventListener("click", () => {
      opened = !opened;

      galleryItems.forEach((item) => {
        item.style.display = opened ? "block" : "none";
      });

      galleryBtn.textContent = opened ? "Close" : "Open";
    });
  }
});

// =====================================
// TOAST PESAN
// =====================================
function showToast() {
  if (typeof M !== "undefined") {
    M.toast({
      html: "Pesan berhasil dikirim!",
      classes: "rounded green",
      displayLength: 5000,
    });
  } else {
    alert("Pesan berhasil dikirim!");
  }
}

// =====================================
// SCROLL KE ATAS
// =====================================
function scrollKeatas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// =====================================
// VIDEO YOUTUBE
// =====================================
function changeVideo(videoId) {
  const iframe = document.getElementById("mainVideo");

  if (!iframe) return;

  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// =====================================
// HISTATS
// =====================================
var _Hasync = _Hasync || [];

_Hasync.push(["Histats.start", "1,4996560,4,1029,150,25,00011111"]);

_Hasync.push(["Histats.fasi", "1"]);

_Hasync.push(["Histats.track_hits", ""]);

(function () {
  const hs = document.createElement("script");

  hs.type = "text/javascript";
  hs.async = true;

  hs.src = "https://s10.histats.com/js15_as.js";

  document.head.appendChild(hs);
})();

// =====================================
// COPYRIGHT YEAR
// =====================================
const copyrightYear = document.getElementById("copyright-year");

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
