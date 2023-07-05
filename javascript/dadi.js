const btnSubmit = document.querySelector(".btn-submit");
const inputNumber = document.querySelector(".user-number");
let userNumbers = [];
let botNumbers = [];
let userSum = 0;
let botSum = 0;

btnSubmit.addEventListener("click", function() {
    let botNumber = Math.floor((Math.random() * 6) + 1);

    //check della lunghezza dell'array dei numeri dell'utente
    if (userNumbers.length < 3) {
      number = inputNumber.value; 
      userNumbers.push(number); //carica il number inserito da utente nell'array

      userSum += parseInt(number); //calcola la somma dei numeri dell'utente 

      botNumbers.push(botNumber) //aggiungo i numeri random all'array botNumbers

      botSum += botNumber; //faccio la somma dei numeri random
    }
    
    if (userNumbers.length == 3) { //quando l'utente inserisce 3 numeri mi stampa in console il confronto
      console.log(userNumbers, botNumbers, userSum, botSum);

      if (botSum > userSum) {
        console.log("Peccato")
      } else if (botSum < userSum) {
        console.log("Congratulazioni")
      } else if (botSum = userSum){
        console.log("Pareggio");
      }
    }
    inputNumber.value = ""; //resetto l'input in html
  }
)