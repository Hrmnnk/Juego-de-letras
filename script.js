let intentos = 1;
let palabra = "APPLE";
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const valor = input.value;
button.addEventListener("click", intentar);
function intentar() {
  const INTENTO = leerIntento();
  console.log(INTENTO);
}
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}
for (let i in palabra) {
  console.log(palabra[i]);
}
function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    alert("GANASTE!");
  }
  for (let i in palabra) {
    if (INTENTO[i] === palabra[i]) alert("verde");
    else if(palabra.includes(intentos[i])){
        alert(intentos[i]+ "amarillo")
    }
      else{
        alert(intentos[i]+ "gris" )
      }
      intentos--
      if (intentos==0){
        terminae("FALLASTE >:D")
      } 
    
  }
}
