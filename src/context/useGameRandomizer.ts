import { useContext } from "react";
import { GameRandomizerContext } from "./GameRandomizer";

export const useGameRandomizer = () => {
  const context = useContext(GameRandomizerContext);

  if (!context) {
    throw Error(
      "Game Randomizer context can be used only inside it's provider!"
    );
  }

  return context;
};
