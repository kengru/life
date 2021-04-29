interface RuleProps {
  one: boolean;
  two: boolean;
  three: boolean;
  active: boolean;
}

export const Rule = (props: RuleProps) => {
  const { one, two, three, active } = props;

  return (
    <div className="rule-outline">
      <div className="rule-def-outline">
        <div className={`rule-def ${one ? "on" : "off"}`}></div>
        <div className={`rule-def ${two ? "on" : "off"}`}></div>
        <div className={`rule-def ${three ? "on" : "off"}`}></div>
      </div>
      <div className="rule-state-outline">
        <div className={`rule-state ${active ? "on" : "off"}`}></div>
      </div>
      <span className="rule-active">{active ? "1" : "0"}</span>
    </div>
  );
};
