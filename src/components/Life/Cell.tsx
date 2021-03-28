import { useLife } from "../../providers/lifeProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const { lifeState, playState, changeState } = useLife();

  return (
    <td
      draggable={false}
      style={{ backgroundColor: lifeState[i][j] ? "#562f7c" : "black" }}
      onMouseDown={
        playState === "stopped" ? () => changeState(i, j) : undefined
      }
    ></td>
  );
};
