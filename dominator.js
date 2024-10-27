function solution(A) {
  let conseqcutive = 0;
  let candidate = 0;
  for (let i = 0; i < A.length; i++) {
    if (conseqcutive === 0) {
      candidate = A[i];
      conseqcutive += 1;
    } else if (candidate === A[i]) {
      conseqcutive += 1;
    } else {
      conseqcutive -= 1;
    }
  }

  let occurence = 0;
  let index = 0;
  for (let i = 0; i < A.length; i++) {
    if (candidate == A[i]) {
      occurence += 1;
      index = i;
    }
  }
  return occurence > A.length / 2 ? index : -1;
}

console.log(solution([2, 1, 2]));
console.log(solution([3, 0, 1, 1, 4, 1, 1]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
