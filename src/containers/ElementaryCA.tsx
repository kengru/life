import _ from "lodash";
import { useState } from "react";
import { Home } from "../components/ElementaryCA/Home";

import { useInterval } from "../hooks/useInterval";
// import { nextGen } from "../utils/cellular-one";
import { genZero } from "../utils/modification";

import "./elementary.css";

export const ElementaryCA = () => {
  const [gens, setGens] = useState<boolean[][]>(genZero(11));

  useInterval(() => {
    const newGen = _.cloneDeep(gens);
    // newGen.push(nextGen(gens.))
    setGens(newGen);
  }, 1200);

  return <Home />;
};
