import React, { Component } from "react";
import Products from "../Products/Products";
import "./ProductsList.css";

export default class ProductsList extends Component {
  render() {
    return (
      <div className="ProductsList">
        <table data-testid="productsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
