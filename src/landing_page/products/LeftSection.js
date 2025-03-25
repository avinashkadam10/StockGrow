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
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center">
          <img src={imageUrl} alt={productTitle} style={{ width: "90%" }} />
        </div>

        {/* Text Content Section */}
        <div className="col-md-6 col-12 p-5">
          <h1 className="mb-2">{productTitle}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>

          {/* Try Demo & Learn More Links */}
          <div className="mb-3">
            <a 
              href={tryDemo} 
              style={{ textDecoration: "none", marginRight: "15%" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a 
              href={learnMore} 
              style={{ textDecoration: "none" }} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Google Play & App Store Links */}
          <div>
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img src="/media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
            </a>
            <a href={appStore} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10%" }}>
              <img src="/media/images/appstoreBadge.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
