let lista = ["ARBOL", "MESA", "APLAUDIR", "MUJER"];
let intentos = 6;
let palabra = lista[Math.floor(Math.random() * lista.length)];
const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es";
fetch(API)
  .then((response) => response.json()) // => es una funcion anónima
  .then((response) => {
    console.log(response);
    palabra = response[0].toUpperCase();
    console.log(palabra);
  })
  .catch((err) => (palabra = lista[Math.floor(Math.ramdom() * lista.length)]));

const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const valor = input.value;
button.addEventListener("click", intentar);
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}
// for (let i in palabra) {
//   console.log(palabra[i]);
// }
function intentar() {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  if (INTENTO === palabra) {
    terminar("GANASTE!");
  }
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[i] === palabra[i]) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(INTENTO[i])) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    } else {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "gray";
    }
    ROW.appendChild(SPAN);
  }
  intentos--;
  if (intentos == 0) {
    terminar("FALLASTE >:D");
  }

  function terminar(mensaje) {
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
  }
  GRID.appendChild(ROW);
}
