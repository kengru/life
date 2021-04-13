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

  const onClick = () => {
    if (playState === "stopped" || "cleared") {
      changeClicked(true);
      changeState(i, j);
    }
  };

  return (
    <td
      draggable={false}
      className={lifeState[i][j] ? "aliveCell" : "deadCell"}
      onMouseOver={
        clicked
          ? playState !== "playing"
            ? () => changeState(i, j)
            : undefined
          : undefined
      }
      onMouseDown={onClick}
      onMouseUp={() => changeClicked(false)}
      onClick={onClick}
    ></td>
  );
};
