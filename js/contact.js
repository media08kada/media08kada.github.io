//--- Contact Us ---
  document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzIDToqJ1qHe7mrqNJzBBP549GUOHHTnT4sLLmU9ak3NWqbESOn0h9rp7xO03qnTfFQ/exec';
    const form = document.forms['media-kada-form'];

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Kirim data ke Google Apps Script
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response);

          // Tampilkan notifikasi
          M.toast({
            html: 'Pesan berhasil dikirim!',
            classes: 'green darken-2 white-text',
          });

          // Reset form
          form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });
  });

