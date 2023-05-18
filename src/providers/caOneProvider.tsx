import {
  useState,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren
} from "react";
import { initialRules } from "../utils/cellular-one";

interface IContext {
  playing: PlayState;
  ruleNumber: number;
  rules: Record<string, boolean>;
  changeActive: (key: string, value: boolean) => void;
  changePlaying: (playingState: PlayState) => void;
}

const CAOneContext = createContext<IContext>({
  playing: "stopped",
  ruleNumber: 30,
  rules: initialRules,
  changeActive: () => { },
  changePlaying: () => { }
});

export function CAOneProvider({ children }: PropsWithChildren) {
  const [playing, setPlaying] = useState<PlayState>("stopped");
  const [ruleNumber, setRuleNumber] = useState(30);
  const [rules, setRules] = useState(initialRules);

  const changeActive = useCallback(
    (key: string, value: boolean) => {
      setRules({
        ...rules,
        [key]: value
      });
      const binStr = Object.keys(rules)
        .reduce((prev, current) => {
          const ruleValue =
            current === key ? (value ? "1" : "0") : rules[current] ? "1" : "0";
          return `${prev}${ruleValue}`;
        }, "")
        .split("")
        .reverse()
        .join("");
      console.log(binStr);
      setRuleNumber(parseInt(binStr, 2));
    },
    [rules]
  );

  const changePlaying = useCallback(
    (playingState: PlayState) => {
      setPlaying(playingState);
    },
    [setPlaying]
  );

  return (
    <CAOneContext.Provider
      value={{
        playing,
        ruleNumber,
        rules,
        changeActive,
        changePlaying
      }}
    >
      {children}
    </CAOneContext.Provider>
  );
};

export function useCAOne() {
  return useContext(CAOneContext);
}
