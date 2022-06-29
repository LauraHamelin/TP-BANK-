let choice = document.getElementById("choice");

choice.addEventListener("input", function () {
  let choice_value;

  choice_value = document.querySelectorAll("input[name=yesOverdraft]");

  for (let i = 0; i < choice_value.length; i++) {
    console.log(choice_value[i].checked, choice_value[i].value);

    if (choice_value[i].checked && choice_value[i].value == "y") {
      document.querySelector("#hidden").style.visibility = "visible";
    } else if (choice_value[i].checked && choice_value[i].value == "n") {
      document.querySelector("#hidden").style.visibility = "hidden";
    }
  }
});


choice.addEventListener("input", function () {
  document.getElementById("deposit").disabled = false;
});

const noOverdraft = document.querySelector("#n").value;

let deposit = document.getElementById("deposit");

let overdraft = document.getElementById("overdraft");

const sub = document.getElementById("confirm");

document.querySelector("p").style.textAlign = "center";

sub.addEventListener("click", function (e) {
  e.preventDefault();
  let valueD = deposit.value;
  let overdraftA = overdraft.value;

  if (document.getElementById("n").checked && valueD >= 500) {

    document.querySelector("p").innerHTML = "";
    sessionStorage.setItem("deposit", valueD);
    sessionStorage.setItem("overdraft", 0);

  } else if (document.getElementById("n").checked && valueD <= 500) {

    document.querySelector("p").innerHTML =
      "Votre dépot doit etre supérieur ou égal à 500€";

  } else if ( (valueD < 500 || (isNaN(valueD))) && (overdraftA < 100 || overdraftA > 2000 || isNaN(overdraftA))) {
    document.querySelector("p").innerHTML ="Votre dépot doit etre supérieur ou égal à 500€ et le montant de votre découvert doit être compris entre 100 et 2000€";
 
  } else if (overdraftA < 100 || overdraftA > 2000 || isNaN(overdraftA)) {
    document.querySelector("p").innerHTML = "Le montant de votre découvert doit être entre 100 et 2000€";

  } else if (valueD < 500 || isNaN(valueD)) {
    document.querySelector("p").innerHTML = "Votre dépot doit etre supérieur ou égal à 500€";

  } else {
    document.querySelector("p").innerHTML = "";
    sessionStorage.setItem("deposit", valueD);
    sessionStorage.setItem("overdraft", overdraftA);

  }
  
  console.log(sessionStorage.getItem("deposit"));
  console.log(sessionStorage.getItem("overdraft"));

});

