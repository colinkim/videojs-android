var interval = setInterval(function(){

    //var vgsPlayer = videojs('main-video');
    console.log("time interval = " );
    if(videojs.getPlayer() != null){
       android.showToast('Hello Android!');
    }

},5000);
