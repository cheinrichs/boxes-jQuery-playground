$(function(){
  $('#secretBox').css({"background-color": "white"}).append("<h1>Secret Box!</h1>");
  $('#row1').children().removeClass('boxType1').removeClass('boxType2').addClass('boxType3');
  $( "#row4 :nth-child(4)" ).hide();
  $( ".boxType1" ).css({"background-color": "white"});
  $('#row2 :nth-child(1)' ).removeClass('boxType2').removeClass('box');
  $('#row2 :nth-child(2)' ).removeClass('boxType3').removeClass('box');
  $('#container').children().children().not('#secretBox').css({"width":"2px"});
});
