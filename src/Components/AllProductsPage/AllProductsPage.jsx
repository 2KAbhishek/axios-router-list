import React, { Component } from "react";
import ProductsList from "../ProductsList/ProductsList";
import "./AllProductsPage.css";
import axios from "axios";

export default class AllProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/products`).then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="AllProductsPage">
        <h1>Products List</h1>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
