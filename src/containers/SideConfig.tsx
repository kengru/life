import { useCallback, useState } from "react";
import { useLife } from "../providers/lifeProvider";

export const SideConfig = () => {
  const { playState, setDimensions, changePlayState } = useLife();
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(30);

  const changeDimensions = useCallback(() => {
    setDimensions(rows, columns);
  }, [setDimensions, rows, columns]);

  return (
    <div className="sideConfig">
      <p className="title">
        Ken's
        <br />
        Game of Life
      </p>
      <input
        type="number"
        value={rows}
        disabled={playState === "playing"}
        onChange={(val) => setRows(+val.currentTarget.value)}
      />
      <input
        type="number"
        value={columns}
        disabled={playState === "playing"}
        onChange={(val) => setColumns(+val.currentTarget.value)}
      />
      <button
        onClick={() => changeDimensions()}
        disabled={playState === "playing"}
      >
        Change
      </button>
      <button
        onClick={() =>
          changePlayState(playState === "stopped" ? "playing" : "stopped")
        }
      >
        {playState === "playing" ? "Pause" : "Play"}
      </button>
      <button
        onClick={() => {
          changePlayState("stopped");
          setDimensions(rows, columns);
        }}
      >
        Clear
      </button>
    </div>
  );
};
