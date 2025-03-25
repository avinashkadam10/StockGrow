import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <h2 className="mt-5 mb-3">The StockGrow Universe</h2>
      <p className="text-muted mb-4">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid" style={{ width: "40%" }} />
        </div>
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/sensibullLogo.svg" alt="Sensibull" className="img-fluid" />
        </div>
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/smallcaseLogo.png" alt="Smallcase" className="img-fluid" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/goldenpiLogo.png" alt="GoldenPi" className="img-fluid" />
        </div>
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/dittoLogo.png" alt="Ditto" className="img-fluid" style={{ width: "30%" }} />
        </div>
        <div className="col-md-4 col-6 mb-3">
          <img src="/media/images/streakLogo.png" alt="Streak" className="img-fluid" style={{ width: "40%" }} />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary fs-5 p-2" style={{ width: "20%" }}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
