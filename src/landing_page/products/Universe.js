import React from "react";

function Universe() {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3">The StockGrow Universe</h2>
      <p className="text-center text-muted mb-3 mt-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mb-3 " style={{marginLeft:"10%"}}>
        <div className="col-4">
          <img src="/media/images/zerodhaFundhouse.png" alt="" style={{width:"40%"}}/>
        </div>
        <div className="col-4">
          <img src="/media/images/sensibullLogo.svg" alt="" />
        </div>
        <div className="col-4">
          <img src="/media/images/smallcaseLogo.png" alt="" />
        </div>
      </div>

      <div className="row mt-2" style={{marginLeft:"10%"}}>
        <div className="col-4">
          <img src="/media/images/goldenpiLogo.png" alt="" />
        </div>
        <div className="col-4">
          <img src="/media/images/dittoLogo.png" alt=""style={{width:"30%"}}/>
        </div>
        <div className="col-4">
          <img src="/media/images/streakLogo.png" alt="" style={{width:"40%"}}/>
        </div>
      </div>
      <button className='p-2 mb-5 btn btn-primary fs-5 text-center mt-5' style={{width:"20%", margin:"0 0 0 38%"}}>Sign up for free</button>
    </div>
  );
}

export default Universe;
