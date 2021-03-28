import {
  useState,
  useContext,
  useCallback,
  createContext,
  FunctionComponent
} from "react";
import { useInterval } from "../hooks/useInterval";
import { generateInitialLife } from "../utils/modification";
import { nextGen } from "../utils/game-of-life";

interface IContext {
  clicked: boolean;
  lifeState: boolean[][];
  playState: PlayState;
  dimensions: Dimensions;
  setDimensions: (rows: number, columns: number) => void;
  changePlayState: (state: PlayState) => void;
  changeState: (i: number, j: number) => void;
  changeClicked: (click: boolean) => void;
}

const LifeContext = createContext<IContext>({
  clicked: false,
  lifeState: [],
  playState: "stopped",
  dimensions: {
    i: 15,
    j: 30
  },
  setDimensions: () => {},
  changePlayState: () => {},
  changeState: () => {},
  changeClicked: () => {}
});

export const LifeProvider: FunctionComponent = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [lifeState, setLifeState] = useState<boolean[][]>(
    generateInitialLife(15, 30)
  );
  const [playState, setPlayState] = useState<PlayState>("stopped");
  const [dimensions, setD] = useState<Dimensions>({ i: 15, j: 30 });

  const setDimensions = useCallback((rows: number, columns: number) => {
    setD({ i: rows, j: columns });
    setLifeState(generateInitialLife(rows, columns));
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
    },
    playState === "playing" ? 100 : null
  );

  return (
    <LifeContext.Provider
      value={{
        clicked,
        lifeState,
        playState,
        dimensions,
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
