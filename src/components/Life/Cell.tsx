import { useMemo } from "react";
import { useLife } from "../../providers/lifeProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const {
    clicked,
    lifeState,
    playState,
    changeState,
    changeClicked
  } = useLife();

  const onLife = () => {
    if (playState === "stopped" || "cleared") {
      changeState(i, j, true);
    }
  };

  const onDeath = () => {
    if (playState === "stopped" || "cleared") {
      changeState(i, j, false);
    }
  };

  const onMouseD = (lifeOrDeath: () => void) => {
    changeClicked(true);
    lifeOrDeath();
  };

  const dim = useMemo(() => (lifeState.length + lifeState[0].length) / 2, [
    lifeState
  ]);

  return (
    <td
      style={{ height: dim, width: dim }}
      draggable={false}
      className={lifeState[i][j] ? "aliveCell" : "deadCell"}
      onMouseOver={
        clicked
          ? playState !== "playing"
            ? () => onLife()
            : undefined
          : undefined
      }
      onMouseDown={
        lifeState[i][j] ? () => onMouseD(onDeath) : () => onMouseD(onLife)
      }
      onMouseUp={() => changeClicked(false)}
      onClick={onLife}
    ></td>
  );
};
