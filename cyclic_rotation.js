function solution(A, k) {
  let newArr = [];
  for (let i = 0; i < A.length; i++) {
    newArr[(i + k) % A.length] = A[i];
  }
  return newArr;
}

console.log(solution([5, 3, 4, 1, 2], 2));
