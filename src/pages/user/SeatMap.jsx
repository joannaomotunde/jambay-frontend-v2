import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const SeatMap = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ GET DATA FROM PREVIOUS PAGE
  const queryParams = new URLSearchParams(location.search);
  const sectionName = queryParams.get("section");
  const seatPrice = Number(queryParams.get("price"));

  // ✅ USE REAL SECTION DATA
  const section = {
    name: sectionName,
    price: seatPrice,
  };

  // Generate seats (rows A–D, seats 1–8)
  const rows = ["A", "B", "C", "D"];
  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const bookedSeats = ["A1", "A2", "B5", "C3"];

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const total = selectedSeats.length * section.price;

  return (
    <div className="container seatmap-page">

      {/* HEADER */}
      <div className="seatmap-header">
        <h1>Pick Your Seats</h1>
        <p>{section.name} — Event {id}</p>

        {/* ✅ EXTRA CONTEXT */}
        <p className="meta">
          ₦{section.price?.toLocaleString()} per seat
        </p>
      </div>

      {/* LEGEND */}
      <div className="legend">
        <div><span className="box available"></span> Available</div>
        <div><span className="box selected"></span> Selected</div>
        <div><span className="box booked"></span> Booked</div>
      </div>

      {/* SEAT GRID */}
      <div className="seatmap">
        {rows.map((row) => (
          <div key={row} className="seat-row">

            <span className="row-label">{row}</span>

            {seatNumbers.map((num) => {
              const seatId = `${row}${num}`;
              const isBooked = bookedSeats.includes(seatId);
              const isSelected = selectedSeats.includes(seatId);

              return (
                <div
                  key={seatId}
                  onClick={() => toggleSeat(seatId)}
                  className={`seat-box 
                    ${isBooked ? "booked" : ""} 
                    ${isSelected ? "selected" : ""}`}
                >
                  {num}
                </div>
              );
            })}

          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="seatmap-summary">
        <p>Selected: {selectedSeats.join(", ") || "None"}</p>
        <h3>Total: ₦{total.toLocaleString()}</h3>

        {/* ✅ GO TO TICKET DETAIL (NOT CHECKOUT) */}
        <Button
          disabled={selectedSeats.length === 0}
          onClick={() =>
            navigate(
              `/ticket-detail?seats=${selectedSeats.join(",")}&section=${section.name}&price=${section.price}`
            )
          }
        >
          Continue
        </Button>
      </div>

    </div>
  );
};

export default SeatMap;