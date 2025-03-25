import React from "react";

function RightSection({ imageUrl, productTitle, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mt-5">
          <h1 className="mb-2">{productTitle}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>
          <a 
            href={learnMore} 
            className="text-decoration-none" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={productTitle} className="img-fluid" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
