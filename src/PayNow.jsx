import React, { useEffect } from "react";

function PayNow() {
  useEffect(() => {
    // Clear cart from localStorage on payment
    localStorage.removeItem("cart");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your purchase!</p>
      <img src="/thx.gif"ś
        alt="Success"
        style={{ width: "100px", marginTop: "1rem" }}
      />

      {/* Continue Shopping Button */}
      <div style={{ marginTop: "2rem" }}>
        <a
          href="/product"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#1f2937",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default PayNow;
