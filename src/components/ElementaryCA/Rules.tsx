import { Rule } from "./Rule";

export const Rules = () => {
  return (
    <div className="rules">
      <Rule one={true} two={false} three={true} active={true} />
      <Rule one={false} two={true} three={false} active={false} />
      <Rule one={false} two={true} three={false} active={false} />
      <Rule one={false} two={true} three={false} active={true} />
      <Rule one={false} two={true} three={false} active={false} />
      <Rule one={false} two={true} three={false} active={false} />
      <Rule one={false} two={true} three={false} active={true} />
      <Rule one={false} two={true} three={false} active={false} />
    </div>
  );
};
