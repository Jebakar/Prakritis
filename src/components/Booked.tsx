// Enhanced Booked.tsx with better design, animation, and responsiveness
import React, { useState } from "react";
import annanagar from "../Images/anna.png";
import RARuran from "../Images/RA-Puram.png";
import kattupakkam from "../Images/katu.jpeg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CheckCircle,
  MapPin,
  Clock,
  Users,
  User,
  UserCheck,
  Calendar,
  Star,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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
  rating: number;
}

const Booked = () => {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", treatment: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      JSON.stringify(
        { ...form, location, gender, selectedDate: selectedDate?.toLocaleDateString(), timeSlot },
        null,
        2
      )
    );
    setIsSubmitting(false);
  };

  const branches: Branch[] = [
    { name: "Anna Nagar", image: annanagar, address: "123 Anna Nagar, Chennai", rating: 4.8 },
    { name: "RA Puram", image: RARuran, address: "456 RA Puram, Chennai", rating: 4.9 },
    { name: "Katupakkam", image: kattupakkam, address: "789 Katupakkam, Chennai", rating: 4.7 },
  ];

  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];

  const slots = [
    { label: "Timing", values: ["09:00", "10:30 ", "12:00","01:30", "03:00", "04:30"] },
    // { label: "AfterNoon", values: ["01:30", "03:00", "04:30"] },
  ];

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">

          {/* Branch Selection */}
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                <MapPin className="me-1" /> Choose Branch
              </div>
              <div className="card-body p-3 cursor-pointer"  >
                {branches.map((branch) => (
                  <div
                    key={branch.name}
                    className={`card mb-3 p-2 rounded-3 border cursor-pointer ${
                      location === branch.name ? "border-primary shadow" : "border-light"
                    }`} 
                    onClick={() => setLocation(branch.name)}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="d-flex">
                      <img src={branch.image} alt={branch.name} className="rounded me-3" style={{ width: 60, height: 60, objectFit: "cover" }} />
                      <div>
                        <h6 className="mb-1 fw-bold">{branch.name}</h6>
                        <small className="text-muted d-block mb-1">{branch.address}</small>
                        <div className="d-flex align-items-center">
                          <Star className="text-warning" size={16} />
                          <small className="ms-1 fw-bold">{branch.rating}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Date Picker + Gender */}
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                <Calendar className="me-2" /> Select Date
              </div>
              <div className="card-body">
                <div className="rounded p-3 d-flex justify-content-center mb-4 bg-white ">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setTimeSlot("");
                    }}
                    inline
                    minDate={new Date()}
                    className="w-auto"
                  />
                </div>
                <div className="border rounded p-3 bg-white">
                  <label className="form-label fw-bold">Gender</label>
                  <div className="row g-2 mt-2">
                    {[{ value: "Male", icon: <User /> }, { value: "Female", icon: <UserCheck /> }].map((g) => (
                      <div className="col-6" key={g.value}>
                        <button
                          type="button"
                          className={`btn w-100 d-flex align-items-center justify-content-center border rounded py-2 ${
                            gender === g.value ? "btn-outline-primary" : "btn-outline-secondary"
                          }`}
                          onClick={() => setGender(g.value)}
                        >
                          {g.icon}
                          <span className="ms-2">{g.value}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                <Clock className="me-2" /> Select Time
              </div>
              <div className="card-body">
                {slots.map((slotGroup) => (
                  <div className="mb-3" key={slotGroup.label}>
                    <h6 className="fw-semibold mb-2">{slotGroup.label}</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {slotGroup.values.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`btn ${
                            timeSlot === slot ? "btn-outline-primary" : "btn-outline-secondary"
                          }`}
                          onClick={() => setTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                <Users className="me-2" /> Your Details
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="d-grid gap-3">
                  <input name="name" value={form.name} onChange={handleInputChange} required className="form-control" placeholder="Full Name *" />
                  <input name="phone" value={form.phone} onChange={handleInputChange} required className="form-control" placeholder="Phone *" />
                  <input name="email" type="email" value={form.email} onChange={handleInputChange} className="form-control" placeholder="Email" />
                  <select name="treatment" value={form.treatment} onChange={handleInputChange} required className="form-select">
                    <option value="">Select Treatment</option>
                    {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button type="submit" className={`btn ${
                    isSubmitting ? "btn-secondary" : "btn-primary"
                  } d-flex align-items-center justify-content-center`} disabled={isSubmitting}>
                    {isSubmitting ? <><div className="spinner-border spinner-border-sm me-2"></div> Processing...</> : <><CheckCircle className="me-2" /> Confirm Booking</>}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booked;
