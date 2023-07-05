const storedEmails = ["mariorossi@gmail.com", "lucabianchi@gmail.com", "giuseppeverdi@tiscali.it"];
const btnSubmit = document.querySelector(".btn-submit");
let userInputEmail = document.getElementById("userEmail");


btnSubmit.addEventListener("click", function () {
    userEmail = userInputEmail.value;

    for (i = 0; i < storedEmails.length; i++) {
      if (storedEmails[i] == userEmail) {
        console.log("Accesso effettuato")
        // oppure con i = storedEmails.length - 1;
        return
      } else {
        console.log("Accesso negato")
        //oppure con i = storedEmails.length - 1;
        return
      }
    }
  }
)

