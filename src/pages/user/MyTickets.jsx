import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const MyTickets = () => {
  const navigate = useNavigate();

  // MOCK DATA (later comes from API)
  const tickets = [
    {
      id: "TICK123",
      event: "Afrobeats Night",
      date: "May 12, 2026",
      location: "Lagos, Nigeria",
      seats: ["A3", "A4"],
      section: "VIP Front Row",
    },
    {
      id: "TICK456",
      event: "Tech Conference",
      date: "June 3, 2026",
      location: "Abuja, Nigeria",
      seats: ["B10"],
      section: "Premium Section",
    },
  ];

  return (
    <div className="container tickets-page">

      {/* HEADER */}
      <div className="tickets-header">
        <h1>My Tickets</h1>

        {/* ✅ EXTRA CTA */}
        <button
          className="secondary-btn"
          onClick={() => navigate("/events")}
        >
          + Book Another Event
        </button>
      </div>

      {/* ✅ EMPTY STATE */}
      {tickets.length === 0 ? (
        <div className="empty-state card">

          <h2>No tickets yet 🎟️</h2>
          <p>You haven’t booked any events yet.</p>

          <div className="empty-actions">

            <Button onClick={() => navigate("/events")}>
              Browse Events
            </Button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/find-tickets")}
            >
              Find My Tickets
            </button>

          </div>

        </div>
      ) : (

        /* ✅ TICKETS LIST */
        <div className="tickets-grid">

          {tickets.map((ticket) => (
            <div key={ticket.id} className="card ticket-card">

              <div className="ticket-info">
                <h3>{ticket.event}</h3>
                <p>{ticket.date}</p>
                <p>{ticket.location}</p>

                <p className="ticket-meta">
                  {ticket.section} • Seats: {ticket.seats.join(", ")}
                </p>
              </div>

              {/* QR CODE */}
              <div className="ticket-qr">
                <QRCodeCanvas value={ticket.id} size={100} />
                <p className="qr-label">Scan at entry</p>
              </div>

            </div>
          ))}

        </div>

      )}

    </div>
  );
};

export default MyTickets;