import _ from "lodash";

const neighbors = (gen: boolean[][], i: number, j: number): number => {
  let amount = 0;
  const height = gen.length;
  const width = gen[0].length;
  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, height - 1); x++) {
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, width - 1); y++) {
      if (x !== i || y !== j) {
        amount += gen[x][y] ? 1 : 0;
      }
    }
  }
  return amount;
};

export const nextGen = (current: boolean[][]): boolean[][] => {
  const next: boolean[][] = _.cloneDeep(current);
  for (let i = 0; i < current.length; i++) {
    for (let j = 0; j < current[i].length; j++) {
      const amount = neighbors(current, i, j);
      if (current[i][j]) {
        if (amount === 2 || amount === 3) {
          next[i][j] = true;
        } else {
          next[i][j] = false;
        }
      } else {
        if (amount === 3) {
          next[i][j] = true;
        } else {
          next[i][j] = false;
        }
      }
    }
  }
  return next;
};
