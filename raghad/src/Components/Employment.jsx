import { NavLink } from "react-router-dom";
import React from "react";

// Import images
import employee1 from "../assets/images/e1.webp";
import employee2 from "../assets/images/e2.png";
import employee3 from "../assets/images/e3.jpg";
import employee4 from "../assets/images/e5.jpg";
import employee5 from "../assets/images/e6.jpg";
import employee6 from "../assets/images/e7.jpg";

const Employment = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                  // Use isActive to conditionally style the active link
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
      <div className="hero">
        <h1>Meet Our Team</h1>
        <p>
          Join a team of dedicated professionals making the world a safer place.
        </p>
      </div>

      {/* Team Section */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Our Employees</h1>
        <div className="row">
          {/* Employee 1 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee1}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 1: John Doe - Chief Security Officer"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Chief Security Officer</p>
                <a
                  href="https://linkedin.com/in/johndoe"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Employee 2 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee2}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 2: Liam Smith - Lead Technician"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Liam Smith</h5>
                <p className="card-text">Lead Technician</p>
                <a
                  href="https://linkedin.com/in/liamsmith"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Employee 3 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee3}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 3: Oliver Johnson - Customer Support Specialist"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Oliver Johnson</h5>
                <p className="card-text">Customer Support Specialist</p>
                <a
                  href="https://linkedin.com/in/oliverjohnson"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mt-4">
          {/* Employee 4 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee4}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 4: Michael Brown - Security Analyst"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Michael Brown</h5>
                <p className="card-text">Security Analyst</p>
                <a
                  href="https://linkedin.com/in/michaelbrown"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Employee 5 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee5}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 5: Noah Davis - HR Manager"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Noah Davis</h5>
                <p className="card-text">HR Manager</p>
                <a
                  href="https://linkedin.com/in/noahdavis"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Employee 6 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={employee6}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Employee 6: David Wilson - Project Manager"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">David Wilson</h5>
                <p className="card-text">Project Manager</p>
                <a
                  href="https://linkedin.com/in/davidwilson"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
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

      {/* Scripts */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Employment;
