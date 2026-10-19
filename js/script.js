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

  // Dropdown
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdowns, {
      coverTrigger: false,
      constrainWidth: false,
      alignment: "left",
      closeOnClick: true,
    });
  });
  
  // Navbar Javascript 
  const searchBtn =
  document.querySelector('#search-button');
  const searchBtnMobile =
  document.querySelector('#search-button-mobile');
  const searchContainer =
  document.querySelector('.search-container');
  const closeBtn =
  document.querySelector('#close-search');
  if(searchBtn){
  searchBtn.onclick = function(e){
  e.preventDefault();
  searchContainer.classList.toggle('active');
  };
  }
  if(searchBtnMobile){
  searchBtnMobile.onclick = function(e){
  e.preventDefault();
  searchContainer.classList.toggle('active');
  };
  }
  closeBtn.onclick = function(){
  searchContainer.classList.remove('active');
  };
  if (closeBtn) {
    closeBtn.onclick = function () {
      searchContainer.classList.remove("active");
    };
  }

  // Slider
  const slider = document.querySelectorAll(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 600,
    interval: 3000,
  });

  // Slider Berita
document.addEventListener("DOMContentLoaded", function () {
  M.Slider.init(document.querySelectorAll(".berita-slider"), {
    indicators: true,
    height: 300,
    duration: 500,
    interval: 5000,
  });
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
document.addEventListener("DOMContentLoaded", function () { //pesan 95
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
    popupScreen.classList.add("active"); // Pesan 108
    if (popupAudio) popupAudio.play(); 
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //pesan 115
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
    const preview = document.getElementById("mainVideo");
    function changeVideo(id) {
        preview.src = `https://www.youtube.com/embed/${id}`;
    }

   // Histats.com  START  (aync)-->
  var _Hasync = _Hasync || [];
  _Hasync.push(["Histats.start", "1,4996560,4,1029,150,25,00011111"]);
  _Hasync.push(["Histats.fasi", "1"]);
  _Hasync.push(["Histats.track_hits", ""]);

  (function () {
    var hs = document.createElement("script");
    hs.type = "text/javascript";
    hs.async = true;
    hs.src = "//s10.histats.com/js15_as.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(hs);
  })();

// Parallax //
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  });

   // Ambil tombol close-btn
  document.getElementById("close").addEventListener("click", function(e) {
    e.preventDefault(); // cegah link default
    document.getElementById("icons").style.display = "none"; // sembunyikan div
  });

  //modal trigger
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
});


// Javascrip Search Start
const page = [
  { title: "Home", url: "index.html" },
  { title: "Berita Utama", url: "#berita" },
  { title: "Berita Wilayah", url: "#wilayah" },
  { title: "Berita Pilihan", url: "#pilihan" },
  { title: "Berita Lama", url: "news-old.html" },
  { title: "Calendar Event", url: "/info-wilayah/event.html" },
  { title: "Info Kelurahan", url: "/info-wilayah/kelurahan.html" },
  { title: "Info Puskesmas", url: "/info-wilayah/puskesmas.html" },
  { title: "Info LMK", url: "/info-wilayah/lmkkelapadua.html" },
  { title: "Gallery Photo", url: "/gallery/gallery-photo.html" },
  { title: "Gallery Video", url: "/gallery/gallery-video.html" },
  { title: "Contact Us", url: "#contact" },
];

// Ambil query dari URL (?q=...)
const params = new URLSearchParams(window.location.search);
const q = params.get("q");
const query = q ? q.toLowerCase().trim() : "";

// Container hasil pencarian
const resultsContainer = document.getElementById("results");

// Fungsi pencarian
function searchPages(keyword) {
  if (!keyword) return [];
  return pages.filter((page) => page.title.toLowerCase().includes(keyword));
}

// Render hasil pencarian
function renderResults() {
  if (!resultsContainer) return; // cegah error jika #results tidak ada
  resultsContainer.innerHTML = "";
  const results = searchPages(query);
  
  if (results.length > 0) {
    results.forEach((page) => {
      const item = document.createElement("a");
      item.href = page.url;
      item.className = "collection-item";
      item.textContent = page.title;
      resultsContainer.appendChild(item);
    });
  } else {
    resultsContainer.innerHTML = query
    ? `<p class="red-text center-align">Tidak ada hasil untuk "${query}"</p>`
    : `<p class="grey-text center-align">Masukkan kata kunci untuk mencari</p>`;
  }
}

// Jalankan pencarian
renderResults();

// Toggle search box
const searchBtn = document.querySelector("#search-button");
const searchForm = document.querySelector(".search-form");

if (searchBtn && searchForm) {
  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
  });
}
// Javascrip Search End

// Javascrip Page Start
const pages = [
  { title: "Home", url: "index.html" },
  { title: "Berita Utama", url: "#berita" },
  { title: "Berita Wilayah", url: "#wilayah" },
  { title: "Berita Pilihan", url: "#pilihan" },
  { title: "Berita Lama", url: "news-old.html" },
  { title: "Calendar Event", url: "/info-wilayah/event.html" },
  { title: "Info Kelurahan", url: "/info-wilayah/kelurahan.html" },
  { title: "Info Puskesmas", url: "/info-wilayah/puskesmas.html" },
  { title: "Info LMK", url: "/info-wilayah/lmkkelapadua.html" },
  { title: "Gallery Photo", url: "/gallery/gallery-photo.html" },
  { title: "Gallery Video", url: "/gallery/gallery-video.html" },
  { title: "Contact Us", url: "#contact" },
];
// Javascrip Page End






















    
 




























      










