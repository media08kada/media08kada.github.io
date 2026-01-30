 // Donasi //
	const scriptURL = 'https://script.google.com/macros/s/AKfycbxpEIIThGfwAxNiYa3KyXkh8B9MQdAmqf5BXNATCfrmDqZ_MggJDSt9Al_kJMBrswERTw/exec'
	const form = document.forms['donasi-contact-form']

	form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validasi sederhana
    const nama = form.nama.value.trim();
    const telepon = form.telepon.value.trim();
    const jumlah = parseFloat(form.jumlah.value);
    if (nama === "" || telepon === "" || isNaN(jumlah) || jumlah <= 0) {
      alert("Pastikan semua data terisi dengan benar!");
      return;
    }

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success!", response);
        alert("Donasi berhasil dikirim!");
        form.reset(); // otomatis hapus isi form setelah terkirim
      })
      .catch((error) => console.error("Error!", error.message));
  });


function doPost(e) {
  try {
    var folder = DriveApp.getFolderById("1vkYT8BpZWZgcV5zJ-Ylnck17lDoN4PeW");

    // Ambil data form
    var nama = e.parameter.nama;
    var telepon = e.parameter.telepon;
    var jumlah = e.parameter.jumlah;

    // Ambil file upload (input name="bukti")
    var uploadedFiles = e.files.bukti;

    if (uploadedFiles) {
      if (Array.isArray(uploadedFiles)) {
        uploadedFiles.forEach(function (file) {
          folder.createFile(file);
        });
      } else {
        folder.createFile(uploadedFiles);
      }
    }

    return ContentService.createTextOutput(
      "Data donasi tersimpan: " + nama + ", " + telepon + ", " + jumlah,
    );
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}







