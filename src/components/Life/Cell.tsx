import { useLife } from "../../providers/lifeProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const { lifeState, playState, changeState } = useLife();

  return (
    <td
      style={{ backgroundColor: lifeState[i][j] ? "red" : "black" }}
      onClick={playState === "stopped" ? () => changeState(i, j) : undefined}
    ></td>
  );
};
