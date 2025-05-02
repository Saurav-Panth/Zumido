import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePayNow = () => {
    navigate("/pay-now");
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

      <div style={{ padding: "2rem" }}> 

        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p style={{ fontWeight: "bold" }}>₹{item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <h2 style={{ marginTop: "2rem" }}>
              Total Price: ₹{totalPrice.toFixed(2)}
            </h2>
            <button
              onClick={handlePayNow}
              style={{
                marginTop: "1rem",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#1f2937",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Pay Now
            </button>
          </>
          )}
      </div>    
    </div>
  );
}

export default Cart;
