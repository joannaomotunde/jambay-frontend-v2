import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const OrderHistory = () => {
  const navigate = useNavigate();

  // MOCK DATA (later from API)
  const orders = [
    {
      id: "ORD123",
      event: "Afrobeats Night",
      date: "May 12, 2026",
      amount: 60000,
      status: "Completed",
    },
    {
      id: "ORD456",
      event: "Tech Conference",
      date: "June 3, 2026",
      amount: 15000,
      status: "Pending",
    },
  ];

  return (
    <div className="container order-page">

      <h1>Order History</h1>

      {orders.length === 0 ? (
        <div className="empty-state card">
          <h2>No orders yet 📭</h2>
          <p>You haven’t made any purchases.</p>

          <Button onClick={() => navigate("/events")}>
            Browse Events
          </Button>
        </div>
      ) : (
        <div className="order-list">

          {orders.map((order) => (
            <div key={order.id} className="card order-card">

              <div className="order-info">
                <h3>{order.event}</h3>
                <p>{order.date}</p>
                <p className="order-id">Order ID: {order.id}</p>
              </div>

              <div className="order-meta">
                <p className="amount">
                  ₦{order.amount.toLocaleString()}
                </p>

                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>

                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/order/${order.id}`)
                  }
                >
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default OrderHistory;