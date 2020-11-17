function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// FIRST

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {


    modal.style.display = "block";
    // document.getElementById('div_iframe').innerHTML = ""
  
  
}

span.onclick = function() {
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Get the modal
var modalbody = document.getElementById("modalbody");

// Get the button that opens the modal
var btnBody = document.getElementById("btnBody");

// Get the <span> element that closes the modal
var spanBody = document.getElementsByClassName("closeBody")[0];

// When the user clicks on the button, open the modal
btnBody.onclick = function() {
  modalbody.style.display = "block";
  console.log(modalbody)
}

// When the user clicks on <span> (x), close the modal
spanBody.onclick = function() {
  modalbody.style.display = "none";
  console.log(modalbody)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbody) {
    modalbody.style.display = "none";
  }
}


// Get the modal
var myModalFooter = document.getElementById("myModalFooter");

// Get the button that opens the modal
var btnFooter = document.getElementById("btnFooter");

// Get the <span> element that closes the modal
var spanFooter = document.getElementsByClassName("closeFooter")[0];

// When the user clicks on the button, open the modal
btnFooter.onclick = function() {
  myModalFooter.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFooter.onclick = function() {
  myModalFooter.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModalFooter) {
    myModalFooter.style.display = "none";
  }
}

