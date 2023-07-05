const btnSubmit = document.querySelector(".btn-submit");
const inputNumber = document.querySelector(".user-number");
const gameContainer = document.querySelector(".box")
let userNumbers = [];
let botNumbers = [];
let userSum = 0;
let botSum = 0;

btnSubmit.addEventListener("click", function() {
    let botNumber = Math.floor((Math.random() * 6) + 1);

    //check della lunghezza dell'array dei numeri dell'utente
    if (userNumbers.length < 3) {
      number = inputNumber.value; 
      if (number > 6 || number < 1) {//controlla che l'input sia valido
        let error = document.createElement("h2");

        error.classList.add("text-danger")
        error.innerHTML = "Hai inserito un numero non valido! Ricarica la pagina per riprovare"

        gameContainer.append(error);
      } else {
        userNumbers.push(number); //carica il number inserito da utente nell'array

        userSum += parseInt(number); //calcola la somma dei numeri dell'utente 

        botNumbers.push(botNumber) //aggiungo i numeri random all'array botNumbers

        botSum += botNumber; //faccio la somma dei numeri random
      }
    }
    
    if (userNumbers.length == 3) { //quando l'utente inserisce 3 numeri mi stampa in console il confronto
      if (botSum > userSum) {
        let result = document.createElement("h3");

        result.innerHTML = "Hei perso, il tuo punteggio è: " + userSum + " e il punteggio del tuo avversario è: " + botSum;

        gameContainer.append(result);
      } else if (botSum < userSum) {
        let result = document.createElement("h3");

        result.innerHTML = "Hai vinto, il tuo punteggio è: " + userSum + " e il punteggio del tuo avversario è: " + botSum;

        gameContainer.append(result);

      } else if (botSum = userSum){
        let result = document.createElement("h3");

        result.innerHTML = "Pareggio, il tuo punteggio è: " + userSum + " e il punteggio del tuo avversario è: " + botSum;

        gameContainer.append(result);
      }
    }
    inputNumber.value = ""; //resetto l'input in html
  }
)