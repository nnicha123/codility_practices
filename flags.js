function solution(A) {
  // Find peaks
  let peaks = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
  }

  if (peaks.length === 0) return 0;

  // Find max number of peaks using binary search
  let left = 1;
  let right = peaks.length;
  let maxFlagsUsed = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let flagsUsed = getFlagsUsed(peaks, mid);

    if (flagsUsed >= mid) {
      maxFlagsUsed = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return maxFlagsUsed;
}

function getFlagsUsed(peaks, mid) {
  let flagsUsed = 1;
  let lastPeak = peaks[0];

  for (let i = 1; i < peaks.length; i++) {
    if (peaks[i] - lastPeak >= mid) {
      flagsUsed += 1;
      lastPeak = peaks[i];

      if (flagsUsed === mid) return flagsUsed;
    }
  }

  return flagsUsed;
}

// console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(
  solution([
    1, 5, 3, 7, 4, 8, 6, 3, 4, 9, 2, 6, 3, 7, 4, 5, 9, 3, 8, 2, 6, 4, 7, 5, 3,
    6, 4,
  ])
);
