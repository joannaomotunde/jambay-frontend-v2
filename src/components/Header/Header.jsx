import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/dashboard">JAMBAY</Link>
      </div>

      <nav className="nav">
        <Link to="/dashboard">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/tickets">My Tickets</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div className="actions">
        <Link to="/notifications">🔔</Link>
      </div>

    </header>
  );
};

export default Header;