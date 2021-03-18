import { Row } from "./Row";

export const Table = (props: TableProps) => {
  const { columns, rows } = props;

  const tableElements = Array.from(Array(rows).keys()).map((row) => {
    return <Row key={`row-${row}`} keyId={row} columns={columns} />;
  });

  return (
    <table style={{ height: "80%", width: "100%" }}>
      <tbody style={{ width: "100%" }}>{tableElements}</tbody>
    </table>
  );
};
