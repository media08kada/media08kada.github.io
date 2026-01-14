$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Midnight Blue",
    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2026", // Event date (required)
        description:
          "Kegiatan pengawasan lingkungan menjelang pergantian Tahun 2025 dan menyambut Tahun Baru 2026",
        type: "Panwil", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event2", // Event's ID (required)
        name: "Zoom Meeting", // Event name (required)
        date: "January/09/2026", // Event date (required)
        description:
          "Zoom Meeting pembahasan Flu vs Superflu, bersama DinKes DKI Jakarta",
        type: "Webinar", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event3", // Event's ID (required)
        name: "Rembuk RW", // Event name (required)
        date: "January/13/2026", // Event date (required)
        description:
          "Rembuk RW Kelurahan Kelapa Dua Tahun 2026, Tempat Aula Kelurahan Kelapa Dua Lantai 3, Acara pedomanan umum musrenbang",
        type: "Meeting", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },

    ],
  });
});


