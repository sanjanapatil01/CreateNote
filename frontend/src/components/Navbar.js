import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#3d2a2a",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left side - Logo / Dashboard link */}
      <div>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          CreateNote
        </Link>
      </div>

      {/* Right side - Conditional login/register OR user + logout */}
      <div>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ color: "white" }}>👤 {user.name}</span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#5a3d3d",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "15px" }}>
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
