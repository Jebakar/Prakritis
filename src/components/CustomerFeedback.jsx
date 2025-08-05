import React, { useState } from "react";
import Header from "./Header";
import Gallery from "../Pages/Gallery";
import Galleryhead from "./Galleryhead";

const CustomerFeedback = () => {
  const [formData, setFormData] = useState({
    appraised: "",
    exp: "",
    rate: "",
    sat: "",
    staff: "",
    punctuality: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Thank you for your feedback!");

    setFormData({
      appraised: "",
      exp: "",
      rate: "",
      sat: "",
      staff: "",
      punctuality: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
    });
  };

  return (
    <>
``
    <Galleryhead item="Customer Feedback" item2="We Value Your Feedback" />
    <div className="max-w-3xl mx-auto px-6 py-15 bg-white text-black shadow-lg rounded-lg transition-all duration-300 border mt-10">
        
      <div className="text-center mb-8">
        <img
          src="https://prakritiayurveda.com/wp-content/uploads/2022/11/logo.png"
          alt="Logo"
          width="251"
          height="77"
          className="mx-auto animate-fade-in"
        />
        <h3 className="text-2xl font-bold mt-4 text-gray-800">
          For Our Information & Improvisation
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 animate-fade-in-up transition-all"
      >
        {[
          { label: "1.) Were you appraised of all our services?", name: "appraised" },
          { label: "2.) How was your experience?", name: "exp" },
          { label: "3.) How would you rate our therapists?", name: "rate" },
          { label: "4.) Are you satisfied with our ambience and facilities?", name: "sat" },
          { label: "5.) Were our staff courteous at all times?", name: "staff" },
          { label: "6.) Punctuality", name: "punctuality" },
        ].map(({ label, name }) => (
          <div key={name}>
            <p className="mb-2 font-medium text-lg text-gray-700">{label}</p>
            <div className="flex flex-wrap gap-4">
              {["Below Expectation", "Satisfactory", "Expectation"].map((val) => (
                <label key={val} className="flex items-center gap-2 text-gray-600">
                  <input
                    type="radio"
                    name={name}
                    value={val}
                    checked={formData[name] === val}
                    onChange={handleChange}
                    className="accent-blue-500 transition-transform scale-110"
                  />
                  <span className="hover:underline hover:text-blue-600 transition-all duration-200">
                    {val}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input-style"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-style"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-style"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-style"
            required
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Feedback Message"
          value={formData.message}
          onChange={handleChange}
          className="input-style"
          required
        ></textarea>

        <div className="text-sm italic text-gray-600">
          Thank you and looking forward to your presence again.
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg active:scale-95"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CustomerFeedback;
