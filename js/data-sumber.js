// Berita Utama
const sumberBeritaUtama = [
  "berita-utama/mini-konvensi-kbj-tingkat-provinsi-dki-jakarta.html",
  "berita-utama/verifikasi-lapangan-lomba-kampung-bebas-jentik.html",
  "berita-utama/rw-08-kelapa-dua-meraih-juara-3-kampung-bebas-jentik.html",
  "berita-utama/deklarasi-stbm-kelurahan-kelapa-dua-wujudkan-lingkungan-sehat.html",
];

// Berita-Box Link
const sumberBerita = {
  "berita-1": "mini-konvensi-kbj-tingkat-provinsi-dki-jakarta.html",

  "berita-2": "verifikasi-lapangan-lomba-kampung-bebas-jentik.html",

  "berita-3": "rw-08-kelapa-dua-meraih-juara-3-kampung-bebas-jentik.html",

  "berita-4":
    "deklarasi-stbm-kelurahan-kelapa-dua-wujudkan-lingkungan-sehat.html",
};

// Data Berita Judul dan Gambar
const DATA_BERITA = {
  "berita-1": {
    judul:
      "RW 08 Kelapa Dua Wakili Jakarta Barat dalam Mini Konvensi Kampung Bebas Jentik Tingkat Provinsi DKI Jakarta",
    gambar: "../img/berita-1/A.webp",
  },

  "berita-2": {
    judul: "Verifikasi Lapangan Lomba Kampung Bebas Jentik di RW 08 Kelapa Dua",
    gambar: "../img/berita-2/B.webp",
  },

  "berita-3": {
    judul:
      "RW 08 Kelapa Dua Meraih Juara 3 Kampung Bebas Jentik Tingkat Provinsi DKI Jakarta",
    gambar: "../img/berita-3/C.webp",
  },

  "berita-4": {
    judul:
      "Deklarasi STBM Kelurahan Kelapa Dua Perkuat Komitmen Wujudkan Lingkungan Sehat dan Bebas Stunting",
    gambar: "../img/berita-4/D.webp",
  },
};

// Berita Wilayah
const sumberBeritaWilayah = [
  {
    url: "berita-wilayah/baznas-berikan-bantuan-pemasangan-listrik.html",
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
    url: "berita-wilayah/pengaspalan-jalan-pasca-pemasangan-pipa.html",
    nomor: 4,
  },
  {
    url: "berita-wilayah/gerebek-sampah-jalan-inpseksi-kelurahan-kelapa-dua.html",
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
    url: "berita-wilayah/persiapan-mini-konvensi-kader-jumantik-rw-08.html",
    nomor: 8,
  },
];

// Berita Pilihan
const sumberBeritaPilihan = [
  {
    url: "Pilihan/posyandu-siklus-hidup-melati-rw-08-tingkatkan-layanan-kesehatan.html",
    judul: "judul-pilihan-1",
    isi: "isi-pilihan-1",
    previewJudul: "preview-judul-pilihan-1",
    previewIsi: "preview-isi-pilihan-1",
  },
  {
    url: "Pilihan/cek-kesehatan-gratis-di-rw-08-kelapa-dua.html",
    judul: "judul-pilihan-2",
    isi: "isi-pilihan-2",
    previewJudul: "preview-judul-pilihan-2",
    previewIsi: "preview-isi-pilihan-2",
  },
  {
    url: "Pilihan/hidran-mandiri-perkuat-sistem-proteksi-kebakaran.html",
    judul: "judul-pilihan-3",
    isi: "isi-pilihan-3",
    previewJudul: "preview-judul-pilihan-3",
    previewIsi: "preview-isi-pilihan-3",
  },
  {
    url: "Pilihan/mural-hadirkan-wajah-baru-kawasan-kelapa-dua.html",
    judul: "judul-pilihan-4",
    isi: "isi-pilihan-4",
    previewJudul: "preview-judul-pilihan-4",
    previewIsi: "preview-isi-pilihan-4",
  },
];


// Populer News
const beritaPopuler = [
  {
    judul:
      "RW 08 Kelapa Dua Wakili Jakarta Barat dalam Mini Konvensi Kampung Bebas Jentik Tingkat Provinsi DKI Jakarta",
    link: "/berita-utama/mini-konvensi-kbj-tingkat-provinsi-dki-jakarta.html",
  },
  {
    judul: "Verifikasi Lapangan Lomba Kampung Bebas Jentik di RW 08 Kelapa Dua",
    link: "/berita-utama/verifikasi-lapangan-lomba-kampung-bebas-jentik.html",
  },
  {
    judul:
      "RW 08 Kelapa Dua Meraih Juara 3 Kampung Bebas Jentik Tingkat Provinsi DKI Jakarta",
    link: "/berita-utama/rw-08-kelapa-dua-meraih-juara-3-kampung-bebas-jentik.html",
  },
  {
    judul:
      "Deklarasi STBM Kelurahan Kelapa Dua Perkuat Komitmen Wujudkan Lingkungan Sehat dan Bebas Stunting",
    link: "/berita-utama/deklarasi-stbm-kelurahan-kelapa-dua-wujudkan-lingkungan-sehat.html",
  },
  {
    judul: "Baznas Berikan Bantuan Pemasangan Listrik bagi Warga Kelapa Dua",
    link: "/berita-wilayah/baznas-berikan-bantuan-pemasangan-listrik.html",
  },
  {
    judul: "Hidran Mandiri Perkuat Sistem Proteksi Kebakaran",
    link: "/Pilihan/hidran-mandiri-perkuat-sistem-proteksi-kebakaran.html",
  },
];



