// Tombol Like
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector("#berita");

  if (!article) return;

  const articleId = location.pathname.split("/").pop().replace(".html", "");

  const btn = document.querySelector(".likeBtn");
  const count = document.querySelector(".likeCount");

  const likedKey = "liked_" + articleId;

  // Ambil jumlah like
  fetch(`likes.php?id=${articleId}`)
    .then((response) => response.json())
    .then((data) => {
      count.textContent = data.likes || 0;
    });

  // Sudah pernah like
  if (localStorage.getItem(likedKey)) {
    btn.disabled = true;
    btn.classList.remove("grey");
    btn.classList.add("blue");
  }

  btn.addEventListener("click", () => {
    if (localStorage.getItem(likedKey)) return;

    fetch(`likes.php?id=${articleId}&action=like`)
      .then((response) => response.json())
      .then((data) => {
        count.textContent = data.likes;

        localStorage.setItem(likedKey, "true");

        btn.disabled = true;
        btn.classList.remove("grey");
        btn.classList.add("blue");

        btn.innerHTML = `👍 Disukai (<span class="likeCount">${data.likes}</span>)`;
      });
  });
});