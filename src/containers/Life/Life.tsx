import { Table } from "../../components/Life/Table";
import { SideConfig } from "./SideConfig";
import { LifeProvider, useLife } from "../../providers/lifeProvider";

import "./Life.css";

export function Life() {
  const { dimensions } = useLife();

  return (
    <LifeProvider>
      <div className="whole">
        <SideConfig />
        <Table rows={dimensions.i} columns={dimensions.j} />
      </div>
    </LifeProvider>
  );
};
