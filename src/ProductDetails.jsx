import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const products = [
  {
    title: "Gaming Mouse",
    img: "/mouse.jpeg",
    text: "High performance mice built for speed, precision, and additional programmable buttons for competitive gameplay.",
    price: 999,
  },
  {
    title: "Gaming Keyboard",
    img: "/gaming-keyboard.jpg",
    text: "Designed to improve your gaming experience with fast response keys and enhanced ergonomics.",
    price: 3999,
  },
  {
    title: "Gaming Headset",
    img: "/gaming-headset.jpg",
    text: "Offers stereo and simulated 7.1 surround sound for immersive audio with a built-in microphone.",
    price: 1900,
  },
  {
    title: "Gaming Monitor",
    img: "/monitor.jpeg",
    text: "Fast refresh rates, low input lag, and high resolutions for smooth and stunning visuals.",
    price: 23000,
  },
  {
    title: "Gaming Controller",
    img: "/controller.avif",
    text: "A responsive and ergonomic input device used for immersive gaming across platforms.",
    price: 4000,
  },
  {
    title: "Gaming Chair",
    img: "/Chair.jpg",
    text: "Ergonomic design offering lumbar support and comfort for long gaming sessions.",
    price: 16000,
  },
  {
    title: "Gaming Laptop",
    img: "/lap.jpg",
    text: "Portable yet powerful machines built for immersive gaming with top-tier specs.",
    price: 100000,
  },
  {
    title: "Gaming PC",
    img: "/pc.jpg",
    text: "A powerful desktop computer tailored for high-performance gaming experiences.",
    price: 150000,
  },
  {
    title: "VR Headset",
    img: "/vr.jpeg",
    text: "Head-mounted device providing immersive 3D virtual environments with head tracking.",
    price: 6999,
  },
  {
    title: "Gaming Microphone",
    img: "/mic.jpeg",
    text: "Crystal clear audio input for communication, streaming, or voiceovers during gaming.",
    price: 4899,
    
  },
  {
    title: "Capture Card",
    img: "/capture.jpeg",
    text: "Capture high-definition gameplay from consoles to your computer for streaming or recording.",
    price: 5000,
    
  },
  {
    title: "Gaming Mouse Pad",
    img: "/pads.jpeg",
    text: "Smooth and consistent surface for improved mouse tracking during gameplay.",
    price: 888,
    
  },
  {
    title: "RGB Light",
    img: "/lgb.jpg",
    text: "Create mood and ambiance with RGB lighting customizable through red, green, and blue hues.",
    price: 7000,
    
  },
  {
    title: "External Hard Drive/SSD",
    img: "/SDD.jpeg",
    text: "Fast and portable storage device for quick data transfers and game storage.",
    price: 2999,
    
  },
  {
    title: "Headphones Stand",
    img: "/headset.webp",
    text: "Organizes your desk and protects headphones from cable tangling and damage.",
    price: 2200,
    
  },
  {
    title: "Gaming Glasses",
    img: "/glasses.jpeg",
    text: "Reduce screen glare and eye strain during long gaming sessions.",
    price: 1200,
    
  },
  {
    title: "Streaming Webcam",
    img: "/cam.jpeg",
    text: "Ideal for live streaming and video calls with high-definition quality.",
    price: 3600,
    
  },
  {
    title: "Gaming Foot Pedal",
    img: "/footPedal.webp",
    text: "Trigger macros or controls hands-free for accessibility or enhanced gameplay.",
    price: 3999,
    
  },
  {
    title: "WiFi Router",
    img: "/router.jpg",
    text: "Essential for high-speed, low-latency internet connectivity during online gaming.",
    price: 5000,
    
  },
  {
    title: "Gaming Earphones",
    img: "/earphones.jpeg",
    text: "Lightweight, immersive earphones with surround sound for mobile or casual gaming.",
    price: 799,
    
  },
];

function ProductDetails() {
  const { id } = useParams();
  const productIndex = parseInt(id, 10);
  const product = products[productIndex];

  const [rating, setRating] = useState(0);
  const [cartMessage, setCartMessage] = useState("");

  if (!product || isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
    return <h2 style={{ padding: "2rem" }}>Product not found</h2>;
  }

  const handleRating = (n) => {
    setRating(n);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartMessage(`${product.title} has been added to your cart!`);
    setTimeout(() => setCartMessage(""), 3000);
  };

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


      <div style={{ padding: "2rem", textAlign: "center" }}>


          <h1>{product.title}</h1>
          <img src={product.img} alt={product.title} style={{ width: "300px", margin: "1rem 0" }} />
          <p style={{ fontSize: "18px" }}>{product.text}</p>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>₹{product.price.toFixed(2)}</p>

          {/* Rating System */}
          <div style={{ marginTop: "2rem" }}>
            <h3>Rate this product:</h3>
            <div style={{ fontSize: "32px", color: "#FFD700", cursor: "pointer" }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  onClick={() => handleRating(n)}
                  style={{
                    color: n <= rating ? "#FFD700" : "#ccc",
                    margin: "0 5px",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <h4 style={{ marginTop: "1rem" }}>Rating is: {rating}/5</h4>
          </div>

          {/* Add to Cart Button */}
          <div style={{ marginTop: "2rem" }}>
            <button id="but"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {cartMessage && (
              <p style={{ marginTop: "1rem", color: "#1f2937", fontWeight: "bold" }}>{cartMessage}</p>
            )}
          </div>
      </div>    
    </div>
  );
}

export default ProductDetails;
