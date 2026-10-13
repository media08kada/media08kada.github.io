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

// Berita Box Horizontal
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".berita-preview");

  cards.forEach((card) => {
    const linkBerita = card.dataset.link;

    fetch(linkBerita)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

// Ambil gambar pertama dari halaman sumber
const img = doc.querySelector('[id^="img-berita-"]');

// Ambil isi berita pertama dari halaman sumber
const isi = doc.querySelector('[id^="isi-berita-"]');

// Isi gambar ke card
if (img) {
  let src = img.getAttribute("src");

  // Hapus "../" di depan path jika ada
  src = src.replace(/^(\.\.\/)+/, "");

  const cardImg = card.querySelector("img");

  if (cardImg) {
    cardImg.src = src;
    cardImg.alt = img.alt || "Gambar Berita";
  }
}

// Isi preview berita
if (isi) {
  const cardText = card.querySelector(".card-preview");
  
  if (cardText) {
    cardText.textContent = isi.textContent.trim();
  }
}
        // Isi paragraf dan batasi panjang
        if (isi) {
          const teks = isi.textContent.trim();

          const potong = teks.split(" ").slice(0, 15).join(" ") + "...";

          card.querySelector(".card-content p").textContent = potong;
        }

        // Set link otomatis
        card.querySelector(".card-action a").href = linkBerita;
      })
      .catch((error) => {
        console.error("Gagal mengambil berita:", error);
      });
  });
});