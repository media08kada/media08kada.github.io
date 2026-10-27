/* BERITA UTAMA */
document.addEventListener("DOMContentLoaded", () => {
  sumberBeritaUtama.forEach((url, index) => {
    loadPreviewBerita(url, index + 1);
  });
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

/* BERITA WILAYAH */

document.addEventListener("DOMContentLoaded", () => {

  sumberBeritaWilayah.forEach((berita) => {

    fetch(berita.url)

      .then((response) => {

        if (!response.ok) {
          throw new Error(`Gagal memuat ${berita.url}`);
        }

        return response.text();
      })

      .then((html) => {

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Judul
        const judul = doc.querySelector(
          `#judul-wilayah-${berita.nomor}`
        );

        // Isi
        const isi = doc.querySelector(
          `#isi-wilayah-${berita.nomor}`
        );

        // Target Judul
        const targetJudul = document.getElementById(
          `preview-judul-${berita.nomor}`
        );

        if (judul && targetJudul) {
          targetJudul.textContent =
            judul.textContent.trim();
        }

        // Target Ringkasan
        const targetIsi = document.getElementById(
          `preview-isi-${berita.nomor}`
        );

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

        // Target Link
        const targetLink = document.getElementById(
          `preview-link-${berita.nomor}`
        );

        if (targetLink) {
          targetLink.href = berita.url;
        }

      })

      .catch((err) => {
        console.error(
          `Gagal memuat ${berita.url}:`,
          err
        );
      });

  });

});



/* BERITA PILIHAN */
document.addEventListener("DOMContentLoaded", () => {
  sumberBeritaPilihan.forEach((item) => {
    fetch(item.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Gagal memuat ${item.url}`);
        }

        return response.text();
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const judul = doc.getElementById(item.judul);
        const isi = doc.getElementById(item.isi);

        if (judul) {
          document.getElementById(item.previewJudul).textContent =
            judul.textContent.trim();
        }

        if (isi) {
          let ringkasan = isi.textContent.trim();

          if (ringkasan.length > 200) {
            ringkasan = ringkasan.substring(0, 200) + "...";
          }

          document.getElementById(item.previewIsi).textContent = ringkasan;
        }
      })
      .catch((error) => {
        console.error(`Gagal memuat ${item.url}:`, error);
      });
  });
});


/* PREVIEW BERITA HORIZONTAL */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".berita-preview");

  cards.forEach((card) => {
    const keyBerita = card.dataset.berita;
    const linkBerita = sumberBerita[keyBerita];

    if (!linkBerita) {
      console.warn(`Data berita "${keyBerita}" tidak ditemukan.`);
      return;
    }

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

        const img = doc.querySelector('[id^="img-berita-"]');
        const judul = doc.querySelector('[id^="judul-berita-"]');

        /* Gambar */
        if (img) {
          const cardImg = card.querySelector(".card-image img");

          if (cardImg) {
            cardImg.src = img.src;
            cardImg.alt = img.alt || "Preview Berita";
          }
        }

        /* Judul */
        if (judul) {
          const cardJudul = card.querySelector(".card-content h5");

          if (cardJudul) {
            cardJudul.textContent = judul.textContent.trim();
          }
        }

        /* Link tombol */
        const tombolLink = card.querySelector(".card-action a");

        if (tombolLink) {
          tombolLink.href = linkBerita;
        }
      })
      .catch((error) => {
        console.error("Gagal memuat berita:", error);
      });
  });
});

