const word = prompt("Entrez un mot : ");
const isPalindrome = word === word.split("").reverse().join("");
alert(isPalindrome ? "C'est un palindrome !" : "Ce n'est pas un palindrome.");