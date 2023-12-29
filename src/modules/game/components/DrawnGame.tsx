import type { Game } from "../../../models/game";
import { Paragraph } from "../../../components/Paragraph/Paragraph";

import styles from "../Game.module.css";

export interface DrawnGameProps {
  game: Game;
}

export const DrawnGame = ({ game }: DrawnGameProps) => (
  <div className={styles.game}>
    <img className={styles.game__image} src={game.imageUrl} />
    <Paragraph>
      Number of players: {game.minimumNumberOfPlayers} -{" "}
      {game.maximumNumberOfPlayers}
    </Paragraph>
    <Paragraph textAlign="center">{game.description}</Paragraph>
  </div>
);
