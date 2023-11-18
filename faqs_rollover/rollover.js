$(document).ready(() => {
  // jQuery code for mouse events
  $("#faq_rollovers li").on("mouseenter", function () {
    $(this).find(".hidden").show();
  });

  $("#faq_rollovers li").on("mouseleave", function () {
    $(this).find(".hidden").hide();
  });
}); // end ready
