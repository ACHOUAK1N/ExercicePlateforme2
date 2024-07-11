function triParInsertion(arr) {
  // Copie du tableau pour ne pas le modifier directement
  const array = arr.slice();

  // Parcourir le tableau à partir du deuxième élément
  for (let i = 1; i < array.length; i++) {
    // Sélectionner l'élément à insérer dans la séquence triée
    let current = array[i];

    // Parcourir la séquence triée de 0 à i-1
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      // Déplacer les éléments vers la droite pour faire de la place pour l'élément courant
      array[j + 1] = array[j];
      j--;
    }

    // Insérer l'élément courant à sa position correcte dans le tableau trié
    array[j + 1] = current;
  }

  return array;
}

// Exemple d'utilisation
const tableau = [5, 2, 4, 6, 1, 3];
const tableauTrie = triParInsertion(tableau);
console.log("Tableau trié par insertion:", tableauTrie);
