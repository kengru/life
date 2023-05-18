import { Cell } from "./Cell";

export const Row = (props: RowProps) => {
  const { columns, keyId } = props;

  const tableElements = (
    <tr>
      {Array.from(Array(columns).keys()).map((column) => (
        <Cell key={`row-${keyId}-column-${column}`} i={keyId} j={column} />
      ))}
    </tr>
  );

  return tableElements;
};
