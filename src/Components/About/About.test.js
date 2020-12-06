import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders text", () => {
  render(<About />);
  const text = screen.getByText(/about/i);
  expect(text).toBeInTheDocument();
});
