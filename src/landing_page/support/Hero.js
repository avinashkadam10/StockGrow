import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 text-center" id="sectionWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>

      <div className="container">
        <div className="row p-3">
          {/* Left Section */}
          <div className="col-lg-6 col-md-7 col-sm-12 text-center text-md-start">
            <h4>Search for an answer or browse help topics to create a ticket</h4>
            <input 
              type="text" 
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..." 
              className="form-control mt-2"
            />
            <div className="row mt-3">
              <div className="col-md-6 col-sm-12"><a href="">Track account opening</a></div>
              <div className="col-md-6 col-sm-12"><a href="">Track segment activation</a></div>
              <div className="col-md-6 col-sm-12 mt-3"><a href="">Intraday margins</a></div>
              <div className="col-md-6 col-sm-12 mt-3"><a href="">Kite user manual</a></div>
            </div>
          </div>

          {/* Empty Column for Spacing (Hidden on Small Screens) */}
          <div className="col-lg-2 d-none d-lg-block"></div>

          {/* Right Section */}
          <div className="col-lg-4 col-md-5 col-sm-12 mt-5 text-center text-md-start">
            <h4>Featured</h4>
            <ol className="ps-0">
              <li className="mb-3"><a href="">Surveillance measure on scrips - March 2025</a></li>
              <li><a href="">Rights Entitlements listing in March 2025</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
