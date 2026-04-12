import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container payment-success">

      <div className="success-card">

        <div className="success-icon">✅</div>

        <h1>Payment Successful!</h1>
        <p>Your tickets have been booked successfully.</p>

        <div className="success-info">
          <p>✔ Secure Payment</p>
          <p>✔ Instant Ticket Confirmation</p>
          <p>✔ QR Code Ready</p>
        </div>

        <div className="success-actions">

          <Button onClick={() => navigate("/my-tickets")}>
            View My Tickets
          </Button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/concessions")}
          >
            Add Food & Drinks 🍿
          </button>

        </div>

      </div>

    </div>
  );
};

export default PaymentSuccess;