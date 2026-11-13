// MEDIA KELAPA DUA - SCRIPT.JS
document.addEventListener("DOMContentLoaded", () => {
  // MATERIALIZE INIT
  if (typeof M !== "undefined") {
    try {
      M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
        coverTrigger: false,
        constrainWidth: false,
        alignment: "left",
        closeOnClick: true,
      });

      M.Sidenav.init(document.querySelectorAll(".sidenav"));

      M.Slider.init(document.querySelectorAll("#sliderhero"), {
        indicators: false,
        height: 400,
        duration: 600,
        interval: 3000,
      });

      M.Slider.init(document.querySelectorAll(".berita-slider"), {
        indicators: true,
        height: 300,
        duration: 500,
        interval: 5000,
      });

      M.Parallax.init(document.querySelectorAll(".parallax"));

      M.Materialbox.init(document.querySelectorAll(".materialboxed"));

      M.ScrollSpy.init(document.querySelectorAll(".scrollspy"), {
        scrollOffset: 50,
      });

      M.Modal.init(document.querySelectorAll(".modal"), {
        dismissible: true,
        opacity: 0.5,
        inDuration: 300,
        outDuration: 200,
      });

      M.FloatingActionButton.init(
        document.querySelectorAll(".fixed-action-btn"),
        {
          direction: "left",
          hoverEnabled: false,
        },
      );

      console.log("✅ Materialize berhasil diinisialisasi");
    } catch (error) {
      console.error("Materialize Error:", error);
    }
  } else {
    console.warn("❌ Materialize JS tidak ditemukan");
  }

  // CLOSE ICON
  const closeBtn = document.getElementById("close");
  const icons = document.getElementById("icons");

  if (closeBtn && icons) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      icons.style.display = "none";
    });
  }

  // HELPER TOGGLE
  function setupToggleButton(buttonId, itemsSelector) {
    const button = document.getElementById(buttonId);

    if (!button) return;

    const items = document.querySelectorAll(itemsSelector);

    let opened = false;

    items.forEach((item) => {
      item.style.display = "none";
    });

    button.addEventListener("click", () => {
      opened = !opened;

      items.forEach((item) => {
        item.style.display = opened ? "" : "none";
      });

      button.textContent = opened ? "Tutup" : "Lihat Selengkapnya";
    });
  }

  // BERITA WILAYAH
  setupToggleButton("show-more-btn", ".item-hidden");

  // GALLERY
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


// TOAST PESAN
function showToast(message = "Pesan berhasil dikirim!") {
  if (typeof M !== "undefined") {
    M.toast({
      html: message,
      classes: "rounded green",
      displayLength: 5000,
    });
  } else {
    alert(message);
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
function changeVideo(videoId) {
  const iframe = document.getElementById("mainVideo");

  if (!iframe || !videoId) return;

  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}


// COPYRIGHT YEAR
const copyrightYear = document.getElementById("copyright-year");

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
