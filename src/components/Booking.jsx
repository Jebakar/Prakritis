import React, { useState } from "react";
import anna from "../Images/anna.png";
import rapuram from "../Images/RA-Puram.png";
import katupakkam from "../Images/katu.jpeg";
import male from "../Images/profile.png";
import female from "../Images/female.png";

import room1 from "../Images/rapuram6.jpg";
import room2 from "../Images/rapuram7.jpg";
import room3 from "../Images/rapuram8.jpg";

function Booked() {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [room, setRoom] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        { ...form, location, gender, selectedDate, timeSlot, room },
        null,
        2
      )
    );
  };

  const branches = [
    { name: "Anna Nagar", image: anna },
    { name: "RA Puram", image: rapuram },
    { name: "Katupakkam", image: katupakkam },
  ];

  const roomData = [
    { name: "Room 01", img: room1, available: true },
    { name: "Room 02", img: room2, available: false },
    { name: "Room 03", img: room3, available: true },
  ];

  return (
    <div className="booking-page overflow-hidden">
      <div className="left-panel">
        <h2>Book an Appointment</h2>

        {/* Branch Selection */}
        <div className="section">
          <h4>Select Branch</h4>
          <div className="branch-options">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className={`branch-card ${
                  location === branch.name ? "active" : ""
                }`}
                onClick={() => setLocation(branch.name)}
              >
                <span className="branch-name">{branch.name}</span>
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="branch-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gender Selection */}
        <div className="section">
          <h4>Select Gender</h4>
          <div className="options">
            <button
              className={gender === "Male" ? "active" : ""}
              onClick={() => setGender("Male")}
            >
              <img src={male} alt="Male" className="gender-icon" />
              Male
            </button>
            <button
              className={gender === "Female" ? "active" : ""}
              onClick={() => setGender("Female")}
            >
              <img src={female} alt="Female" className="gender-icon" />
              Female
            </button>
          </div>
        </div>

        {/* Date Selection */}
        <div className="section">
          <h4>Select Date</h4>
          <input
            type="date" 
            value={selectedDate}
            onChange={(e) => { 
              setSelectedDate(e.target.value);
              setTimeSlot("");  
              setRoom(""); 
            }} 
          /> 
        </div> 

        {/* Time Slot */}  
        {selectedDate && ( 
          <div className="section"> 
            <h4>Select Time Slot</h4> 
            <div className="options">
              {["09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"].map(
                (slot) => ( 
                  <button 
                    key={slot}
                    className={timeSlot === slot ? "active" : ""}
                    onClick={() => {
                      setTimeSlot(slot);
                      setRoom("");
                    }} 
                  >
                    {slot} 
                  </button> 
                ) 
              )}
            </div>
          </div>
        )}

        {/* Room Selection */}
        {selectedDate && timeSlot && (
          <div className="section">
            <h4>Available Rooms</h4>
            <div className="room-options">
              {roomData.map((r) => (
                <div
                  key={r.name}
                  className={`room-card ${
                    room === r.name ? "active" : ""
                  } ${!r.available ? "disabled" : ""}`}
                  onClick={() => r.available && setRoom(r.name)}
                  title={!r.available ? "Already booked" : ""}
                >
                  <img src={r.img} alt={r.name} className="room-img" />
                  <span>{r.name}</span>
                  {!r.available && <div className="unavailable">Booked</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Booking Form */}
      <div className="right-panel">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={handleInputChange}
          />
          <select
            name="treatment"
            value={form.treatment}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Treatment Type</option>
            <option value="Abhyanga">Abhyanga</option>
            <option value="Shirodhara">Shirodhara</option>
            <option value="Panchakarma">Panchakarma</option>
          </select>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booked;
