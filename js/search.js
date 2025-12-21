const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchForm.classList.toggle("active");
  if (searchForm.classList.contains("active")) {
    searchBox.focus();
  }
});

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});






