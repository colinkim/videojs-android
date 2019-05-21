function getDimension() {
  var width = 0, height = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    height = window.innerHeight;
    width = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    height = document.body.clientHeight;
    width = document.body.clientWidth;
  }
  window.alert( 'Width = ' + width + 'Height = ' + height);
   console.log("width = " +Width);
    console.log("height = " +Height);
}