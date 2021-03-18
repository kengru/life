export const generateInitial = (rows: number, columns: number): boolean[][] => {
  const initial: boolean[][] = [];
  for (let i = 0; i < rows; i++) {
    initial[i] = [];
    for (let j = 0; j < columns; j++) {
      initial[i].push(false);
    }
  }
  return initial;
};
