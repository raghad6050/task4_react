import React from "react";
import { NavLink } from "react-router-dom";

// Import images
import product1 from "../assets/images/4.jpeg";
import product2 from "../assets/images/5.jpeg";
import product3 from "../assets/images/6.jpeg";
import product4 from "../assets/images/7.jpeg";
import product5 from "../assets/images/8.jpeg";
import product6 from "../assets/images/9.jpeg";

function Products() {
  return (
    <div className="Products">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Branding Link */}
          <NavLink className="navbar-brand" to="/">
            SecuritySystem
          </NavLink>

          {/* Navbar Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/services"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/employment"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  Employment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/faq"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "bold" } : {}
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Our Products</h1>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4">
            <div className="card">
              <img src={product1} className="card-img-top" alt="CCTV Cameras" />
              <div className="card-body">
                <h5 className="card-title">CCTV Cameras</h5>
                <p className="card-text">
                  High-definition surveillance cameras for optimal security.
                </p>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={product2}
                className="card-img-top"
                alt="Motion Sensors"
              />
              <div className="card-body">
                <h5 className="card-title">Motion Sensors</h5>
                <p className="card-text">
                  Detect movements and ensure enhanced safety.
                </p>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4">
            <div className="card">
              <img src={product3} className="card-img-top" alt="Smart Locks" />
              <div className="card-body">
                <h5 className="card-title">Smart Locks</h5>
                <p className="card-text">
                  Keyless entry systems with advanced security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mt-4">
          {/* Product 4 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={product4}
                className="card-img-top"
                alt="Biometric Scanners"
              />
              <div className="card-body">
                <h5 className="card-title">Biometric Scanners</h5>
                <p className="card-text">
                  Secure access with fingerprint or facial recognition
                  technology.
                </p>
              </div>
            </div>
          </div>
          {/* Product 5 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={product5}
                className="card-img-top"
                alt="Alarm Systems"
              />
              <div className="card-body">
                <h5 className="card-title">Alarm Systems</h5>
                <p className="card-text">
                  Instant alerts to deter potential threats and intrusions.
                </p>
              </div>
            </div>
          </div>
          {/* Product 6 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={product6}
                className="card-img-top"
                alt="Security Software"
              />
              <div className="card-body">
                <h5 className="card-title">Security Software</h5>
                <p className="card-text">
                  Advanced tools to monitor and manage your security devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We provide cutting-edge security solutions to protect your home
                and business. Your safety is our priority.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/services" className="text-light">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-light">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-light">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-phone"></i> +1 234 567 890
              </p>
              <p>
                <i className="fas fa-envelope"></i> support@securitysystem.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Secure St, Safe
                City
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Products;
