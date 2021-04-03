import _ from "lodash";

const neighbors = (
  gen: boolean[][],
  heightCoord: number,
  widthCoord: number
): number => {
  let amount = 0;

  const height = gen.length;
  const width = gen[0].length;
  for (
    let x = Math.max(0, heightCoord - 1);
    x <= Math.min(heightCoord + 1, height - 1);
    x++
  ) {
    for (
      let y = Math.max(0, widthCoord - 1);
      y <= Math.min(widthCoord + 1, width - 1);
      y++
    ) {
      if (x !== heightCoord || y !== widthCoord) {
        amount += gen[x][y] ? 1 : 0;
      }
    }
  }
  return amount;
};

export const nextGen = (current: boolean[][]): GenInfo => {
  const next: boolean[][] = _.cloneDeep(current);

  for (let height = 0; height < current.length; height++) {
    for (let width = 0; width < current[height].length; width++) {
      const amount = neighbors(current, height, width);
      if (current[height][width]) {
        if (amount === 2 || amount === 3) {
          next[height][width] = true;
        } else {
          next[height][width] = false;
        }
      } else {
        if (amount === 3) {
          next[height][width] = true;
        } else {
          next[height][width] = false;
        }
      }
    }
  }

  // const count = next.reduce((prev, current) => {
  //   // current.filter()
  //   return 0;
  // }, 0);

  return {
    nextGen: next,
    borned: 0,
    died: 0,
  };
};

export const countLive = (gen: boolean[][]): AliveDead => {
  const initial: AliveDead = { alive: 0, dead: 0 };
  const count = gen.reduce((prev, current) => {
    const alive = current.filter((val) => val);
    const dead = current.filter((val) => !val);
    return {
      alive: prev.alive + alive.length,
      dead: prev.dead + dead.length,
    };
  }, initial);
  return count;
};
