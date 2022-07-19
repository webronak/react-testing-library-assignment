import { screen, render } from "@testing-library/react";
import Text from "../index";
import { ThemeProvider } from "styled-components";
import theme from "../../../../constants/css/theme";

const MockText = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text color="green" variant="h1">
        Dummy text
      </Text>
    </ThemeProvider>
  );
};

it("typography children test", () => {
  render(<MockText />);
  const typographyElement = screen.getByRole("heading");
  expect(typographyElement.tagName).toBe("H1");
  expect(typographyElement).toHaveStyle(`color: green`);
});
