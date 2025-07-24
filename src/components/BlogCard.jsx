import React from "react";

const BlogCard = ({ image, title, date }) => {
  const [day, month] = date.split(" "); // e.g., "21 Aug"

  return (
    <div className="col-md-4 mb-4"> 
      <div 
        className="card blog-card shadow border-0" 
        style={{
          transition: "all 0.4s ease",  
          borderRadius: "15px", 
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative" }}> 
          <img 
            src={image}
            alt={title}
            style={{ width: "100%", height: "auto", display: "block" }} 
          /> 

          {/* Date Badge */}
          <div 
            style={{
              position: "absolute", 
              top: "15px",
              left: "15px",
              background: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#000",
              zIndex: 2,
            }}
          >
            <strong>{day}</strong>{month}  
          </div> 
        </div> 

        {/* Title Section */}
        <div
          className="card-body bg-white text-black"
          style={{
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 className="card-title mb-0">{title}</h5> 
        </div>
      </div>
    </div>
  ); 
}; 

export default BlogCard;  
