import { LifeProvider } from "./providers/lifeProvider";
// import { CAOneProvider } from "./providers/caOneProvider";
import { Life } from "./containers/Life/Life";
// import { ElementaryCA } from "./containers/ElementaryCA/ElementaryCA";

import "./styles.css";

export function App() {
  return (
    <LifeProvider>
      <Life />
    </LifeProvider>
  );
};

