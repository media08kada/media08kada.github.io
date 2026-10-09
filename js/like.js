// Tombol Like
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".likeBtn").forEach(function (btn) {
    const articleId = btn.dataset.id;
    const likedKey = "liked_" + articleId;

    // Cek apakah sudah like
    if (localStorage.getItem(likedKey)) {
      btn.disabled = true;
      btn.classList.remove("grey");
      btn.classList.add("blue");
      btn.innerHTML = "👍 Disukai";
    }

    btn.addEventListener("click", function () {
      if (localStorage.getItem(likedKey)) return;

      localStorage.setItem(likedKey, "true");

      btn.disabled = true;
      btn.classList.remove("grey");
      btn.classList.add("blue");
      btn.innerHTML = "👍 Disukai";
    });
  });
});
