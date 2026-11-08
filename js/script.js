// MEDIA KELAPA DUA - SCRIPT.JS
document.addEventListener("DOMContentLoaded", () => {
  
  // CEK MATERIALIZE
  const hasMaterialize = typeof M !== "undefined";

  if (hasMaterialize) {
    // Dropdown
    const dropdowns = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdowns, {
      coverTrigger: false,
      constrainWidth: false,
      alignment: "left",
      closeOnClick: true,
    });

    // Sidenav
    const sidenavs = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavs);

    // Slider Utama
    const sliders = document.querySelectorAll(".slider");
    M.Slider.init(sliders, {
      indicators: false,
      height: 400,
      transition: 600,
      interval: 3000,
    });

    // Slider Berita
    const beritaSliders = document.querySelectorAll(".berita-slider");
    M.Slider.init(beritaSliders, {
      indicators: true,
      height: 300,
      duration: 500,
      interval: 5000,
    });

    // Parallax
    const parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax);

    // Material Box
    const materialboxed = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(materialboxed);

    // ScrollSpy
    const scrollspy = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(scrollspy, {
      scrollOffset: 50,
    });

    // Modal
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {
      dismissible: true,
      opacity: 0.5,
      inDuration: 300,
      outDuration: 200,
    });

    // Floating Action Button
    const fabs = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(fabs, {
      direction: "left",
      hoverEnabled: false,
    });
  } else {
    console.warn("Materialize JS tidak ditemukan.");
  }

    // TOMBOL CLOSE ICONS
    const closeBtn = document.getElementById("close");

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const icons = document.getElementById("icons");

      if (icons) {
        icons.style.display = "none";
      }
    });
  }

    // BERITA WILAYAH
    const showMoreBtn = document.getElementById("show-more-btn");

  if (showMoreBtn) {
    const hiddenItems = document.querySelectorAll(".item-hidden");
    let isOpen = false;

    hiddenItems.forEach((item) => {
      item.style.display = "none";
    });

    showMoreBtn.addEventListener("click", () => {
      if (!isOpen) {
        hiddenItems.forEach((item) => {
          item.style.display = "block";
        });

        showMoreBtn.innerText = "Close";
        isOpen = true;
      } else {
        hiddenItems.forEach((item) => {
          item.style.display = "none";
        });

        showMoreBtn.innerText = "Open";
        isOpen = false;
      }
    });
  }

  
  // GALLERY
    const galleryBtn = document.getElementById("gallery-btn");

  if (galleryBtn) {
    const galleryItems = document.querySelectorAll(".gallery .hidden");

    let galleryOpen = false;

    galleryItems.forEach((item) => {
      item.style.display = "none";
    });

    galleryBtn.addEventListener("click", () => {
      if (!galleryOpen) {
        galleryItems.forEach((item) => {
          item.style.display = "block";
        });

        galleryBtn.innerHTML = "Close";
        galleryOpen = true;
      } else {
        galleryItems.forEach((item) => {
          item.style.display = "none";
        });

        galleryBtn.innerHTML = "Open";
        galleryOpen = false;
      }
    });
  }
});


// TOAST PESAN
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


// SCROLL KE ATAS
function scrollKeatas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


// VIDEO YOUTUBE
function changeVideo(id) {
  const preview = document.getElementById("mainVideo");

  if (preview) {
    preview.src = `https://www.youtube.com/embed/${id}`;
  }
}


// HISTATS
var _Hasync = _Hasync || [];

_Hasync.push(["Histats.start", "1,4996560,4,1029,150,25,00011111"]);

_Hasync.push(["Histats.fasi", "1"]);

_Hasync.push(["Histats.track_hits", ""]);

(function () {
  const hs = document.createElement("script");

  hs.type = "text/javascript";
  hs.async = true;
  hs.src = "//s10.histats.com/js15_as.js";

  (document.head || document.body).appendChild(hs);
})();

