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

  function isWide() {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  function initPanelState() {
    if (isWide()) {
      $eventsPanel.hide(); // panel tertutup default di layar besar
      $prevBtn.prop("disabled", true);
      $nextBtn.prop("disabled", true);
      $spanBars.prop("disabled", true);
    } else {
      $eventsPanel.show(); // panel terbuka default di layar kecil
      $prevBtn.prop("disabled", false);
      $nextBtn.prop("disabled", false);
      $spanBars.prop("disabled", false);
    }
  }

  // Arrow hanya berfungsi di layar kecil
  $prevBtn.on("click", function () {
    if (!isWide()) $eventsPanel.slideToggle();
  });
  $nextBtn.on("click", function () {
    if (!isWide()) $eventsPanel.slideToggle();
  });

  // Bars hanya berfungsi di layar kecil
  $spanBars.on("click", function () {
    if (!isWide()) $eventsPanel.slideToggle();
  });

  // Jalankan saat load dan resize
  initPanelState();
  $(window).on("resize", initPanelState);
});
