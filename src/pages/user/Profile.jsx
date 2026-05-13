import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Joanna Omotunde",
    email: "joanna@example.com",
    phone: "+234 800 000 0000",
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="container page-narrow profile-page">

      {/* HEADER */}
      <div className="profile-header-row">
        <h1>My Profile</h1>
      </div>

      {/* PROFILE CARD */}
      <div className="card profile-card">

        <div className="profile-top">

          <div className="avatar">{initials}</div>

          <div className="profile-meta">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

        </div>

        <div className="profile-extra">
          <p>{user.phone}</p>
        </div>

        <div className="profile-edit">
          <button onClick={() => navigate("/edit-profile")} className="btn-primary">
            Edit Profile
          </button>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="card profile-actions">

        <h3>Account</h3>

        <div className="action-list">

          <div onClick={() => navigate("/my-tickets")} className="action-item">
            <span>🎟 My Tickets</span>
            <span className="arrow">›</span>
          </div>

          <div onClick={() => navigate("/order-history")} className="action-item">
            <span>🧾 Order History</span>
            <span className="arrow">›</span>
          </div>

          <div onClick={() => navigate("/loyalty")} className="action-item">
            <span>💰 Loyalty Wallet</span>
            <span className="arrow">›</span>
          </div>

          <div onClick={() => navigate("/settings")} className="action-item">
            <span>⚙️ Settings</span>
            <span className="arrow">›</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;