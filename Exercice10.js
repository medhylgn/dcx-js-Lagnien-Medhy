let n = Number(prompt("Combien de nombres ?"));
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let suivant = a + b;
  console.log(suivant);
  a = b;
  b = suivant;
}