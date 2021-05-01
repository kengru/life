import Sketch from "react-p5";
import p5Types from "p5";

interface CanvasProps {
  rules: Record<string, boolean>;
}

const speed = 60;
// const size = 10;
const lines = 50;
// const max = 1 + 2 * lines;
const w = window.innerWidth;
const h = window.innerHeight - 200;
const size = h / lines;
const max = w / size;

export const Canvas: React.FC<CanvasProps> = (props) => {
  const { rules } = props;
  const cells: Cell[][] = [];

  // const defH = size * lines;
  // const defW = size * max;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(w, h).parent(canvasParentRef);
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
      cells.push(createNewAr(cells[cells.length - 1], cells.length, rules, p5));
    } else {
      cells.forEach((row) => {
        row.forEach((cell) => {
          cell.upLevel();
        });
      });
      cells.shift();
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
      this.p5.stroke(8);
      this.p5.fill(10);
    }
    this.p5.rect(this.pos.x, this.pos.y, this.size, this.size);
  }
}

function createNewAr(
  prevRow: Cell[],
  idx: number,
  rules: Record<string, boolean>,
  p5: p5Types
) {
  const newRow = [];
  for (let i = 0; i < prevRow.length; i++) {
    newRow.push(
      new Cell(i * size, idx * size, size, applyRules(prevRow, i, rules), p5)
    );
  }
  return newRow;
}

function applyRules(row: Cell[], idx: number, rules: Record<string, boolean>) {
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
