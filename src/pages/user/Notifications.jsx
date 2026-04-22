import { useState } from "react";
import Toggle from "../../components/Toggle/Toggle";

const Notifications = () => {
  const [settings, setSettings] = useState({
    eventReminders: true,
    eventUpdates: true,
    ticketConfirmations: true,
    paymentReceipts: true,
    promotions: false,
    recommendations: false,
  });

  const update = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="container notifications-page">

      {/* HEADER */}
      <div className="page-header">
        <h1>Notifications</h1>
      </div>

      {/* EVENTS */}
      <div className="card settings-card">
        <h3>Events</h3>

        <div className="settings-list">

          <div className="settings-item toggle-item">
            <span>Event Reminders</span>
            <Toggle
              checked={settings.eventReminders}
              onChange={(v) => update("eventReminders", v)}
            />
          </div>

          <div className="settings-item toggle-item">
            <span>Event Updates</span>
            <Toggle
              checked={settings.eventUpdates}
              onChange={(v) => update("eventUpdates", v)}
            />
          </div>

        </div>
      </div>

      {/* ACCOUNT ACTIVITY */}
      <div className="card settings-card">
        <h3>Account Activity</h3>

        <div className="settings-list">

          <div className="settings-item toggle-item">
            <span>Ticket Confirmations</span>
            <Toggle
              checked={settings.ticketConfirmations}
              onChange={(v) => update("ticketConfirmations", v)}
            />
          </div>

          <div className="settings-item toggle-item">
            <span>Payment Receipts</span>
            <Toggle
              checked={settings.paymentReceipts}
              onChange={(v) => update("paymentReceipts", v)}
            />
          </div>

        </div>
      </div>

      {/* MARKETING */}
      <div className="card settings-card">
        <h3>Marketing</h3>

        <div className="settings-list">

          <div className="settings-item toggle-item">
            <span>Promotions</span>
            <Toggle
              checked={settings.promotions}
              onChange={(v) => update("promotions", v)}
            />
          </div>

          <div className="settings-item toggle-item">
            <span>Event Recommendations</span>
            <Toggle
              checked={settings.recommendations}
              onChange={(v) => update("recommendations", v)}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Notifications;