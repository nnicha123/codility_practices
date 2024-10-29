function gcd(A, B) {
  while (B > 0) {
    return gcd(B, A % B);
  }
  return A;
}

console.log(gcd(742, 518));
