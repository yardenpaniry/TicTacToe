import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://server.lottonline.co.il/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.status === 200) {
        let res = await response.json();
        setToken(res.token);

        navigate("/TicTacToe");
      } else {
        alert("user/password incorrect");
      }
    } catch (error) {}
  };

  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <div className="XOdisplay Login">
          <div style={{ color: "#ffc860" }}>O</div>
          <div style={{ color: "#31C3BD" }}>X</div>
        </div>
        <h1 className="LoginPageTitle">Login</h1>
        <form className="LoginForm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="LoginSubmit" type="submit">
            Login
          </button>
          <button className="LoginSignup" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
