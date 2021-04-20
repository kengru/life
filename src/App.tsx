import { ElementaryCA } from "./containers/ElementaryCA";
// import { Life } from "./containers/Life";
import { LifeProvider } from "./providers/lifeProvider";

import "./styles.css";

export const App = () => {
  return (
    <LifeProvider>
      {/* <Life /> */}
      <ElementaryCA />
    </LifeProvider>
  );
};
