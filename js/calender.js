$(document).ready(function () {
  // Inisialisasi kalender
  $("#calendar").evoCalendar({
    theme: "Default",
    calendarEvents: [
      {
        id: "event1",
        name: "New Year",
        date: "January/1/2026",
        description:
          "Kegiatan pengawasan lingkungan menjelang pergantian Tahun 2025 dan menyambut Tahun Baru 2026",
        type: "Panwil",
        everyYear: true,
      },
      {
        id: "event2",
        name: "Zoom Meeting",
        date: "January/09/2026",
        description:
          "Zoom Meeting pembahasan Flu vs Superflu, bersama DinKes DKI Jakarta",
        type: "Webinar",
        everyYear: true,
      },
      {
        id: "event3",
        name: "Rembuk RW",
        date: "January/13/2026",
        description:
          "Rembuk RW Kelurahan Kelapa Dua Tahun 2026, Tempat Aula Kelurahan Kelapa Dua Lantai 3, Acara pedomanan umum musrenbang",
        type: "Meeting",
        everyYear: true,
      },
    ],
  });

  // Paksa tampilan mobile style di semua ukuran layar
  $("#calendar").addClass("force-mobile");

  // Ganti ikon navigasi jadi chevron
  const $prevBtn = $("#calendar .calendar-navigation .calendar-prev > button");
  const $nextBtn = $("#calendar .calendar-navigation .calendar-next > button");
  const $eventsPanel = $("#calendar .calendar-events");

  $prevBtn.html('<i class="fa fa-chevron-left"></i>');
  $nextBtn.html('<i class="fa fa-chevron-right"></i>');

  // --- Tambahan logika ---
  // Saat pertama kali load di layar besar, sembunyikan panel event
  function initPanelState() {
    const isWide = window.matchMedia("(min-width: 768px)").matches;
    if (isWide) {
      $eventsPanel.hide(); // panel tertutup
    } else {
      $eventsPanel.show(); // di layar kecil tetap terbuka
    }
  }

  // Toggle panel saat arrow diklik
  $prevBtn.on("click", function () {
    const isWide = window.matchMedia("(min-width: 768px)").matches;
    if (isWide) {
      $eventsPanel.slideToggle(); // buka/tutup dengan animasi
    }
  });

  $nextBtn.on("click", function () {
    const isWide = window.matchMedia("(min-width: 768px)").matches;
    if (isWide) {
      $eventsPanel.slideToggle();
    }
  });

  // Jalankan saat load dan resize
  initPanelState();
  $(window).on("resize", initPanelState);
});

// Target span bars (misalnya tombol menu)
const $spanBars = $("#calendar .span-bars"); // sesuaikan selector sesuai HTML kamu

// Toggle panel saat span bars diklik
$spanBars.on("click", function () {
  const isWide = window.matchMedia("(min-width: 768px)").matches;
  if (!isWide) {                // hanya aktif di layar kecil
    $eventsPanel.slideToggle();
  }
});

// Target icon-button (sesuaikan selector sesuai HTML kamu)
const $iconButton = $("#calendar .icon-button");

// Toggle panel saat icon-button diklik
$iconButton.on("click", function () {
  const isWide = window.matchMedia("(min-width: 768px)").matches;
  if (!isWide) {                // hanya aktif di layar kecil
    $eventsPanel.slideToggle();
  }
});
