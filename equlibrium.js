function solution(A) {
  let leftSum = A[0];
  let rightSum = A.slice(1).reduce((a, b) => a + b, 0);
  let diff = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    // Stops at A.length - 1
    leftSum += A[i];
    rightSum -= A[i];
    let currentDiff = Math.abs(leftSum - rightSum);
    if (diff > currentDiff) {
      diff = currentDiff;
    }
  }

  return diff;
}

console.log(solution([1, 3]));
