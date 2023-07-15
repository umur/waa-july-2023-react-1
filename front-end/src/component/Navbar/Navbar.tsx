import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../module/public/auth/service/auth.service";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/private">
          <span className="mx-2">
            <img
              style={{
                width: "30px",
              }}
              src="/favicon.ico"
              alt="React icon"
            />
          </span>
          <span>React Lab</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                onClick={() => {
                  authService.logout();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
