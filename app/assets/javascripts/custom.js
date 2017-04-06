$(document).on('turbolinks:beforeunload',function(){
  var pathname = window.location.pathname;
    if (pathname != '/'){
       //alert('entro');
    }
   return 'Are you sure you want to leave?';
 });


$(document).on('turbolinks:load',function(){

    // $( ".video" ).hover(function() {
    //     var volume = $("video").prop('muted');
    //     // alert(volume) //EL ALERT SI FUNCIONA
    //    if (volume){ //AQUÍ ES DONDE COMIENZAN LOS PROBLEMAS
    //     $( "#video_overlay .text" ).append( '<i class="volume-on material-icons" font-size="50px">volume_on</i>');
    //   }else {
    //     $( "#video_overlay .text" ).append( '<i class="volume-on material-icons" font-size="50px">volume_off</i>');
    //   }}
    //     // , function(){
    //     //   $( "#video_overlay" ).empty();
    //     // }
    // // }
    // );
    var video = document.getElementById("idvideo");

     function stopVideo(){
          video.pause();
          video.currentTime = 0;
     }



    $("#video_overlay .text").click(function(){
      var $this = $(this);
      var $container = $(".video");
      var volume = video.muted; // alert("The paragraph was clicked.");

      if (volume) {
        video.muted = false;
        $("i.volume",$this).html('volume_off');
      }
      else {
        video.muted = true;
        $("i.volume",$this).html('volume_up');
      };
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
});
