$(function () {
  // Slide element up to hide (over 2s)
  $(".blue-box").slideUp(2000);

  $(".red-box").hide(1000);
  $(".red-box").slideDown(1000);
  $("p").slideUp(1000);

  // Slide back down to show element
  $(".blue-box").slideDown(2000);

  // Toggle sliding up/down depending on current state
  $(".blue-box").slideToggle(1000);
  $(".blue-box").slideToggle(1000);
});
