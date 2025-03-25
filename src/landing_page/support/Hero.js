import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="sectionWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6">
        <h4>Search for an answer or browse help topics to create a ticket</h4>
        <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
        <div className="row mt-3">
            <div className="col-4"><a href="">Track account opening</a></div>
            <div className="col-5"><a href="">Track segment activation</a></div>
            <div className="col-4 mt-3"><a href="">Intraday margins</a></div>
            <div className="col-4 mt-3"> <a href="">Kite user manual</a></div>
        </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
            <h4>Featured</h4>
            <ol>
                <li className="mb-3"><a href="">Surveillance measure on scrips - March 2025 </a></li>
                <li><a href="">Rights Entitlements listing in March 2025</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
