import React, { useState, useEffect } from "react";
import annanagar from "../Images/anna.png";
import RARuran from "../Images/RA-Puram.png";
import kattupakkam from "../Images/katu.jpeg";
import Abhyangams from "../Images/Abhyanga-with-Steam.jpeg";
import treatment from "../Images/service9.jpg";
import consultation from "../Images/gallery9.jpg";
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
  CircleUser,
  CircleUserRound,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import "./custom.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

const Booked = () => {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "" });
  const [activeTab, setActiveTab] = useState("booking");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const modal = document.getElementById('successModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }

    setIsSubmitting(false);
  };

  const closeModal = () => {
    const modal = document.getElementById('successModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  };

  const branches = [
    { name: "Anna Nagar", image: annanagar, address: "123 Anna Nagar, Chennai", rating: 4.8 },
    { name: "RA Puram", image: RARuran, address: "456 RA Puram, Chennai", rating: 4.9 },
    { name: "Katupakkam", image: kattupakkam, address: "789 Katupakkam, Chennai", rating: 4.7 },
  ];

  const treat=[
    {name: "Abhyangams",image:Abhyangams,description: "A full-body oil massage that rejuvenates the body and mind."},
    {name: "Treatment",image:treatment, description: "A soothing treatment where warm oil is poured on the forehead."},
    {name: "Consultations",image:consultation, description: "A detoxification process that cleanses the body of toxins."},
  ]
  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];

  const slots = [
    { label: "Available Slots", values: ["09:00 AM", "10:30 AM", "12:00 NOON", "01:30 PM", "03:00 PM", "04:30 PM"] },
  ];


  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
     <div className="bg-primary text-white py-5" style={{ fontFamily: "'Brygada 1918', serif" }}>
  <div className="container text-center py-4">
    <p className="lead mb-4" data-aos="fade-down" data-aos-delay="100">
      Experience the ancient healing of Ayurveda at our wellness centers
    </p>
    <h1 className="display-5 fw-bold mb-3" data-aos="fade-down">BOOK NOW</h1>

    {/* Navigation Tabs */}
    <div className="d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-delay="200">
      <div className="btn-group" role="group">
        <button 
          type="button" 
          className={`btn ${activeTab === 'booking' ? 'btn-light' : 'btn-outline-light'}`}
          onClick={() => setActiveTab('booking')}
        >
          Book Appointment
        </button>
        <button 
          type="button" 
          className={`btn ${activeTab === 'info' ? 'btn-light' : 'btn-outline-light'}`}
          onClick={() => setActiveTab('info')}
        >
          Center Information
        </button>
      </div>
    </div>
  </div>
</div>


      {activeTab === 'booking' ? (
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {/* Branch Selection */}
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">
                <div className="card-header bg-primary text-white text-center py-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <MapPin className="me-2" size={20} /> 
                    <span>Choose Branch</span>
                  </div>
                </div>
                <div className="card-body p-3">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className={`card mb-3 p-2 rounded-3 border cursor-pointer hover-scale ${
                        location === branch.name ? "border-primary border-2 shadow-sm" : "border-light"
                      }`}
                      onClick={() => setLocation(branch.name)}
                    >
                      <div className="d-flex">
                        <img 
                          src={branch.image} 
                          alt={branch.name} 
                          className="rounded me-3" 
                          style={{ 
                            width: 60, 
                            height: 60, 
                            objectFit: "cover",
                            border: location === branch.name ? "2px solid #10b981" : "none"
                          }} 
                        />
                        <div>
                          <h6 className="mb-1 fw-bold text-dark">{branch.name}</h6>
                          <small className="text-muted d-block mb-1">{branch.address}</small>
                          <div className="d-flex align-items-center">
                            <Star className="text-warning" size={16} fill="#ffc107" />
                            <small className="ms-1 fw-bold">{branch.rating}</small>
                            <small className="text-muted ms-2">({Math.floor(Math.random() * 100) + 50} reviews)</small>
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
              <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">
                <div className="card-header bg-primary text-white text-center py-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <Calendar className="me-2" size={20} /> 
                    <span>Select Date</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="rounded p-0 d-flex justify-content-center mb-2 bg-white shadow-sm">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setTimeSlot("");
                      }}
                      inline
                      minDate={new Date()}
                      maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
                      className="w-auto border-0"
                      calendarClassName="border-0"
                      dayClassName={(date) => 
                        date.getDate() === new Date().getDate() && 
                        date.getMonth() === new Date().getMonth() ? 
                        'text-primary fw-bold' : ''
                      }
                    />
                  </div>
                  <div className="border rounded-4 p-3 bg-white shadow-sm">
                    <label className="form-label fw-bold mb-2 d-flex align-items-center">
                      <User className="me-2" size={18} /> Gender
                    </label>
                    <div className="row g-3">
                      {[
                        { value: "Male", icon: <CircleUser size={18} /> }, 
                        { value: "Female", icon: <CircleUserRound size={18} /> }
                      ].map((g) => (
                        <div className="col-6" key={g.value}>
                          <button
                            type="button"
                            className={`btn w-100 d-flex align-items-center justify-content-center border rounded-3 py-2 px-3 ${
                              gender === g.value
                                ? "btn-outline-primary bg-green-50 border-2 shadow-sm"
                                : "btn-outline-secondary"
                            }`}
                            onClick={() => setGender(g.value)}
                          >
                            {g.icon}
                            <span className="ms-2 fw-semibold">{g.value}</span>
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
              <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">
                <div className="card-header bg-primary text-white text-center py-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <Clock className="me-2" size={20} /> 
                    <span>Select Time</span>
                  </div>
                </div>
                 <div className="card-body p-3">
                  {treat.map((branch) => (
                    <div
                      key={branch.name}
                      className={`card mb-3 p-2 rounded-3 border cursor-pointer hover-scale ${
                        location === branch.name ? "border-primary border-2 shadow-sm" : "border-light"
                      }`}
                      onClick={() => setLocation(branch.name)}
                    >
                      <div className="d-flex">
                        <img 
                          src={branch.image} 
                          alt={branch.name} 
                          className="rounded me-3" 
                          style={{ 
                            width: 60, 
                            height: 60, 
                            objectFit: "cover",
                            border: location === branch.name ? "2px solid #10b981" : "none"
                          }} 
                        />
                        <div>
                          <h6 className="mb-1 fw-bold text-dark">{branch.name}</h6>
                          <small className="text-muted d-block mb-1">{branch.description}</small>
                          <div className="d-flex align-items-center">
                            <Star className="text-warning" size={16} fill="#ffc107" />
                            {/* <small className="ms-1 fw-bold">{branch.rating}</small> */}
                            <small className="text-muted ms-2">({Math.floor(Math.random() * 100) + 50} reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">
                <div className="card-header bg-primary text-white text-center py-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <Users className="me-2" size={20} /> 
                    <span>Your Details</span>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} className="d-grid gap-3">
                    <div className="form-floating">
                      <input 
                        name="name" 
                        value={form.name} 
                        onChange={handleInputChange} 
                        required 
                        className="form-control border-0 border-bottom rounded-0" 
                        placeholder="Full Name *" 
                        id="nameInput"
                      />
                      <label htmlFor="nameInput">Full Name *</label>
                    </div>
                    
                    <div className="form-floating">
                      <input 
                        name="phone" 
                        value={form.phone} 
                        onChange={handleInputChange} 
                        required 
                        className="form-control border-0 border-bottom rounded-0" 
                        placeholder="Phone *" 
                        id="phoneInput"
                      />
                      <label htmlFor="phoneInput">Phone *</label>
                    </div>
                    
                    <div className="form-floating">
                      <input 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleInputChange} 
                        className="form-control border-0 border-bottom rounded-0" 
                        placeholder="Email" 
                        id="emailInput"
                      />
                      <label htmlFor="emailInput">Email</label>
                    </div>
                    
                    <div className="form-floating">
                      <select 
                        name="treatment" 
                        value={form.treatment} 
                        onChange={handleInputChange} 
                        required 
                        className="form-select border-0 border-bottom rounded-0" 
                        id="treatmentSelect"
                      >
                        <option value=""></option>
                        {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <label htmlFor="treatmentSelect">Select Treatment *</label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={` btn-lg mt-3 py-1 fw-bold d-flex align-items-center justify-content-center rounded-full${
                        isSubmitting ? 'disabled' : ''
                      }`} 
                      style={{ backgroundColor: '#90A93E', color: '#fff' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="me-1" size={20} />
                          <span>Confirm Booking</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row g-4">``
            {/* Branch Information */}
            {branches.map((branch, index) => (
              <div className="col-md-4" key={branch.name} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm hover-scale">
                  <img 
                    src={branch.image} 
                    className="card-img-top rounded-top" 
                    alt={branch.name} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold text-primary">{branch.name}</h4>
                    <p className="card-text text-muted">
                      <MapPin size={16} className="me-1 text-danger" /> {branch.address}
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <Star className="text-warning" size={16} fill="#ffc107" />
                      <span className="ms-1 fw-bold">{branch.rating}</span>
                      <span className="text-muted ms-2">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                    </div>
                    <div className="border-top pt-3">
                      <h6 className="fw-bold mb-3">Contact Information</h6>
                      <p className="d-flex align-items-center mb-2">
                        <Phone size={16} className="me-2 text-muted" />
                        <span>+91-86800 01020</span>
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <Mail size={16} className="me-2 text-muted" />
                        <span>info@{branch.name.toLowerCase().replace(' ', '')}.com</span>
                      </p>
                      <p className="d-flex align-items-center">
                        <MessageSquare size={16} className="me-2 text-muted" />
                        <span>WhatsApp: +91-86800 01020</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button 
                      className="btn btn-outline-primary w-100"
                      onClick={() => setActiveTab('booking')}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Working Hours Section */}
          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h3 className="text-center fw-bold mb-4 text-primary">Working Hours</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-3 mb-3 h-100">
                      <h5 className="fw-bold d-flex align-items-center">
                        <Clock className="me-2 text-primary" size={20} />
                        <span>General Hours</span>
                      </h5>
                      <p className="mb-0"><strong>Mon - Sun:</strong> 07:00 AM – 07:00 PM</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-3 mb-3 h-100">
                      <h5 className="fw-bold d-flex align-items-center">
                        <UserCheck className="me-2 text-primary" size={20} />
                        <span>Consultation Hours</span>
                      </h5>
                      <p className="mb-0"><strong>Mon - Sat:</strong> 10:00 AM – 01:00 PM, 04:00 PM – 07:00 PM</p>
                      <p className="mb-0"><strong>Sunday:</strong> Based on appointments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <div className="modal fade" id="successModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header border-0 bg-primary text-white">
              <h5 className="modal-title">Booking Confirmed!</h5>
              <button type="button" className="btn-close btn-close-white" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body text-center py-5">
              <CheckCircle size={60} className="text-success mb-4" />
              <h4 className="fw-bold mb-3">Thank you for your booking!</h4>
              <p className="mb-4">
                Your appointment has been successfully scheduled. We've sent the details to your email.
              </p>
              <div className="alert alert-info text-start">
                <h6 className="fw-bold">Appointment Details:</h6>
                <p className="mb-1"><strong>Location:</strong> {location}</p>
                <p className="mb-1"><strong>Date:</strong> {selectedDate?.toLocaleDateString()}</p>
                <p className="mb-1"><strong>Time:</strong> {timeSlot}</p>
                <p className="mb-1"><strong>Treatment:</strong> {form.treatment}</p>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button type="button" className="btn btn-primary px-4" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
      `}</style>
    </div>
  );
};

export default Booked;