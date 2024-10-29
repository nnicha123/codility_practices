function solution(M, A) {
  let count = 0;
  let back = 0;
  let flagArr = new Array(M + 1).fill(false);

  for (let front = 0; front < A.length; front++) {
    while (back < A.length && flagArr[A[front]]) {
      flagArr[A[back]] = false;
      back += 1;
    }
    flagArr[A[front]] = true;

    count += front - back + 1;

    if (count > 1000000000) return 1000000000;
  }

  return count;
}

console.log(solution(6, [3, 4, 5, 5, 2]));
console.log(solution(0, [0]));
console.log(solution(9, [2, 4, 1, 7, 4, 9, 7, 3, 5, 5, 8, 7, 1]));
