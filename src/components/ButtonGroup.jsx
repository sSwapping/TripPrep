import { buttons } from "../lib/constants";
import { Button } from "./Button";

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
