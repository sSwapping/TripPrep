import { Button } from "./Button";

export const AddItemForm = () => {
  return (
    <form>
      <h2>Add an Item</h2>
      <input type='text' />
      <Button>Add to List</Button>
    </form>
  );
};
