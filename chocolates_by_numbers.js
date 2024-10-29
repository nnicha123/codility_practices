function solution(N, M) {
  // Find greatest common divisor
  // Find N / greatest common divisor
  return N / gcd(N, M);
}

function gcd(A, B) {
  if (B === 0) return A;
  else {
    return gcd(B, A % B);
  }
}

console.log(solution(10, 4));
console.log(solution(18, 4));
console.log(solution(8, 4));
console.log(solution(8, 3));
console.log(solution(10, 3));
console.log(solution(12, 3));
