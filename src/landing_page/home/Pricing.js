import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row mb-5 align-items-center">
        {/* Pricing Info Section */}
        <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none d-inline-block">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Spacer for larger screens */}
        <div className="col-md-2 d-none d-md-block"></div>

        {/* Pricing Boxes Section */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            {/* First Box */}
            <div className="col-12 col-sm-6 border p-3 mb-3 mb-sm-0">
              <h1 className="mb-3">&#8377;0</h1>
              <p>
                Free equity delivery<br />
                and direct mutual funds
              </p>
            </div>
            {/* Second Box */}
            <div className="col-12 col-sm-6 border p-3">
              <h1 className="mb-3">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
