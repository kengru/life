import { Rules } from "./Rules";
import { Button } from "../UI/Button";

export const Home = () => (
  <div>
    <div className="elementaryFront">
      <p className="elementaryTitle">Ken's Cellular Automata 1D</p>
      <p className="elementarySubtitle">Define a rule for each thing</p>
    </div>
    {/* <Canvas /> */}
    <Rules />
    <p className="elementaryRuleNumber">Rule 30</p>
    <div className="elementaryStart">
      <Button type="start" action={() => {}} />
    </div>
  </div>
);
