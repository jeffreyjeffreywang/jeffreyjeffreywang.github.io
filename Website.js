//When the user scrolls down 20px from the top of
//the document, show the button
//When the user scrolls the page, execute scrollFunction
window.onscroll = function() {scrollFunction()};
window.onscroll = function() {myFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
}

function myFunction() {
  var winScroll = document.body.scrollTop ||
  document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
