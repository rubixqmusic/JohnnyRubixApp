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


    $("#spotify-button").click(function() {
      var url = "https://open.spotify.com/artist/7lFjSAJ24FU5Yvi2CUtsDf?si=Fjdyo9EoSpa2nisT4uSwoQ";
      window.open(url, '_blank');
    
      });

    $("#youtube-button").click(function() {
    var url = "http://youtube.com/c/johnnyrubix";
    window.open(url, '_blank');
  
    });

    $("#tiktok-button").click(function() {
      var url = "https://www.tiktok.com/@rubixqmusic";
      window.open(url, '_blank');
    
      });

    $("#instagram-button").click(function() {
      var url = "https://www.instagram.com/rubixqmusic";
      window.open(url, '_blank');
    
      });

    $("#threads-button").click(function() {
      var url = "https://www.threads.net/@rubixqmusic";
      window.open(url, '_blank');
    
      });

    $("#facebook-button").click(function() {
      var url = "https://www.facebook.com/rubixqmusic";
      window.open(url, '_blank');
    
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

    $("#hello-dreamer-button").click(function() {
      var url = "/hello-dreamer";
      window.open(url, '_self');
    
    });

    $("#close-random-stuff-button").click(function() {
    $('#random-stuff-drop-down').slideUp();
    });
  
  
});