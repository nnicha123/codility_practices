// function solution(A) {
//   A.sort((a, b) => a - b);
//   let pointerNeg = 0;
//   let pointerPos = 0;

//   //   all negative case
//   if (A[A.length - 1] < 0) return Math.abs(A[A.length - 1] * 2);
//   //   All positive
//   if (A[0] >= 0) return Math.abs(A[0] * 2);

//   for (let i = 0; i < A.length - 1; i++) {
//     if (A[i] == 0) return 0; // Has zero case
//     if (A[i] < 0 && A[i + 1] > 0) {
//       // set Starting positions for pointers
//       pointerNeg = i;
//       pointerPos = i + 1;
//     }
//   }

//   while (pointerPos < A.length && pointerNeg >= 0) {
//     let currentSum = A[pointerNeg] + A[pointerPos];
//     if (currentSum == 0) {
//       return 0;
//     } else if (currentSum > 0) {
//       if (
//         pointerNeg > 0 &&
//         Math.abs(A[pointerPos] + A[pointerNeg - 1]) < Math.abs(currentSum)
//       ) {
//         pointerNeg -= 1;
//       } else {
//         return Math.abs(currentSum);
//       }
//     } else {
//       if (
//         pointerPos < A.length - 1 &&
//         Math.abs(A[pointerPos + 1] + A[pointerNeg]) < Math.abs(currentSum)
//       ) {
//         pointerPos += 1;
//       } else {
//         return Math.abs(currentSum);
//       }
//     }
//   }
//   return Math.abs(A[pointerNeg] + A[pointerPos]);
// }

function solution(A) {
  if (A.length === 1) return Math.abs(A[0] * 2);

  A.sort((a, b) => a - b);
  let pointerNeg = 0;
  let pointerPos = A.length - 1;
  let minVal = Infinity;

  if (A[0] >= 0) return A[0] * 2;
  if (A[A.length - 1] <= 0) return Math.abs(A[A.length - 1] * 2);

  while (pointerNeg <= pointerPos) {
    const currentSum = A[pointerNeg] + A[pointerPos];
    minVal = Math.min(minVal, Math.abs(currentSum));
    if (currentSum == 0) return 0;
    else if (currentSum < 0) {
      pointerNeg += 1;
    } else {
      pointerPos -= 1;
    }
  }
  return minVal;
}

// In all these cases, the result will be to put both pointers at the Math.min(|number|)
console.log(solution([8, 3, 5, 16, 11]));
console.log(solution([-7, -5, -6, -2, -9]));
console.log(solution([-7, 3, -6, 1, 0, -9])); // when there's a zero, both pointers point to the zero

// When there's positive and negative number with no zeros
console.log(solution([1, 4, -3])); // ans |4+(-3)|
console.log(solution([-8, 4, 5, -10, 3])); // ans |-8+5|
console.log(solution([-7, 3, -1, 5, -11, 4, -9, 14, 17, -2])); // ans |-2+3|
console.log(solution([-22, 3, 5, 4])); //ans |3+3|
