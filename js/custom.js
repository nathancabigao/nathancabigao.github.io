// JavaScript Document
/* Scroll Indicator START:
https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
*/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgressBar").style.width = scrolled + "%";
} 
/* Scroll Indicator END */