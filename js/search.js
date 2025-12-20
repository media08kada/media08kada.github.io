document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchForm = document.querySelector(".search-form");
  const closeIcon = document.querySelector(".close-icon");

  // Desktop
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      searchForm.style.display = "block";
      document.getElementById("search-box").focus();
    });
  }
  if (closeIcon) {
    closeIcon.addEventListener("click", () => {
      searchForm.style.display = "none";
    });
  }

  // Mobile
  if (searchButtonMobile) {
    searchButtonMobile.addEventListener("click", () => {
      searchFormMobile.style.display = "block";
      document.getElementById("search-box-mobile").focus();
    });
  }
  if (closeIconMobile) {
    closeIconMobile.addEventListener("click", () => {
      searchFormMobile.style.display = "none";
    });
  }
});

const searchBtn = document.getElementById("search-button");
const searchForm = document.querySelector(".search-form");
const closeIcon = document.querySelector(".close-icon");

searchBtn.addEventListener("click", () => {
  searchForm.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  searchForm.classList.remove("active");
});

  // Klik di luar -> tutup otomatis
  document.addEventListener("click", (e) => {
    if (searchForm.classList.contains("active") && !searchForm.contains(e.target) && e.target !== searchButton) {
      searchForm.classList.remove("active");
    }
    if (searchFormMobile.classList.contains("active") && !searchFormMobile.contains(e.target) && e.target !== searchButtonMobile) {
      searchFormMobile.classList.remove("active");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const searchButtonMobile = document.getElementById("search-button-mobile");
    const searchFormMobile = document.querySelector(".search-form-mobile");
    const closeIconMobile = document.querySelector(".close-icon-mobile");

    if (searchButtonMobile) {
      searchButtonMobile.addEventListener("click", (e) => {
        e.stopPropagation();
        searchFormMobile.classList.add("active");
        document.getElementById("search-box-mobile").focus();
      });
    }

    if (closeIconMobile) {
      closeIconMobile.addEventListener("click", () => {
        searchFormMobile.classList.remove("active");
      });
    }

    // Klik di luar -> tutup otomatis
    document.addEventListener("click", (e) => {
      if (
        searchFormMobile.classList.contains("active") &&
        !searchFormMobile.contains(e.target) &&
        e.target !== searchButtonMobile
      ) {
        searchFormMobile.classList.remove("active");
      }
    });
  });





