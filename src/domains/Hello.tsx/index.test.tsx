import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from ".";

describe("Home", () => {
  it("Hello 가 화면에 출력되어야 합니다.", () => {
    render(<Hello />);

    const home = screen.getByText("Hello");

    expect(home).toBeInTheDocument();
  });
});
