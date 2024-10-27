function solution(A) {
  let globalMax = 0;
  let localMax = 0;

  for (let i = 1; i < A.length; i++) {
    let diff = A[i] - A[i - 1];
    localMax = Math.max(diff, localMax + diff);
    globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
}

console.log(solution([3, 2, -6, 4, 0]));
