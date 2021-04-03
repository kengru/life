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
  borned: number;
  died: number;
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
  speed: 200,
  generation: 0,
  alive: 0,
  dead: 0,
  borned: 0,
  died: 0,
  clicked: false,
  lifeState: [],
  playState: "stopped",
  dimensions: {
    i: 30,
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
  const [dimensions, setD] = useState<Dimensions>({ i: 30, j: 30 });
  const [speed, setSpeed] = useState(200);
  const [generation, setGeneration] = useState(0);
  const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);
  const [borned, setBorned] = useState(0);
  const [died, setDied] = useState(0);

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
      const genInfo = nextGen(lifeState);
      setLifeState(genInfo.nextGen);
      setGeneration((prevGen) => prevGen + 1);
      const count = countLive(lifeState);
      setAlive(count.alive);
      setDead(count.dead);
      setBorned(genInfo.borned);
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
        borned,
        died,
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
