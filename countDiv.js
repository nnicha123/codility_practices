function solution(A, B, K) {
  const arrLen = B - A + 1;
  let result = 0;

  for (let i = arrLen - 1; i >= 0; i--) {
    const valInArr = B + i - (arrLen - 1);
    if (valInArr % K == 0) result += 1;
  }
  return result;
}

function solution2(A, B, K) {
  const countUpToB = Math.floor(B / K);
  const countUpToA = Math.floor((A - 1) / K);
  return countUpToB - countUpToA;
}

console.log(solution2(6, 11, 2));
