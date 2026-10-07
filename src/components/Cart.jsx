import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Cart.css";

function Cart() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("laundryCart")) || []
  );

  const increaseQuantity = (index) => {
    const updated = [...cart];

    updated[index].quantity += 1;

    setCart(updated);

    localStorage.setItem(
      "laundryCart",
      JSON.stringify(updated)
    );
  };

  const decreaseQuantity = (index) => {
    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }

    setCart(updated);

    localStorage.setItem(
      "laundryCart",
      JSON.stringify(updated)
    );
  };

  const removeItem = (index) => {
    const updated = [...cart];

    updated.splice(index, 1);

    setCart(updated);

    localStorage.setItem(
      "laundryCart",
      JSON.stringify(updated)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      {/* Navbar */}

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


      {/* Hero */}

      <section
        className="cart-hero"
        data-aos="fade-down"
      >

        <h1>
          My Laundry Booking
        </h1>

        <p>
          Review your selected laundry services
        </p>

      </section>


      {/* Cart */}

      <section className="cart-section">

        {cart.length === 0 ? (

          <div
            className="empty-cart"
            data-aos="zoom-in"
          >

            <div className="empty-icon">
              🧺
            </div>

            <h2>
              No Services Selected
            </h2>

            <p>
              Choose a laundry service to continue.
            </p>

            <Link
              to="/services"
              className="shop-btn"
            >
              Browse Services
            </Link>

          </div>

        ) : (

          <div className="cart-container">

            {/* Selected Services */}

            <div
              className="cart-items"
              data-aos="fade-right"
            >

              <h2>
                Selected Services
              </h2>

              {cart.map((item, index) => (

                <div
                  className="cart-item"
                  key={index}
                  data-aos="fade-up"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price}
                    </p>

                    <div className="quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(index)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(index)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(index)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>


            {/* Summary */}

            <div
              className="summary"
              data-aos="fade-left"
            >

              <h2>
                Booking Summary
              </h2>

              <div className="summary-row">

                <span>
                  Services
                </span>

                <span>
                  {cart.reduce(
                    (sum, item) =>
                      sum + item.quantity,
                    0
                  )}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Pickup
                </span>

                <span>
                  FREE
                </span>

              </div>

              <hr />

              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

              <button
                className="checkout-btn"
                onClick={() =>
                  alert(
                    "Your pickup booking has been submitted!"
                  )
                }
              >
                Book Pickup
              </button>

            </div>

          </div>

        )}

      </section>


      {/* Footer */}

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

export default Cart;