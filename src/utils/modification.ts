export const generateInitialLife = (
  rows: number,
  columns: number
): boolean[][] => {
  const initial: boolean[][] = [];
  for (let i = 0; i < rows; i++) {
    initial[i] = [];
    for (let j = 0; j < columns; j++) {
      initial[i].push(false);
    }
  }
  return initial;
};

export const genZero = (columns: number): boolean[][] => {
  const gens: boolean[][] = [];
  const genZ: boolean[] = new Array(columns).fill(false);
  genZ[Math.floor(columns / 2)] = true;
  gens.push(genZ);
  return gens;
};
