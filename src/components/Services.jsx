import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Services.css";

function Services() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const services = [
    {
      name: "Wash & Fold",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=700&q=80",
      description:
        "Professional washing and neatly folded clothes.",
    },

    {
      name: "Wash & Iron",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
      description:
        "Freshly washed and perfectly ironed clothes.",
    },

    {
      name: "Dry Cleaning",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=700&q=80",
      description:
        "Special cleaning for delicate and premium clothes.",
    },

    {
      name: "Steam Iron",
      price: 70,
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=700&q=80",
      description:
        "Remove wrinkles and give your clothes a fresh look.",
    },

    {
      name: "Shoe Cleaning",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
      description:
        "Deep cleaning for your favourite shoes.",
    },

    {
      name: "Blanket Cleaning",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
      description:
        "Deep cleaning for blankets and large clothes.",
    },
  ];


  const addToCart = (service) => {

    const oldCart =
      JSON.parse(
        localStorage.getItem("laundryCart")
      ) || [];

    const existing = oldCart.find(
      (item) => item.name === service.name
    );

    let updatedCart;

    if (existing) {

      updatedCart = oldCart.map((item) =>
        item.name === service.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    } else {

      updatedCart = [
        ...oldCart,
        {
          ...service,
          quantity: 1,
        },
      ];

    }

    localStorage.setItem(
      "laundryCart",
      JSON.stringify(updatedCart)
    );

    navigate("/cart");
  };


  return (
    <div className="services-page">

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
        className="services-hero"
        data-aos="fade-down"
      >

        <div>

          <span>
            FRESHWASH SERVICES
          </span>

          <h1>
            Professional Care
            <br />
            For Your Clothes
          </h1>

          <p>
            Choose the service you need and let us
            take care of the rest.
          </p>

        </div>

      </section>


      {/* SERVICE LIST */}

      <section className="services-list">

        <div
          className="section-heading"
          data-aos="fade-up"
        >

          <span>
            OUR SERVICES
          </span>

          <h2>
            Choose Your Laundry Service
          </h2>

          <p>
            Quality cleaning with doorstep pickup and delivery.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-product"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.name}
                />

              </div>


              <div className="service-info">

                <h3>
                  {service.name}
                </h3>

                <p>
                  {service.description}
                </p>


                <div className="service-bottom">

                  <strong>
                    ₹{service.price}
                  </strong>

                  <button
                    onClick={() =>
                      addToCart(service)
                    }
                  >
                    Add to Booking
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

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

export default Services;