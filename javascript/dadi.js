const btnSubmit = document.querySelector(".btn-submit");
const inputNumber = document.querySelector(".user-number");
let userNumbers = [];
let npcNumbers = [];
let userSum = 0;
let npcSum = 0;

btnSubmit.addEventListener("click", function() {
    let npcNumber = Math.floor((Math.random() * 6) + 1);

    //check della lunghezza dell'array dei numeri dell'utente
    if (userNumbers.length < 3) {
      number = inputNumber.value; 
      userNumbers.push(number); //carica il number inserito da utente nell'array

      userSum += parseInt(number); //calcola la somma dei numeri dell'utente 

      npcNumbers.push(npcNumber) //aggiungo i numeri random all'array npcNumbers

      npcSum += npcNumber; //faccio la somma dei numeri random
    }
    
    if (userNumbers.length == 3) { //quando l'utente inserisce 3 numeri mi stampa in console il confronto
      console.log(userNumbers, npcNumbers, userSum, npcSum);

      if (npcSum > userSum) {
        console.log("Peccato")
      } else if (npcSum < userSum) {
        console.log("Congratulazioni")
      } else if (npcSum = userSum){
        console.log("Pareggio");
      }
    }
    inputNumber.value = ""; //resetto l'input in html
  }
)