import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BookingPage.css';
import Galleryhead from './Galleryhead';
import male from '../Images/MaleAvatar.jpg';
import female from '../Images/FemaleAvatar.png';
import AnnaNagar from '../Images/banner-03.png';
import RAPuram from '../Images/banner-01.jpg';
import Kattupakkam from '../Images/banner-04.jpg';

const BookingPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const places = [
    { name: "Anna Nagar", image: AnnaNagar },
    { name: "RA Puram", image: RAPuram },
    { name: "Kattupakkam", image: Kattupakkam }
  ];

  const genders = [
    { name: "Male", image: male },
    { name: "Female", image: female }
  ];

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setSelectedGender(null);
    setShowBookingForm(false);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setShowBookingForm(true);
  };

  const resetSelection = () => {
    setSelectedPlace(null);
    setSelectedGender(null);
    setShowBookingForm(false);
  };

  return (
    <section className="booking-section">
      <Galleryhead item="Book Now" />
      
      {!selectedPlace && (
        <div className="container">
          <h1 className="text-center my-5 text-green-500">Select Your Branch</h1>
          <div className="row">
            {places.map((place, index) => (
              <motion.div
                key={index}
                className="col-md-4 mb-4"
                whileHover={{ scale: 1.05 }}
                onClick={() => handlePlaceSelect(place)}
              >
                <div className="card h-100 cursor-pointer">
                  <img src={place.image} className="card-img-top w-[300px] h-[300px] object-cover" alt={place.name} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{place.name}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {selectedPlace && !selectedGender && (
        <div className="container">
          <div className="flex justify-between items-center mb-4">
            <button onClick={resetSelection} className="btn btn-secondary">
              ← Back to Branches
            </button>
            <h3 className="text-center">Selected: {selectedPlace.name}</h3>
            <div></div> {/* Empty div for spacing */}
          </div>
          <h1 className="text-center my-5 text-green-500">Select Your Gender</h1>
          <div className="row">
            {genders.map((gender, index) => (
              <motion.div
                key={index}
                className="flex-1 justify-center items-center m-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleGenderSelect(gender)}
              >
                <div className="card h-100 rounded-xl duration-300 hover:rotate-3 hover:shadow-lg">
                  <img src={gender.image} className="card-img-top w-[300px] h-[300px]" alt={gender.name} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{gender.name}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {showBookingForm && (
        <div className="booking-container">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setShowBookingForm(false)} className="btn btn-secondary">
              ← Back to Gender Selection
            </button>
            <h3 className="text-center">
              Selected: {selectedPlace.name} ({selectedGender.name})
            </h3>
            <div></div> {/* Empty div for spacing */}
          </div>

          <div className="booking-form-column">
            <div className="divider"></div>
            <h4>Book Now</h4>
            <div className="booking-form">
              <form>
                {/* Your existing form fields here */}
                <p>
                  <input type="text" name="first-name" placeholder="First Name" required />
                  <br />
                  <input type="text" name="last-name" placeholder="Last Name" required />
                  <br />
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <br />
                  <input type="email" name="email" placeholder="Email Address" required />
                  <br />
                  <textarea name="address" placeholder="Address"></textarea>
                  <br />
                  <input type="date" name="appointment-date" min={new Date().toISOString().split('T')[0]} placeholder="Choose Date" required />
                  <br />
                  <select name="time" required>
                    <option value="">Preferred Time</option>
                    <option value="08.00 Am">08.00 Am</option>
                    <option value="09.00 Am">09.00 Am</option>
                    <option value="10.00 Am">10.00 Am</option>
                    <option value="11.00 Am">11.00 Am</option>
                    <option value="12.00 Pm">12.00 Pm</option>
                    <option value="01.00 Pm">01.00 Pm</option>
                    <option value="02.00 Pm">02.00 Pm</option>
                    <option value="03.00 Pm">03.00 Pm</option>
                    <option value="04.00 Pm">04.00 Pm</option>
                    <option value="05.00 Pm">05.00 Pm</option>
                    <option value="06.00 Pm">06.00 Pm</option>
                  </select>
                </p>            
                <select name="abhyangam">
                  <option value="Abhyangam">Abhyangam</option>
                  {/* Other options... */}
                </select>
                
                <select name="treatment">
                  <option value="Special Oil Abhyangam">Special Oil Abhyangam</option>
                  {/* Other options... */}
                </select>

                <div className="treatment-group" id="consult-group">
                  <select name="consultation">
                    <option value="Online Consultation - Zoom">Online Consultation – Zoom</option>
                    <option value="Direct consultation">Direct consultation</option>
                  </select>
                </div>
                
                <p>
                  <textarea name="special-requests" placeholder="Special Requests"></textarea>
                  <br />
                  <button type="submit" className="submit-button">Book Now</button>
                </p>
              </form>
            </div>
          </div>
          
          <div className="contact-info-column">
            <h5>What Are You Waiting For...</h5>
            <h2>Make an appointment</h2>
            
            {/* Your existing contact info... */}
            
            <div className="divider"></div>
            
            <h3>Working Hours</h3>
            <p><em><strong><span className="left">Mon – Sun : </span><span className="right">07am – 07pm</span></strong></em></p>
            
            <h3>Consultation Hours</h3>
            <p><em><strong><span className="left">Mon – Sat : </span><span className="right">10am – 01pm , </span></strong></em><em><strong>04pm – 07pm</strong></em></p>
            <p><strong>Sunday</strong> – Based On the Appointments</p>
          </div>
        </div>
      )}
    </section>
  );
};
export default BookingPage;