// Image Berita Berganti otomatis Star //
function setupImageSwitcher(containerSelector, interval = 4000) {
  const container = document.querySelector(containerSelector);
  const images = container.querySelectorAll('img');
  let current = 0;

  images.forEach((img, i) => {
    img.style.display = i === 0 ? 'block' : 'none';
  });

  setInterval(() => {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
  }, interval);
}

setupImageSwitcher('.images');
setupImageSwitcher('.picture');
setupImageSwitcher('.media');

// Ganti Image Box-News secara otomatis //
const imgView = (src) => {
  document.getElementById('view-img').src = src;
};
const images = ['../img/box-news/A.jpg', '../img/box-news/B.jpg', '../img/box-news/C.jpg', '../img/box-news/D.jpg'];
let currentIndex = 0;

function cycleImages() {
  document.getElementById('view-img').src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(cycleImages, 4000);

// Tampilan Selengkapnya Giat Wilayah //
const btn = document.getElementById('show-more-btn');
const btnText = btn.querySelector('.btn-text');
let isShown = false;

btn.addEventListener('click', function () {
  const items = [document.getElementById('p5'), document.getElementById('p6'), document.getElementById('p7'), document.getElementById('p8')];

  items.forEach((item) => item.classList.toggle('hidden'));

  isShown = !isShown;
  btnText.textContent = isShown ? 'Tutup Tampilan' : 'Tampilan Selengkapnya';
});

// JavaScript Aplikasi Histats //
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4937767,4,1030,150,25,00011111']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function () {
  var hs = document.createElement('script');
  hs.type = 'text/javascript';
  hs.async = true;
  hs.src = '//s10.histats.com/js15_as.js';
  (document.head || document.body).appendChild(hs);
})();

// Selektor Komponen
const popupScreen = document.querySelector('.popup-screen');
const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');
const popupAudio = document.querySelector('#popup-audio');

// Fungsi: Cek cookie
function hasCookie(name) {
  return document.cookie.split(';').some((item) => item.trim().startsWith(name + '='));
}

// Fungsi: Tampilkan PopUp + Audio
function showPopupWithAudio() {
  popupScreen.classList.add('active');
  popupAudio.play().catch(() => {
    // Autoplay gagal? Tunggu interaksi user
    popupScreen.addEventListener('click', () => popupAudio.play());
  });
}

// Saat halaman dimuat
window.addEventListener('load', () => {
  if (!hasCookie('WebsiteName')) {
    setTimeout(showPopupWithAudio, 1000); // Delay 1 detik
  }
});

// Tutup PopUp
closeBtn.addEventListener('click', () => {
  popupScreen.classList.remove('active');
  popupScreen.style.display = 'none';
  document.cookie = 'WebsiteName=testWebsite; max-age=' + 24 * 60 * 60;
});
