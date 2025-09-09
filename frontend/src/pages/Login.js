import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
   const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      
     localStorage.setItem("user", JSON.stringify(res.data.user));
     navigate("/dashboard");

    } catch (err) {
      alert("Login failed!");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
