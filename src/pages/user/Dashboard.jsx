import EventCard from "../../components/Cards/EventCard";

const Dashboard = () => {
  return (
    <div className="container dashboard">

      {/* ✅ SIMPLE HEADER */}
      <div className="dashboard-header">
        <h1>Welcome back 👋</h1>
        <p>Discover events and manage your tickets</p>
      </div>

      {/* ✅ ACTION BUTTONS */}
      <div className="actions-grid">
        <button>Browse Events</button>
        <button>My Tickets</button>
      </div>

      {/* ✅ STATS (KEEP THIS — GOOD) */}
      <div className="stats-grid">

        <div className="card stat-card">
          <h2>3</h2>
          <p>Upcoming Events</p>
        </div>

        <div className="card stat-card">
          <h2>1200 pts</h2>
          <p>Loyalty Points</p>
        </div>

        <div className="card stat-card">
          <h2>₦75,000</h2>
          <p>Total Spent</p>
        </div>

      </div>

      {/* ✅ EVENTS (KEEP THIS — STRONG) */}
      <div className="events-section">
        <h3>Upcoming Events</h3>

        <div className="events-grid">

          <EventCard
            id="1"
            title="Afrobeats Night"
            date="May 12, 2026"
            location="Lagos, Nigeria"
            image="https://images.unsplash.com/photo-1506157786151-b8491531f063"
          />

          <EventCard
            id="2"
            title="Tech Conference"
            date="June 3, 2026"
            location="Abuja, Nigeria"
            image="https://images.unsplash.com/photo-1511578314322-379afb476865"
          />

          <EventCard
            id="3"
            title="Comedy Show"
            date="June 20, 2026"
            location="Ibadan, Nigeria"
            image="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
          />

        </div>
      </div>

    </div>
  );
};

export default Dashboard;