$(document).ready(function() {
  var positioninitial = 60;

    $(window).scroll(function() {
      var _scroll = $(window).scrollTop();

      if(_scroll >= 0 && _scroll < 60) {
        var topBarPosition = (60 - _scroll);
        $('#collapsable-nav').css({"top":topBarPosition});
      }
      else {
        var topBarPostion = $("#collapsable-nav").offset().top;
        $('#collapsable-nav').css({"top":0});
      }

    });
});