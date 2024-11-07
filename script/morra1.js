//console.log("prova");

//definisco gli elementi principali
const inizia = document.getElementById("inizia");
const you = document.getElementById("you");
const cpu = document.getElementById("cpu");
const punteggioYou = document.getElementById("punteggioYou");
const punteggioCpu = document.getElementById("punteggioCpu");
const risultato = document.getElementById("risultato");
const scelta = document.getElementById("scelta");

const foglia = document.getElementById("foglia");
const sasso = document.getElementById("sasso");
const forbice = document.getElementById("forbice");

let puntiYou = 0, puntiCpu = 0;
let numRandom;


//click di scelta
inizia.onclick = function () {
  //console.log("a");
  scelta.style.display = "block";
  you.style = "";
  cpu.style = "";
  risultato.style.display = "none";
  numRandom = Math.floor(Math.random() * 3);
}

foglia.onclick = function () {
  //console.log("foglia");
  you.style.backgroundImage = "url(immagini/foglia.png)";
  scelta.style.display = "none";

  console.log(numRandom);
  /*legenda
  0->foglia
  1-> sasso
  2->forbice
  */

  switch (numRandom) {
    case 0:
      cpu.style.backgroundImage = "url(immagini/foglia.png)";
      //partita patta
      risultato.innerHTML = "<span class='patta'>Partita patta</span>";
      break;
    case 1:
      cpu.style.backgroundImage = "url(immagini/sasso.png)";
      risultato.innerHTML = "<span class='vinta'>Partita vinta</span>";
      puntiYou++;
      break;
    case 2:
      cpu.style.backgroundImage = "url(immagini/forbice.png)";
      risultato.innerHTML = "<span class='persa'>Partita persa</span>";
      puntiCpu++;
      break;
  }
  risultato.style.display = "block";
 punteggioYou.innerHTML=puntiYou;
 punteggioCpu.innerHTML=puntiCpu;
}
