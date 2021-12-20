$(document).ready(function() {

    //my story section

    $("#my-story-button").click(function() {
      var isHidden = $("#my-story-drop-down").is(":hidden");
      if (isHidden) {
        $('#my-story-drop-down').slideDown();
      } else {
        $('#my-story-drop-down').slideUp();
      }
    });

    $("#close-my-story-button").click(function() {
        $('#my-story-drop-down').slideUp();
    });


    //streaming section

    $("#streaming-button").click(function() {
        var isHidden = $("#streaming-drop-down").is(":hidden");
        if (isHidden) {
          $('#streaming-drop-down').slideDown();
        } else {
          $('#streaming-drop-down').slideUp();
          }
    });


    //music section

    $("#music-button").click(function() {
    var isHidden = $("#music-drop-down").is(":hidden");
    if (isHidden) {
        $('#music-drop-down').slideDown();
    } else {
        $('#music-drop-down').slideUp();
      }
    });


    //videos section

    $("#videos-button").click(function() {
        var isHidden = $("#videos-drop-down").is(":hidden");
        if (isHidden) {
            $('#videos-drop-down').slideDown();
        } else {
            $('#videos-drop-down').slideUp();
          }
    });

    //photography section

    $("#photography-button").click(function() {
        var isHidden = $("#photography-drop-down").is(":hidden");
        if (isHidden) {
            $('#photography-drop-down').slideDown();
        } else {
            $('#photography-drop-down').slideUp();
          }
    });
  
  
  });