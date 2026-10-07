import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="laundry-home">

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

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Booking 🛒
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div
          className="hero-content"
          data-aos="fade-right"
        >

          <span className="hero-small">
            PROFESSIONAL LAUNDRY SERVICE
          </span>

          <h1>
            Fresh Clothes,
            <br />
            <span>Fresh Life.</span>
          </h1>

          <p>
            We wash, dry, iron and deliver your clothes
            fresh and clean right to your doorstep.
          </p>

          <div className="hero-buttons">

            <Link
              to="/services"
              className="primary-btn"
            >
              Explore Services
            </Link>

            <Link
              to="/cart"
              className="secondary-btn"
            >
              Book Pickup
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES PREVIEW */}
      <section className="services-preview">

        <div
          className="section-title"
          data-aos="fade-up"
        >

          <span>OUR SERVICES</span>

          <h2>
            Everything Your Clothes Need
          </h2>

          <p>
            Professional care for your everyday clothes.
          </p>

        </div>


        <div className="service-grid">

          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-icon">🧼</div>

            <h3>Wash & Fold</h3>

            <p>
              Clean and neatly folded clothes.
            </p>
          </div>


          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-icon">👔</div>

            <h3>Wash & Iron</h3>

            <p>
              Freshly washed and perfectly ironed.
            </p>
          </div>


          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-icon">✨</div>

            <h3>Dry Cleaning</h3>

            <p>
              Special care for premium clothes.
            </p>
          </div>


          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-icon">👟</div>

            <h3>Shoe Cleaning</h3>

            <p>
              Deep cleaning for your favourite shoes.
            </p>
          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="why-section">

        <div
          className="why-image"
          data-aos="fade-right"
        >

          <img
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=80"
            alt="Laundry"
          />

        </div>


        <div
          className="why-content"
          data-aos="fade-left"
        >

          <span>WHY FRESHWASH?</span>

          <h2>
            Laundry Made
            <br />
            Simple for You
          </h2>

          <p>
            No more spending your valuable time washing,
            drying and ironing clothes. Let our professional
            team take care of your laundry.
          </p>


          <div
            className="why-items"
            data-aos="fade-up"
          >

            <div>
              <strong>
                🚚 Doorstep Pickup
              </strong>

              <p>
                We collect your clothes from your home.
              </p>
            </div>


            <div>
              <strong>
                🧺 Professional Cleaning
              </strong>

              <p>
                Advanced cleaning for better results.
              </p>
            </div>


            <div>
              <strong>
                ⚡ Fast Delivery
              </strong>

              <p>
                Clean clothes delivered back to your door.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="steps-section">

        <div
          className="section-title"
          data-aos="fade-up"
        >

          <span>HOW IT WORKS</span>

          <h2>
            Laundry in 3 Easy Steps
          </h2>

        </div>


        <div className="steps">

          <div
            className="step-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >

            <div className="step-number">
              01
            </div>

            <h3>
              Book a Pickup
            </h3>

            <p>
              Select your service and book a pickup.
            </p>

          </div>


          <div
            className="step-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >

            <div className="step-number">
              02
            </div>

            <h3>
              We Clean
            </h3>

            <p>
              Our team washes and cares for your clothes.
            </p>

          </div>


          <div
            className="step-card"
            data-aos="zoom-in"
            data-aos-delay="500"
          >

            <div className="step-number">
              03
            </div>

            <h3>
              Get Delivery
            </h3>

            <p>
              Fresh and clean clothes delivered to your door.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section
        className="cta-section"
        data-aos="fade-up"
      >

        <h2>
          Ready for Fresh Clothes?
        </h2>

        <p>
          Book your laundry pickup today.
        </p>

        <Link
          to="/services"
          className="cta-btn"
        >
          Book Now
        </Link>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-content">

          <div>
            <h2>🧺 FRESHWASH</h2>

            <p>
              Professional laundry service
              at your doorstep.
            </p>
          </div>


          <div>
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/cart">Booking</Link>
            <Link to="/contact">Contact</Link>

          </div>


          <div>
            <h3>Contact</h3>

            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 freshwash@gmail.com</p>

          </div>

        </div>


        <div className="copyright">
          © 2026 FreshWash. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;