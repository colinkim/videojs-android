(function() {
    "use strict";

    var myPlayer = videojs("example_video_1").ready(function(){

        console.log("loading video");

        var myPlayer = this;

        // EXAMPLE: Start playing the video.
        myPlayer.play();

     });

})();