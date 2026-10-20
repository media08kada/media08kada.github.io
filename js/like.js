document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".likeBtn").forEach((btn) => {
    const articleId = btn.dataset.id;
    const countSpan = btn.querySelector(".likeCount");

    let likes = parseInt(localStorage.getItem(`likes_${articleId}`)) || 0;
    let liked = localStorage.getItem(`liked_${articleId}`) === "true";

    countSpan.textContent = likes;

    if (liked) {
      btn.classList.add("liked");
    }

    btn.addEventListener("click", () => {
      if (liked) return;

      likes++;
      liked = true;

      localStorage.setItem(`likes_${articleId}`, likes);
      localStorage.setItem(`liked_${articleId}`, "true");

      countSpan.textContent = likes;
      btn.classList.add("liked");
    });
  });
});
