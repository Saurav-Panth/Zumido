import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (password.length < 8) {
      setError("Password should be at least 8 characters long.");
      alert("Password should be at least 8 characters long.");
      return;
    }

    // Password matching validation
    if (password !== rePassword) {
      setError("Passwords do not match.");
      alert("Passwords do not match.");
      return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      alert("Please enter a valid email address.");
      return;
    }

    // Save data to localStorage
    const userData = {
      username,
      password,
      email,
      phone,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Navigate back to login page
    navigate("/");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
