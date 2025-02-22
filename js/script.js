// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Seacrh Aktive
/*const searchInput = document.getElementById('search-input');
const list = document.getElementById('list');
const listItems = list.getElementsByTagName('li');

searchInput.addEventListener('keyup', function (e) {
  const listTerm = e.target.volue.tolowerCase();
  for (let i = 0; i < listItems.length; i++) {
    const text = listItems[i].textContent,tolowerCase()
    if(text.includes(listItems)){
      if(text.includes(listTerm)){
        listItems[i].style.display = 'block';
      } else {
        listItems[i].style.display = 'none';
    }
  }
});*/

// Toggle class active untuk shopping cart
const archive = document.querySelector('.archive');
document.querySelector('#archive-button').onclick = (e) => {
  archive.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#archive-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !archive.contains(e.target)) {
    archive.classList.remove('active');
  }
});

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach((preview) => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

const sliderItems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (sliderItems) {
  sliderItems.forEach((slider, index) => {
    if (index === 0) {
      slider.setAttribute('data-show', 'show');
    } else {
      slider.setAttribute('data-show', 'hidden');
    }
  });
  setInterval(() => {
    sliderItems.forEach((slider, index) => {
      if (sliderActive === index) {
        slider.setAttribute('data-show', 'show');
      } else {
        slider.setAttribute('data-show', 'hidden');
      }
    });
    if (sliderActive === sliderItems.length - 1) {
      sliderActive = 0;
    } else {
      sliderActive++;
    }
  }, 5000);
}
