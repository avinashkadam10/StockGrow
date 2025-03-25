import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-5">Charges</h1>
        <h3 className="mt-2 mb-5 fs-5 text-muted">
          List of all charges and taxes
        </h3>

        <div className="col-12 col-md-4 mt-3">
          <img src="/media/images/pricing0.svg" alt="" className="img-fluid" />
          <h2>Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <img src="/media/images/intradayTrades.svg" alt="" className="img-fluid" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 mt-3">
          <img src="/media/images/pricingMF.svg" alt="" className="img-fluid" />
          <h2>Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
