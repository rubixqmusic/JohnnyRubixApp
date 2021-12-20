$(document).ready(function() {
    $("#my-story-button").click(function() {
      var isHidden = $("#my-story-drop-down").is(":hidden");
      if (isHidden) {
        $('#my-story-drop-down').slideDown();
        $("#my-story-button").css("background-color", "var(--button-active-color");
      } else {
        $('#my-story-drop-down').slideUp();
        $("#my-story-button").css("background-color", "rgba(0,0,0,0)");
      }
    });

    $("#streaming-button").click(function() {
        var isHidden = $("#streaming-drop-down").is(":hidden");
        if (isHidden) {
          $('#streaming-drop-down').slideDown();
          $("#streaming-button").css("background-color", "var(--button-active-color");
        } else {
          $('#streaming-drop-down').slideUp();
          $("#streaming-button").css("background-color", "rgba(0,0,0,0)");
        }
      });

    $("#music-button").click(function() {
    var isHidden = $("#music-drop-down").is(":hidden");
    if (isHidden) {
        $('#music-drop-down').slideDown();
        $("#music-button").css("background-color", "var(--button-active-color");
    } else {
        $('#music-drop-down').slideUp();
        $("#music-button").css("background-color", "rgba(0,0,0,0)");
    }
    });

    $("#videos-button").click(function() {
        var isHidden = $("#videos-drop-down").is(":hidden");
        if (isHidden) {
            $('#videos-drop-down').slideDown();
            $("#videos-button").css("background-color", "var(--button-active-color");
        } else {
            $('#videos-drop-down').slideUp();
            $("#videos-button").css("background-color", "rgba(0,0,0,0)");
        }
        });
    
    $("#photography-button").click(function() {
        var isHidden = $("#photography-drop-down").is(":hidden");
        if (isHidden) {
            $('#photography-drop-down').slideDown();
            $("#photography-button").css("background-color", "var(--button-active-color");
        } else {
            $('#photography-drop-down').slideUp();
            $("#photography-button").css("background-color", "rgba(0,0,0,0)");
        }
        });
  
  
  });