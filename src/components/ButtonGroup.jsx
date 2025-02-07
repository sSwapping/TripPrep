import { Button } from "./Button";

const buttons = [
  { type: "secondary", text: "Mark all as complete" },
  { type: "secondary", text: "Mark all as incomplete" },
  { type: "secondary", text: "Reset to initial" },
  { type: "secondary", text: "Remove all items" },
];

export const ButtonGroup = () => {
  return (
    <section>
      {buttons.map((button) => (
        <Button key={button.text} type={button.type}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};
