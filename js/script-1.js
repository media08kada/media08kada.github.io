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
const images = ['../img/box-news/news1.jpg', '../img/box-news/news2.jpg', '../img/box-news/news3.jpg', '../img/box-news/news4.jpg'];
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

// My Javascript Popup Screen Iklan //
const popupScreen = document.querySelector('.popup-screen');
const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');
const popupAudio = document.querySelector('popup-audio');
window.addEventListener('load', () => {
  setTimeout(() => {
    popupScreen.classList.add('active');
    popupAudio.play();
  }, 1000); //
});
closeBtn.addEventListener('click', () => {
  popupScreen.classList.remove('active');
  document.cookie = 'WebsiteName=testWebsite; max-age=' + 24 * 60 * 60;
  const WebsiteCookie = document.cookie.indexOf('WebsiteName');

  if (WebsiteCookie != -1) {
    popupScreen.style.display = 'none';
  } else {
    popupScreen.style.display = 'flex';
  }
});
