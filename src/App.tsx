import { Fragment, useCallback, useState } from "react";

import { Table } from "./components/Life/Table";
import { useLife } from "./providers/lifeProvider";

function App() {
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
        onChange={(val) => setRows(+val.currentTarget.value)}
      />
      <input
        type="number"
        value={columns}
        onChange={(val) => setColumns(+val.currentTarget.value)}
      />
      <button onClick={() => changeDimensions()}>Change</button>
      <button
        onClick={() =>
          changePlayState(playState === "stopped" ? "playing" : "stopped")
        }
      >
        {playState === "playing" ? "Stop" : "Play"}
      </button>
    </Fragment>
  );
}

export default App;
