import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="row mt-5 p-3 p-md-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India. <br className="d-none d-md-block" />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content Section */}
      <div
        className="row mt-5 mb-5 p-3 p-md-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. 
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <span className="text-primary">Rainmatter</span>, our fintech fund
            and incubator, has invested in several fintech startups with the
            goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
