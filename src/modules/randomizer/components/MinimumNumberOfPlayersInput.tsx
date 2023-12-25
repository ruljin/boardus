import { Input } from "../../../components/Input/Input";
import { Label } from "../../../components/Label/Label";

const ID_AND_NAME = "minimumNumberOfPlayers";

export const MinimumNumberOfPlayersInput = () => (
  <>
    <Label>Minmum Number of Players</Label>
    <Input
      id={ID_AND_NAME}
      type="number"
      name={ID_AND_NAME}
      placeholder="Minimum number of players"
    />
  </>
);
