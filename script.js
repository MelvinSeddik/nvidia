/* On récupère les images de la galerie */
const gallery =  document.querySelectorAll("#gallery img");
console.log(gallery);
modal = document.getElementById("modal");
modalImg = document.querySelector("#modal img");

for(image of gallery){
    image.addEventListener("click", function(){
        var src = this.src;
        console.log(src);
        modalImg.src = src;
        modal.style.visibility="visible";
        modalImg.style.transform = "scale(1)";

    })
}

window.onclick = function(event) {
    if (event.target == modal) {
      modalImg.style.transform = "scale(0)";
      modal.style.visibility = "hidden";
    }
  }
    