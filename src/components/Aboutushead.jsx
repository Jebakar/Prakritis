import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

const Abouthead = () => {
  return (
    <section className="">
      <div className="container-fluid ">
        <div className="row justify-content-center text-center p-5" style={{backgroundColor:"#90A93E"}}>
          <div className="col-md-8" style={{padding:"80px 0px"}}>
            <h6 className="text-uppercase mb-2 text-white" style={{letterSpacing:"3px" ,fontFamily: "'Brygada 1918', serif",  }} >Who We are</h6> 
            <h1 className="fw-bold text-white ps" style={{
                    fontSize: "88px",
                    fontFamily: "'Brygada 1918', serif",
                  }}>About Us</h1> 
          </div>
        </div>
      </div>
      <Header/>
    </section>
  );
};

export default Abouthead;
