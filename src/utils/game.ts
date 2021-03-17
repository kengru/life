const neighbors = (gen: boolean[][], i: number, j: number): number => {
  // console.log(gen);
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
  // if (i - 1 >= 0) {
  //   amount += gen[i - 1][j] ? 1 : 0; // arriba
  // }
  // if (i + 1 < height) {
  //   amount += gen[i + 1][j] ? 1 : 0; // abajo
  //   // if (gen[i + 1][j]) {
  //   //   console.log("Abajo esta prendio");
  //   // } else {
  //   //   console.log("abajo esta apagado");
  //   // }
  // }
  // if (i === 0 && j === 3) {
  //   console.log("el invisible: ", i, j, gen[i][j]);
  // }
  // if (i === 0 && j === 4) {
  //   console.log("el ciego: ", i, j, j - 1, gen[i][j - 1]);
  // }
  // if (j - 1 >= 0) {
  //   amount += gen[i][j - 1] ? 1 : 0; // izq
  //   // if (gen[i][j - 1]) {
  //   //   console.log("Izq esta prendio");
  //   // } else {
  //   //   console.log("Izq esta apagado");
  //   // }
  // }
  // if (j + 1 < width) {
  //   amount += gen[i][j + 1] ? 1 : 0; // der
  // }
  // if (i - 1 >= 0 && j - 1 >= 0) {
  //   amount += gen[i - 1][j - 1] ? 1 : 0; // arrizq
  // }
  // if (i - 1 >= 0 && j + 1 < width) {
  //   amount += gen[i - 1][j + 1] ? 1 : 0; // arrder
  //   // if (gen[i - 1][j + 1]) console.log("Match!!");
  // }
  // if (i + 1 < height && j - 1 >= 0) {
  //   amount += gen[i + 1][j - 1] ? 1 : 0; // abjizq
  // }
  // if (i + 1 < height && j + 1 < width) {
  //   amount += gen[i + 1][j + 1] ? 1 : 0; // abjder
  // }
  // return amount;
};

export const nextGen = (current: boolean[][]): boolean[][] => {
  const next: boolean[][] = [...current];
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
        if (amount > 4) console.log(amount);
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
