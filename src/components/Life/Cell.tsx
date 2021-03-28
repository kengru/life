import { useLife } from "../../providers/lifeProvider";

export const Cell = (props: CellProps) => {
  const { i, j } = props;
  const {
    clicked,
    lifeState,
    playState,
    changeState,
  } = useLife();

  const onClick = () => {
    if (playState === "stopped") {
      changeState(i, j);
    }
  };

  return (
    <td
      draggable={false}
      style={{ backgroundColor: lifeState[i][j] ? "#562f7c" : "black" }}
      onMouseOver={
        clicked
          ? playState === "stopped"
            ? () => changeState(i, j)
            : undefined
          : undefined
      }
      onClick={onClick}
    ></td>
  );
};
