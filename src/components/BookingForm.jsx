import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    
    phone: "",
    email: "",
    address: "",
    appointmentDate: "",
    time: "",
    branch: "",
    treatmentType: "",
    abhyangam: "",
    treatment: "",
    consultation: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Add your API call here (e.g., fetch/post)
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full border p-2 rounded"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full border p-2 rounded"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
    
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          rows={3}
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="date"
          name="appointmentDate"
          className="w-full border p-2 rounded"
          min={today}
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />
        <select
          name="time"
          className="w-full border p-2 rounded"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option>Preferred Time</option>
          {["08.00 Am", "09.00 Am", "10.00 Am", "11.00 Am", "12.00 Pm", "01.00 Pm", "02.00 Pm", "03.00 Pm", "04.00 Pm", "05.00 Pm", "06.00 Pm"].map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      
        <select
          name="treatmentType"
          className="w-full border p-2 rounded"
          value={formData.treatmentType}
          onChange={handleChange}
          required
        >
          <option>Please Select a Treatment Type</option>
          <option>Abhyangams</option>
          <option>Treatments</option>
          <option>Consultation</option>
        </select>

        {formData.treatmentType === "Abhyangams" && (
          <select
            name="abhyangam"
            className="w-full border p-2 rounded"
            value={formData.abhyangam}
            onChange={handleChange}
          >
            <option>Abhyangam</option>
            <option>Abhyangam with Steam</option>
            <option>Abhyangam with Shirodhara</option>
            <option>Varnyam</option>
            <option>Pada Abhyangam with Herbal Dip</option>
            <option>Shiro & Neck with Bath</option>
            <option>Pada Abhyangam</option>
            <option>Dandruff & Hairfall</option>
            <option>Varnya Abhyangam</option>
            <option>Head Massage</option>
            <option>Foot Massage</option>
            <option>Spine and Neck</option>
          </select>
        )}

        {formData.treatmentType === "Treatments" && (
          <select
            name="treatment"
            className="w-full border p-2 rounded"
            value={formData.treatment}
            onChange={handleChange}
          >
            <option>Special Oil Abhyangam</option>
            <option>Special Oil Abhyangam with Steam</option>
            <option>Udwarthanam (Powder Massage)</option>
            <option>Shirodhara</option>
            <option>Navarakizhi</option>
            <option>Mamsakizhi</option>
            <option>Kattivasti</option>
            <option>Pichu (Local)</option>
            <option>Nasyam</option>
            <option>Tharpanam</option>
            <option>Bandage</option>
            <option>Uraswedanam</option>
            <option>Partial 70% Rate</option>
            <option>Ekanga 50% Rate</option>
            {/* Add all options as needed */}
          </select>
        )}

        {formData.treatmentType === "Consultation" && (
          <select
            name="consultation"
            className="w-full border p-2 rounded"
            value={formData.consultation}
            onChange={handleChange}
          >
            <option>Online Consultation – Zoom</option>
            <option>Direct consultation</option>
          </select>
        )}

        <textarea
          name="specialRequests"
          placeholder="Special Requests"
          rows={3}
          className="w-full border p-2 rounded"
          value={formData.specialRequests}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
