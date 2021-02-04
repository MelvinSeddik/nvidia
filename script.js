/* MODAL */
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

/* FERMER LA MODAL */
window.onclick = function(event) {
    if (event.target == modal) {
      modalImg.style.transform = "scale(0)";
      modal.style.visibility = "hidden";
    }
  }
document.getElementById("close-modal").addEventListener("click", function(){
  modalImg.style.transform = "scale(0)";
  modal.style.visibility = "hidden";
})


  /* OPEN RESPONSIVE MENU */
document.getElementById("menu").addEventListener("click", function(){
  document.querySelector("nav").classList.toggle("responsive");
})
/* CLOSE MENU */
document.getElementById("close").addEventListener("click", function(){
  document.querySelector("nav").classList.toggle("responsive");
})

/* GALLERY SHOW MORE */
document.getElementById("load-more").addEventListener("click", function(){
  document.getElementById("gallery").classList.toggle("load");
})
/* GALLERY SHOW LESS */
document.getElementById("show-less").addEventListener("click", function(){
  document.getElementById("gallery").classList.toggle("load");
  var img_content = document.querySelectorAll("#load-content img");
  img_content.style.opacity="0";
  document.getElementById("load-content").style.visibility="hidden";
  img_content.style.visibility="hidden";
})