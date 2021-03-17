import { useGame } from "../providers/gameProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const { gameState, playState, changeState } = useGame();

  return (
    <td
      style={{ backgroundColor: gameState[i][j] ? "red" : "black" }}
      onClick={playState === "stopped" ? () => changeState(i, j) : undefined}
    ></td>
  );
};
