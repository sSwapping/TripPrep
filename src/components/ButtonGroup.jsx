import { Button } from "./Button";

const buttons = [
  { text: "Mark all as complete" },
  { text: "Mark all as incomplete" },
  { text: "Reset to initial" },
  { text: "Remove all items" },
];

export const ButtonGroup = () => {
  return (
    <section>
      {buttons.map((button) => (
        <Button key={button.text} type={"secondary"}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};
