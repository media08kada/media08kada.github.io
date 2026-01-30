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
    // Tentukan folder tujuan di Google Drive
    var folder = DriveApp.getFolderById("PASTE_FOLDER_ID_DI_SINI");

    // Ambil file dari request
    var fileBlob = e.parameter.bukti;

    // Buat file di folder
    var file = folder.createFile(fileBlob);

    return ContentService.createTextOutput("Upload sukses: " + file.getName());
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}








