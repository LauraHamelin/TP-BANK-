import {compte} from "./indexO1.js";


let days = document.getElementById("days"); //créer variable qui récupére par l'Id la valeur de Days dans le html
days.addEventListener("blur", function(){ //Affecter à cette variable un evenèment via "blur" qui s'active dès qu'on sort du champs de texte
  let D = days.value; //Au moment du blur on récupère la valeur saisie par l'utilisateur et on lui affecte une variable
  if(D<1 || D>365 || isNaN(D)){ // Condition de l'activation de la fonction
    document.getElementById("p").innerHTML = "Veuillez rentrer un nombre de jour compris entre 1 et 365" // si remplis la condition
  }else{
    document.getElementById("p").innerHTML = "" // si ne remplis pas la condition
  }
})

let calcAgios = document.getElementById("calcAgios"); //créer variable qui récupère par l'Id la valeur de caclAgios dans le html
calcAgios.addEventListener("click", function(){ //Affecter à cette variable un évènement via "click" qui s'active dès qu'on click sur le bouton
  let D = days.value; //au moment du click récupère la valeur saisie par l'utilisateur pour le nombre de jour (Days)
  
  let Du = sessionStorage.getItem("overdraft"); //a remplacer par la bonne clé
  
  let a = new compte(); /// Options 1
  
  let b = a.resagios(D, Du);
  document.getElementById("p2").innerHTML = "Le montant de vos agios à payer est de " + b + "€";
})