$(document).ready(function() {
  $('.bar span').hide();
  $('#bar-five').animate({
     width: '75%'}, 1000);
  $('#bar-four').animate({
     width: '35%'}, 1000);
  $('#bar-three').animate({
     width: '20%'}, 1000);
  $('#bar-two').animate({
     width: '15%'}, 1000);
  $('#bar-one').animate({
     width: '30%'}, 1000);
  
  setTimeout(function() {
    $('.bar span').fadeIn('slow');
  }, 1000);
  
});