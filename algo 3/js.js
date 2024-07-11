//Vérificateur d'année bissextile : créez une fonction qui prend une année en entrée et détermine s'il s'agit d'une année bissextile ou non. Les années
//bissextiles sont divisibles par 4, mais pas par 100, sauf si elles sont également divisibles par 400.

// Fonction pour vérifier si une année est bissextile
function bissextile(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log(`${year} est une année bissextile.`);
  } else {
    return console.log(`${year} n'est pas une année bissextile.`);
  }
}
bissextile(2024);
// Fonction pour déterminer le prix du billet en fonction de l'âge
function determineTicketPrix(age) {
  if (age <= 12) {
    return 10; // Enfants (âge <= 12 ans)
  } else if (age >= 13 && age <= 17) {
    return 15; // Adolescents (13-17 ans)
  } else {
    return 20; // Adultes (âge >= 18)
  }
}
let userInput = prompt("Entrez votre age pour connaitre le prix du billet :");
let age = parseInt(userInput); // Convertir l'entrée utilisateur en nombre entier
if (!isNaN(age)) {
  let price = determineTicketPrix(age);
  console.log(
    `Le prix du billet pour une personne de ${age} ans est de ${price} $.`
  );
} else {
  console.log("Veuillez entrer un âge valide.");
}
//Fonction puissance : écrivez une fonction récursive pour calculer le résultat de l'élévation d'un nombre à une puissance donnée.
// Fonction récursive pour calculer la puissance d'un nombre
function power(base, exp) {
  if (exp === 0) {
    return 1; // Cas exp = 0
  } else if (exp > 0) {
    return base * power(base, exp - 1); // Multiplication récursive pour exp > 0
  } else {
    return 1 / power(base, -exp); // Cas où exp < 0
  }
}
let x = 2;
let n = 5;
let result = power(x, n);
console.log(`${x} ^ ${n} est égal à ${result}.`);

// Fonction récursive pour calculer le n-ième nombre de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n; // Cas de base pour n = 0 ou n = 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Appels récursifs pour n > 1
  }
}
let num = 6;
let fibValue = fibonacci(num);
console.log(`Le ${num}ème nombre de Fibonacci est ${fibValue}.`);
