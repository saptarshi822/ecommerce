
import "./App.css";
import HomePage from "./views/Homepage.jsx";
import About from "./views/About.jsx";
import CartPage from "./views/CartPage.jsx";
import {
  Route,
  Routes,
} from "react-router-dom";
import ProductListPage from "./views/ProductListPage.jsx";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About /> } />
        <Route path = "/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
