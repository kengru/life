import { Table } from "../components/Life/Table";
import { useLife } from "../providers/lifeProvider";

export const Life = () => {
  const { dimensions } = useLife();

  return <Table rows={dimensions.i} columns={dimensions.j} />;
};
