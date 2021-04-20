import { Fragment } from "react";
import { Rule } from "./Rule";

export const Rules = () => {
  return (
    <Fragment>
      <Rule one={true} two={false} three={true} />
      {/* <Rule />
      <Rule /> */}
    </Fragment>
  );
};
