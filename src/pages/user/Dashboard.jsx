import Button from "../../components/Buttons/Button";
import EventCard from "../../components/Cards/EventCard";
const Dashboard = () => {
  return (
    <div className="dashboard container">

      {/* WELCOME */}
      <div className="dashboard-header">
        <h1>Welcome back 👋</h1>
        <p>Discover events, manage tickets, and enjoy experiences.</p>
      </div>

      {/* STATS */}
      
      <div className="stats-grid">
        <div className="card stat-card">
          <p>Total Tickets</p>
          <h2>12</h2>
           </div>

     <div className="card stat-card">
       <p>Upcoming Events</p>
        <h2>3</h2>
    </div>

    <div className="card stat-card">
      <p>Loyalty Points</p>
      <h2>240</h2>
    </div>

    </div>
          

      {/* QUICK ACTIONS */}
      <div className="card">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <Button>Browse Events</Button>
          <Button>My Tickets</Button>
          <Button>Loyalty</Button>
        </div>
      </div>

      {/* EVENTS PREVIEW */}
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
  image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
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