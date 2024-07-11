/*
1-Chaque personnage sera traité séparément.
2-Le dernier caractère est le point.
3-Utilisez trois variables comme compteurs.
*/
//algorithme qui lit une phrase qui se termine par un point, caractère par caractère:

//le nombre de caractères

function Fphrase(phrase) {
  let longueur = 0; // le nombre de caractères
  let nbrmot = 0; // Le nombre de mots dans la phrase
  let nbrvoyelle = 0; // Le nombre de voyelles dans la phrase
  const voyelle = "aeiouAEIOU";
  let voyellesDistinctes = new Set(); //stocker les voyelles distinctes

  // Parcourir chaque caractère de la phrase
  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];

    // Incrémenter le nombre de caractères
    longueur++;

    // Vérifier si le caractère est une voyelle
    if (voyelle.includes(char)) {
      nbrvoyelle++;
      voyellesDistinctes.add(char.toLowerCase()); // Ajouter la voyelle en minuscule à l'ensemble
    }

    // Vérifier si le caractère est un espace ou le dernier caractère
    if (char === " " || i === phrase.length - 1) {
      // Vérifier si le caractère précédent n'était pas un espace et que ce n'est pas le premier caractère
      if (i > 0 && phrase[i - 1] !== " ") {
        nbrmot++;
      }
    }
  }
  // Convertir l'ensemble en tableau pour compter les voyelles distinctes
  const nbrvoyelleDistincte = voyellesDistinctes.size;
  // Afficher les résultats
  console.log("Longueur de la phrase:", longueur);
  console.log("Nombre de mots:", nbrmot);
  console.log("frequence de voyelles:", nbrvoyelle);
  console.log(
    "Nombre unique  de voyelles:",
    nbrvoyelleDistincte,
    voyellesDistinctes
  );
}

// Exemple d'utilisation
Fphrase("bonjour, Achouak.");
