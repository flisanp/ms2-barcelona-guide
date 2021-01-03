/*line below tells JSHint that the code uses ECMAScript 6 specific syntax:https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const*/
/*jshint esversion: 6 */

//scroll back to top button
/* code taken from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
 //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}