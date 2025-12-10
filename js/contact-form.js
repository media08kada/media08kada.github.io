// JavaScript Contact Form //
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwRvn268alDWUZ7nq1s4TrvZd_fD3lTWX7oMxZuf86NFvclEd9lcjgGC1cKLaSrN--E/exec";
const form = document.forms["media08kada-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      form.reset(); // Hapus nilai input
    })
    .catch((error) => console.error("Error!", error.message));
});
