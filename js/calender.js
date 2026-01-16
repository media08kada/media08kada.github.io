// Inisialisasi kalender
$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Midnight Blue",
    calendarEvents: [
      {
        id: "event1",
        name: "New Year",
        date: "January/1/2026",
        description: "Kegiatan pengawasan lingkungan...",
        type: "Panwil",
        everyYear: true,
      },
      {
        id: "event2",
        name: "Zoom Meeting",
        date: "January/09/2026",
        description: "Zoom Meeting pembahasan Flu vs Superflu...",
        type: "Webinar",
        everyYear: true,
      },
      {
        id: "event3",
        name: "Rembuk RW",
        date: "January/13/2026",
        description: "Rembuk RW Kelapa Dua...",
        type: "Meeting",
        everyYear: true,
      },
    ],
  });
});

// Hide sidebar & event list
document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  if (calendar) {
    calendar.classList.add("sidebar-hide", "event-hide");
  }
});

// Atur arrow di layar >= 768px
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768) {
    const arrows = document.querySelectorAll(
      "#calendar .calendar-year .icon-button"
    );
    arrows.forEach((btn) => {
      if (btn.classList.contains("hidden") || btn.disabled) {
        // Arrow tertutup → nonaktifkan total
        btn.disabled = true;
        btn.style.pointerEvents = "none";
        btn.style.opacity = "0.3";
        btn.style.cursor = "default";
      } else {
        // Arrow terbuka → aktif penuh
        btn.disabled = false;
        btn.style.pointerEvents = "auto";
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768) {
    const toggleBtn = document.querySelector(
      "#calendar .event-list-toggle"
    );
    if (toggleBtn) {
      // Nonaktifkan tombol eventListToggle
      toggleBtn.disabled = true;
      toggleBtn.style.pointerEvents = "none";
      toggleBtn.style.opacity = "0.3";
      toggleBtn.style.cursor = "default";
      toggleBtn.classList.add("event-toggle-disabled");
    }
  }
});


