import { useGameRandomizer } from "../../context/useGameRandomizer";
import { Card } from "../../components/Card/Card";
import { DrawnGame } from "./components/DrawnGame";

import styles from "./Game.module.css";

// https://www.codementor.io/@zmitry/react-app-structure-by-feature-guidelines-10wnfwp9eh
export const Game = () => {
  const { randomizedGame } = useGameRandomizer();

  return (
    <Card>
      <Card.Header>{randomizedGame ? randomizedGame.name : "Game"}</Card.Header>
      <Card.Body>
        <div className={styles.game__wrapper}>
          {randomizedGame ? (
            <DrawnGame game={randomizedGame} />
          ) : (
            <>No game has been drawn yet.</>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
