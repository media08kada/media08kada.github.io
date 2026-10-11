document.addEventListener("DOMContentLoaded", () => {
  loadPreviewBerita(
    "berita-utama/maulid-nabi-di-masjid-jami-at-taqwa-kelapa-dua.html",
    1,
  );
  loadPreviewBerita(
    "berita-utama/pemanfaatan-lahan-bersama-komunitas-melon-kelapa-dua.html",
    2,
  );
  loadPreviewBerita(
    "berita-utama/hidran-mandiri-perkuat-sistem-proteksi-kebakaran.html",
    3,
  );
});

function loadPreviewBerita(fileBerita, nomor) {
  fetch(fileBerita)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const judul = doc.querySelector(`#judul-berita-${nomor}`);
      const tanggal = doc.querySelector(`#tanggal-berita-${nomor}`);
      const isi = doc.querySelector(`#isi-berita-${nomor}`);

      if (judul) {
        document.getElementById(`preview-judul-berita-${nomor}`).textContent =
          judul.textContent.trim();
      }

      if (tanggal) {
        document.getElementById(`preview-tanggal-berita-${nomor}`).textContent =
          tanggal.textContent.trim();
      }

      if (isi) {
        document.getElementById(`preview-isi-berita-${nomor}`).textContent =
          isi.textContent.trim().substring(0, 500) + "...";
      }

      const link = document.getElementById(`preview-link-berita-${nomor}`);

      if (link) {
        link.href = fileBerita;
      }
    })
    .catch((error) => {
      console.error(`Gagal memuat berita ${nomor}:`, error);
    });
}
