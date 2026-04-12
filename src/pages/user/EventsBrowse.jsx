import { useState } from "react";
import EventCard from "../../components/Cards/EventCard";

const EventsBrowse = () => {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "Afrobeats Night",
      date: "May 12, 2026",
      location: "Lagos, Nigeria",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "June 3, 2026",
      location: "Abuja, Nigeria",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
    {
      id: 3,
      title: "Comedy Show",
      date: "June 20, 2026",
      location: "Ibadan, Nigeria",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
    },
    {
      id: 4,
      title: "Music Festival",
      date: "July 5, 2026",
      location: "Port Harcourt, Nigeria",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container events-page">

      {/* HEADER */}
      <div className="events-header">
        <h1>Browse Events</h1>
        <p>Discover amazing experiences happening around you</p>
      </div>

      {/* SEARCH */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EVENTS GRID */}
      {filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No events found</h3>
          <p>Try searching with a different keyword</p>
        </div>
      )}

    </div>
  );
};

export default EventsBrowse;