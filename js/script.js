dlet nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextBtn.click();
  }, 7000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

// Function for next button
nextBtn.onclick = function () {
  moveSlider('next');
  stopAutoPlay();
  startAutoPlay();
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider('prev');
  stopAutoPlay();
  startAutoPlay();
};

function moveSlider(direction) {
  let sliderItems = slider.querySelectorAll('.item');
  let thumbnailItems = document.querySelectorAll('.thumbnail .item');

  if (direction === 'next') {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add('next');
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add('prev');
  }

  slider.addEventListener(
    'animationend',
    function () {
      if (direction == 'next') {
        slider.classList.remove('next');
      } else {
        slider.classList.remove('prev');
      }
    },
    { once: true }
  );
}

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Nonaktifkan Feather icon di navbar
document.querySelectorAll('.navbar-nav i[data-feather]').forEach((icon) => {
  icon.removeAttribute('data-feather');
});

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk Archive cart
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

// Modal 1 Box
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButton1 = document.querySelectorAll('.item-detail-button1');

const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButton2 = document.querySelectorAll('.item-detail-button2');

const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButton3 = document.querySelectorAll('.item-detail-button3');

itemDetailButton1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = 'flex';
    e.preventDefault();
  };
});

itemDetailButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
  };
});

itemDetailButton3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal 1
document.querySelector('.modal1 .close-icon').onclick = (e) => {
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal2 .close-icon').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal3 .close-icon').onclick = (e) => {
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal 1
window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = 'none';
  }
};
window.onclick = (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = 'none';
  }
};

window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = 'none';
  }
};

// Navbar Dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    dropdownToggle.classList.toggle('open');
  });
});

// Navbar Dropdown Footer
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownSpan = document.querySelector('.dropdown-btn span');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  if (dropdownContent.classList.contains('show')) {
    dropdownSpan.innerHTML = '&#9660;';
  } else {
    dropdownSpan.innerHTML = '&#9650;';
  }
});

window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.classList.remove('show');
    dropdownSpan.innerHTML = '&#9650;';
  }
});

// Kontak Pesan //
document.querySelector('form[name="media08kada-form"]').addEventListener('submit', function (e) {
  e.preventDefault();

  // Kode untuk mengirim pesan menggunakan AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/path/to/server', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(new URLSearchParams(new FormData(this)).toString());

  // Mengatur ulang nilai input form
  this.reset();
});

// Jempu Antar Lansia
document.querySelector('form[name="media08kada-form"]').addEventListener('submit', function (e) {
  e.preventDefault();

  // Kode untuk mengirim pesan menggunakan AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/path/to/server', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(new URLSearchParams(new FormData(this)).toString());

  // Mengatur ulang nilai input form
  this.reset();
});

// Calender //
const monthYearElement = document.getElementByID('monthYear');
const datesElement = document.getElementByID('dates');
const prevBtn = document.getElementByID('prevBtn');
const nextBtn = document.getElementByID('nextBtn');

let currentDate = new date();

const updateCalender = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 0);
  const lastDay = new Date(currentYear, (currentMonth = 1), 0);
  const totalDays = lastDay.getData();
  const firstDayIndex = firstDay.getData();
  const lastDayIndex = lastDay.getDay();

  const monthYearStaring = currentDate.totocalesStaring('default', { mont: 'long', year: 'numeric' });
  monthYearElement.textContent = monthYearStaring;

  let datesHTML = '';

  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - 1 + 1)();
    datesHTML += '<div class="date inactive>${prevDate.getDate()}</div>';
  }

  for(let i = i; i <= totalDays; i++){
    const date = new Date(currentYear, currentMonth, i);
    const activeClass = date.toDateString() == == Date(),
    toDateString() ? 'active' : '';
    dateHTML += '<div class="date ${activeClass}">${i}</div>';
  }

  for(let i = 1; i); i <= 7 + lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + i, i);
  } 
  datesElement.innerHTML = dateHTML;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalender();
})

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalender();
})

updateCalender();
