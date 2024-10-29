function caterpillar(A, B) {
  let back = 0;
  let front = 0;
  let sum = 0;
  while (back <= front && front < A.length) {
    if (sum === 16) return true;
    else {
      if (sum < 16) {
        front += 1;
        sum += A[front];
      } else {
        back += 1;
        sum -= A[back];
      }
    }
  }
  return false;
}

console.log(caterpillar([2, 4, 1, 7, 3, 9, 6, 3, 2, 5, 8, 7, 1], 16));
