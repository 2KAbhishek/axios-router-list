import { render, screen } from "@testing-library/react";
import App from "./App";

test("about link works", () => {
  render(<App />);
  const aboutLink = screen.getByTestId("aboutLink");
  aboutLink.click();
  expect(screen.getByText(/about page/i)).toBeInTheDocument();
});

test("products link works", () => {
  render(<App />);
  const productsLink = screen.getByTestId("productsLink");
  productsLink.click();
  expect(screen.getByText(/Products List/i)).toBeInTheDocument();
});
