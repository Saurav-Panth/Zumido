import React from "react";
import "./about.css"

const About = () => {
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


      <div className="about-container">
        <p>
          <u>ZUMIDO</u> is your one-stop online destination for high-quality gaming gear and accessories. 
          Our mission is to provide gamers of all levels with the tools they need to level up their experience. 
          From gaming mice and keyboards to VR headsets and streaming gear, we offer a wide variety of 
          handpicked products that blend performance, comfort, and style. Built using modern web technologies 
          like React and Vite, this site ensures a seamless, fast, and interactive shopping experience. 
          Our team is passionate about gaming and is dedicated to keeping you equipped with the best the 
          industry has to offer.
        </p>
      </div>
    </div>  
  );
}

export default About;