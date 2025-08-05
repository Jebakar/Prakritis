import React, { useState } from "react";
import Gallery from "../Pages/Gallery";
import Galleryhead from "./Galleryhead";

const CaseSheet = () => {
  const [formData, setFormData] = useState({
    reg: "",
    name: "",
    consultationDate: "",
    age: "",
    dob: "",
    gender: "",
    marital: "",
    food: "",
    height: "",
    weight: "",
    bgroup: "",
    address: "",
    profession: "",
    email: "",
    phone: "",
    appeitite: "",
    sleep: "",
    motion: "",
    elevel: "",
    fside: "",
    mside: "",
    surgeries: "",
    bp: "",
    dia: "",
    roid: "",
    chole: "",
    ex: "",
    aliments: "",
    complaints: "",
    drCmts: "",
    pre: "",
    dname: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Case Sheet:", formData);
    alert("Case Sheet submitted successfully.");
  };

  const renderRadioGroup = (label, name, options) => (
    <div className="mb-4">
      <p className="font-medium mb-1">{label}</p>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-1">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              className="accent-blue-500"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  const renderInput = (name, placeholder, type = "text", isTextArea = false) => (
    
    <div className="mb-4">
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      )}
    </div>
  );

  return (
    <>
    <Galleryhead item={"Case Sheet"}/>
    <div className="max-w-3xl mx-auto p-6 bg-white text-black border rounded  mt-10">
      <div className="text-center mb-6">
        <img
          src="https://prakritiayurveda.com/wp-content/uploads/2022/11/logo.png"
          alt="Logo"
          width="251"
          height="77"
          className="mx-auto"
        />
        <h3 className="text-2xl font-semibold mt-4">Case Sheet</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {renderInput("reg", "Registration Number")}
        {renderInput("name", "Patient Name")}
        {renderInput("consultationDate", "Consultation Date", "date")}
        {renderInput("age", "Age")}
        {renderInput("dob", "Date of Birth", "date")}
        {renderRadioGroup("Gender", "gender", ["Male", "Female"])}
        {renderRadioGroup("Marital Status", "marital", ["Married", "Un-Married"])}
        {renderRadioGroup("Food", "food", ["Veg", "Non-Veg"])}
        {renderInput("height", "Height")}
        {renderInput("weight", "Weight")}
        {renderInput("bgroup", "Blood Group")}
        {renderInput("address", "Residential Address", "text", true)}
        {renderInput("profession", "Profession")}
        {renderInput("email", "Email Address", "email")}
        {renderInput("phone", "Mobile Number")}
        {renderRadioGroup("Appeitite", "appeitite", ["Poor", "Good", "Excellent"])}
        {renderRadioGroup("Sleep", "sleep", ["Poor", "Good", "Excellent"])}
        {renderRadioGroup("Motion", "motion", ["Normal", "Loose", "Constipated"])}
        {renderRadioGroup("Energy Level", "elevel", ["Poor", "Good", "Excellent"])}
        {renderInput("fside", "Father Side Hereditary Diseases")}
        {renderInput("mside", "Mother Side Hereditary Diseases")}
        {renderInput("surgeries", "Surgeries / Deliveries / Caesarian")}
        {renderRadioGroup("Blood Pressure", "bp", ["Yes", "No"])}
        {renderRadioGroup("Diabetics", "dia", ["Yes", "No"])}
        {renderRadioGroup("Thyroid", "roid", ["Yes", "No"])}
        {renderRadioGroup("Cholesterol", "chole", ["Yes", "No"])}
        {renderInput("ex", "Exercise Routine", "text", true)}
        {renderInput("aliments", "Past Ailments", "text", true)}
        {renderInput("complaints", "Present Complaints", "text", true)}
        {renderInput("drCmts", "Doctors Comments", "text", true)}
        {renderInput("pre", "Prescription", "text", true)}
        {renderInput("dname", "Doctor Name")}

        <div className="text-sm italic text-center text-gray-600 mb-4">
          “We care for you and we take care of you”
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default CaseSheet;
