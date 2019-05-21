    var vgsPlayer, poster, url;

    function callFromActivity(msg){

        console.log("callFromActivity");

        url = msg;
        console.log("callFromActivity msg = " +msg);

        vgsPlayer = videojs('main-video', {
         // techOrder: ['youtube'],
          autoplay: false,
          sources: [{
            type: "video/mp4",
            src: url
          }]
        });
    }
