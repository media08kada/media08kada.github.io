document.addEventListener("DOMContentLoaded", function () {
  // Ambil nama file HTML sebagai ID artikel
  const articleId = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const btn = document.getElementById("likeBtn");
  const count = document.getElementById("likeCount");

  if (!btn || !count) return;

  const likedKey = "liked_" + articleId;


  // Tampilkan status like
  function setLikedState(totalLike) {
    count.textContent = totalLike;

    btn.disabled = true;
    btn.classList.remove("grey");
    btn.classList.add("blue");

    btn.innerHTML = `👍 Disukai (<span id="likeCount">${totalLike}</span>)`;
  }


  // Ambil jumlah like awal
fetch("../api/likes.php?id=" + encodeURIComponent(articleId))
  .then((response) => {
    console.log(response.status);
    return response.text();
  })
  .then((text) => {
    console.log(text);

    const data = JSON.parse(text);

    count.textContent = data.likes || 0;

    if (localStorage.getItem(likedKey)) {
      setLikedState(data.likes);
    }
  })
  .catch((err) => {
    console.error(err);
  });


  // Saat tombol diklik
  btn.addEventListener("click", function () {
    if (localStorage.getItem(likedKey)) {
      return;
    }

    fetch("/api/likes.php?id=" + encodeURIComponent(articleId) + "&action=like")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(likedKey, "true");

        setLikedState(data.likes);
      })
      .catch((error) => {
        console.error("Gagal menyimpan like:", error);
      });
  });
});
