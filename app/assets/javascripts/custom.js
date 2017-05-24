

// var dispatchUnloadEvent = function() {
//   var event = document.createEvent("Events");
//   var v = document.getElementById("idvideo");
//   alert(v.src);
//   v.pause();
//   v.src = "";
// }

//addEventListener("beforeunload", dispatchUnloadEvent);
///addEventListener("turbolinks:before-render", dispatchUnloadEvent);

$(document).on('turbolinks:load',function(){
    var pathname = window.location.pathname;
    var video = document.getElementById("idvideo");

    if (pathname == "/"){
      video.play();
    }

    $('span.ms-page').html($('.nav-menu a.active').html());

    $('.nav-menu a').click(function(e){

      $('span.ms-page').slideUp('slow'); // you may want this to be 'fast'
      $('span.ms-page').html($('.nav-menu a.active').html());
      $('span.ms-page').slideDown('slow');

    })

    $("#video_overlay .text").click(function(){
      var $this = $(this);
      var $container = $(".video");
      var volume = video.muted;

      if (volume) {
        video.muted = false;
        $("i.volume",$this).html('volume_off');
      }
      else {
        video.muted = true;
        $("i.volume",$this).html('volume_up');
      }
    });

    /** Do it for window load ***/
    // $(window).resize(function(){
    //     // alert($('aside.right').height());
    //     var size = $('aside.ms-col-img figure').height() - 93;
    //     size = size + 'px';
    //     if ($('.container').width() <= 1020 ){
    //               $('.content').css('height', size ) ;
    //               $('.content').css('overflow','scroll');
    //               $('.content').css('padding-right','10px');
    //        }
    //
    // });
  //   $("a[href='#menuExpand']").click(function(e) {
   //
  //      $(".nav-menu").toggleClass("menuOpen");
  //      e.preventDefault();
  //  });

   $('.mobile-toggle').click(function() {
    if ($(".main-header").hasClass('menuOpen')) {
        $(".main-header").removeClass('menuOpen');
    } else {
        $(".main-header").addClass('menuOpen');
    }
});

     // Sticky Header
    $(window).scroll(function() {

        if ($(window).scrollTop() > 100) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});
