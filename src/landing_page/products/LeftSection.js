import React from "react";

function LeftSection({
  imageUrl,
  productTitle,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="" style={{width:"90%"}}/>
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-2">{productTitle}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"30%", textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="" style={{marginLeft:"20%"}} />
            </a>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default LeftSection;
