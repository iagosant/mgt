

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
    $(window).resize(function(){
        // alert($('aside.right').height());
        var size = $('aside.right').height() - 93;
        size = size + 'px';
        if ($('.container').width() <= 1020 ){
                  $('.content').css('height', size ) ;
                  $('.content').css('overflow','scroll');
                  $('.content').css('padding-left','10px');

           }

    });

    $("#menutoggle").click(function() {
					$('#primary_nav_wrap').toggleClass('displaynone');

					});
});
