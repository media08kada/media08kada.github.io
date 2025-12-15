// Semua inisialisasi dijalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown
  const dropdowns = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(dropdowns, { coverTrigger: false, constrainWidth: false });

  // Sidenav
  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Slider (gunakan satu konfigurasi saja)
  const sliders = document.querySelectorAll(".slider");
  M.Slider.init(sliders, {
    indicators: false,
    height: 350,
    duration: 600, // gunakan 'duration' bukan 'transition'
    interval: 4000,
  });

  // Parallax
  const parallax = document.querySelectorAll(".parallax");
  M.Parallax.init(parallax);

  // Materialbox
  const materialbox = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(materialbox);

  // ScrollSpy
  const scrollspy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspy, { scrollOffset: 50 });

  // Modal init
  const modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  // Gallery Show/Hide
  const btn = document.getElementById("show-more-btn");
  if (btn) {
    const hiddenItems = document.querySelectorAll(".gallery .hidden");
    let isOpen = false;
    btn.addEventListener("click", function () {
      hiddenItems.forEach((item) => {
        item.style.display = isOpen ? "none" : "block";
      });
      btn.innerHTML = isOpen
        ? '<i class="material-icons left"></i>Open'
        : '<i class="material-icons left"></i>Close';
      isOpen = !isOpen;
    });
  }

  // Form submit ke Google Apps Script
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzIDToqJ1qHe7mrqNJzBBP549GUOHHTnT4sLLmU9ak3NWqbESOn0h9rp7xO03qnTfFQ/exec";
  const form = document.forms["media-kada-form"];
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log("Success!", response);
          M.toast({
            html: "Pesan berhasil dikirim!",
            classes: "green darken-2 white-text",
          });
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }
});

// Fungsi scroll ke atas (global)
function scrollKeatas() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


