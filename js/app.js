$(document).ready(function () {
  // Cambiar elementos gato
  $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7").click(function () {
    $(".custom:visible").not("." + $(this).attr("target")).fadeToggle(300);
    $("." + $(this).attr("target")).fadeToggle(300);
  });

  // Cambiar imagenes de fondo
  $("#btn-bg1").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/fondo.jpg')");
  });

  $("#btn-bg2").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/carpa.png')");
  });

  $("#btn-bg3").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/beach2.jpg')");
  });

  $("#btn-bg4").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/flower-bg.jpg')");
  });

  $("#btn-bg5").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/party.jpg')");
  });

  $("#btn-bg6").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/star-wars-background.png')");
  });

  $("#btn-bg7").click(function () {
    $('.container').css("backgroundImage", "url('assets/images/fondomundial.jpg')");
  });

  // Resetear juego
  $( '.reset-js' ).click(function(){
    $('.container').css("backgroundImage", "url('assets/images/fondo.png')");
    $('.custom').css("display", "none");
  });
});

