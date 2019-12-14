// array maken waar de un codes init
fruiten= ["&#127826;","&#127827;","	&#127815;","&#127817;", "&#127820;", "&#127822;", "&#127821;", "&#127818;", "&#127825;"];
// virabela maken
// ranndem
let fruitEen = document.getElementById('fruit1');
let fruitTwee = document.getElementById('fruit2');
let fruitDrie = document.getElementById('fruit3');
let knop = document.getElementById('klikme');
let win = document.getElementById('winner');

let num1 = Math.floor(Math.random()*9);
let num2 = Math.floor(Math.random()*9);
let num3 = Math.floor(Math.random()*9);
// als 3 fruiten zijn het zelfde zegt "Topper"
if (num1 == num2 == num3){
win = "Topper";
document.getElementById("winner").innerHTML = win;
}
fruitEen.innerHTML = fruiten[num1];
fruitTwee.innerHTML = fruiten[num2];
fruitDrie.innerHTML = fruiten[num3];
// document.getElementById("winner").innerHTML = win;

knop.addEventListener("click", function() {
  let num1 = Math.floor(Math.random()*9);
  let num2 = Math.floor(Math.random()*9);
  let num3 = Math.floor(Math.random()*9);
  if (num1 == num2 == num3){
  win = "Toper";
  document.getElementById("winner").innerHTML = win;
}
  fruitEen.innerHTML = fruiten[num1];
  fruitTwee.innerHTML = fruiten[num2];
  fruitDrie.innerHTML = fruiten[num3];

});
