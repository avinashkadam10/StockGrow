import React from "react";

function RightSection({imageUrl, productTitle, productDescription, learnMore}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <h1 className="mb-2 mt-5">{productTitle}</h1>
          <p className="fs-5 mb-2 text-muted">{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
