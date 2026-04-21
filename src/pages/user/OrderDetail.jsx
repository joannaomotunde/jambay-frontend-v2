import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // MOCK DATA (later from API using id)
  const order = {
    id: id,
    event: "Afrobeats Night",
    date: "May 12, 2026",
    location: "Lagos, Nigeria",
    status: "Completed",
    tickets: [
      {
        section: "VIP Front Row",
        seats: ["A3", "A4"],
        price: 30000,
      },
    ],
    total: 60000,
    paymentMethod: "Card",
  };

  return (
    <div className="container order-detail-page">

      {/* HEADER */}
      <div className="order-detail-header">
        <h1>Order Details</h1>
        <Button onClick={() => navigate("/orders")}>
          ← Back to Orders
        </Button>
      </div>

      {/* ORDER SUMMARY */}
      <div className="card order-summary">
        <h2>{order.event}</h2>
        <p>{order.date}</p>
        <p>{order.location}</p>

        <p className="order-id">Order ID: {order.id}</p>

        <span className={`status ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
      </div>

      {/* TICKETS */}
      <div className="card order-tickets">
        <h3>Tickets</h3>

        {order.tickets.map((ticket, index) => (
          <div key={index} className="ticket-line">

            <div>
              <p className="section">{ticket.section}</p>
              <p className="seats">
                Seats: {ticket.seats.join(", ")}
              </p>
            </div>

            <p className="price">
              ₦{ticket.price.toLocaleString()}
            </p>

          </div>
        ))}
      </div>

      {/* PAYMENT */}
      <div className="card order-payment">
        <h3>Payment Summary</h3>

        <div className="payment-row">
          <span>Payment Method</span>
          <span>{order.paymentMethod}</span>
        </div>

        <div className="payment-row total">
          <span>Total Paid</span>
          <span>₦{order.total.toLocaleString()}</span>
        </div>
      </div>

    </div>
  );
};

export default OrderDetail;