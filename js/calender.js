$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Default",
    calendarEvents: [
      {
        id: "event1",
        name: "New Year",
        date: "January/1/2026",
        type: "Panwil",
        everyYear: true,
      },
      {
        id: "event2",
        name: "Zoom Meeting",
        date: "January/09/2026",
        type: "Webinar",
        everyYear: true,
      },
      {
        id: "event3",
        name: "Rembuk RW",
        date: "January/13/2026",
        type: "Meeting",
        everyYear: true,
      },
    ],
  });

  const $prevBtn = $("#calendar .calendar-navigation .calendar-prev > button");
  const $nextBtn = $("#calendar .calendar-navigation .calendar-next > button");
  const $eventsPanel = $("#calendar .calendar-events");
  const $spanBars = $("#calendar .span-bars");

  $prevBtn.html('<i class="fa fa-chevron-left"></i>');
  $nextBtn.html('<i class="fa fa-chevron-right"></i>');

  // Panel default tertutup
  $eventsPanel.hide();

  // Arrow & bars berfungsi di semua ukuran layar
  $prevBtn.on("click", function () {
    $eventsPanel.slideToggle();
  });
  $nextBtn.on("click", function () {
    $eventsPanel.slideToggle();
  });
  $spanBars.on("click", function () {
    $eventsPanel.slideToggle();
  });
});
