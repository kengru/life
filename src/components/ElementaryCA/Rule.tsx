import { useCAOne } from "../../providers/caOneProvider";

interface RuleProps {
  ruleKey: string;
}

const stringToBool = (str: string) => (str === "1" ? true : false);

export const Rule: React.FC<RuleProps> = (props) => {
  const { ruleKey } = props;
  const { rules, changeActive } = useCAOne();
  const state = ruleKey.split(" ");

  return (
    <div
      className="rule-outline"
      onClick={() => changeActive(ruleKey, !rules[ruleKey])}
    >
      <div className="rule-def-outline">
        <div
          className={`rule-def ${stringToBool(state[0]) ? "on" : "off"}`}
        ></div>
        <div
          className={`rule-def ${stringToBool(state[1]) ? "on" : "off"}`}
        ></div>
        <div
          className={`rule-def ${stringToBool(state[2]) ? "on" : "off"}`}
        ></div>
      </div>
      <div className="rule-state-outline">
        <div className={`rule-state ${rules[ruleKey] ? "on" : "off"}`}></div>
      </div>
      <span className="rule-active">{rules[ruleKey] ? "1" : "0"}</span>
    </div>
  );
};
