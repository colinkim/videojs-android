<script language="javascript">
    var url;

    function callFromActivity(msg){

        //console.log("callFromActivity");

        url = msg;
        var videoEl = document.createElement("video");
        videoEl.className= "video-js vjs-default-skin";
        videoEl.width = "360";
        videoEl.height = "595";
        videoEl.setAttribute("id", "main-video");
        document.getElementById("vid").appendChild(videoEl);

        _V_("main-video").ready(function(){

            var myPlayer = this;
            myPlayer.src({ type: "video/mp4", src: url});
            var mainTrack = myPlayer.values.src;
            var startedOnce = false;
            var endedOnce = false;
            var firstQuartileOnce = false;
            var midpointOnce = false;
            var thirdQuartileOnce = false;





            var callAndroid = function() {
                console.log("callFromActivity ==> loading video");
                AndroidFunction.openAndroidDialog();
            }

            myPlayer.addEvent("ended", callAndroid);
        });

    }
 </script>