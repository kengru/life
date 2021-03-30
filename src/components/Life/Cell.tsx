import { useLife } from "../../providers/lifeProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const { clicked, lifeState, playState, changeState } = useLife();

  const onClick = () => {
    if (playState === "stopped") {
      changeState(i, j);
    }
  };

  return (
    <td
      draggable={false}
      className={lifeState[i][j] ? "aliveCell" : "deadCell"}
      onMouseOver={
        clicked
          ? playState === "stopped"
            ? () => changeState(i, j)
            : undefined
          : undefined
      }
      onMouseDown={onClick}
      onClick={onClick}
    ></td>
  );
};
