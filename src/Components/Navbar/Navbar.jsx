import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/about" data-testid="aboutLink">
        About{" "}
      </Link>
      <Link to="/" data-testid="productsLink">
        Products{" "}
      </Link>
    </nav>
  );
}
