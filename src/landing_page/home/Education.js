import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src="media/images/education.svg" alt="Education" className="img-fluid" style={{ width: "70%" }} />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 mb-5 text-center text-md-start">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none d-inline-block">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none d-inline-block">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
