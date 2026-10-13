// Tombol Like
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".likeBtn").forEach(function (btn) {
    const articleId = btn.dataset.id;
    const likedKey = "liked_" + articleId;
    const countKey = "like_count_" + articleId;

    const countEl = btn.querySelector(".likeCount");

    // Ambil jumlah like
    let count = parseInt(localStorage.getItem(countKey)) || 0;
    countEl.textContent = count;

    // Jika sudah like
    if (localStorage.getItem(likedKey)) {
      btn.disabled = true;
      btn.classList.remove("grey");
      btn.classList.add("blue");
    }

    btn.addEventListener("click", function () {
      if (localStorage.getItem(likedKey)) return;

      count++;
      localStorage.setItem(countKey, count);
      localStorage.setItem(likedKey, "true");

      countEl.textContent = count;

      btn.disabled = true;
      btn.classList.remove("grey");
      btn.classList.add("blue");
    });
  });
});