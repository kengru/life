import { Fragment, useCallback, useState } from "react";

import { Table } from "../components/Life/Table";
import { useLife } from "../providers/lifeProvider";

export const Life = () => {
  const { playState, dimensions, setDimensions, changePlayState } = useLife();
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(30);

  const changeDimensions = useCallback(() => {
    setDimensions(rows, columns);
  }, [setDimensions, rows, columns]);

  return (
    <Fragment>
      <Table rows={dimensions.i} columns={dimensions.j} />
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
    </Fragment>
  );
};
