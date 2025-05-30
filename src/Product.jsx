import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Gaming Mouse",
    img: "/mouse.jpeg",
    text: "High performance mice built for speed, precision, and additional programmable buttons for competitive gameplay.",
  },
  {
    title: "Gaming Keyboard",
    img: "/gaming-keyboard.jpg",
    text: "Designed to improve your gaming experience with fast response keys and enhanced ergonomics.",
  },
  {
    title: "Gaming Headset",
    img: "/gaming-headset.jpg",
    text: "Offers stereo and simulated 7.1 surround sound for immersive audio with a built-in microphone.",
  },
  {
    title: "Gaming Monitor",
    img: "/monitor.jpeg",
    text: "Fast refresh rates, low input lag, and high resolutions for smooth and stunning visuals.",
  },
  {
    title: "Gaming Controller",
    img: "/controller.avif",
    text: "A responsive and ergonomic input device used for immersive gaming across platforms.",
  },
  {
    title: "Gaming Chair",
    img: "/Chair.jpg",
    text: "Ergonomic design offering lumbar support and comfort for long gaming sessions.",
  },
  {
    title: "Gaming Laptop",
    img: "/lap.jpg",
    text: "Portable yet powerful machines built for immersive gaming with top-tier specs.",
    
  },
  {
    title: "Gaming PC",
    img: "/pc.jpg",
    text: "A powerful desktop computer tailored for high-performance gaming experiences.",
  },
  {
    title: "VR Headset",
    img: "/vr.jpeg",
    text: "Head-mounted device providing immersive 3D virtual environments with head tracking.",
  },
  {
    title: "Gaming Microphone",
    img: "/mic.jpeg",
    text: "Crystal clear audio input for communication, streaming, or voiceovers during gaming.",
    
  },
  {
    title: "Capture Card",
    img: "/capture.jpeg",
    text: "Capture high-definition gameplay from consoles to your computer for streaming or recording.",
    
  },
  {
    title: "Gaming Mouse Pad",
    img: "/pads.jpeg",
    text: "Smooth and consistent surface for improved mouse tracking during gameplay.",
    
  },
  {
    title: "RGB Light",
    img: "/lgb.jpg",
    text: "Create mood and ambiance with RGB lighting customizable through red, green, and blue hues.",
    
  },
  {
    title: "External Hard Drive/SSD",
    img: "/SDD.jpeg",
    text: "Fast and portable storage device for quick data transfers and game storage.",
    
  },
  {
    title: "Headphones Stand",
    img: "/headset.webp",
    text: "Organizes your desk and protects headphones from cable tangling and damage.",
    
  },
  {
    title: "Gaming Glasses",
    img: "/glasses.jpeg",
    text: "Reduce screen glare and eye strain during long gaming sessions.",
    
  },
  {
    title: "Streaming Webcam",
    img: "/cam.jpeg",
    text: "Ideal for live streaming and video calls with high-definition quality.",
    
  },
  {
    title: "Gaming Foot Pedal",
    img: "/footPedal.webp",
    text: "Trigger macros or controls hands-free for accessibility or enhanced gameplay.",
    
  },
  {
    title: "WiFi Router",
    img: "/router.jpg",
    text: "Essential for high-speed, low-latency internet connectivity during online gaming.",
    
  },
  {
    title: "Gaming Earphones",
    img: "/earphones.jpeg",
    text: "Lightweight, immersive earphones with surround sound for mobile or casual gaming.",
    
  },
];

function Product() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">ZUMIDO</div>
        <ul className="nav-links">
          <li><a href="/product">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/cart">CART</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Welcome to ZUMIDO</h1>
        <br />
      </div>

      <div className="card-container">
        {products.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.text}</p>
              {item.rating && (
                <>
                  <h3>Product Review</h3>
                  <p>Rating: {item.rating}</p>
                </>
              )}
                <Link to={`/product/${index}`} className="card-button">
                  Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
