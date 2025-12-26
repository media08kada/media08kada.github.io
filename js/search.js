// --- Bagian Toggle Form Search ---
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

// Klik tombol search → langsung submit form
searchButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Kalau input kosong, fokus dulu biar user isi
  if (!searchBox.value.trim()) {
    searchForm.classList.add("active");
    searchBox.focus();
  } else {
    // Kalau sudah ada isi → submit form ke search.html?q=...
    searchForm.submit();
  }
});

// --- Bagian Pencarian Halaman ---
const resultContainer = document.getElementById("results");

// Daftar halaman (bisa diganti fetch JSON eksternal)
const pages = [
  { title: "Home", url: "index.html" },
  { title: "Berita Utama", url: "#berita" },
  { title: "Berita Wilayah", url: "#wilayah" },
  { title: "Berita Pilihan", url: "#pilihan" },
  { title: "Berita Lama", url: "news-old.html" },
  { title: "Calender Event", url: "/info-wilayah/event.html" },
  { title: "Info Kelurahan", url: "/info-wilayah/kelurahan.html" },
  { title: "Info Puskesmas", url: "/info-wilayah/puskesmas.html" },
  { title: "Info LMK", url: "/info-wilayah/lmkkelapadua.html" },
  { title: "Gallery Photo", url: "/gallery/gallery-photo.html" },
  { title: "Gallery Video", url: "/gallery/gallery-video.html" },
  { title: "Contact Us", url: "#contact" },
];

// Ambil query dari URL
const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase();

// Filter hasil
if (query) {
  const results = pages.filter((p) => p.title.toLowerCase().includes(query));

  if (results.length > 0) {
    results.forEach((r) => {
      const link = document.createElement("a");
      link.href = r.url;
      link.textContent = r.title;
      link.className = "collection-item"; // Materialize style
      resultContainer.appendChild(link);
    });
  } else {
    const empty = document.createElement("div");
    empty.className = "collection-item red-text";
    empty.textContent = "Tidak ada hasil ditemukan.";
    resultContainer.appendChild(empty);
  }
}
