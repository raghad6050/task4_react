import React from "react";
import { NavLink } from "react-router-dom";

const FAQ = () => {
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
                  // Apply styling to active link
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

      {/* FAQ Section */}
      <div className="faq-container container my-5">
        <div className="faq-header text-center mb-5">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our security systems and
            services.
          </p>
        </div>

        <h1>General FAQs</h1>
        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                What is a security system, and why do I need one?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                Security systems protect your property by detecting intrusions,
                monitoring activity, and alerting you or authorities in case of
                unauthorized access.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                How do I choose the right security system for my needs?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse">
              <div className="accordion-body">
                The choice depends on the size of your property, your security
                concerns, and your budget. We offer consultations to help you
                find the best solution.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                Are your security systems wireless or wired?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse">
              <div className="accordion-body">
                We offer both options. Wireless systems are easier to install,
                while wired systems are generally more reliable for larger
                installations.
              </div>
            </div>
          </div>

          {/* Additional FAQ items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                What happens if the power goes out?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Our systems come with backup batteries to ensure uninterrupted
                operation during power outages.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Do you provide professional installation?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, we have certified technicians who ensure proper
                installation for maximum effectiveness.
              </div>
            </div>
          </div>

          <h1>Technical Questions</h1>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Can I monitor my security system remotely?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, our systems are equipped with mobile app integration for
                remote monitoring and control.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Are the cameras weatherproof?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Most of our cameras are designed for outdoor use and are
                weather-resistant.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading8">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Can I integrate smart home devices with my security system?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Absolutely! Our systems support integration with devices like
                smart locks, lights, and thermostats.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading9">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                How do motion sensors work?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Motion sensors detect movement using infrared technology or
                microwave signals and trigger alerts or alarms accordingly.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading10">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Is there a limit to how many cameras I can add to my system?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                The number depends on the system you choose. We offer scalable
                solutions to fit your requirements.
              </div>
            </div>
          </div>

          <h1>Subscription and Support FAQs</h1>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading11">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                Do you offer 24/7 monitoring services?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, our monitoring services are available 24/7 to keep your
                property safe.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading12">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseX"
              >
                What is the warranty on your products?
              </button>
            </h2>
            <div id="collapseX" className="accordion-collapse collapse">
              <div className="accordion-body">
                Most products come with a 1-3 year warranty. Check specific
                product details for exact coverage.
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

      {/* Bootstrap JavaScript */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default FAQ;
