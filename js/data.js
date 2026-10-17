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



/* PREVIEW BERITA HORIZONTAL */

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

        const img = doc.querySelector('[id^="img-berita-"]');
        const judul = doc.querySelector('[id^="judul-berita-"]');

        if (img) {
          const src = img.getAttribute("src");
          const cardImg = card.querySelector(".card-image img");

          if (cardImg && src) {
            cardImg.src = src;
            cardImg.alt = img.alt || "Preview Berita";
          }
        }

        if (judul) {
          const cardJudul = card.querySelector(".card-content h5");

          if (cardJudul) {
            cardJudul.textContent = judul.textContent.trim();
          }
        }

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

        const img = doc.querySelector(`#img-wilayah-${berita.nomor}`);

        const judul = doc.querySelector(`#judul-wilayah-${berita.nomor}`);

        const isi = doc.querySelector(`#isi-wilayah-${berita.nomor}`);

        const targetImg = document.getElementById(
          `preview-img-${berita.nomor}`,
        );

        if (img && targetImg) {
          targetImg.src = img.src;
          targetImg.alt = judul ? judul.textContent.trim() : "";
        }

        const targetJudul = document.getElementById(
          `preview-judul-${berita.nomor}`,
        );

        if (judul && targetJudul) {
          targetJudul.textContent = judul.textContent.trim();
        }

        const targetIsi = document.getElementById(
          `preview-isi-${berita.nomor}`,
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

        const targetLink = document.getElementById(
          `preview-link-${berita.nomor}`,
        );

        if (targetLink) {
          targetLink.href = berita.url;
        }
      })
      .catch((err) => {
        console.error(`Gagal memuat ${berita.url}:`, err);
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
