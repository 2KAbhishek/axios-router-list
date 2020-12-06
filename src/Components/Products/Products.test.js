import { render, screen } from "@testing-library/react";
import Products from "./Products";
import productsJson from "../../db.json";

test("renders heading", () => {
  let product = productsJson.products[2];
  render(<Products key={product.id} product={product} />);
  const thinkpad = screen.getByText(/Think/i);
  expect(thinkpad).toBeInTheDocument();
});
