import {
  useState,
  useContext,
  useCallback,
  createContext,
  FunctionComponent
} from "react";
import { generateInitial } from "../utils/modification";
import { nextGen } from "../utils/game";

interface IContext {
  gameState: boolean[][];
  playState: PlayState;
  dimensions: Dimensions;
  changePlay: (state: PlayState) => void;
  setDimensions: (rows: number, columns: number) => void;
  changeState: (i: number, j: number) => void;
}

const GameContext = createContext<IContext>({
  gameState: [],
  playState: "stopped",
  dimensions: {
    i: 15,
    j: 30
  },
  changePlay: () => {},
  setDimensions: () => {},
  changeState: () => {}
});

export const GameProvider: FunctionComponent = ({ children }) => {
  const [gameState, setGameState] = useState<boolean[][]>(
    generateInitial(15, 30)
  );
  const [playState, setPlayState] = useState<PlayState>("stopped");
  const [dimensions, setD] = useState<Dimensions>({ i: 15, j: 30 });
  const [intervalId, setIntervalId] = useState<number>(0);

  const setDimensions = useCallback((rows: number, columns: number) => {
    console.log("prov ", rows, columns);
    setD({ i: rows, j: columns });
    setGameState(generateInitial(rows, columns));
  }, []);

  const changeState = useCallback(
    (i: number, j: number) => {
      const newGameState = [...gameState];
      newGameState[i][j] = !gameState[i][j];
      setGameState(newGameState);
    },
    [gameState]
  );

  const startPlay = useCallback(
    (state: PlayState) => {
      setPlayState(state);
      if (state === "playing") {
        const intId = window.setInterval(
          () => setGameState(nextGen(gameState)),
          100
        );
        setIntervalId(intId);
      } else {
        clearInterval(intervalId);
      }
    },
    [gameState, intervalId]
  );

  return (
    <GameContext.Provider
      value={{
        gameState,
        playState,
        dimensions,
        changePlay: startPlay,
        setDimensions: setDimensions,
        changeState
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGame() {
  return useContext(GameContext);
}
