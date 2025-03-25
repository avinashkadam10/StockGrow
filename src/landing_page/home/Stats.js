import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-md-5 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust StockGrow with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The StockGrow universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups 
            offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, 
            but actively help you do better with your money.
          </p>
        </div>

        {/* Image & Links Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img src="media/images/ecosystem.png" alt="Stats" className="img-fluid" style={{ width: "80%" }} />
          <div className="mt-4">
            <a href="#" className="text-decoration-none d-block d-md-inline mx-md-5">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none d-block d-md-inline mt-3 mt-md-0">
              Try Kite <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
