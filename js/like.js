// Tombol Like
document.addEventListener("DOMContentLoaded", () => {
  // ID artikel berdasarkan nama file
  const articleId = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const btn = document.getElementById("likeBtn");
  const count = document.getElementById("likeCount");

  if (!btn || !count) return;

  const likedKey = `liked_${articleId}`;

  function setLikedState(totalLike) {
    btn.disabled = true;
    btn.classList.remove("grey");
    btn.classList.add("blue");

    btn.innerHTML = `👍 Disukai (<span id="likeCount">${totalLike}</span>)`;
  }

  // Ambil jumlah like
  fetch(`../api/likes.php?id=${encodeURIComponent(articleId)}`)
    .then((res) => res.json())
    .then((data) => {
      const likes = data.likes || 0;

      count.textContent = likes;

      if (localStorage.getItem(likedKey)) {
        setLikedState(likes);
      }
    })
    .catch((err) => {
      console.error("Gagal mengambil like:", err);
    });

  // Klik tombol like
  btn.addEventListener("click", () => {
    if (localStorage.getItem(likedKey)) return;

    btn.disabled = true;

    fetch(`../api/likes.php?id=${encodeURIComponent(articleId)}&action=like`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(likedKey, "true");

        setLikedState(data.likes);
      })
      .catch((err) => {
        btn.disabled = false;

        console.error("Gagal menyimpan like:", err);
      });
  });
});
