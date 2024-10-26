function solution(a, b) {
  let sortedA = a.sort((x, y) => x - y);
  let sortedB = b.sort((x, y) => x - y);

  let result = [];

  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < a.length && pointerB < b.length) {
    let resultA = sortedA[pointerA];
    let resultB = sortedB[pointerB];
    if (resultA === resultB) {
      result.push(resultA);
      pointerA++;
      pointerB++;
    } else if (resultA < resultB) {
      pointerA++;
    } else {
      pointerB++;
    }
  }
  return result;
}

const a = [1, 2, 3, 4];
const b = [2, 4, 5];
console.log(solution(a, b));
