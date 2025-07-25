import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Home, 
  CheckCircle, 
  XCircle,
  User,
  UserCheck
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
}

interface Branch {
  name: string;
  image: string;
  address: string;
}

interface Room {
  name: string;
  img: string;
  available: boolean;
  price: string;
}

function Booked() {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [room, setRoom] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        {
          ...form,
          location,
          gender,
          selectedDate: selectedDate?.toLocaleDateString(),
          timeSlot,
          room,
        },
        null,
        2
      )
    );
  };

  const branches: Branch[] = [
    { 
      name: "Anna Nagar", 
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      address: "123 Anna Nagar, Chennai"
    },
    { 
      name: "RA Puram", 
      image: "https://images.pexels.com/photos/3757939/pexels-photo-3757939.jpeg?auto=compress&cs=tinysrgb&w=400",
      address: "456 RA Puram, Chennai"
    },
    { 
      name: "Katupakkam", 
      image: "https://images.pexels.com/photos/3757931/pexels-photo-3757931.jpeg?auto=compress&cs=tinysrgb&w=400",
      address: "789 Katupakkam, Chennai"
    },
  ];

  const roomData: Room[] = [
    { name: "Serenity Suite", img: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400", available: true, price: "₹2500" },
    { name: "Tranquil Room", img: "https://images.pexels.com/photos/3757958/pexels-photo-3757958.jpeg?auto=compress&cs=tinysrgb&w=400", available: false, price: "₹2000" },
    { name: "Harmony Chamber", img: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=400", available: true, price: "₹3000" },
  ];

  const timeSlots = ["09:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];

  const canProceed = (step: number) => {
    switch (step) {
      case 1: return location && selectedDate;
      case 2: return gender && timeSlot && room;
      case 3: return form.name && form.phone && form.treatment;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-emerald-600">Wellness</span> Experience
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your perfect treatment session in three simple steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                    currentStep >= step
                      ? "bg-emerald-500 shadow-lg scale-110"
                      : "bg-gray-300"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      currentStep > step ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Branch & Date */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform ${
              currentStep === 1 ? "scale-105 ring-2 ring-emerald-200" : ""
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Choose Branch & Date</h3>
              </div>

              {/* Branch Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Select Branch</h4>
                <div className="space-y-3">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 hover:shadow-lg ${
                        location === branch.name
                          ? "ring-2 ring-emerald-500 shadow-lg"
                          : "border border-gray-200"
                      }`}
                      onClick={() => setLocation(branch.name)}
                    >
                      <div className="flex items-center p-4">
                        <img
                          src={branch.image}
                          alt={branch.name}
                          className="w-16 h-16 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800">{branch.name}</h5>
                          <p className="text-sm text-gray-500">{branch.address}</p>
                        </div>
                        {location === branch.name && (
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Picker */}
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-4">Select Date</h4>
                <div className="bg-gray-50 rounded-xl p-4">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setTimeSlot("");
                      setRoom("");
                    }}
                    inline
                    minDate={new Date()}
                    className="w-full"
                  />
                </div>
              </div>

              {canProceed(1) && (
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full mt-6 bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200 transform hover:scale-105"
                >
                  Next Step →
                </button>
              )}
            </div>
          </div>

          {/* Step 2: Gender, Time & Room */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform ${
              currentStep === 2 ? "scale-105 ring-2 ring-emerald-200" : currentStep < 2 ? "opacity-50" : ""
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Preferences & Timing</h3>
              </div>

              {/* Gender Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Select Gender Preference</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "Male", icon: User, label: "Male Therapist" },
                    { value: "Female", icon: UserCheck, label: "Female Therapist" }
                  ].map((option) => (
                    <button 
                      key={option.value}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                        gender === option.value
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                      onClick={() => setGender(option.value)}
                    >
                      <option.icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              {selectedDate && (
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4">Available Time Slots</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        className={`p-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                          timeSlot === slot
                            ? "bg-emerald-500 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-emerald-100"
                        }`}
                        onClick={() => {
                          setTimeSlot(slot);
                          setRoom("");
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Room Selection */}
              {selectedDate && timeSlot && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-700 mb-4">Choose Your Room</h4>
                  <div className="space-y-3">
                    {roomData.map((r) => (
                      <div
                        key={r.name}
                        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                          !r.available
                            ? "opacity-50 cursor-not-allowed"
                            : room === r.name
                            ? "ring-2 ring-emerald-500 shadow-lg"
                            : "border border-gray-200 hover:shadow-md"
                        }`}
                        onClick={() => r.available && setRoom(r.name)}
                      >
                        <div className="flex items-center p-4">
                          <img
                            src={r.img}
                            alt={r.name}
                            className="w-16 h-16 rounded-lg object-cover mr-4"
                          />
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800">{r.name}</h5>
                            <p className="text-emerald-600 font-medium">{r.price}</p>
                          </div>
                          {!r.available ? (
                            <XCircle className="w-6 h-6 text-red-500" />
                          ) : room === r.name ? (
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                          ) : null}
                        </div>
                        {!r.available && (
                          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Booked
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200"
                >
                  ← Back
                </button>
                {canProceed(2) && (
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200 transform hover:scale-105"
                  >
                    Next Step →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Booked Form */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform ${
              currentStep === 3 ? "scale-105 ring-2 ring-emerald-200" : currentStep < 3 ? "opacity-50" : ""
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Your Details</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Treatment Type *
                  </label>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  >
                    <option value="">Select Treatment Type</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Booked Summary */}
                {location && selectedDate && timeSlot && room && (
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-2">Booked Summary</h4>
                    <div className="space-y-1 text-sm text-emerald-700">
                      <p><strong>Branch:</strong> {location}</p>
                      <p><strong>Date:</strong> {selectedDate?.toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {timeSlot}</p>
                      <p><strong>Room:</strong> {room}</p>
                      <p><strong>Gender Preference:</strong> {gender}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booked;