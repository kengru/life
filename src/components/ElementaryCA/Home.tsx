import { Rules } from "./Rules";
import { Button } from "../UI/Button";
import { Canvas } from "./Canvas";
import { useCAOne } from "../../providers/caOneProvider";

export const Home: React.FC = () => {
  const { rules, ruleNumber, playing, changePlaying } = useCAOne();

  if (playing === "stopped") {
    return (
      <div>
        <div className="elementary-front">
          <p className="elementary-title">Ken's Cellular Automata 1D</p>
          <p className="elementary-subtitle">Define a rule for each thing</p>
        </div>
        <Rules />
        <p className="elementary-rule-number">Rule {ruleNumber}</p>
        <div className="elementary-start">
          <Button
            type="start"
            action={() => {
              changePlaying("playing");
            }}
          />
        </div>
      </div>
    );
  }

  return <Canvas rules={rules} />;
};
