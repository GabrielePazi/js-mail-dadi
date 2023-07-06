const storedEmails = ["mariorossi@gmail.com", "lucabianchi@gmail.com", "giuseppeverdi@tiscali.it"];
const btnSubmit = document.querySelector(".btn-submit");
const emailCheck = document.querySelector(".email-check");
let userInputEmail = document.getElementById("userEmail");


btnSubmit.addEventListener("click", function () {
    userEmail = userInputEmail.value;

    for (i = 0; i < storedEmails.length; i++) {
      if (storedEmails[i] == userEmail) {
        emailCheck.innerHTML = "Accesso effettuato"
        i = storedEmails.length - 1;
      } else {
        emailCheck.innerHTML = "Accesso negato"
        i = storedEmails.length - 1;
      }
    }
  }
)

