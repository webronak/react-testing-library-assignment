import { render, screen } from "@testing-library/react";
import Button from "../index";

it("button Prop test", () => {
  const TEXT_CONTENT = "Test Button";
  render(<Button children={TEXT_CONTENT} disabled={true} />);

  let btnElement = screen.getByRole("button");
  expect(btnElement.textContent).toBe(TEXT_CONTENT);
  expect(btnElement).toHaveProperty("disabled", true);
});