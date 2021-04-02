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

  const pause = () => {
    changePlayState("stopped");
  };

  return (
    <div className="sideConfig">
      <p className="title">
        Ken's
        <br />
        Game of Life
      </p>
      {playState === "stopped" ? (
        <Button type="play" action={play} />
      ) : (
        <div className="pauseButtons">
          <Button type="pause" action={pause} />
          <Button type="stop" action={pause} />
        </div>
      )}
      <Stats generation={0} alive={0} dead={0} borned={0} died={0} />
      <Options
        rows={rows}
        columns={columns}
        speed={speed}
        applyOptions={applyOptions}
      />
    </div>
  );
};
