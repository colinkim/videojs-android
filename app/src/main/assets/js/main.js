(function() {
    "use strict";

    console.log("main... loading video");
    var player = videojs("example_video_1", { /* options */ }, function () {

        console.log("loading video");

        this.play(); // autoplay

        this.on("ended", function () {
            jsBridge.onVideoEnd();
        });

    });

})();