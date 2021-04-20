import { useCallback, useState } from "react";
import { useLife } from "../providers/lifeProvider";
import { Button } from "../components/UI/Button";
import { Stats } from "../components/UI/Stats";
import { Options } from "../components/UI/Options";

export const SideConfig = () => {
  const {
    speed,
    generation,
    alive,
    dead,
    born,
    died,
    playState,
    setSpeed,
    setDimensions,
    changePlayState
  } = useLife();
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(30);

  const applyOptions = useCallback(
    (rows: number, columns: number, speed: number) => {
      setDimensions(rows, columns);
      setRows(rows);
      setColumns(columns);
      setSpeed(speed);
    },
    [setRows, setColumns, setDimensions, setSpeed]
  );

  const play = () => {
    changePlayState("playing");
  };

  const pause = () => {
    changePlayState("paused");
  };

  const stop = () => {
    changePlayState("stopped");
  };

  const clear = () => {
    changePlayState("cleared");
    setDimensions(rows, columns);
  };

  const elements = () => {
    switch (playState) {
      case "cleared":
        return <Button type="play" action={play} />;
      case "paused":
        return (
          <div className="pauseButtons">
            <Button type="resume" action={play} />
            <Button type="stop" action={stop} />
          </div>
        );
      case "playing":
        return (
          <div className="pauseButtons">
            <Button type="pause" action={pause} />
            <Button type="stop" action={stop} />
          </div>
        );
      case "stopped":
        return <Button type="clear" action={clear} />;
      default:
        return null;
    }
  };

  return (
    <div className="sideConfig">
      <p className="title">
        Ken's
        <br />
        Game of Life
      </p>
      {elements()}
      <Stats
        generation={generation}
        alive={alive}
        dead={dead}
        born={born}
        died={died}
      />
      <Options
        rows={rows}
        columns={columns}
        speed={speed}
        applyOptions={applyOptions}
      />
    </div>
  );
};
