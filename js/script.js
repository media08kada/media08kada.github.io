// Inisialisasi Materialize Slider
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, {
    indicators: false,
    height: 300,
    duration: 500,
    interval: 4000,
  });
});

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
    height: 350,
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

// Gallery toggle
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("gallery-btn");
  const hiddenItems = document.querySelectorAll(".gallery .hidden");
  let isOpen = false;

  btn.addEventListener("click", function () {
    if (!isOpen) {
      hiddenItems.forEach((item) => (item.style.display = "block"));
      btn.innerHTML = '<i class="material-icons left"></i>Close';
      isOpen = true;
    } else {
      hiddenItems.forEach((item) => (item.style.display = "none"));
      btn.innerHTML = '<i class="material-icons left"></i>Open';
      isOpen = false;
    }
  });
});

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

// --- Sekilas Berita ---
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("show-more-btn");
  const hiddenItems = document.querySelectorAll(".item-hidden");
  let isOpen = false; // status awal

  showMoreBtn.addEventListener("click", function () {
    if (!isOpen) {
      // buka item
      hiddenItems.forEach((item) => {
        item.style.display = "block";
      });
      showMoreBtn.innerText = "Close"; // ubah teks tombol
      isOpen = true;
    } else {
      // sembunyikan item
      hiddenItems.forEach((item) => {
        item.style.display = "none";
      });
      showMoreBtn.innerText = "Open"; // kembalikan teks tombol
      isOpen = false;
    }
  });
});







