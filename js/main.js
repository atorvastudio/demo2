$(document).ready(function(){
	$('.my-background-video').bgVideo();
});



var check = document.querySelector('.checkbox-toggle');

var menu = document.querySelector('.menu');
var menuDiv = document.querySelector('.menu > div');
var menuDivDiv = document.querySelector('.menu > div > div');

var hamburgerDiv = document.querySelector('.hamburger > div')

check.onclick = function () {
  menu.classList.toggle('menu-on');
  menuDiv.classList.toggle('menu-div-on');
  menuDivDiv.classList.toggle('menu-div-div-on');
  hamburgerDiv.classList.toggle('hamburgerAnim');
}

var menuLink = document.querySelectorAll('ul > li > a');

for (i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function (e) {
    e.preventDefault();

    menu.classList.toggle('menu-on');
    menuDiv.classList.toggle('menu-div-on');
    menuDivDiv.classList.toggle('menu-div-div-on');
    hamburgerDiv.classList.toggle('hamburgerAnim');
    check.checked = false;

    var selector = this.getAttribute('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top - 100
    }, 0);
  }
}