import React from "react";
import { NavLink } from "react-router-dom";

import service1 from "../assets/images/1.jpeg";
import service2 from "../assets/images/2.jpeg";
import service3 from "../assets/images/3.jpeg";

const Services = () => {
  return (
    <div>
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

      {/* Main Content */}
      <div className="container my-5">
        <h1>Our Services</h1>
        <ul>
          <li>24/7 Surveillance</li>
          <li>Alarm Systems</li>
          <li>Access Control</li>
          <li>Cybersecurity Solutions</li>
        </ul>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={service1} className="card-img-top" alt="Surveillance" />
              <div className="card-body">
                <h5 className="card-title">24/7 Surveillance</h5>
                <p className="card-text">
                  Stay secure with our advanced surveillance systems.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={service2}
                className="card-img-top"
                alt="Alarm Systems"
              />
              <div className="card-body">
                <h5 className="card-title">Alarm Systems</h5>
                <p className="card-text">
                  Our alarms ensure immediate response to any threats.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={service3}
                className="card-img-top"
                alt="Access Control"
              />
              <div className="card-body">
                <h5 className="card-title">Access Control</h5>
                <p className="card-text">
                  Secure your premises with our smart access control systems.
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
                  <a href="services.html" className="text-light">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="products.html" className="text-light">
                    Products
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="text-light">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="text-light">
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

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Services;
