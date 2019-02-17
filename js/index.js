// Scroll indicator
window.onscroll = function() {
  var height = window.innerHeight;
  var about = document.getElementById("main-about").getBoundingClientRect().top;
  var portfolio = document.getElementById("main-portfolio").getBoundingClientRect().top;
  var contact = document.getElementById("main-contact").getBoundingClientRect().top;
  var aboutHeight = document.getElementById("main-about").clientHeight;
  var portfolioHeight = document.getElementById("main-portfolio").clientHeight;
  var contactHeight = document.getElementById("main-contact").clientHeight;
  
  if (document.getElementById("intro-text").getBoundingClientRect().top < 300) {
    document.getElementById("header").style.padding = "0px";
    document.getElementById("name").style.fontSize = "18px";
  } else {
    document.getElementById("header").style.padding = "5px";
    document.getElementById("name").style.fontSize = "22px";
  }

  if (about <= 0.5*height && about > -0.8*aboutHeight) {
    document.getElementById("nav-about").style.backgroundColor = "#eee";
    document.getElementById("nav-about").style.color = "black";
    document.getElementById("nav-about").style.color = "white";
    document.getElementById("nav-portfolio").style.backgroundColor = "inherit";
    document.getElementById("nav-portfolio").style.color = "white";
    document.getElementById("nav-contact").style.backgroundColor = "inherit";
    document.getElementById("nav-contact").style.color = "white";
  } else if (portfolio <= height && portfolio > -portfolioHeight) {
    document.getElementById("nav-about").style.backgroundColor = "inherit";
    document.getElementById("nav-about").style.color = "white";    
    document.getElementById("nav-portfolio").style.backgroundColor = "#eee";
    document.getElementById("nav-portfolio").style.color = "black";
  } else if (contact <= height && contact > 0){
    document.getElementById("nav-about").style.backgroundColor = "inherit";
    document.getElementById("nav-about").style.color = "white";
    document.getElementById("nav-portfolio").style.backgroundColor = "inherit";
    document.getElementById("nav-portfolio").style.color = "white";
    document.getElementById("nav-contact").style.backgroundColor = "#eee";
    document.getElementById("nav-contact").style.color = "black";
  } else {
    document.getElementById("nav-about").style.backgroundColor = "inherit";
    document.getElementById("nav-about").style.color = "white";
    document.getElementById("nav-portfolio").style.backgroundColor = "inherit";
    document.getElementById("nav-portfolio").style.color = "white";
    document.getElementById("nav-contact").style.backgroundColor = "inherit";
    document.getElementById("nav-contact").style.color = "white";
  }
}
// Slideshow
var index = 0;
showSlide(index);

function slide(n) {
  index += n;
  showSlide(index);
}

function showSlide(n) {
  var slides_arr = document.getElementsByClassName("slides");
  if (n >= slides_arr.length) {
    index = 0;  
  }  
  if (n < 0) {
    index = slides_arr.length - 1;
  }
  for (var i=0; i<slides_arr.length; i++) {
    slides_arr[i].style.display = "none";
  }
  slides_arr[index].style.display = "block";
}


//Modal
var modal = document.getElementById("modal");
function btnClick() {
  modal.style.display = "block";
}

function closeClick() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
   modal.style.display = "none";
  }
}