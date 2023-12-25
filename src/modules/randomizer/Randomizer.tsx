import type { FormEvent } from "react";
import { Card } from "../../components/Card/Card";
import { GameTypeSelect } from "./components/GameTypeSelect";
import { MinimumNumberOfPlayersInput } from "./components/MinimumNumberOfPlayersInput";
import { MaximumNumberOfPlayersInput } from "./components/MaximumNumberOfPlayersInput";
import { GameCategorySelect } from "./components/GameCategorySelect";
import { GameMechanicsSelect } from "./components/GameMechanicsSelect";
import { Button } from "../../components/Button/Button";
import styles from "./Randomizer.module.css";
import { getMultipleSelectValues } from "./helpers/getMultipleSelectValues";
import { RandomizerFormData } from "../../models/randomizerFormData";
import { useGameRandomizer } from "../../context/useGameRandomizer";

interface RandomizerFormElements extends HTMLFormControlsCollection {
  type: HTMLSelectElement;
  minimumNumberOfPlayers: HTMLInputElement;
  maximumNumberOfPlayers: HTMLInputElement;
  category: HTMLSelectElement;
  mechanics: HTMLSelectElement;
}

interface RandomizerForm extends HTMLFormElement {
  readonly elements: RandomizerFormElements;
}

export const Randomizer = () => {
  const context = useGameRandomizer();

  const handleSubmit = (event: FormEvent<RandomizerForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData: RandomizerFormData = {
      type: getMultipleSelectValues(target.type.selectedOptions),
      minimumNumberOfPlayers: target.minimumNumberOfPlayers.value
        ? parseInt(target.minimumNumberOfPlayers.value)
        : 0,
      maximumNumberOfPlayers: target.maximumNumberOfPlayers.value
        ? parseInt(target.maximumNumberOfPlayers.value)
        : 0,
      category: getMultipleSelectValues(target.category.selectedOptions),
      mechanics: getMultipleSelectValues(target.mechanics.selectedOptions)
    };

    context.drawAGame(formData);
  };

  return (
    <Card>
      <Card.Header>Game Randomizer</Card.Header>
      <form onSubmit={handleSubmit}>
        <Card.Body>
          <div className={styles.randomizer__wrapper}>
            <GameTypeSelect />
            <MinimumNumberOfPlayersInput />
            <MaximumNumberOfPlayersInput />
            <GameCategorySelect />
            <GameMechanicsSelect />
          </div>
        </Card.Body>
        <Card.Footer>
          <Button>Draw a game</Button>
        </Card.Footer>
      </form>
    </Card>
  );
};
