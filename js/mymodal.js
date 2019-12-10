

// Get modal
var modal = document.getElementById('myModal');

// Place image into the modal 
var img = document.getElementById('Map');
var modalImg = document.getElementById("Map");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

//Close modal
span.onclick = function() { 
  modal.style.display = "none";
}
