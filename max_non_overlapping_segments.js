function solution(A, B) {
  if (A.length === 0) return 0;

  let count = 0;
  let endOfPreviousSegment = -1;

  for (let i = 0; i < A.length; i++) {
    // non overlap case
    let startOfCurrentSegment = A[i];
    if (endOfPreviousSegment < startOfCurrentSegment) {
      count += 1;
      endOfPreviousSegment = B[i];
    }
  }
  return count;
}

console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));
