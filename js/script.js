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
  
  // Slider
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  M.Slider.init(sliders, {
    indicators: false,
    height: 400,
    transition: 600,
    interval: 3000,
  });
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

// Scroll ke atas
function scrollKeatas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Load file modals.html ke dalam index
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Modal
  const modalElems = document.querySelectorAll(".modal");
  M.Modal.init(modalElems);

  // Inisialisasi Slider
  const sliderElems = document.querySelectorAll(".slider");
  M.Slider.init(sliderElems, {
    indicators: false,
    height: 500,
    duration: 500,
    interval: 3000,
  });
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



