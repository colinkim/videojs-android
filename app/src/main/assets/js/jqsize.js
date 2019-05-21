function open_chatroom(){
    var width = $( window ).width();
    var height = $( window ).height();
    if(windowWidth < 500) {
    //창 가로 크기가 500 미만일 경우
     console.log("width  = " +width);
     console.log("height = " +height);
    } else {
    //창 가로 크기가 500보다 클 경우
     console.log("width 500 = " +width);
     console.log("height 500 = " +height);
    }
}

