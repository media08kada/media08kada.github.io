// Semua inisialisasi dijalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown
  var dropdowns = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(dropdowns, { coverTrigger: false, constrainWidth: false });

  // Sidenav
  var sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Slider (versi 1)
  var slider = document.querySelectorAll(".slider");
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
  var scrollspy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspy, { scrollOffset: 50 });

  // Modal init
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  // Gallery Show/Hide
  const btn = document.getElementById("show-more-btn");
  if (btn) {
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
  }

  // Form submit ke Google Apps Script
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzIDToqJ1qHe7mrqNJzBBP549GUOHHTnT4sLLmU9ak3NWqbESOn0h9rp7xO03qnTfFQ/exec";
  const form = document.forms["media-kada-form"];
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });

    // Toast + reset form
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      M.toast({
        html: "Pesan berhasil dikirim!",
        classes: "green darken-2 white-text",
      });
      form.reset();
    });
  }

  // Slider (versi 2)
  var slider2 = document.querySelectorAll(".slider");
  M.Slider.init(slider2, {
    indicators: false,
    height: 300,
    duration: 500,
    interval: 4000,
  });

  // Pagination active state
  const paginationLinks = document.querySelectorAll(".pagination li a");
  paginationLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      document
        .querySelectorAll(".pagination li")
        .forEach((li) => li.classList.remove("active"));
      this.parentElement.classList.add("active");
    });
  });

  // Auto resize textarea
  var textNeedResize = document.querySelectorAll("#message");
  if (textNeedResize.length > 0) {
    M.textareaAutoResize(textNeedResize[0]);
  }
});

// Fungsi scroll ke atas (harus global, tidak dibungkus DOMContentLoaded)
function scrollKeatas() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

