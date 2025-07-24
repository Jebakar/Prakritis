import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ourteam = () => {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row justify-content-center text-center" style={{backgroundColor:"#90A93E"}}>
          <div className="col-md-8">
            {/* <h6 className="text-uppercase mb-2 text-white">Who We are</h6>  */}
            <h1 className=" text-white  "  style={{
                    fontSize: "5.5rem",
                    fontFamily: "'Brygada 1918', serif",
                    padding:"80px 0px"
                  }}>Our Team</h1> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
