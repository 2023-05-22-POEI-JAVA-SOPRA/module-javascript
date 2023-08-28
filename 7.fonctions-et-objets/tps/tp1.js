function rotateArray(arr, rotations) {
  // Vérifier si le nombre des rotations est plus grand que la taille
  if (rotations > arr.length) {
    rotations = rotations % arr.length;
  }

  for (let i = 0; i < rotations; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}

// Exemple d'utilisation
const arr = [1, 2, 3, 4, 5];

rotateArray(arr, 7); // [4, 5, 1, 2, 3]
