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

var btn = document.querySelectorAll("#myBtn")[1];


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {

    modal.style.display = "block";
  
  
}

span.onclick = function() {
  if(modal.style.display == "block"){
    modal.style.display = "none";
  }
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");

var btn = document.querySelectorAll("#myBtn")[0];

document.getEle
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {

    modal.style.display = "block";
  
  
}

span.onclick = function() {
  if(modal.style.display == "block"){
    modal.style.display = "none";
  }
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");

var btn = document.querySelectorAll("#myBtn")[2];

document.getEle
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {

    modal.style.display = "block";
  
  
}

span.onclick = function() {
  if(modal.style.display == "block"){
    modal.style.display = "none";
  }
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");

var btn = document.querySelectorAll("#myBtn")[3];

document.getEle
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {

    modal.style.display = "block";
  
  
}

span.onclick = function() {
  if(modal.style.display == "block"){
    modal.style.display = "none";
  }
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//slider

let time = 11000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max= images.length;

function nexImage(){
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= max){
      currentImageIndex =0;
    }
    images[currentImageIndex].classList.add("selected")
}

function start(){
   setInterval(() => {
      console.log("função rodada")
      nexImage()
   }, time)
}

window.addEventListener("load", start)