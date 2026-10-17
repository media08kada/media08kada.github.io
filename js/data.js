// Berita Utama
document.addEventListener("DOMContentLoaded", () => {
  loadPreviewBerita(
    "berita-utama/maulid-nabi-di-masjid-jami-at-taqwa-kelapa-dua.html",
    1,
  );
  loadPreviewBerita(
    "berita-utama/posyandu-siklus-hidup-melati-rw-08-tingkatkan-layanan-kesehatan.html",
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

// Berita Wilayah
const daftarBerita = [
  {
    url: "berita-wilayah/gerebek-sampah-jalan-inpseksi-kelurahan-kelapa-dua.html",
    nomor: 1,
  },
  {
    url: "berita-wilayah/gulkarmat-bangun-hodran-mandiri-di-rw-08-kelapa-dua.html",
    nomor: 2,
  },
  {
    url: "berita-wilayah/kolaborasi-ketua-rt-perkuat-layanan-posyandu-remaja.html",
    nomor: 3,
  },
  {
    url: "berita-wilayah/anggota-dprd-dki-jakarta-gelar-reses.html",
    nomor: 4,
  },
  {
    url: "berita-wilayah/koordinasi-wilayah-(rakorwil)-kelurahan-kelapa-dua.html",
    nomor: 5,
  },
  {
    url: "berita-wilayah/sosialisasi-teknologi-wolbachia-untuk-pengendalian-dbd.html",
    nomor: 6,
  },
  {
    url: "berita-wilayah/penanaman-pohon-di-bantaran-kali-pesanggrahan.html",
    nomor: 7,
  },
  {
    url: "berita-wilayah/posyandu-siklus-hidup-melati-rw-08-gelar-pelayanan-kesehatan.html",
    nomor: 8,
  },
];

daftarBerita.forEach((berita) => {
  fetch(berita.url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const img = doc.querySelector(`#img-wilayah-${berita.nomor}`);
      const judul = doc.querySelector(`#judul-wilayah-${berita.nomor}`);
      const isi = doc.querySelector(`#isi-wilayah-${berita.nomor}`);

      // gambar
      const targetImg = document.getElementById(`preview-img-${berita.nomor}`);

      if (img && targetImg) {
        targetImg.src = img.src;
        targetImg.alt = judul ? judul.textContent.trim() : "";
      }

      // judul
      const targetJudul = document.getElementById(
        `preview-judul-${berita.nomor}`,
      );

      if (judul && targetJudul) {
        targetJudul.textContent = judul.textContent.trim();
      }

      // isi
      const targetIsi = document.getElementById(`preview-isi-${berita.nomor}`);

      if (isi && targetIsi) {
        const previewText =
          isi.textContent
            .replace(/\s+/g, " ")
            .trim()
            .split(" ")
            .slice(0, 15)
            .join(" ") + "...";

        targetIsi.textContent = previewText;
      }

      // link artikel
      const targetLink = document.getElementById(
        `preview-link-${berita.nomor}`,
      );

      if (targetLink) {
        targetLink.href = berita.url;
      }
    })
    .catch((err) => console.error(`Gagal memuat ${berita.url}:`, err));
});