import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext); // Access Auth State
  const location = useLocation(); // Get current route

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/stockgrow.png" alt="StockGrow Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["about", "product", "pricing", "support"].map((item) => (
              <li className="nav-item" key={item}>
                <Link 
                  className={`nav-link ${location.pathname === `/${item}` ? "active" : ""}`} 
                  to={`/${item}`}
                  aria-current={location.pathname === `/${item}` ? "page" : undefined}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
