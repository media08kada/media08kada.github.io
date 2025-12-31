// Table Donasi
const data = [
  [1, "24/12/2025", "Hamba Alloh", "Rp100.000"],
  [2, "24/12/2025", "Hamba Alloh", "Rp100.000"],
  [3, "26/12/2025", "Uus", "Rp250.000"],
  [4, "26/12/2025", "Hamba Alloh", "Rp50.000"],
  [5, "26/12/2025", "Uus", "Rp50.000"],
  [6, "26/12/2025", "Hamba Alloh", "Rp2.000.000"],
  [7, "27/12/2025", "Hamba Alloh", "Rp500.000"],
  [8, "28/12/2025", "Hamba Alloh", "Rp200.000"],
  [9, "28/12/2025", "Hamba Alloh", "Rp200.000"],
  [10, "31/12/2025", "Hamba Alloh", "Rp250.000"],
];

const tbody = document.querySelector("#donationTable tbody");
let total = 0;

data.forEach((row) => {
  const tr = document.createElement("tr");
  row.forEach((cell, index) => {
    const td = document.createElement("td");

    if (index === 3) {
      // ambil angka dari string
      const num = parseInt(cell.replace("Rp", "").replace(/\./g, ""));
      total += num;
      // format ulang dengan Rp + titik ribuan
      td.textContent = "Rp" + num.toLocaleString("id-ID");
      td.classList.add("price");
    } else {
      td.textContent = cell;
    }

    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

// tampilkan total
document.querySelector("#totalPrice").textContent =
  "Rp" + total.toLocaleString("id-ID");



