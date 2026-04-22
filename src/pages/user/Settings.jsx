import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../../components/Toggle/Toggle";

const Settings = () => {
  const navigate = useNavigate();

  const [prefs, setPrefs] = useState({
    emailNotifications: true,
    eventReminders: true,
    promoUpdates: false,
  });

  const updatePref = (key, value) => {
    setPrefs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="container settings-page">

      <div className="page-header">
        <h1>Settings</h1>
      </div>

      {/* ACCOUNT */}
      <div className="card settings-card">
        <h3>Account</h3>

        <div className="settings-list">

          <div
            className="settings-item"
            onClick={() => navigate("/edit-profile")}
          >
            <span>Edit Profile</span>
            <span>›</span>
          </div>

          <div className="settings-item">
            <span>Change Password</span>
            <span>›</span>
          </div>

        </div>
      </div>

      {/* PREFERENCES (NOW ACTIVE) */}
      <div className="card settings-card">
        <h3>Preferences</h3>

        <div className="settings-list toggle-list">

          <div className="settings-item toggle-item">
            <span>Email Notifications</span>
            <Toggle
              checked={prefs.emailNotifications}
              onChange={(val) =>
                updatePref("emailNotifications", val)
              }
            />
          </div>

          <div className="settings-item toggle-item">
            <span>Event Reminders</span>
            <Toggle
              checked={prefs.eventReminders}
              onChange={(val) =>
                updatePref("eventReminders", val)
              }
            />
          </div>

          <div className="settings-item toggle-item">
            <span>Promo Updates</span>
            <Toggle
              checked={prefs.promoUpdates}
              onChange={(val) =>
                updatePref("promoUpdates", val)
              }
            />
          </div>

        </div>
      </div>

      {/* SUPPORT */}
      <div className="card settings-card">
        <h3>Support</h3>

        <div className="settings-list">

          <div className="settings-item">
            <span>Help Center</span>
            <span>›</span>
          </div>

          <div className="settings-item danger">
            <span>Logout</span>
            <span>›</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Settings;