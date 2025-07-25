import React from "react";
import { useNavigate } from "react-router-dom";

const slotData = [
  { time: "08.00 AM", status: "Free", room: "101", date: "2025-07-25" },
  { time: "09.00 AM", status: "Booked", room: "102", date: "2025-07-25" },
  { time: "10.00 AM", status: "Free", room: "103", date: "2025-07-25" },
  { time: "11.00 AM", status: "Booked", room: "104", date: "2025-07-25" },
  { time: "12.00 PM", status: "Free", room: "105", date: "2025-07-25" },
];

const SlotBooking = () => {
  const navigate = useNavigate();

  const handleClick = (slot) => {
    if (slot.status === "Free") {
      navigate("/BookingPage", { state: slot });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-green-600 font-bold">Available Slots</h2>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-success">
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Room No.</th>
            </tr>
          </thead>
          <tbody>
            {slotData.map((slot, index) => (
              <tr
                key={index}
                onClick={() => handleClick(slot)}
                style={{
                  cursor: slot.status === "Free" ? "pointer" : "default",
                  backgroundColor: slot.status === "Free" ? "#f6ffed" : "white",
                }}
              >
                <td>{slot.date}</td>
                <td>{slot.time}</td>
                <td
                  style={{
                    color: slot.status === "Booked" ? "red" : "green",
                    fontWeight: 600,
                  }}
                >
                  {slot.status}
                </td>
                <td>{slot.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlotBooking;
