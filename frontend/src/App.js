import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscador from "./Components/Product/Buscador";
import Products from "./Components/Product/Products";
import ProductDetails from "./Components/Product/ProductDetails";
import "./App.scss";
import NotFound from "./Components/layout/Not Found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Buscador />
        <Routes>
          <Route path="/" element={<Buscador />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
