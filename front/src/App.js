import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerpage from "./pages/registerpage";
import Loginpage from "./pages/loginpage";
import Products from "./pages/products";
import AddProduct from "./pages/addproduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
