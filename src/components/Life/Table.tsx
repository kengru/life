import { Row } from "./Row";

import "../../table.css";
import { useLife } from "../../providers/lifeProvider";

export const Table = (props: TableProps) => {
  const { changeClicked } = useLife();
  const { columns, rows } = props;

  const tableElements = Array.from(Array(rows).keys()).map((row) => {
    return <Row key={`row-${row}`} keyId={row} columns={columns} />;
  });

  return (
    <table
      style={{ height: "80%", width: "100%" }}
      onMouseDown={() => changeClicked(true)}
      onMouseUp={() => changeClicked(false)}
    >
      <tbody style={{ width: "800px" }}>{tableElements}</tbody>
    </table>
  );
};
