import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Buttons/Button";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const seats = queryParams.get("seats")?.split(",") || [];
  const section = queryParams.get("section");
  const total = Number(queryParams.get("total")) || 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCheckout = () => {
    navigate("/payment-auth");
  };

  return (
    <div className="container checkout-page">

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">

        {/* LEFT SIDE */}
        <div className="checkout-left">

          <div className="card">
            <h3>Customer Details</h3>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>

          <div className="card">
            <h3>Payment Method</h3>
            <p>Pay securely with card, bank, or transfer.</p>

            <div className="payment-box">
              Flutterwave Payment Gateway
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right card">

          <h3>Order Summary</h3>

          <p><strong>Section:</strong> {section}</p>
          <p><strong>Seats:</strong> {seats.join(", ")}</p>

          <div className="divider"></div>

          <div className="summary-row">
            <span>Tickets ({seats.length})</span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          <Button
            disabled={!name || !email}
            onClick={handleCheckout}
          >
            Pay ₦{total.toLocaleString()}
          </Button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;