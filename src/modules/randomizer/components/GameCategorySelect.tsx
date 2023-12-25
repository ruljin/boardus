import { Label } from "../../../components/Label/Label";
import { Select } from "../../../components/Select/Select";
import { GAME_CATEGORY } from "../../../constants/options";

const ID_AND_NAME = "category";

export const GameCategorySelect = () => (
  <>
    <Label htmlFor={ID_AND_NAME}>Game Category</Label>
    <Select id={ID_AND_NAME} name={ID_AND_NAME} multiple>
      {GAME_CATEGORY.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </>
);
