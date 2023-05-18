import { Rules } from "./Rules";
import { Button } from "./CAButton";
import { Canvas } from "./Canvas";
import { useCAOne } from "../../providers/caOneProvider";

export const Home: React.FC = () => {
  const { rules, ruleNumber, playing, changePlaying } = useCAOne();

  const front =
    playing === "stopped" ? (
      <div className="elementary-front">
        <p className="elementary-title">Ken's Cellular Automata 1D</p>
        <p className="elementary-subtitle">Define a rule for each thing</p>
      </div>
    ) : null;

  return (
    <div className="elementary-home">
      {front}
      <Rules started={playing === "playing"} />
      {playing === "playing" ? <Canvas rules={rules} /> : null}
      <p
        className={`elementary-rule-number ${
          playing === "playing" ? "elementary-rule-playing" : ""
        }`}
      >
        Rule {ruleNumber}
      </p>
      <div className="elementary-start">
        <Button
          type={playing === "stopped" ? "start" : "stop"}
          action={() => {
            changePlaying(playing === "stopped" ? "playing" : "stopped");
          }}
        />
      </div>
    </div>
  );
};
