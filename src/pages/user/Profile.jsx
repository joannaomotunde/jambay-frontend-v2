import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const Profile = () => {
  const navigate = useNavigate();

  // MOCK USER DATA (later from API)
  const user = {
    name: "Joanna Omotunde",
    email: "joanna@example.com",
    phone: "+234 800 000 0000",
  };

  return (
    <div className="container profile-page">

      {/* HEADER */}
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>

      {/* PROFILE CARD */}
      <div className="card profile-card">

        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>

        <Button onClick={() => navigate("/edit-profile")}>
          Edit Profile
        </Button>

      </div>

      {/* QUICK ACTIONS */}
      <div className="card profile-actions">

        <h3>Account</h3>

        <div className="action-list">

          <div onClick={() => navigate("/my-tickets")} className="action-item">
            🎟 My Tickets
          </div>

          <div onClick={() => navigate("/order-history")} className="action-item">
            🧾 Order History
          </div>

          <div onClick={() => navigate("/loyalty")} className="action-item">
            💰 Loyalty Wallet
          </div>

          <div onClick={() => navigate("/settings")} className="action-item">
            ⚙️ Settings
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;