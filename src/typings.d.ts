type PlayState = "playing" | "stopped";
type Dimensions = {
  i: number;
  j: number;
};
type Callback = () => void;

interface TableProps {
  columns: number;
  rows: number;
}

interface RowProps {
  columns: number;
  keyId: number;
}

interface CellProps {
  i: number;
  j: number;
}

interface StatsProps {
  generation: number;
  alive: number;
  dead: number;
  borned: number;
  died: number;
}

interface OptionsProps {
  rows: number;
  columns: number;
  speed: number;
  applyOptions: (rows: number, columns: number, speed: number) => void;
}

interface OptionsForm {
  rows: string;
  columns: string;
  speed: string;
}

interface ButtonProps {
  label: string;
  action: any;
}
