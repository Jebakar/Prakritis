// Updated Booked.tsx with 4-column layout and removed room section
import React, { useState } from "react";
import annanagar from "../Images/anna.png";
import RARuran from "../Images/RA-Puram.png";
import kattupakkam from "../Images/katu.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CheckCircle,
  XCircle,
  MapPin,
  Clock,
  Users,
  User,
  UserCheck,
  Calendar,
  Star,
  Phone,
  Mail
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import Galleryhead from "./Galleryhead";

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
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    alert(
      JSON.stringify(
        {
          ...form,
          location,
          gender,
          selectedDate: selectedDate?.toLocaleDateString(),
          timeSlot,
        },
        null,
        2
      )
    );
    setIsSubmitting(false);
  };

  const branches: Branch[] = [
    { name: "Anna Nagar", image: annanagar, address: "123 Anna Nagar, Chennai", rating: 4.8 },
    { name: "RA Puram", image: RARuran, address: "456 RA Puram, Chennai", rating: 4.9 },
    { name: "Katupakkam", image: kattupakkam, address: "789 Katupakkam, Chennai", rating: 4.7 }
  ];

  const timeSlots = ["09:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];

  const canProceed = (step: number) => {
    switch (step) {
      case 1: return location && selectedDate;
      case 2: return gender && timeSlot;
      case 3: return form.name && form.phone && form.treatment;
      default: return false;
    } 
  };

  return (
    <div className="min-vh-100 bg-light">
      <Galleryhead item="Booking" />
      <div className="container px-4 py-5 py-lg-8">
        <div className="row g-4 justify-content-center">

          {/* Column 1: Branch Selection */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white p-4 d-flex align-items-center">
                <MapPin className="me-1" />
                <h3 className="h5 mb-0">Choose Branch</h3>
              </div>
              <div className="card-body p-2">
                <div className="d-grid gap-2">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className={`card p-3 cursor-pointer transition-all ${
                        location === branch.name ? "border-primary bg-primary bg-opacity-10 shadow-sm" : "border hover-border-primary"
                      }`}
                      onClick={() => setLocation(branch.name)}
                    >
                      <div className="d-flex align-items-center">
                        <div className="position-relative me-3">
                          <img
                            src={branch.image}
                            alt={branch.name}
                            className="rounded"
                            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                          />
                          {location === branch.name && (
                            <div className="position-absolute top-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '24px', height: '24px', transform: 'translate(50%, -50%)' }}>
                              <CheckCircle className="text-white" style={{ width: '16px', height: '16px' }} />
                            </div>
                          )}
                        </div>
                        <div className="flex-grow-1">
                          <h5 className={`mb-1 ${location === branch.name ? 'text-white ' : ''}`}>{branch.name}</h5>
                          <p className="small text-muted mb-1">{branch.address}</p>
                          <div className="d-flex align-items-center">
                            <Star className="text-warning me-1" style={{ width: '16px', height: '16px' }} />
                            <span className="small fw-medium">{branch.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Date Picker */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white p-4 d-flex align-items-center justify-content-center">
                <Calendar className="me-2" />
                <h3 className="h5 mb-0">Select Date</h3>
              </div>
              <div className="card-body p-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setTimeSlot("");
                  }}
                  inline
                  minDate={new Date()}
                  className="w-100"
                />
              </div>
            </div>
          </div>

          {/* Column 3: Preferences */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white p-4 d-flex align-items-center">
                <Clock className="me-2" />
                <h3 className="h5 mb-0">Preferences</h3>
              </div>
              <div className="card-body p-4">
                {/* Gender */}
                <div className="mb-4">
                  <label className="form-label">Gender</label>
                  <div className="row g-2">
                    {[{ value: "Male", icon: <User className="me-2" /> }, { value: "Female", icon: <UserCheck  /> }].map((g) => (
                      <div className="col-6" key={g.value}>
                        <button
                          type="button"
                          className={`w-100 p-3 rounded border-2 fw-medium d-flex align-items-center justify-content-center ${
                            gender === g.value ? "border-primary bg-opacity-10 text-primary" : "border-light text-muted hover-border-primary"
                          }`}
                          onClick={() => setGender(g.value)}
                        >
                          {g.icon}
                          <span>{g.value}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>



{/* Time Slot */}
<div className="mb-4">


  {/* Morning Slots */}
  <div className="mb-2">
    <h6 className="fw-semibold mb-2">Morning</h6>
    <div className="row g-2">
      {["09:00 AM", "10:30 AM", "12:00 PM"].map((slot) => (
        <div className="col-6" key={slot}>
          <button
            type="button"
            className={`w-100 p-2 rounded border-2 fw-medium ${
              timeSlot === slot ? "border-primary bg-opacity-10 text-primary shadow-sm" : "border-light text-muted hover-border-primary"
            }`}
            onClick={() => setTimeSlot(slot)}
          >
            {slot}
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Evening Slots */}
  <div className="mt-3">
    <h6 className="fw-semibold mb-2">Evening</h6>
    <div className="row g-2">
      {["01:30 PM", "03:00 PM", "04:30 PM"].map((slot) => (
        <div className="col-6" key={slot}>
          <button
            type="button"
            className={`w-100 p-2 rounded border-2 fw-medium ${
              timeSlot === slot ? "border-primary bg-opacity-10 text-primary shadow-sm" : "border-light text-muted hover-border-primary"
            }`}
            onClick={() => setTimeSlot(slot)}
          >
            {slot}
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

              
              </div>
            </div>
          </div>

          {/* Column 4: Details Form */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white p-4 d-flex align-items-center">
                <Users className="me-2" />
                <h3 className="h5 mb-0">Your Details</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-1">
                    <label className="form-label">Full Name *</label>
                    <input className="form-control" name="name" value={form.name} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Phone *</label>
                    <input className="form-control" name="phone" value={form.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" name="email" value={form.email} onChange={handleInputChange} />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Treatment *</label>
                    <select className="form-select" name="treatment" value={form.treatment} onChange={handleInputChange} required>
                      <option value="">Select</option>
                      {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="d-grid gap-3">
                    <button type="submit" className={`btn d-flex align-items-center justify-content-center ${isSubmitting ? "btn-secondary pe-none" : "bg-primary"}`} disabled={isSubmitting}>
                      {isSubmitting ? <><div className="spinner-border spinner-border-sm me-2"></div><span>Processing...</span></> : <><CheckCircle className="me-2" /><span>Confirm Booking</span></>}
                    </button>
                  </div>
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
