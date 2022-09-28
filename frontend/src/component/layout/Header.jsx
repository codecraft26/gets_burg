import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import "./header.scss"
import { motion } from "framer-motion";



export const Header = ({isauthenticated=false}) => {
  return (
    <nav>
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
 

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/about"> About </Link>
      
        <Link to="/cart"> <FiShoppingCart/></Link>
        <Link to={isauthenticated?"/me":"/login"}> 
        
        {isauthenticated?<FaUser/>:<FiLogIn/>}</Link>

      </div>
    </nav>
  );
};
