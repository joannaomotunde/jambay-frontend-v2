import { useState } from "react";

const Notifications = () => {
  // MOCK DATA
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Payment Successful",
      message: "Your ticket for Afro Concert has been confirmed.",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      title: "Event Reminder",
      message: "Don't forget your event tomorrow at 6PM.",
      time: "1 day ago",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="container notifications-page">

      <div className="page-header">
        <h1>Notifications</h1>
      </div>

      <div className="card notifications-card">

        {notifications.length === 0 ? (
          <div className="empty-state">
            <p>No notifications yet</p>
          </div>
        ) : (
          <div className="notification-list">

            {notifications.map((item) => (
              <div
                key={item.id}
                className={`notification-item ${!item.read ? "unread" : ""}`}
                onClick={() => markAsRead(item.id)}
              >
                <div className="notification-content">
                  <h4>{item.title}</h4>
                  <p>{item.message}</p>
                  <span>{item.time}</span>
                </div>

                {!item.read && <div className="dot" />}
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Notifications;