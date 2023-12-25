import { Label } from "../../../components/Label/Label";
import { Select } from "../../../components/Select/Select";
import { GAME_MECHANICS } from "../../../constants/options";

const ID_AND_NAME = "mechanics";

export const GameMechanicsSelect = () => (
  <>
    <Label htmlFor={ID_AND_NAME}>Game Mechanics</Label>
    <Select id={ID_AND_NAME} name={ID_AND_NAME} multiple>
      {GAME_MECHANICS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </>
);
