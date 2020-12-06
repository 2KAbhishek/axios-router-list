import { render, screen } from "@testing-library/react";
import AllProductsPage from "./AllProductsPage";

test("renders heading", () => {
  render(<AllProductsPage />);
  const heading = screen.getByText(/Products List/i);
  expect(heading).toBeInTheDocument();
});
