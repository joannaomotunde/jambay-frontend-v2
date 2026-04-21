import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const LoyaltyWallet = () => {
  const navigate = useNavigate();

  // MOCK DATA (later from API)
  const balance = 1200;

  const history = [
    {
      id: 1,
      type: "earned",
      points: 500,
      description: "Afrobeats Night Ticket",
      date: "May 12, 2026",
    },
    {
      id: 2,
      type: "redeemed",
      points: 200,
      description: "Discount on Tech Conference",
      date: "June 3, 2026",
    },
  ];

  return (
    <div className="container loyalty-page">

      {/* HEADER */}
      <div className="loyalty-header">
        <h1>Loyalty Wallet</h1>

        <Button onClick={() => navigate("/redeem")}>
          Redeem Points
        </Button>
      </div>

      {/* BALANCE CARD */}
      <div className="card balance-card">
        <h2>{balance} pts</h2>
        <p>Your available points</p>
      </div>

      {/* HISTORY */}
      <div className="card loyalty-history">
        <h3>Points History</h3>

        {history.length === 0 ? (
          <p className="empty-text">No activity yet</p>
        ) : (
          history.map((item) => (
            <div key={item.id} className="history-row">

              <div>
                <p className="desc">{item.description}</p>
                <p className="date">{item.date}</p>
              </div>

              <span
                className={`points ${
                  item.type === "earned" ? "plus" : "minus"
                }`}
              >
                {item.type === "earned" ? "+" : "-"}
                {item.points}
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default LoyaltyWallet;