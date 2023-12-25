import { Label } from "../../../components/Label/Label";
import { Select } from "../../../components/Select/Select";
import { GAME_TYPE } from "../../../constants/options";

const ID_AND_NAME = "type";

export const GameTypeSelect = () => (
  <>
    <Label htmlFor={ID_AND_NAME}>Game Type</Label>
    <Select id={ID_AND_NAME} name={ID_AND_NAME} multiple>
      {GAME_TYPE.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </>
);
