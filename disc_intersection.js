function solution(A) {
  let len = A.length;
  let disHistory = new Array(len * 2);
  let j = 0;
  for (let i = 0; i < len; i++) {
    disHistory[j++] = new DisLog(i - A[i], 1);
    disHistory[j++] = new DisLog(i + A[i], -1);
  }
  disHistory.sort(compare);
  console.log(disHistory);
  let intersections = 0;
  let activeIntersections = 0;

  for (const log of disHistory) {
    activeIntersections += log.startEnd;
    logStartEnd = log.startEnd;
    if (log.startEnd > 0) intersections += activeIntersections - 1;
    if (intersections > 10000000) return -1;
    console.log({ logStartEnd, activeIntersections, intersections });
  }
  return intersections;
}

class DisLog {
  constructor(x, startEnd) {
    this.x = x;
    this.startEnd = startEnd;
  }
}

let disc = [
  new DisLog(4, 1),
  new DisLog(3, -1),
  new DisLog(5, -1),
  new DisLog(5, 1),
];

function compare(a, b) {
  return a.x !== b.x ? a.x - b.x : b.startEnd - a.startEnd;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
