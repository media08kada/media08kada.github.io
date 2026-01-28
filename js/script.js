// Inisialisasi komponen Materialize Navbar
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown
  const dropdowns = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(dropdowns, {
    coverTrigger: false,
    constrainWidth: false,
  });

  // Sidenav
  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Slider
  const slider = document.querySelectorAll(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 600,
    interval: 3000,
  });

  // Slider Berita
  const beritaSlider = document.querySelectorAll(".berita-slider");
  M.Slider.init(beritaSlider, {
    indicators: false,
    height: window.innerWidth < 600 ? 300 : 400,
    transition: 600,
    interval: 3000,
  });

  // Parallax
  const parallax = document.querySelectorAll(".parallax");
  M.Parallax.init(parallax);

  // Materialbox
  const materialbox = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(materialbox);

  // ScrollSpy
  const scrollspy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspy, {
    scrollOffset: 50,
  });

  // Modal
  const modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});

// Inisialisasi Materialize Modal
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
});

// My Javascript Popup Screen Iklan //
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");
const popupAudio = document.querySelector(".popup-audio");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
    if (popupAudio) popupAudio.play(); 
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60;
  const WebsiteCookie = document.cookie.indexOf("WebsiteName");

  if (WebsiteCookie !== -1) {
    popupScreen.style.display = "none";
  } else {
    popupScreen.style.display = "flex";
  }
});

// buka popup
const openSearchBtn = document.querySelector('#open-search');
const searchPopup = document.querySelector('#search-popup');

if (openSearchBtn && searchPopup) {
  openSearchBtn.addEventListener('click', () => {
    searchPopup.classList.add('active');
  });
}

// Load file modals.html ke dalam index
fetch("modals.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.text();
  })
  .then((data) => {
    const container = document.getElementById("modal-container");
    if (container) {
      container.innerHTML = data;

      // Inisialisasi Materialize modal setelah konten dimuat
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {
        // opsi tambahan jika perlu
        dismissible: true,
        inDuration: 250,
        outDuration: 200,
      });
    } else {
      console.error("Elemen #modal-container tidak ditemukan");
    }
  })
  .catch((error) => console.error("Gagal memuat modals.html:", error));



// Scroll ke atas
function scrollKeatas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Load file modals.html ke dalam index
fetch("modals.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("modal-container").innerHTML = data;

    // Inisialisasi Materialize modal setelah dimuat
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  })
  .catch((error) => console.error("Gagal memuat modals.html:", error));


  var sliderElems = document.querySelectorAll(".slider");
  M.Slider.init(sliderElems, {
    indicators: false,
    height: 500,
    duration: 500,
    interval: 3000
  });

// Pemberitahuan pesan telah terkirim
  function showToast() {
    M.toast({
      html: "Pesan berhasil dikirim!",
      classes: "rounded green",
      displayLength: 5000, 
    });
  }

  
// Menghilangkan scroll dibawah //
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      coverTrigger: false, // dropdown muncul di luar trigger
      constrainWidth: false, // lebar dropdown tidak dibatasi trigger
      alignment: "left", // bisa diganti 'right' sesuai kebutuhan
    });
  });

// Modal Berita Pilihan //
  document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen dengan class .modal
    var elems = document.querySelectorAll(".modal");

    // Inisialisasi Materialize Modal untuk semuanya
    var instances = M.Modal.init(elems, {
      dismissible: true, // bisa ditutup dengan klik di luar modal
      opacity: 0.5, // transparansi background overlay
      inDuration: 300, // animasi masuk
      outDuration: 200, // animasi keluar
    });
  });

// Section Video //
  function changeVideo(videoId) {
    document.getElementById("preview-link").src =
      "https://www.youtube.com/embed/" + videoId;
  }


  

    
 




























      










