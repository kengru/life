interface RuleProps {
  one: boolean;
  two: boolean;
  three: boolean;
}

export const Rule = (props: RuleProps) => {
  const { one, two, three } = props;
  return (
    <div className="ruleOutline">
      <div className={one ? "on" : "off"}></div>
      <div className={two ? "on" : "off"}></div>
      <div className={three ? "on" : "off"}></div>
      <div className="elementaryState"></div>
    </div>
  );
};
