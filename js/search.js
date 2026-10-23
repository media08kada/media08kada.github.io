document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-button");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  // Cek elemen
  if (!searchBtn || !searchForm || !searchInput) {
    console.error("Elemen search tidak ditemukan.");
    return;
  }

  // Gabungkan semua data pencarian
  const allPages = [
    ...(typeof pages !== "undefined" ? pages : []),
    ...(typeof beritaPages !== "undefined" ? beritaPages : []),
  ];

  console.log("Data Search:", allPages);

  // Tombol search
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    searchForm.classList.toggle("active");

    if (searchForm.classList.contains("active")) {
      searchInput.focus();
    } else {
      searchInput.value = "";
    }
  });

  // Submit pencarian
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const keyword = searchInput.value.toLowerCase().trim();

    const allPages = [...pages, ...beritaPages];

    const result = allPages.find((page) =>
      page.keyword.some((word) => word.toLowerCase().includes(keyword)),
    );

    console.log("Hasil:", result);

    if (!result) {
      alert(`Maaf, pencarian "${keyword}" tidak ditemukan.`);
      return;
    }

    window.location.href = result.url;

    if (!result) {
      alert(`Maaf, pencarian "${keyword}" tidak ditemukan.`);
      return;
    }

    // Bersihkan form
    searchInput.value = "";
    searchForm.classList.remove("active");

    // Link eksternal
    if (result.url.startsWith("http://") || result.url.startsWith("https://")) {
      window.open(result.url, "_blank");
      return;
    }

    // Link internal
    window.location.href = result.url;
  });

  // Klik di luar search
  document.addEventListener("click", (e) => {
    if (
      searchForm.classList.contains("active") &&
      !searchForm.contains(e.target) &&
      !searchBtn.contains(e.target)
    ) {
      searchForm.classList.remove("active");
      searchInput.value = "";
    }
  });

  // Tombol ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchForm.classList.remove("active");
      searchInput.value = "";
    }
  });
});
