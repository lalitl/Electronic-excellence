import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  PrivateRoute,
  SingleProduct,
  Products,
  Error,
  Checkout,
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";


function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
