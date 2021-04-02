import {
  useState,
  useContext,
  useCallback,
  createContext,
  FunctionComponent,
} from "react";
import { useInterval } from "../hooks/useInterval";
import { generateInitialLife } from "../utils/modification";
import { nextGen, countLive } from "../utils/game-of-life";

interface IContext {
  speed: number;
  generation: number;
  alive: number;
  dead: number;
  clicked: boolean;
  lifeState: boolean[][];
  playState: PlayState;
  dimensions: Dimensions;
  setSpeed: (speed: number) => void;
  setDimensions: (rows: number, columns: number) => void;
  changePlayState: (state: PlayState) => void;
  changeState: (i: number, j: number) => void;
  changeClicked: (click: boolean) => void;
}

const LifeContext = createContext<IContext>({
  speed: 100,
  generation: 0,
  alive: 0,
  dead: 0,
  clicked: false,
  lifeState: [],
  playState: "stopped",
  dimensions: {
    i: 15,
    j: 30,
  },
  setSpeed: () => {},
  setDimensions: () => {},
  changePlayState: () => {},
  changeState: () => {},
  changeClicked: () => {},
});

export const LifeProvider: FunctionComponent = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [lifeState, setLifeState] = useState<boolean[][]>(
    generateInitialLife(15, 30)
  );
  const [playState, setPlayState] = useState<PlayState>("stopped");
  const [dimensions, setD] = useState<Dimensions>({ i: 15, j: 30 });
  const [speed, setSpeed] = useState(100);
  const [generation, setGeneration] = useState(0);
  const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);

  const setDimensions = useCallback((rows: number, columns: number) => {
    setLifeState(generateInitialLife(rows, columns));
    setD({ i: rows, j: columns });
  }, []);

  const changeState = useCallback(
    (i: number, j: number) => {
      const newGameState = [...lifeState];
      newGameState[i][j] = !lifeState[i][j];
      setLifeState(newGameState);
    },
    [lifeState]
  );

  useInterval(
    () => {
      setLifeState((prevState) => nextGen(prevState));
      setGeneration((prevGen) => prevGen + 1);
      const count = countLive(lifeState);
      setAlive(count.alive);
      setDead(count.dead);
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
        clicked,
        lifeState,
        playState,
        dimensions,
        setSpeed: setSpeed,
        setDimensions: setDimensions,
        changePlayState: setPlayState,
        changeClicked: setClicked,
        changeState,
      }}
    >
      {children}
    </LifeContext.Provider>
  );
};

export function useLife() {
  return useContext(LifeContext);
}
