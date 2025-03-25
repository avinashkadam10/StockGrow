import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";

function ProductPage() {
  return (
    <>
      <Hero />

      {/* Kite Product Section */}
      <LeftSection
        imageUrl="/media/images/kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.demo"
        learnMore="https://kite.learn"
        googlePlay="https://play.google.com/store/apps/details?id=com.kite"
        appStore="https://apps.apple.com/us/app/kite/id123456"
      />

      {/* Console Product Section */}
      <RightSection
        imageUrl="/media/images/console.png"
        productTitle="Console"
        productDescription="The central dashboard for your StockGrow account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://console.learn"
      />

      {/* Coin Product Section */}
      <LeftSection
        imageUrl="/media/images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.demo"
        learnMore="https://coin.learn"
        googlePlay="https://play.google.com/store/apps/details?id=com.coin"
        appStore="https://apps.apple.com/us/app/coin/id123456"
      />

      {/* Kite Connect API Product Section */}
      <RightSection
        imageUrl="/media/images/kiteconnect.png"
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
        learnMore="https://kiteconnect.learn"
      />

      {/* Varsity Mobile Product Section */}
      <LeftSection
        imageUrl="/media/images/varsity.png"
        productTitle="Varsity mobile"
        productDescription="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-sized cards to help you learn on the go."
        tryDemo="https://varsity.demo"
        learnMore="https://varsity.learn"
        googlePlay="https://play.google.com/store/apps/details?id=com.varsity"
        appStore="https://apps.apple.com/us/app/varsity/id123456"
      />

      {/* Technology Stack Section */}
      <div className="container">
        <p className="text-center fs-4">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://StockGrow.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            StockGrow.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <Universe />
    </>
  );
}

export default ProductPage;
