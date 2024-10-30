function solution(K, A) {
  let count = 0;
  let currentLength = 0;

  for (let i = 0; i < A.length; i++) {
    currentLength += A[i];

    if (currentLength >= K) {
      count += 1;
      currentLength = 0;
    }
  }

  return count;
}
console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));
console.log(solution(2, [1, 2, 3, 4, 1, 1, 3]));
