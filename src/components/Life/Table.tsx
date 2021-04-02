import { Row } from "./Row";

import { useLife } from "../../providers/lifeProvider";

export const Table = (props: TableProps) => {
  const { changeClicked } = useLife();
  const { columns, rows } = props;

  const tableElements = Array.from(Array(rows).keys()).map((row) => {
    return <Row key={`row-${row}`} keyId={row} columns={columns} />;
  });

  return (
    <div className="gameTable">
      <table
        onMouseDown={() => changeClicked(true)}
        onMouseUp={() => changeClicked(false)}
      >
        <tbody>{tableElements}</tbody>
      </table>
    </div>
  );
};
