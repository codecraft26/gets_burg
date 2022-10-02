import "./styles/app.scss"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {Header } from "./component/layout/Header"
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import Contact from "./component/contact/contact";
import Cart from "./component/cart/Cart";
import {useState,useEffect} from 'react'
import RiseLoader from "react-spinners/GridLoader";
import "./App.css"
function App() {

  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
  

  },[])
  return (
    <div className="app">
      
      {
   loading ? (
    <div className="loader">
        <RiseLoader
        size={50}
        color={"#9C003C"}
        loading={loading}
        />
        <br/>
        <h1>
          Get's Burg
        </h1>
        </div>):
        (
       
     
   <Router>


     <Header/>
    
    <Routes>
     
      <Route path='/' element={<Home></Home>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />


    </Routes>
    <Footer/>


   </Router>
        )}
   </div>
  );
}

export default App;
