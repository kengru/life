import { Switch, Route } from "react-router-dom";
import { Life } from "./containers/Life/Life";
import { LifeProvider } from "./providers/lifeProvider";
import { ElementaryCA } from "./containers/ElementaryCA/ElementaryCA";

import "./styles.css";

export const App = () => {
  return (
    <Switch>
      <Route path="/life">
        <LifeProvider>
          <Life />
        </LifeProvider>
      </Route>
      <Route path="/1d">
        <ElementaryCA />
      </Route>
    </Switch>
  );
};
