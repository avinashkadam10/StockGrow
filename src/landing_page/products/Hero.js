import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mb-5 border-bottom pb-4">
        <div className="col-12">
          <h1 className="mb-3 mt-5">StockGrow Products</h1>
          <h2 className="mb-3 text-muted">
            Sleek, modern, and intuitive trading platforms
          </h2>
          <p className="mb-5">
            Check out our{" "}
            <span className="text-primary">investment offerings →</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
