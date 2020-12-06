import React, { Component } from "react";
import "./Products.css";

export default class Products extends Component {
  render() {
    return (
      <tr className="Products">
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.quantity}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
