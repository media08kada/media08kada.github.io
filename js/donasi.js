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
   // Ganti dengan ID folder Google Drive Anda
   var folder = DriveApp.getFolderById("1vkYT8BpZWZgcV5zJ-Ylnck17lDoN4PeW");

   // Ganti dengan ID Spreadsheet Anda
   var sheet = SpreadsheetApp.openById(
     "1eOMn7G3IGjajGyNQ4WVA9T2xfl_PRyTZ3W_Jla0LLjE").getSheetByName("Sheet1");

   var nama = e.parameter.nama;
   var telepon = e.parameter.telepon;
   var jumlah = e.parameter.jumlah;

   var urls = [];

   // Tangani upload file bukti
   if (e.files && e.files.bukti) {
     var buktiFiles = e.files.bukti;

     if (!Array.isArray(buktiFiles)) {
       buktiFiles = [buktiFiles];
     }

     for (var i = 0; i < buktiFiles.length; i++) {
       var f = folder.createFile(buktiFiles[i]);
       urls.push(f.getUrl());
     }
   }

   // Simpan data ke Google Sheet
   sheet.appendRow([nama, telepon, jumlah, urls.join(", ")]);

   // Return JSON response
   return ContentService.createTextOutput(
     JSON.stringify({ status: "Success" }),
   ).setMimeType(ContentService.MimeType.JSON);
 }






