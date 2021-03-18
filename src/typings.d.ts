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
