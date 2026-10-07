import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Contact.css";

function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          🧺 FRESHWASH
        </div>

        <button
          className="toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "show" : ""
          }`}
        >

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Booking 🛒
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section
        className="contact-hero"
        data-aos="fade-down"
      >

        <h1>
          Contact FreshWash
        </h1>

        <p>
          We are always happy to help you.
        </p>

      </section>


      {/* CONTACT */}

      <section className="contact-section">

        <div
          className="contact-info"
          data-aos="fade-right"
        >

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Talk About
            <br />
            Your Laundry
          </h2>

          <p>
            Have a question about our laundry services?
            Contact our team and we will be happy to help.
          </p>


          <div
            className="contact-item"
            data-aos="fade-up"
          >

            <strong>
              📍 Address
            </strong>

            <p>
              Chennai, Tamil Nadu, India
            </p>

          </div>


          <div
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <strong>
              📞 Phone
            </strong>

            <p>
              +91 98765 43210
            </p>

          </div>


          <div
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <strong>
              📧 Email
            </strong>

            <p>
              freshwash@gmail.com
            </p>

          </div>


          <div
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <strong>
              🕒 Working Hours
            </strong>

            <p>
              Monday - Sunday: 8 AM - 9 PM
            </p>

          </div>

        </div>


        {/* FORM */}

        <div
          className="contact-form"
          data-aos="fade-left"
        >

          <h2>
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button
            onClick={() =>
              alert("Message sent successfully!")
            }
          >
            Send Message
          </button>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-content">

          <div>
            <h2>
              🧺 FRESHWASH
            </h2>

            <p>
              Professional laundry service
              at your doorstep.
            </p>
          </div>


          <div>
            <h3>
              Quick Links
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/cart">
              Booking
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          <div>
            <h3>
              Contact
            </h3>

            <p>
              📍 Chennai, Tamil Nadu
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              📧 freshwash@gmail.com
            </p>

          </div>

        </div>


        <div className="copyright">
          © 2026 FreshWash. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default Contact;