import { useParams } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { useNavigate, useLocation } from "react-router-dom";

const SeatBooking = () => {
  const { id } = useParams();

  const navigate = useNavigate();
const location = useLocation();

const queryParams = new URLSearchParams(location.search);
const ticketType = queryParams.get("type");
const ticketPrice = queryParams.get("price");

  const sections = [
    {
      id: "A",
      name: "VIP Front Row",
      price: 30000,
      available: 12,
      total: 20,
      desc: "Best view of the stage",
    },
    {
      id: "B",
      name: "Premium Section",
      price: 15000,
      available: 40,
      total: 60,
      desc: "Great view + comfort seating",
    },
    {
      id: "C",
      name: "Regular Section",
      price: 5000,
      available: 80,
      total: 120,
      desc: "Standard event experience",
    },
  ];

  return (
    <div className="container seat-page">

      {/* HEADER */}
      <div className="seat-header">
        <h1>Select Your Section</h1>
        <p>Event ID: {id}</p>
      </div>

      {/* SECTION LIST */}
      <div className="section-grid">

        {sections.map((section) => (
          <div key={section.id} className="card section-card">

            <h3>{section.name}</h3>

            <p className="price">₦{section.price.toLocaleString()}</p>

            <p className="meta">
              {section.available} / {section.total} seats available
            </p>

            <p className="desc">{section.desc}</p>

            <Button
  onClick={() =>
    navigate(`/events/${id}/seat-map?section=${section.name}&price=${section.price}`)
  }
>
  Select Section {section.id}
</Button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SeatBooking;