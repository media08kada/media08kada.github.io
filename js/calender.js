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





