import { Fragment } from "react";
import { Rules } from "./Rules";
import { Button } from "../UI/Button";

export const Canvas = () => (
  <Fragment>
    <div className="elementaryFront">
      <p className="elementaryTitle">Ken's Cellular Automata 1D</p>
      <p className="elementarySubtitle">Define a rule for each thing</p>
    </div>
    <Rules />
    <p className="elementaryRuleNumber">Rule 30</p>
    <div className="elementaryStart">
      <Button type="start" action={() => {}} />
    </div>
  </Fragment>
);
