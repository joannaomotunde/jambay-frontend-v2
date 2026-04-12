import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const TicketDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const seats = queryParams.get("seats")?.split(",") || [];
  const section = queryParams.get("section");
  const price = Number(queryParams.get("price")) || 0;

  const total = seats.length * price;

  return (
    <div className="container ticket-detail">

      <h1>Ticket Summary</h1>

      {/* EVENT INFO */}
      <div className="card">
        <h3>Event Details</h3>
        <p>Afrobeats Night Live</p>
        <p>Lagos, Nigeria</p>
        <p>May 12, 2026</p>
      </div>

      {/* SEAT INFO */}
      <div className="card">
        <h3>Your Seats</h3>
        <p>{seats.length > 0 ? seats.join(", ") : "No seats selected"}</p>
        <p>Section: {section}</p>
      </div>

      {/* PRICE BREAKDOWN */}
      <div className="card">
        <h3>Price Breakdown</h3>
        <p>Seat Price: ₦{price.toLocaleString()}</p>
        <p>Quantity: {seats.length}</p>
        <hr />
        <h2>Total: ₦{total.toLocaleString()}</h2>
      </div>

      {/* ACTION */}
      <div className="ticket-actions">
       <Button
  disabled={seats.length === 0}
  onClick={() =>
    navigate(
      `/checkout?seats=${seats.join(",")}&section=${section}&total=${total}`
    )
  }
>
  Proceed to Checkout
</Button>
      </div>

    </div>
  );
};

export default TicketDetail;