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


$(document).ready(function() {
  $('#text').mousemove(function() {
    $('#up-btn').fadeIn();
  });
<!--  var timer = setTimeout(notMouseMove, 4000);
  clearTimeout(timer);
  timer = setTimeout(notMouseMove, 4000);
  });

  function notMouseMove() {
    $('#up-btn').fadeOut();
  }; -->

$('#up-btn').click(function () {
  $("html, body").animate({
    scrollTop: 0
    }, 600);
    return false;
});


var tvPause = false;
var tvStop = false;
var tvItems = $('.jumbotron .jumbo-item');
                       //    var tvDots = $(".dots a")

$(document).ready(function () {

  try {

    var tvRotator = {
      initialFadeIn: 1000,
      itemInterval: 5000,
      fadeTime: 1000,
      numberOfItems: tvItems.length,

      currentItem: 0,
      nextItem: 1,

                         //     currentDot: 0,
                          //    nextDot: 1,

      iteration: 0,
      iterationsMax: tvItems.length-1,

      init: function() {

        tvItems.eq(this.currentItem).fadeIn(this.initialFadeIn);

        tvPause = true;
        setTimeout(function(){tvPause = false}, 15000);

        setInterval(function(){
          if (!tvPause && !tvStop) {
            tvRotator.showHide();
            if (tvRotator.iteration++ >= tvRotator.iterationsMax) tvStop = true;
          }
        }, this.itemInterval);
      },

      showHide: function() {
         alert("this.currentItem =" + this.currentItem);
        if (tvStop && this.nextItem == this.currentItem) return;

        tvItems.eq(this.currentItem).fadeOut(this.fadeTime);

        if (!tvStop) {
          if(this.currentItem == this.numberOfItems -1){
            this.nextItem = 0;
          } else {
            this.nextItem = this.currentItem+1;
          }
        }

        tvItems.eq(this.nextItem).fadeIn(this.fadeTime);
        this.currentItem = this.nextItem;
        alert("this.currentItem =" + this.currentItem);
      }

    };

    tvRotator.init();

    $('.container .jumbotron').mouseover(function(){tvPause = true});
    $('.container .jumbotron').mouseout(function(){tvPause = false});

    $('.controls a').click(function(e){
      alert("this.currentItem =" + this.currentItem);
      tvStop = true;
      if ($(this).hasClass('prev')) {
        tvRotator.nextItem = (tvRotator.currentItem <= 0 ? tvRotator.numberOfItems-1 : tvRotator.currentItem-1);
      } else if ($(this).hasClass('next')) {
        tvRotator.nextItem = (tvRotator.currentItem >= tvRotator.numberOfItems-1 ? 0 : tvRotator.currentItem+1);
      }
      tvRotator.showHide();
      e.preventDefault();
    });

    $('.controls .dots a').click(function(e){
      tvStop = true;
      tvRotator.nextItem = parseInt($(this).attr('class'), 10);
      tvRotator.showHide();
      e.preventDefault();
    });

  } catch(e) {}

});
