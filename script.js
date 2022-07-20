let items = ["piedra", "papel", "tijera",];
let otros = ["perro", "ametralladora", "pito",];
const para = document.querySelector("#wlt");



let score1 = document.querySelector("#score1")
let score2 = document.querySelector("#score2")

let cs = 0;
let ps = 0;

//puedo hacer un ++ para q el valor se sume +1 xddd justo se me ocurrio, capaz funciona. (si es asi, denada mariano del futuro(?)

 // const computerSelection = getComputerChoice(items); // dentro de los parentesis, selecciono la variable de donde quiero q salgan los valores. Si elijo la variable "otros", los valores seleccionados deberian ser "perro", "ametralladora" y "pito".

function getComputerChoice(listadeop){  

    let itemSel = listadeop [Math.floor(Math.random () * listadeop.length)];
    console.log(itemSel)
    return itemSel
}

// alerta de quien ganó

function getScore(ps, cs){
   if (ps === 5) {
      alert("Ganaste, la pagina se va a reiniciar")
      location.reload()
   } else if (cs === 5){
      alert("perdiste choto")
      location.reload()
   } else {

   }
}


//Funcion q hace que todo funciona a partir del primer click

function getValue(pito){
   const computerSelection = getComputerChoice(items)
   getScore(ps, cs)
   playRound (pito, computerSelection)
   document.getElementById("score1").innerHTML = ps;
   document.getElementById("score2").innerHTML = cs;
}



/* function getPlayerChoice(items1){

    let itemSel = items1 [Math.floor(Math.random () * items1.length)]; // esta variable tiene el mismo nombre de la variable dentro de la funcion anterior. Ya que solo se puede acceder a ellas por sus propias funciones, no provocan conflicto.
    console.log(itemSel)
    return itemSel

}
*/


for (let i = 0; i < 5; i++) {
   // your code here!
let result;

   function playRound(playerSelection, computerSelection){
   if (computerSelection === "piedra" && playerSelection === "papel"){
      para.textContent = "Ganaste!, papel gana a piedra!"
      result = ps++;
   } else if (computerSelection === "tijera" && playerSelection === "papel"){
      para.textContent = "Perdiste, tijera gana a papel"
      result = cs++;
   } else if (computerSelection === "papel" && playerSelection === "piedra"){
      para.textContent = "Perdiste, papel gana a piedra"
      result = cs++;
   } else if (computerSelection === "tijera" && playerSelection === "piedra"){
      para.textContent = "Ganaste!, piedra gana a tijera"
      result = ps++;
   } else if (computerSelection === "piedra" && playerSelection === "tijera") {
      para.textContent = "Perdiste, piedra gana tijera"
      result = cs++;
   } else if (computerSelection === "papel" && playerSelection === "tijera"){
      para.textContent = "Ganaste!, tijera gana a papel!"
      result = ps++;
   } else {
      para.textContent = "Empate!"
   }
   }
}