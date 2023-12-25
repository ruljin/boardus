import type { Game } from "../models/game";
import type { RandomizerFormData } from "../models/randomizerFormData";
import { useState, createContext, PropsWithChildren } from "react";
import { GAMES } from "../constants/games";
import { checkIsGameTypeValid } from "../modules/randomizer/helpers/checkIsGameTypeValid";
import { checkIsGameCategoryValid } from "../modules/randomizer/helpers/checkIsGameCategoryValid";
import { checkIsGameMechanicsValid } from "../modules/randomizer/helpers/checkIsGameMechanicsValid";

export interface GameRandomizerContextProps {
  randomizedGame: Game | null;
  drawAGame: (formData: RandomizerFormData) => void;
}

export const GameRandomizerContext =
  createContext<GameRandomizerContextProps | null>(null);

export const GameRandomizerProvider = ({ children }: PropsWithChildren) => {
  const [randomizedGame, setRandomizedGame] = useState<Game | null>(null);

  const drawAGame = (formData: RandomizerFormData) => {
    const {
      type,
      minimumNumberOfPlayers,
      maximumNumberOfPlayers,
      category,
      mechanics
    } = formData;

    const filteredGames = GAMES.filter((game) => {
      const isGameTypeValid = checkIsGameTypeValid(game.type, type);
      const isMinimalNumberOfPlayersValid = minimumNumberOfPlayers
        ? game.minimumNumberOfPlayers === minimumNumberOfPlayers
        : true;
      const isMaximumNumberOfPlayersValid = maximumNumberOfPlayers
        ? game.maximumNumberOfPlayers === maximumNumberOfPlayers
        : true;
      const isGameCategoryValid = checkIsGameCategoryValid(
        game.category,
        category
      );
      const isGameMechanicsValid = checkIsGameMechanicsValid(
        game.mechanics,
        mechanics
      );
      const isGameMeetingConditions =
        isGameTypeValid &&
        isMinimalNumberOfPlayersValid &&
        isMaximumNumberOfPlayersValid &&
        isGameCategoryValid &&
        isGameMechanicsValid;

      return isGameMeetingConditions;
    });

    const drawnGameIndex = Math.floor(Math.random() * filteredGames.length);

    setRandomizedGame(filteredGames[drawnGameIndex]);
  };

  return (
    <GameRandomizerContext.Provider value={{ randomizedGame, drawAGame }}>
      {children}
    </GameRandomizerContext.Provider>
  );
};
