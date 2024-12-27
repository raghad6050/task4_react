import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setFormStatus(
      "Thank you for your message! We will get back to you shortly."
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0078D7" }}
      >
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
                  // React Router v6 uses `className` for active links
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

      {/* Header */}
      <header
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#0078D7",
          color: "#fff",
        }}
      >
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us through any of the
          channels below.
        </p>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          padding: "20px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* About Section */}
        <section className="about-section">
          <h2>About SecuritySystem</h2>
          <p>
            <strong>Mission:</strong> To provide state-of-the-art security
            solutions for homes and businesses worldwide.
          </p>
          <p>
            <strong>Address:</strong> 123 Secure Lane, Safety City, SC 56789
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@securitysystem.com">
              support@securitysystem.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+11234567890">+1 (123) 456-7890</a>
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <section className="about">
          <h3>About Us</h3>
          <p>
            We provide cutting-edge security solutions to protect your home and
            business. Your safety is our priority.
          </p>
        </section>

        <section className="quick-links">
          <h3>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Products
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                FAQ
              </a>
            </li>
          </ul>
        </section>

        <section className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+1234567890" style={{ color: "#fff" }}>
              +1 234 567 890
            </a>
          </p>
          <p>
            <a
              href="mailto:support@securitysystem.com"
              style={{ color: "#fff" }}
            >
              support@securitysystem.com
            </a>
          </p>
          <p>123 Secure St, Safe City</p>
        </section>
      </footer>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Contact;
