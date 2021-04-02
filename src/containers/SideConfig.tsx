import { useCallback, useState } from "react";
import { useLife } from "../providers/lifeProvider";
import { Button } from "../components/UI/Button";
import { Stats } from "../components/UI/Stats";
import { Options } from "../components/UI/Options";

export const SideConfig = () => {
  const {
    speed,
    playState,
    setSpeed,
    setDimensions,
    changePlayState,
  } = useLife();
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(30);

  const applyOptions = useCallback(
    (rows: number, columns: number, speed: number) => {
      setDimensions(rows, columns);
      setSpeed(speed);
    },
    [setDimensions, setSpeed]
  );

  const changeDimensions = useCallback(() => {
    setDimensions(rows, columns);
  }, [setDimensions, rows, columns]);

  const play = () => {
    changePlayState("playing");
  };

  return (
    <div className="sideConfig">
      <p className="title">
        Ken's
        <br />
        Game of Life
      </p>
      <Button label="Play" action={play} />
      <Stats generation={0} alive={0} dead={0} borned={0} died={0} />
      <Options
        rows={rows}
        columns={columns}
        speed={speed}
        applyOptions={applyOptions}
      />
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
