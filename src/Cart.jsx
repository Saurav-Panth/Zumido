import React from "react";
import "./about.css"
import "./product.css";

const Cart = () => {
  return(
  <div>
      <nav className="navbar">
        <div className="logo">ZUMIDO</div>
        <ul className="nav-links">
          <li><a href="/product">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/cart">CART</a></li>
        </ul>
      </nav>

      <div className="cart-container">
        <p>
        The backend server is yet to be built. 
        <br></br>
        <img src="sorry.gif"></img>
        </p>
      </div>

    </div>  
  );
};

export default Cart
