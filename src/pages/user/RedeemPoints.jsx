import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const RedeemPoints = () => {
  const navigate = useNavigate();
  const [selectedReward, setSelectedReward] = useState(null);

  // MOCK BALANCE
  const balance = 1200;

  // MOCK REWARDS
  const rewards = [
    {
      id: 1,
      title: "₦1,000 Discount",
      points: 100,
    },
    {
      id: 2,
      title: "₦2,500 Discount",
      points: 200,
    },
    {
      id: 3,
      title: "Free Drink",
      points: 150,
    },
  ];

  const handleRedeem = () => {
    if (!selectedReward) return;

    alert(`Redeemed: ${selectedReward.title}`);
    navigate("/loyalty");
  };

  return (
    <div className="container redeem-page">

      {/* HEADER */}
      <div className="redeem-header">
        <h1>Redeem Points</h1>
        <p>You have {balance} pts</p>
      </div>

      {/* REWARDS */}
      <div className="rewards-grid">

        {rewards.map((reward) => {
          const isDisabled = reward.points > balance;

          return (
            <div
              key={reward.id}
              className={`card reward-card ${
                selectedReward?.id === reward.id ? "active" : ""
              } ${isDisabled ? "disabled" : ""}`}
              onClick={() => !isDisabled && setSelectedReward(reward)}
            >

              <h3>{reward.title}</h3>
              <p>{reward.points} pts</p>

              {isDisabled && (
                <span className="disabled-text">Not enough points</span>
              )}

            </div>
          );
        })}

      </div>

      {/* ACTION */}
      <div className="redeem-action">
        <Button
          disabled={!selectedReward}
          onClick={handleRedeem}
        >
          Redeem Now
        </Button>
      </div>

    </div>
  );
};

export default RedeemPoints;