import "./styles/app.scss"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {Header } from "./component/layout/Header"
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import Contact from "./component/contact/contact";
import Cart from "./component/cart/Cart";
function App() {
  return (
   <Router>
     <Header/>
    <Routes>
     
      <Route path='/' element={<Home></Home>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />


    </Routes>
    <Footer/>

   </Router>
  );
}

export default App;
