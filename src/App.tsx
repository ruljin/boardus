import { Page } from "./layout/Page";
import { Randomizer } from "./modules/randomizer/Randomizer";
import { Game } from "./modules/game/Game";
import "./App.css";

export const App = () => {
  return (
    <Page>
      <Randomizer />
      <Game />
    </Page>
  );
};
