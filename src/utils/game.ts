const rules = (
  gen: boolean[][],
  i: number,
  j: number,
  height: number,
  width: number
): number => {
  let amount = 0;
  if (i - 1 > 0) {
    amount += gen[i - 1][j] ? 1 : 0;
  }
  if (i + 1 < height) {
    amount += gen[i + 1][j] ? 1 : 0;
  }
  if (j - 1 > 0) {
    amount += gen[i][j - 1] ? 1 : 0;
  }
  if (j + 1 < width) {
    amount += gen[i][j + 1] ? 1 : 0;
  }
  if (i - 1 > 0 && j - 1 > 0) {
    amount += gen[i - 1][j - 1] ? 1 : 0;
  }
  if (i - 1 > 0 && j + 1 < width) {
    amount += gen[i - 1][j + 1] ? 1 : 0;
  }
  if (i + 1 < height && j - 1 > 0) {
    amount += gen[i + 1][j - 1] ? 1 : 0;
  }
  if (i + 1 > height && j + 1 < width) {
    amount += gen[i + 1][j + 1] ? 1 : 0;
  }
  return amount;
};

export const nextGen = (current: boolean[][]): boolean[][] => {
  const next: boolean[][] = [...current];
  for (let i = 0; i < current.length; i++) {
    for (let j = 0; j < current[i].length; j++) {
      const amount = rules(next, i, j, current.length, current[i].length);
      if (next[i][j]) {
        if (amount === 2 || amount === 3) {
          next[i][j] = true;
        } else {
          next[i][j] = false;
        }
      } else {
        console.log(amount);
        if (amount === 3) {
          next[i][j] = true;
        }
      }
    }
  }
  return next;
};
