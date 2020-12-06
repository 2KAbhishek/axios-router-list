import { render, screen } from "@testing-library/react";
import productsJson from "../../db.json";
import ProductsList from "./ProductsList";

test("renders table", () => {
  render(<ProductsList products={productsJson.products} />);
  const productsTable = screen.getByTestId("productsTable");
  expect(productsTable).toBeInTheDocument();
});

test("table contains table headers", () => {
  render(<ProductsList products={productsJson.products} />);
  const productsTable = screen.getByTestId("productsTable");
  const nameHeader = screen.getByText(/Name/i);
  expect(productsTable).toContainElement(nameHeader);
});
