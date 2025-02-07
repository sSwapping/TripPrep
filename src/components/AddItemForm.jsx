import { useState } from "react";
import { Button } from "./Button";

export const AddItemForm = ({ handleAddItems }) => {
  const [itemText, setItemText] = useState("");

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddItems((prevItems) => [
          ...prevItems,
          { id: Date.now(), name: itemText, packed: false },
        ]);
      }}
    >
      <h2>Add an Item</h2>
      <input type='text' value={itemText} onChange={handleChange} />
      <Button>Add to List</Button>
    </form>
  );
};
