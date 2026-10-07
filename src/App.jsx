import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;