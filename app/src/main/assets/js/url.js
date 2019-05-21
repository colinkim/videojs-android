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
        }, function(){
           setInterval(function(){
             console.log("call ==> interval");
             /*vgsPlayer.on("timeupdate", function(){
              // console.log("hello android");  250ms 마다 불림
               android.showToast('Hello Android!');
             });*/
             AndroidFunction.showToast('Hello Android!');


           },5000);
        });
    }
