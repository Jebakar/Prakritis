import React from "react";

function Footer  ()  {
  return (
    <footer className="site-footer custom-footer-bg " id="colophon" itemScope itemType="" itemID="#colophon">
      <div className="container py-4 text-white">
        {/* Primary Footer */}
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mt-4"> 
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li> 
              <li><a href="">Team</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Career</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Book Now</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Customer Feedback</a></li>
              <li><a href="">Case Sheet</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4"> 
            <h5>Services</h5> 
            <ul className="list-unstyled mt-4"> 
              <li><a href="">Abhyanga</a></li>
              <li><a href="">Abhyanga with Steam</a></li> 
              <li><a href="">Abhyanga with Sirodhara</a></li> 
              <li><a href="">Pada Abhyanga</a></li> 
              <li><a href="">Varnya</a></li>  
              <li><a href="">Dandruff and Hairfall</a></li>  
            </ul>  
          </div> 

          {/* Anna Nagar Branch */}
          <div className="col-md-3 mb-4">
            <h5>Anna Nagar Branch</h5>
            <p className="mt-4">#AJ-15, 5th Street, 9th Main Road, Anna Nagar, Chennai – 40</p>
            <p><strong>Phone:</strong><br />+91-44-26215695 / +91-44-26209052</p>
            <p><strong>WhatsApp:</strong> +91-8680001020</p>
            <p><strong>Email:</strong> contact@prakritiayurveda.com</p>
          </div>

          {/* RA Puram Branch */}
          <div className="col-md-3 mb-4">
            <h5 style={{fontFamily:"Brygada 1918', serif;"}}>RA Puram Branch</h5>
            <p className="mt-4">New No. 02 / Old No.12, Kandaswamy Street, Raja Annamalaipuram,<br />Chennai – 600 028</p>
            <p><strong>Phone:</strong><br />+91-44-42100017 / +91-44-42100027</p>
            <p><strong>WhatsApp:</strong> +91-8680001020</p>
            <p><strong>Email:</strong> rapuram@prakritiayurveda.com</p>
          </div>
        </div>

        {/* Below Footer */}
        <div className="row border-top pt-3 mt-3"> 
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© 2025 Prakriti Ayurvedic Care | All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 " style={{color:"lightblue"}}>
              Developed by{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                Samruva Technologies Private Limited 
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
