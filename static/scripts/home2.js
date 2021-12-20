$(document).ready(function() {

    var menuList =[ {"button":"#my-story-button", "menu":"#my-story-drop-down", "closeButton":"#close-my-story-button"},
                    {"button":"#streaming-button", "menu":"#streaming-drop-down", "closeButton":"#close-streaming-button"},
                    {"button":"#music-button", "menu":"#music-drop-down", "closeButton":"#close-music-button"},
                    {"button":"#videos-button", "menu":"#videos-drop-down", "closeButton":"#close-videos-button"},
                    {"button":"#photography-button", "menu":"#photography-drop-down", "closeButton":"#close-photography-button"}
                  ];



    $("#my-story-button, #streaming-button, #music-button, #videos-button, #photography-button").click(function() {
        var isHidden = $(menu).is(":hidden");
        if (isHidden) {
            $(menu).slideDown();
            $(button).css("background-color", "var(--button-active-color");
        } else {
            $(menu).slideUp();
            $(button).css("background-color", "rgba(0,0,0,0)");
        }
        });

        $(closeButton).click(function() {
        $(menu).slideUp();
        $(button).css("background-color", "rgba(0,0,0,0)");
    });
    


  
});