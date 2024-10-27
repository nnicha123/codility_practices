function solution(N, A) {
  let result = new Array(N).fill(0);
  let currentMax = 0;
  let startLine = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      if (result[A[i] - 1] < startLine) {
        result[A[i] - 1] = startLine;
      }
      result[A[i] - 1] += 1;
      if (currentMax < result[A[i] - 1]) {
        currentMax = result[A[i] - 1];
      }
    } else {
      startLine = currentMax;
    }
  }
  return result.map((res) => (res < startLine ? startLine : res));
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
