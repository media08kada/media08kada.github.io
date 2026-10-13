// Berita Utama
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

// Preview Berita Horizontal Otomatis
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".berita-preview");

  cards.forEach((card) => {
    const linkBerita = card.dataset.link;

    fetch(linkBerita)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`File tidak ditemukan: ${linkBerita}`);
        }
        return response.text();
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Ambil gambar pertama
        const img = doc.querySelector('[id^="img-berita-"]');

        // Ambil judul berita
        const judul = doc.querySelector('[id^="judul-berita-"]');

        
        // Tampilkan gambar
                if (img) {
          let src = img.getAttribute("src");

          const cardImg = card.querySelector(".card-image img");

          if (cardImg && src) {
            cardImg.src = src;
            cardImg.alt = img.alt || "Preview Berita";
          }
        }

        // Tampilkan judul
          if (judul) {
          const cardJudul = card.querySelector(".card-content h5");

          if (cardJudul) {
            cardJudul.textContent = judul.textContent.trim();
          }
        }

       
        // Set link otomatis
       const link = card.querySelector(".card-action a");

        if (link) {
          link.href = linkBerita;
        }
      })
      .catch((error) => {
        console.error("Gagal memuat berita:", error);
      });
  });
});