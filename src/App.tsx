import { Life } from "./containers/Life";
import { SideConfig } from "./containers/SideConfig";
import { LifeProvider } from "./providers/lifeProvider";

import "./styles.css";

export const App = () => {
  return (
    <LifeProvider>
      <div className="whole">
        <SideConfig />
        <Life />
      </div>
    </LifeProvider>
  );
};
