var mine = document.getElementById('mine');
var fotos
mine.addEventListener("click", function(){ 
fotos = (Math.round(Math.random ()*10))+1;
console.log (fotos);
mine.setAttribute("src", "img/"+fotos+".jpg");});