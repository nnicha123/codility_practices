function solution(A) {
  let suffixArr = new Array(A.length + 1).fill(0);
  let cumulativeSum = 0;
  let result = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    suffixArr[i] = cumulativeSum + A[i];
    cumulativeSum += A[i];
    if (A[i] === 0) result += suffixArr[i];
    if (result > 1000000000) return -1;
  }

  return result;
}

function solution2(A) {
  let westCars = 0;
  let result = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) westCars += 1;
    else {
      result += westCars;
    }
    if (result > 1000000000) return -1;
  }
  return result;
}

console.log(solution2([0, 1, 0, 1, 1]));
