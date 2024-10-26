// function solution(x, a) {
//   let arr = Array.from({ length: x }, (_, i) => i + 1);
//   for (let i = 0; i < a.length; i++) {
//     if (arr.length < 1) {
//       return i;
//     }
//     let ind = arr.findIndex((num) => num === a[i]);
//     if (ind != -1) {
//       arr.splice(ind, 1);
//     }
//     console.log(arr);
//   }
//   return -1;
// }

// function solution(x, a) {
//   let river_po = new Array(x + 1).fill(false);
//   for (let time = 0; time < a.length; time++) {
//     let pos = a[time];
//     if (!river_po[pos]) {
//       river_po[pos] = true;
//       x -= 1;
//       if (x === 0) return time;
//     }
//   }
//   return -1;
// }

function solution(x, a) {
  let s = new Set();
  for (let i = 0; i < a.length; i++) {
    if (!s.has(a[i]) && a[i] <= x) {
      s.add(a[i]);
    }
    if (s.size === x) {
      return i + 1;
    }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
