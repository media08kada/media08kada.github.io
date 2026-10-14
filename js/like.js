// Tombol Like
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector("#berita");
  if (!article) return;

  // Ambil nama file halaman sebagai ID artikel
  const articleId = location.pathname.split("/").pop().replace(".html", "");

  const btn = document.querySelector(".likeBtn");
  const count = document.querySelector(".likeCount");

  if (!btn || !count) return;

  const likedKey = "liked_" + articleId;

  // Ambil jumlah like
  fetch(`/api/likes.php?id=${articleId}`)
    .then((response) => response.json())
    .then((data) => {
      count.textContent = data.likes;

      // Jika pengguna sudah pernah like
      if (localStorage.getItem(likedKey)) {
        btn.disabled = true;
        btn.classList.remove("grey");
        btn.classList.add("blue");

        btn.innerHTML = `👍 Disukai (<span class="likeCount">${data.likes}</span>)`;
      }
    })
    .catch((error) => {
      console.error("Gagal mengambil data like:", error);
    });

  // Event tombol like
  btn.addEventListener("click", () => {
    if (localStorage.getItem(likedKey)) return;

    fetch(`/api/likes.php?id=${articleId}&action=like`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(likedKey, "true");

        btn.disabled = true;
        btn.classList.remove("grey");
        btn.classList.add("blue");

        btn.innerHTML = `👍 Disukai (<span class="likeCount">${data.likes}</span>)`;
      })
      .catch((error) => {
        console.error("Gagal menyimpan like:", error);
      });
  });
});
