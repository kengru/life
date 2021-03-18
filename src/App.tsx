import { Fragment, useCallback, useState } from "react";
import { Table } from "./components/Table";
import { useGame } from "./providers/gameProvider";

function App() {
  const { playState, dimensions, changePlay, setDimensions } = useGame();
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
          changePlay(playState === "stopped" ? "playing" : "stopped")
        }
      >
        {playState === "playing" ? "Stop" : "Play"}
      </button>
    </Fragment>
  );
}

export default App;
