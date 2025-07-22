import React from 'react';
import './BookingPage.css'; // You'll need to create this CSS file for styling

const BookingPage = () => {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-form-column">
          <div className="divider"></div>
          <h4>Book Now</h4>
          <div className="booking-form">
            <form>
              <p>
                <input type="text" name="first-name" placeholder="First Name" required />
                <br />
                <input type="text" name="last-name" placeholder="Last Name" required />
                <br />
                Gender
                <br />
                <span className="radio-group">
                  <label>
                    <input type="radio" name="gender" value="Male" defaultChecked /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Female" /> Female
                  </label>
                </span>
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
                  <option value="Abhyangam with Steam">Abhyangam with Steam</option>
                  <option value="Abhyangam with Shirodhara">Abhyangam with Shirodhara</option>
                  <option value="Varnyam">Varnyam</option>
                  <option value="Pada Abhyangam with Herbal Dip">Pada Abhyangam with Herbal Dip</option>
                  <option value="Shiro & Neck with Bath">Shiro & Neck with Bath</option>
                  <option value="Pada Abhyangam">Pada Abhyangam</option>
                  <option value="Dandruff & Hairfall">Dandruff & Hairfall</option>
                  <option value="Varnya Abhyangam">Varnya Abhyangam</option>
                  <option value="Head Massage">Head Massage</option>
                  <option value="Foot Massage">Foot Massage</option>
                  <option value="Spine and Neck">Spine and Neck</option>
                </select>
                <select name="treatment">
                  <option value="Special Oil Abhyangam">Special Oil Abhyangam</option>
                  <option value="Special Oil Abhyangam with Steam">Special Oil Abhyangam with Steam</option>
                  <option value="Special Oil Abhyangam with Shirodhara">Special Oil Abhyangam with Shirodhara</option>
                  <option value="Udwarthanam (Powder Massage)">Udwarthanam (Powder Massage)</option>
                  <option value="Udwarthanam With Steam">Udwarthanam With Steam</option>
                  <option value="Udwarthanam With Valuka Swedanam">Udwarthanam With Valuka Swedanam</option>
                  <option value="Special Oil Abhyangam with Valuka Swedanam">Special Oil Abhyangam with Valuka Swedanam</option>
                  <option value="Patrapodala Swedanam (Elakizhi)">Patrapodala Swedanam (Elakizhi)</option>
                  <option value="Pizhichal">Pizhichal</option>
                  <option value="Kashaya Dhara">Kashaya Dhara</option>
                  <option value="Khadi Dhara">Khadi Dhara</option>
                  <option value="Shirodhara">Shirodhara</option>
                  <option value="Thakradhara">Thakradhara</option>
                  <option value="Avagaham">Avagaham</option>
                  <option value="Shirovasthi">Shirovasthi</option>
                  <option value="Navarakizhi">Navarakizhi</option>
                  <option value="Mamsakizhi">Mamsakizhi</option>
                  <option value="Ksheera Dhoopam (Partial)">Ksheera Dhoopam (Partial)</option>
                  <option value="Kattivasti">Kattivasti</option>
                  <option value="Urovasti">Urovasti</option>
                  <option value="Pichu (Local)">Pichu (Local)</option>
                  <option value="Pichu (Head)">Pichu (Head)</option>
                  <option value="Nasyam">Nasyam</option>
                  <option value="Tharpanam">Tharpanam</option>
                  <option value="Kashaya Vasthi">Kashaya Vasthi</option>
                  <option value="Ksheera Vasthi">Ksheera Vasthi</option>
                  <option value="Sneha Vasthi">Sneha Vasthi</option>
                  <option value="Bandage">Bandage</option>
                  <option value="Uraswedanam">Uraswedanam</option>
                  <option value="Thalapothichil">Thalapothichil</option>
                  <option value="Partial 70% Rate">Partial 70% Rate</option>
                  <option value="Ekanga 50% Rate">Ekanga 50% Rate</option>
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
                {/* ReCAPTCHA would go here in a real implementation */}
                <button type="submit" className="submit-button">Book Now</button>
              </p>
            </form>
          </div>
        </div>
        
        <div className="contact-info-column">
          <h5>What Are You Waiting For...</h5>
          <h2>Make an appointment</h2>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="content">
              <h6>Anna Nagar</h6>
              <p>#AJ-15, 5th street, 9th main road, Annan agar, Chennai - 600 040.</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
              <h6>Tele Phone</h6>
              <p>+91-44-26215695 / +91-44-26209052</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-mobile"></i>
            </div>
            <div className="content">
              <h6>Phone</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="content">
              <h6>WhatsApp</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="content">
              <h6>RA Puram</h6>
              <p>New No. 02 / Old No. 012, Kandaswamy Street, Raja Annamalaipuram, Chennai – 600 028 (Near R.A Puram BSNL Office).</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
              <h6>Tele Phone</h6>
              <p>+91-44-42100017 / +91-44-42100027</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-mobile"></i>
            </div>
            <div className="content">
              <h6>Phone</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>
          
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="content">
              <h6>WhatsApp</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <h3>Working Hours</h3>
          <p><em><strong><span className="left">Mon – Sun : </span><span className="right">07am – 07pm</span></strong></em></p>
          
          <h3>Consultation Hours</h3>
          <p><em><strong><span className="left">Mon – Sat : </span><span className="right">10am – 01pm , </span></strong></em><em><strong>04pm – 07pm</strong></em></p>
          <p><strong>Sunday</strong> – Based On the Appointments</p>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;