import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faUsers,
  faLightbulb,
  faShieldAlt,
  faCheckCircle,
  faBalanceScale,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            SecuritySystem
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employment">
                  Employement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-info text-center text-white py-5">
        <h1>About Us</h1>
        <p className="lead">
          Learn more about our mission, vision, and values dedicated to your
          safety and peace of mind.
        </p>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        {/* Who We Are Section */}
        <div className="text-center mb-5">
          <h2>Who We Are</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <FontAwesomeIcon
                icon={faUsers}
                className="fa-3x text-primary mb-3"
              />
              <p>
                At SecuritySystem, we are dedicated to creating safe
                environments for homes and businesses.
              </p>
            </div>
            <div className="col-md-6">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="fa-3x text-primary mb-3"
              />
              <p>
                Our mission is to deliver user-friendly security systems that
                protect what matters most.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-5">
          <h2>Our Core Values</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            <div
              className="p-3 border rounded shadow-sm text-center"
              style={{ width: "250px" }}
            >
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="fa-2x text-primary mb-3"
              />
              <h5>Customer Focus</h5>
              <p>Your safety and satisfaction are our top priorities.</p>
            </div>
            <div
              className="p-3 border rounded shadow-sm text-center"
              style={{ width: "250px" }}
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                className="fa-2x text-primary mb-3"
              />
              <h5>Innovation</h5>
              <p>We leverage the latest technology to stay ahead.</p>
            </div>
            <div
              className="p-3 border rounded shadow-sm text-center"
              style={{ width: "250px" }}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="fa-2x text-primary mb-3"
              />
              <h5>Reliability</h5>
              <p>Consistent and effective security solutions.</p>
            </div>
            <div
              className="p-3 border rounded shadow-sm text-center"
              style={{ width: "250px" }}
            >
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="fa-2x text-primary mb-3"
              />
              <h5>Integrity</h5>
              <p>Transparency and ethical practices guide us.</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <a href="/contact">
            <button className="btn btn-primary rounded-pill px-4 py-2">
              Contact Us to Learn More
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                Providing advanced security solutions to protect your peace of
                mind.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/services" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> support@securitysystem.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Secure St, Safe
                City
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
