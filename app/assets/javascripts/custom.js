$(document).ready(function() {

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


    $("#video_overlay .text").click(function(){
      var $this = $(this);
      var $container = $(".video");
      var volume = $("video",$container).prop('muted'); // alert("The paragraph was clicked.");
      // alert(volume)
      if (volume) {
        $("video").prop('muted', false);
        $("i.volume",$this).html('volume_off');
      }
      else {
        $("video").prop('muted', true);
        $("i.volume",$this).html('volume_up');
      };
    });

});
