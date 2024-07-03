$(function () {
  // $("#text").animate({
  //   "fontSize" : "128px"
  //   // 2秒間
  // }, 2000);

  $("#out").fadeOut(3000);

  $("#in").fadeIn(3000)

  $("#btn").on("click", () => {
    // $("#menu").toggle();
    // 隠す
    $("#menu").hide();
  });
});