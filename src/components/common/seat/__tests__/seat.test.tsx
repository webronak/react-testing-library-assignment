import { screen, render } from "@testing-library/react";
import Seat from "../index";

it("seat tests", () => {
    render(<Seat type="disabled" />);
    let seatElement = screen.getByTestId("seatTest");
    expect(seatElement).toBeInTheDocument();
});
