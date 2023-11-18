$(function () {
  // Preload images and event handlers
  $("ul#image_list li a").each(function () {
    const imageURL = $(this).attr("href");
    const caption = $(this).attr("title");

    const preloadImage = new Image();
    preloadImage.src = imageURL;

    $(this).on("click", function (evt) {
      evt.preventDefault();

      // Slide out current image and caption
      $("#image").slideUp(2000);
      $("#caption").slideUp(2000, function () {
        // Set new image and caption
        $("#image").attr("src", imageURL).slideDown(2000);
        $("#caption").text(caption).slideDown(2000);
      });
    });
  });

  // Set focus to first link
  $("ul#image_list li:first-child a").focus();
});
