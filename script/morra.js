let you=document.getElementById("you");
let cpu=document.getElementById("cpu");
let scelta=document.getElementById("scelta");
let random;
let foglia=document.getElementById("foglia");
let forbice=document.getElementById("forbice");
let sasso=document.getElementById("sasso");
let risultato=document.getElementById("risultato");
let punteggioC=document.getElementById("punteggioCpu");
let punteggioY=document.getElementById("punteggioYou");
let puntiY=0, puntiC=0;


document.getElementById("inizia").onclick=function(){
  scelta.style.display="block";
  you.style="";
  cpu.style="";
 random =parseInt(Math.random()*3);
}

foglia.onclick=function(){
  scelta.style.display="none"
  you.style.backgroundImage="url(immagini/foglia.png)";
if(random==0){
cpu.style.backgroundImage="url(immagini/foglia.png)";
risultato.innerHTML="<span class='patta'>Partita patta!</span>"
}
 else if(random==1){
  cpu.style.backgroundImage="url(immagini/forbice.png)";
  risultato.innerHTML="<span class='persa'>Partita persa!</span>";
  puntiC++;}
else{
  cpu.style.backgroundImage="url(immagini/sasso.png)";
  risultato.innerHTML="<span class='vinta'>Partita vinta!</span>";
puntiY++;}
risultato.style.display="block";
punteggioC.innerHTML=puntiC;
punteggioY.innerHTML=puntiY;
}


forbice.onclick=function(){
  scelta.style.display="none"
  you.style.backgroundImage="url(immagini/forbice.png)";
if(random==0){
cpu.style.backgroundImage="url(immagini/foglia.png)";
risultato.innerHTML="<span class='vinta'>Partita vinta!</span>"
puntiY++;
}
 else if(random==1){
  cpu.style.backgroundImage="url(immagini/forbice.png)";
  risultato.innerHTML="<span class='patta'>Partita patta!</span>";
  }
else{
  cpu.style.backgroundImage="url(immagini/sasso.png)";
  risultato.innerHTML="<span class='persa'>Partita persa!</span>";
puntic++;}
risultato.style.display="block";
punteggioC.innerHTML=puntiC;
punteggioY.innerHTML=puntiY;
}

sasso.onclick=function(){
  scelta.style.display="none"
  you.style.backgroundImage="url(immagini/sasso.png)";
if(random==0){
cpu.style.backgroundImage="url(immagini/foglia.png)";
risultato.innerHTML="<span class='persa'>Partita persa!</span>";
puntiC++;
}
 else if(random==1){
  cpu.style.backgroundImage="url(immagini/forbice.png)";
  risultato.innerHTML="<span class='vinta'>Partita vinta!</span>";
  puntiY++;}
else{
  cpu.style.backgroundImage="url(immagini/sasso.png)";
  risultato.innerHTML="<span class='patta'>Partita patta!</span>";
}
risultato.style.display="block";
punteggioC.innerHTML=puntiC;
punteggioY.innerHTML=puntiY;
}








let foto1=document.getElementById("1");
foto1.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/1.jpg)"
}

let foto2=document.getElementById("2");
foto2.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/2.jpg)";
}

let foto3=document.getElementById("3");
foto3.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/3.jpg)"
}

let foto4=document.getElementById("4");
foto4.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/4.jpg)"
}

let foto5=document.getElementById("5");
foto5.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/5.jpg)"
}

let foto6=document.getElementById("6");
foto6.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/6.jpg)"
}

let foto7=document.getElementById("7");
foto7.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/7.jpg)"
}

let foto8=document.getElementById("8");
foto8.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/8.jpg)"
}

let foto9=document.getElementById("9");
foto9.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/9.jpg)"
}

let video=document.getElementById("10");
video.onclick=function(){
document.getElementById("principale").style.backgroundImage="url(..//scarpa/img/video.mp4)"
}


for(let i=0; i<celle.length;i++){
  celle[i].onclick=function(){
    let controllo=this.classList.contains("stile1");
    if(controllo==true){
      this.classList.replace("stile1", "stile2");
    }
  }
}