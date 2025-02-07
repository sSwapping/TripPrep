import { AddItemForm } from "./AddItemForm";
import { ButtonGroup } from "./ButtonGroup";

export const Sidebar = ({ handleAddItems }) => {
  return (
    <div>
      <AddItemForm handleAddItems={handleAddItems} />
      <ButtonGroup />
    </div>
  );
};
