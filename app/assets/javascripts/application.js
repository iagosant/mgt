// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {

  $("#video_overlay .text").click(function(){
      var $this = $(this),
      var $container = $(".video"),
      var volume = $("video",$container).prop('muted'), // alert("The paragraph was clicked."),
      // alert(volume)
      if (volume) {
        $("video").prop('muted', false),
        $("i.volume",$this).html('volume_off'),
      }
      else {
        $("video").prop('muted', true),
        $("i.volume",$this).html('volume_up'),
      },
    }),

// $( "video" ).hover(function() {
//     var volume = $("video").prop('muted'),
//     alert(volume)
//     if (volume){
//     $( "#video_overlay" ).append( '<i class="volume-on material-icons" width="585px" height="439px" display="block" font-size="50px">volume_off</i>'),
//   }, function(){
//     $( "#video_overlay" ).empty(),
//   }
// }
// ),


$("video").click(function(){
var volume = $("video").prop('muted'), // alert("The paragraph was clicked."),
alert(volume)
if (volume) {
$("video").prop('muted', false),
}
else {
  $("video").prop('muted', true),
},
}),

}),
