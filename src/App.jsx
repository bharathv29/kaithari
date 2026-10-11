import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
//import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderDetails from "./pages/OrderDetails";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App(){
  return(  <>

<BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>
  {/*<Route path="/productdetails/:id" element={<ProductDetail/>}/>*/}
     <Route path="/checkout" element={<Checkout/>}/>
<Route path="/orderdetails" element={<OrderDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
  </Routes>
    <Footer/>
  </BrowserRouter>  
  
   </>
  )
}
export default App;
   