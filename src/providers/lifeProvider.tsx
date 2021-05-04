import {
  useState,
  useContext,
  useCallback,
  createContext,
  FunctionComponent
} from "react";
import { useInterval } from "../hooks/useInterval";
import { generateInitialLife } from "../utils/modification";
import { nextGen, countLive } from "../utils/game-of-life";

interface IContext {
  speed: number;
  generation: number;
  alive: number;
  dead: number;
  born: number;
  died: number;
  clicked: boolean;
  lifeState: boolean[][];
  playState: PlayState;
  dimensions: Dimensions;
  setSpeed: (speed: number) => void;
  setDimensions: (rows: number, columns: number) => void;
  changePlayState: (state: PlayState) => void;
  changeState: (i: number, j: number, value: boolean) => void;
  changeClicked: (click: boolean) => void;
}

const LifeContext = createContext<IContext>({
  speed: 100,
  generation: 0,
  alive: 0,
  dead: 0,
  born: 0,
  died: 0,
  clicked: false,
  lifeState: [],
  playState: "cleared",
  dimensions: {
    i: 30,
    j: 45
  },
  setSpeed: () => {},
  setDimensions: () => {},
  changePlayState: () => {},
  changeState: () => {},
  changeClicked: () => {}
});

export const LifeProvider: FunctionComponent = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [lifeState, setLifeState] = useState<boolean[][]>(
    generateInitialLife(30, 45)
  );
  const [playState, setPlayState] = useState<PlayState>("cleared");
  const [dimensions, setD] = useState<Dimensions>({ i: 30, j: 45 });
  const [speed, setSpeed] = useState(100);
  const [generation, setGeneration] = useState(0);
  const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);
  const [born, setBorn] = useState(0);
  const [died, setDied] = useState(0);

  const setDimensions = useCallback((rows: number, columns: number) => {
    setLifeState(generateInitialLife(rows, columns));
    setD({ i: rows, j: columns });
    setGeneration(0);
    setAlive(0);
    setDead(0);
    setBorn(0);
    setDied(0);
    setPlayState("cleared");
  }, []);

  const changeState = useCallback(
    (i: number, j: number, value: boolean) => {
      const newGameState = [...lifeState];
      newGameState[i][j] = value;
      setLifeState(newGameState);
    },
    [lifeState]
  );

  useInterval(
    () => {
      const genInfo = nextGen(lifeState);
      setLifeState(genInfo.nextGen);
      setGeneration((prevGen) => prevGen + 1);
      const count = countLive(lifeState);
      setAlive(count.alive);
      setDead(count.dead);
      setBorn(genInfo.born);
      setDied(genInfo.died);
    },
    playState === "playing" ? speed : null
  );

  return (
    <LifeContext.Provider
      value={{
        speed,
        generation,
        alive,
        dead,
        born,
        died,
        clicked,
        lifeState,
        playState,
        dimensions,
        setSpeed: setSpeed,
        setDimensions: setDimensions,
        changePlayState: setPlayState,
        changeClicked: setClicked,
        changeState
      }}
    >
      {children}
    </LifeContext.Provider>
  );
};

export function useLife() {
  return useContext(LifeContext);
}
