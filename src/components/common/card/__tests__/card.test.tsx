import { screen, render, fireEvent } from "@testing-library/react";
import Card from "../index";

it("test card hovered content", async () => {
  const CARD_TEXT = "Dumy card text";
  render(<Card hoveredContent={<>{CARD_TEXT}</>} />);
  let cardElement = await screen.findByTestId("card");
  fireEvent.mouseEnter(cardElement);

  expect(screen.getByText(CARD_TEXT)).toBeInTheDocument();
  fireEvent.mouseLeave(cardElement);
  expect(screen.getByText(CARD_TEXT)).not.toBeVisible();
});
