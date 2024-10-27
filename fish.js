function solution(A, B) {
  let survivors = 0;
  let stack = [];

  for (let i = 0; i < A.length; i++) {
    let weight = A[i];
    if (B[i] === 1) {
      stack.push(weight);
    } else {
      let weightDown = stack.length === 0 ? -1 : stack.pop();
      while (weightDown !== -1 && weightDown < weight) {
        weightDown = stack.length === 0 ? -1 : stack.pop();
      }
      if (weightDown === -1) {
        survivors += 1;
      } else {
        stack.push(weightDown);
      }
    }
  }
  return stack.length + survivors;
}
