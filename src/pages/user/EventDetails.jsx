import { useParams, Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const EventDetails = () => {
  const { id } = useParams();

  const event = {
    id,
    title: "Afrobeats Night Live",
    date: "May 12, 2026",
    location: "Lagos, Nigeria",
    description:
      "Experience an unforgettable night of Afrobeats, live performances, DJs, and premium vibes with top artists across Africa.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1000",
  };

  const tickets = [
    { type: "Regular", price: "₦5,000", desc: "Standard entry" },
    { type: "VIP", price: "₦15,000", desc: "Priority seating + drinks" },
    { type: "VVIP", price: "₦30,000", desc: "Front row + exclusive lounge" },
  ];

  return (
    <div className="container event-details">

      {/* HERO */}
      <div className="event-hero">

        <div className="event-hero-image">
          <img src={event.image} alt={event.title} />
        </div>

        <div className="event-hero-content">
          <h1>{event.title}</h1>

          <p className="meta">{event.date}</p>
          <p className="meta">{event.location}</p>

          <p className="description">{event.description}</p>

          <div className="cta-group">
            <Link to={`/events/${id}/seats`}>
              <Button>Back</Button>
            </Link>

         { /* <Link to="/events">
              <button className="secondary-btn">Back</button>
            </Link> */ }
          </div>
        </div>

      </div>

      {/* TICKET PRICING */}
    <div className="ticket-section">
  <h2>Choose Your Ticket</h2>

  <div className="ticket-grid">
    {tickets.map((t, index) => (
      <div key={index} className="card ticket-card">
        <h3>{t.type}</h3>
        <p className="price">{t.price}</p>
        <p>{t.desc}</p>

        <Link to={`/events/${id}/seats?type=${t.type}&price=${t.price}`}>
          <Button>Select</Button>
        </Link>
      </div>
    ))}
  </div>
</div>

      {/* WHAT'S INCLUDED */}
      <div className="includes">
        <h2>What to Expect</h2>

        <ul>
          <li>Live performances from top artists</li>
          <li>Premium sound and lighting experience</li>
          <li>Secure and organized seating</li>
          <li>Food & drinks available</li>
        </ul>
        <Link to="/concessions">
           <Button>View Concessions</Button>
        </Link>
      </div>

    </div>
  );
};

export default EventDetails;