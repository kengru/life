import { Switch, Route } from "react-router-dom";
import { LifeProvider } from "./providers/lifeProvider";
import { CAOneProvider } from "./providers/caOneProvider";
import { Life } from "./containers/Life/Life";
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
        <CAOneProvider>
          <ElementaryCA />
        </CAOneProvider>
      </Route>
    </Switch>
  );
};
