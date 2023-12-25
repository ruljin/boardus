import { Input } from "../../../components/Input/Input";
import { Label } from "../../../components/Label/Label";

const ID_AND_NAME = "maximumNumberOfPlayers";

export const MaximumNumberOfPlayersInput = () => (
  <>
    <Label>Maximum Number of Players</Label>
    <Input
      id={ID_AND_NAME}
      type="number"
      name={ID_AND_NAME}
      placeholder="Maximum number of players"
    />
  </>
);
