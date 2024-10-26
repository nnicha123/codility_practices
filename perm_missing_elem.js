function perm_missing_elem(ls) {
  const maxNum = ls.length + 1;

  const allSum = (maxNum * (maxNum + 1)) / 2;

  const actualSum = ls.reduce((a, b) => a + b, 0);

  return allSum - actualSum;
}

console.log(perm_missing_elem([]));
