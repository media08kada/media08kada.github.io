// Data halaman yang bisa dicari
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
