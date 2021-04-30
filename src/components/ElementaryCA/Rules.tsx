import { Rule } from "./Rule";

export const Rules = () => {
  return (
    <div className="rules">
      <Rule ruleKey={"0 0 0"} />
      <Rule ruleKey={"0 0 1"} />
      <Rule ruleKey={"0 1 0"} />
      <Rule ruleKey={"0 1 1"} />
      <Rule ruleKey={"1 0 0"} />
      <Rule ruleKey={"1 0 1"} />
      <Rule ruleKey={"1 1 0"} />
      <Rule ruleKey={"1 1 1"} />
    </div>
  );
};
