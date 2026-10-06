//Reaksi Pembaca
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".likeBtn").forEach(function (btn) {
    const articleId = btn.dataset.id;
    const countSpan = btn.querySelector(".likeCount");
    // Key localStorage
    const likeKey = "likes_" + articleId;
    const likedKey = "liked_" + articleId;
    // Ambil jumlah like
    let likes = localStorage.getItem(likeKey) || 0;
    countSpan.textContent = likes;
    // Jika sudah pernah like
    if (localStorage.getItem(likedKey) === "true") {
      btn.disabled = true;
      btn.innerHTML =
        '👍 Disukai (<span class="likeCount">' + likes + "</span>)";
    }
    btn.addEventListener("click", function () {
      if (localStorage.getItem(likedKey) === "true") return;
      likes++;
      countSpan.textContent = likes;
      localStorage.setItem(likeKey, likes);
      localStorage.setItem(likedKey, "true");
      btn.disabled = true;
      btn.innerHTML =
        '👍 Disukai (<span class="likeCount">' + likes + "</span>)";
    });
  });
});
