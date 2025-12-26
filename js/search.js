// Data halaman yang bisa dicari
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

// Ambil query dari URL (?q=...)
const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase() || "";

// Container hasil pencarian
const resultsContainer = document.getElementById("results");

// Fungsi pencarian
function searchPages(keyword) {
  return pages.filter((page) => page.title.toLowerCase().includes(keyword));
}

// Jalankan pencarian
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
  resultsContainer.innerHTML = `<p class="red-text">Tidak ada hasil untuk "${query}"</p>`;
}

const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault(); // cegah reload
  searchForm.classList.toggle("active");
});
