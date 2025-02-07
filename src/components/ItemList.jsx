import { Button } from "./Button";

const Item = ({ item }) => {
  return (
    <li>
      <label>
        <input type='checkbox' checked={item.packed} />
        {item.name}
      </label>

      <Button type='delete'>❌</Button>
    </li>
  );
};

export const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
