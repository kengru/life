import { Rule } from "./Rule";

interface IRulesProps {
  started: boolean;
}

export const Rules: React.FC<IRulesProps> = (props) => {
  const { started } = props;

  return (
    <div className={`rules ${started ? "rules-playing" : ""}`}>
      <Rule ruleKey={"1 1 1"} />
      <Rule ruleKey={"1 1 0"} />
      <Rule ruleKey={"1 0 1"} />
      <Rule ruleKey={"1 0 0"} />
      <Rule ruleKey={"0 1 1"} />
      <Rule ruleKey={"0 1 0"} />
      <Rule ruleKey={"0 0 1"} />
      <Rule ruleKey={"0 0 0"} />
    </div>
  );
};
