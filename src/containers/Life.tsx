import { Table } from "../components/Life/Table";
import { SideConfig } from "../containers/SideConfig";
import { useLife } from "../providers/lifeProvider";

export const Life = () => {
  const { dimensions } = useLife();

  return (
    <div className="whole">
      <SideConfig />
      <Table rows={dimensions.i} columns={dimensions.j} />
    </div>
  );
};
