import About from "./Components/About/About";
import AllProductsPage from "./Components/AllProductsPage/AllProductsPage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <AllProductsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
