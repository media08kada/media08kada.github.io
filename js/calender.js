$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Midnight Blue",
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
});




