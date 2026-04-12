import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const EventCard = ({ id, title, date, location, image }) => {
  return (
    <div className="card event-card">

      {/* IMAGE */}
      <div className="event-image">
        <img
        src={image}
        alt={title}
        onError={(e) => {
        e.target.onerror = null;
        e.target.src =  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800";
         }}
    />
      </div>

      {/* CONTENT */}
      <div className="event-content">
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{location}</p>

        <Link to={`/events/${id}`}>
          <Button>View Event</Button>
        </Link>
      </div>

    </div>
  );
};

export default EventCard;