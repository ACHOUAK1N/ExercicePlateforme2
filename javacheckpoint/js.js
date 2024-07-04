//Fonctions de manipulation de chaînes :

//Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.

function inverse(chaine) {
  let mot = "";
  for (i = chaine.length - 1; i >= 0; i--) {
    mot += chaine[i];
  }
  return mot;
}
console.log(inverse("achouak"));

//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.

function caractere(chaine) {
  let compteur = 0;

  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] !== " ") {
      // Ignorer les espaces
      compteur += 1;
    }
  }

  return compteur;
}

console.log("nombre de caractere:", caractere("achouak nouioua")); //14 ignorer l espace
console.log("nombre de caractere:", caractere("achouaknouioua")); //14

//Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.

function maj(phrase) {
  let result = "";

  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];

    if (i === 0 || phrase[i - 1] === " ") {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}
console.log(maj("hello world"));
console.log(maj("achouak"));

//Fonctions de tableau :

//Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.

function FindMax(x) {
  let max = x[0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }

  return max;
}
console.log("max=", FindMax([5, 7, 9, 115]));
console.log("max=", FindMax([59, 7, 9, 10]));

//Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("somme=", sumArray([1, 2, 3, 4, 5]));

//Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.

function filterArray(arr, condition) {
  return arr.filter(function (element) {
    return condition(element);
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtrer les nombres supérieurs à 5
function greaterThanFive(num) {
  return num > 5;
}
const greaterThanFiveNumbers = filterArray(numbers, greaterThanFive);
console.log(greaterThanFiveNumbers); //

//Fonctions mathématiques :

//Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.
//3!=1*2*3
function factorielle(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
  return result;
}
console.log("fact=", factorielle(3));

//Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.

// Un nombre premier est un nombre dont ses seuls diviseurs sont 1 et lui-même.
let cpt = 0;

function premier(x) {
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      cpt++;
    }
  }
  if (cpt == 2) {
    return `Ce nombre est premier`;
  } else {
    return `Ce nombre n'est pas premier`;
  }
}
console.log(premier(2));

//Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes

/*
F0 = 0 , F1 = 1
Fn = Fn-1 + Fn-2 , pour n > 1.
*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let a = 0,
    b = 1,
    c; //pour stocker la somme des deux précédents
  for (let i = 2; i <= n; i++) {
    c = a + b;
    //Mise à jour de a et b :
    a = b;
    b = c;
  }
  return b; //b contient le n-ième nombre de Fibonacci.
}

let n = 14;
console.log(`${n}-ième nombre de Fibonacci est ${fibonacci(n)}`);
