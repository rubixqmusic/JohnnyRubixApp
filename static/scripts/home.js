$(document).ready(function() {
    $("#my-story-button").click(function() {
      var isHidden = $("#my-story-drop-down").is(":hidden");
      if (isHidden) {
        $('#my-story-drop-down').slideDown();
      } else {
        $('#my-story-drop-down').slideUp();
      }
    });

    $("#streaming-button").click(function() {
        var isHidden = $("#streaming-drop-down").is(":hidden");
        if (isHidden) {
          $('#streaming-drop-down').slideDown();
        } else {
          $('#streaming-drop-down').slideUp();
        }
      });

    $("#music-button").click(function() {
    var isHidden = $("#music-drop-down").is(":hidden");
    if (isHidden) {
        $('#music-drop-down').slideDown();
    } else {
        $('#music-drop-down').slideUp();
    }
    });

    $("#videos-button").click(function() {
        var isHidden = $("#videos-drop-down").is(":hidden");
        if (isHidden) {
            $('#videos-drop-down').slideDown();
        } else {
            $('#videos-drop-down').slideUp();
        }
        });
    
    $("#photography-button").click(function() {
        var isHidden = $("#photography-drop-down").is(":hidden");
        if (isHidden) {
            $('#photography-drop-down').slideDown();
        } else {
            $('#photography-drop-down').slideUp();
        }
        });
  
  
  });