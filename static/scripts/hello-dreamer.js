$(document).ready(function() {

    var streamingButtonText = $('#streaming-button h3').text();
    var musicButtonText = $('#music-button h3').text();

    //header button home link

    $("#main-header").click(function() {
      var url = "/";
      window.open(url, "_self");
    
    });

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
          $('#streaming-button h3').text("stream on your favorite platform");
        } else {
          $('#streaming-drop-down').slideUp();
          $('#streaming-button h3').text(streamingButtonText);
          }
    });

    $("#close-streaming-button").click(function() {
      $('#streaming-drop-down').slideUp();
      $('#streaming-button h3').text(streamingButtonText);
    });



    //music section

    $("#music-button").click(function() {
    var isHidden = $("#music-drop-down").is(":hidden");
    if (isHidden) {
        $('#music-drop-down').slideDown();
        $('#music-button h3').text("i'm on spotify and all major streaming platforms");
    } else {
        $('#music-drop-down').slideUp();
        $('#music-button h3').text(musicButtonText);
      }
    });

    $("#bandcamp-button").click(function() {
      var url = "http://johnnyrubix.bandcamp.com";
      window.open(url, '_blank');
    
    });

    $("#close-music-button").click(function() {
      $('#music-drop-down').slideUp();
      $('#music-button h3').text(musicButtonText);
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

    $("#close-videos-button").click(function() {
      $('#videos-drop-down').slideUp();
    });

    $("#youtube-button").click(function() {
    var url = "http://youtube.com/c/johnnyrubix";
    window.open(url, '_blank');
  
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

    $("#close-photography-button").click(function() {
      $('#photography-drop-down').slideUp();
    });

    //random stuff section

    $("#random-stuff-button").click(function() {
      var isHidden = $("#random-stuff-drop-down").is(":hidden");
      if (isHidden) {
          $('#random-stuff-drop-down').slideDown();
      } else {
          $('#random-stuff-drop-down').slideUp();
        }
    });

    $("#close-random-stuff-button").click(function() {
    $('#random-stuff-drop-down').slideUp();
    });

  //back to main section

    $("#back-to-main-button").click(function() {
        var url = "/#random-stuff";
        window.open(url, '_self');
      
    });
  
  
});