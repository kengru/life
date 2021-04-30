import Sketch from "react-p5";
import p5Types from "p5";

const cells: Cell[][] = [];
const rules: Record<string, boolean> = {
  "0 0 0": false,
  "0 0 1": true,
  "0 1 0": true,
  "0 1 1": true,
  "1 0 0": true,
  "1 0 1": false,
  "1 1 0": false,
  "1 1 1": false
};
const speed = 20;
const size = 4;
const lines = 90;
const max = 1 + 2 * lines;

export const Canvas = () => {
  const defH = size * lines;
  const defW = size * max;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(defW, defH).parent(canvasParentRef);
    const initialRow = [];
    for (let i = 0; i < max; i++) {
      if (i === Math.floor(max / 2)) {
        initialRow.push(new Cell(i * size, 0, size, true, p5));
      } else {
        initialRow.push(new Cell(i * size, 0, size, false, p5));
      }
    }
    cells.push(initialRow);
    p5.frameRate(speed);
  };

  const draw = (p5: p5Types) => {
    p5.background(26);
    cells.forEach((row) => {
      row.forEach((cell) => {
        cell.show();
      });
    });
    if (cells.length < lines) {
      cells.push(createNewAr(cells[cells.length - 1], cells.length, p5));
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

class Cell {
  pos;
  size;
  color;
  active;
  p5;

  constructor(
    x: number,
    y: number,
    size: number,
    active: boolean,
    p5: p5Types
  ) {
    this.pos = p5.createVector(x, y);
    this.size = size;
    this.color = p5.color(127, 219, 74);
    this.active = active;
    this.p5 = p5;
  }

  upLevel() {
    this.pos.y = this.pos.y - this.size;
  }

  show() {
    this.p5.noStroke();
    if (this.active) {
      this.p5.fill(this.color);
    } else {
      this.p5.fill(26);
    }
    this.p5.rect(this.pos.x, this.pos.y, this.size, this.size);
  }
}

function createNewAr(prevRow: Cell[], idx: number, p5: p5Types) {
  const newRow = [];
  for (let i = 0; i < prevRow.length; i++) {
    newRow.push(
      new Cell(i * size, idx * size, size, applyRules(prevRow, i), p5)
    );
  }
  return newRow;
}

function applyRules(row: Cell[], idx: number) {
  const keys = Object.keys(rules);
  for (const key of keys) {
    const rule = key.split(" ");
    const firstCell = row[idx - 1] ? row[idx - 1].active : false;
    const middleCell = row[idx].active;
    const lastCell = row[idx + 1] ? row[idx + 1].active : false;
    if (
      firstCell === getBoolFromS(rule[0]) &&
      middleCell === getBoolFromS(rule[1]) &&
      lastCell === getBoolFromS(rule[2])
    ) {
      return rules[key];
    }
  }
  return false;
}

function getBoolFromS(value: string) {
  return value === "0" ? false : true;
}
