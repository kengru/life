import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

const testingProps: ButtonProps = {
  type: "clear",
  action: () => {}
};

describe("Button", () => {
  test("It renders a Button", () => {
    render(<Button {...testingProps} />);

    expect(screen.getByText("Clear")).toBeInTheDocument();
    // expect(screen.getByRole())
  });
});
