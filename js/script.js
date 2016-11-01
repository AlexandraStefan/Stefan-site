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


$('#text').click(function() {
  $('#collapsable-nav').attr('aria-expanded', false);
  $('#collapsable-nav').removeClass('in')
})


//$(document).ready(function() {

//  $(window).scroll(function(){
//    var _scroll = $(window).scrollTop();

//    if ($(this).scrollTop(_scroll) > 600 && $(this).scrollTop(_scroll) < 1200) {
//      $('#up-btn').css({"visibility": visible});
//    }
//    else {
//      if ($(this).scrollTop(_scroll) >= 1200 && $(this).scrollTop(_scroll) < 1500) {
//        $('#up-btn').addClass('cd-fade-out');
//      }
//      else {
//        $('#up-btn').css({"visibility": hidden});
//      }
//    }
//  });

//  //smooth scroll to top
//  $('#up-btn').on('click', function(event){
//    event.preventDefault();
//    $('body,html').animate( {
//      scrollTop: 0,
//      },
//      700);
//  });

//});

//var $toTop = $('#up-btn');
//var _scroll = document.documentElement.scrollTop = document.body.scrollTop;

//$(window).scroll(function () {
//    if (_scroll > 600) {
//        $toTop.css({"visibility": visible});
//    } else if ($toTop.is(':visible')) {
//        $toTop.css({"visibility": hidden});
//    }
//});