const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Devine un nombre entre 1 et 100 : ");
while (parseInt(guess) !== randomNumber) {
  if (guess > randomNumber) {
    guess = prompt("Trop grand ! Essaie encore : ");
  } else {
    guess = prompt("Trop petit ! Essaie encore : ");
  }
}
alert("Bravo !");