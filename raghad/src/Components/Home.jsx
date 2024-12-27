import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";

// Import images
import heroImage from "../assets/images/17.jpg";
import monitoringImage from "../assets/images/Monitoring.jpg";
import smartImage from "../assets/images/smart.jpg";
import affordablePlansImage from "../assets/images/Affordable Plans.jpg";

function Home() {
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

      {/* Hero Section */}
      <div className="hero text-center text-white">
        <div className="container">
          <h1>Welcome to SecuritySystem</h1>
          <p>Advanced Security Solutions for Your Home and Business</p>
          <img
            src={heroImage}
            style={{ borderRadius: "15px" }}
            alt="Security System Icon"
            className="hero-image mb-4"
          />

          <div>
            <a href="/login" className="btn btn-primary me-3 btn-lg">
              Login
            </a>
            <a href="/signup" className="btn btn-outline-light btn-lg">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose SecuritySystem?</h2>
          <p className="text-center mb-5">
            We offer advanced security solutions tailored to your needs. Here's
            why we're the best choice:
          </p>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={monitoringImage}
                alt="24/7 Monitoring"
                className="mb-3 rounded feature-image"
              />
              <h5>24/7 Monitoring</h5>
              <p>
                Ensure round-the-clock protection for your home and business.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={smartImage}
                alt="Smart Technology"
                className="mb-3 rounded feature-image"
              />
              <h5>Smart Technology</h5>
              <p>
                Access and control your security system remotely through our
                app.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={affordablePlansImage}
                alt="Affordable Plans"
                className="mb-3 rounded feature-image"
              />
              <h5>Affordable Plans</h5>
              <p>
                Customized pricing to fit your budget and security requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white">
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
                  <a href="/services" className="text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-phone me-2"></i>+1 234 567 890
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i>
                support@securitysystem.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Secure St, Safe City
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap JS Bundle */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Home;
