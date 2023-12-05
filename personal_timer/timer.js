"use strict";

$(document).ready(() => {
  $("#start_timer").click(() => {
    let totalTime = $("#time").val();
    let interval = $("#interval").val();
    let isValid = true;

    // validate the time
    if (totalTime == "") {
      $("#time_error").text("This field is required.");
      isValid = false;
    } else if (isNaN(totalTime)) {
      $("#time_error").text("Time must be a number.");
      isValid = false;
    } else {
      $("#time_error").text("");
    }

    // validate the interval
    if (interval == "") {
      $("#interval_error").text("This field is required.");
      isValid = false;
    } else if (isNaN(interval)) {
      $("#interval_error").text("Interval must be a number.");
      isValid = false;
    } else {
      $("#interval_error").text("");
    }

    if (isValid) {
      totalTime = totalTime * 1000;
      interval = interval * 1000;

      let steps = Math.ceil(totalTime / interval);

      $("#progressbar").progressbar({
        value: 0,
        max: steps,
      });

      let currentStep = 0;
      let timer = setInterval(() => {
        currentStep++;
        $("#progressbar").progressbar("value", currentStep);

        if (currentStep >= steps) {
          clearInterval(timer);
          $("#complete span").text("Time is up!");
        }
      }, interval);
    }
  });
  $("#totalTime").focus();

  
  $("#progressbar").progressbar({
    value: 0
  });

});


