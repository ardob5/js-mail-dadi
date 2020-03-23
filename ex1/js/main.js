// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// Dichiaro la mia lista di email "approvate"
var emailsAvailable = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com", "email6@gmail.com"];

// Chiedo all'utente di inserire la propria email e la salvo in una variabile
var emailUser = prompt("Inserisci la tua email");

// Creo un ciclo che controlli se la mail inserita dall'utente è presente nella mia lista
for (var i = 0; i < emailsAvailable.length; i++) {
  console.log(emailsAvailable[i]);
  console.log(emailUser);
  if (emailUser == emailsAvailable[i]) {
    document.getElementById("output").innerHTML = "Puoi accedere";
    i = 5000;
    // break;
  }
  else {
    document.getElementById("output").innerHTML = "Non puoi accedere";
  }
}
