

let ol = document.getElementById('html')
// on recupere les valeur du solde et decouvert du session storage
let solde = sessionStorage.getItem('deposit')
let decouvert= sessionStorage.getItem('overdraft')
// console.log(solde);
// console.log(decouvert);
// on rajoute des listes a note ol ( a savoir notre solde et decouvert )
// 
ol.innerHTML += `<li>Etat du solde ${solde} € </li>`
ol.innerHTML += `<li>decouvert ${decouvert} € </li>`





// 1- on recupere l'element qui a un id validation ( bouton de validation), a l'aide de document.querry ou get elemntby id
//2- on greffe un ecouteur d evenement , l'evenement est un clique 
//3-lorsque le bouton sera cliqué , la focntion declaré au sein de la methode  addventlistnner va se declencher 
// 4- les instruction de cette fonction seront exécuté 
//- autrement dit : lors d'un clique sur le boutton avec l'id validation , la fonction associé sera exécuté 
// inner.html quand on a du contenu entre les balises sinon c'est direct sa va leur .value

let btn = document.getElementById('validation')

btn.addEventListener('click', function () {
    let montantretrait = document.getElementById('montantRetrait').value;
    // console.log("retrait" , document.getElementById('montantRetrait').value)
    // console.log("click découvert", decouvert)
    // console.log("click deposit", solde)
    console.log(isNaN(montantretrait))
    console.log("isNan", montantretrait)
    


    if (decouvert == 0){
        if(montantretrait==""){
            document.getElementById('msg').innerHTML = 'Votre retrait doit être une valeur numérique';

        } else if ( montantretrait > solde ){
            document.getElementById('msg').innerHTML = 'Solde insuffisant';


        } else {
            solde = solde - montantretrait;


            sessionStorage.setItem("deposit", solde);
            

        }
    }

    if ( decouvert > 0){
        if( montantretrait=="") {
            document.getElementById('msg').innerHTML = 'Votre retrait doit être une valeur numérique' ;
    
    
        } else if ( montantretrait > parseInt(solde + decouvert)) {
            document.getElementById('msg').innerHTML = 'Le montant de votre retrait ne peut pas etre supérieur au montant de votre decouvert autorisé'
    
    
        } else if ( montantretrait < solde ){
    
            solde = solde - montantretrait;
            sessionStorage.setItem("deposit", solde);
        
        } else {
     
            solde = solde - montantretrait;
            sessionStorage.setItem("deposit",solde);
            sessionStorage.setItem("overdraft", decouvert);
    
    
        }

    }

  

// console.log(solde);
// console.log(decouvert);

ol.innerHTML = `<li>Etat du solde ${solde} </li><br>
<li>decouvert ${decouvert}</li>`


})


