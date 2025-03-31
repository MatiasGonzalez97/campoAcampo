import "./App.css";
import CreateProduct from "./components/Product/CreateProduct";
import ShowProducts from "./components/Product/ShowProduct";
import { Route, Routes } from "react-router-dom";
import EditProduct from "./components/Product/EditProduct";
import Product from "./components/Product/Product";
import Header from "./components/Common/Header";
function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
          
            <Route path="/" element={<ShowProducts />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/show-product" element={<ShowProducts />} />
          </Routes>
          
        </div>
      </header>
    </div>
  );
}

export default App;
