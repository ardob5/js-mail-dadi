// 2 Gioco dei dadi, chi fa di più vince.


// Faccio tirare i dadi all'user e successivamente al computer dichiarando i risultati in due variabili
var dadiUser = alert("Per lanciare i dadi premere invio");

dadiUser = Math.floor((Math.random() * 6) + 1);

var dadiComputer = alert(dadiUser + " è il tuo punteggio" + ". Ora tocca a me.");

dadiComputer = Math.floor((Math.random() * 6) + 1);

console.log("L'utente ha fatto" + dadiUser);
console.log("Il computer ha fatto" + dadiComputer);

var winner;

if (dadiUser > dadiComputer) {
  winner = ("Il computer ha fatto " + dadiComputer + ". Complimenti, hai vinto!")
} else if (dadiUser < dadiComputer) {
  winner = ("Il computer ha fatto " + dadiComputer + ". Mi spiace, hai perso! :(")
} else {
  winner = ("Il computer ha fatto " + dadiComputer + ". Pareggio!")
}

document.getElementById('output').innerHTML = winner;
