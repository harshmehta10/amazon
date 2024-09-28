import React from "react";
import Slider from "react-slick";
import PC_Hero from "../../assets/bannerimg/PC_Hero.jpg";
import MacPC_Hero from "../../assets/bannerimg/MacPC_Hero.jpg";
import cardgames from "../../assets/bannerimg/cardgames.jpg";
import redmi from "../../assets/bannerimg/redmi.jpg";
import dailyneeds from "../../assets/bannerimg/dailyneeds.jpg";
import Sony from "../../assets/bannerimg/Sony.jpg";
import shoes from "../../assets/bannerimg/shoes.jpg";
import mosquitonet from "../../assets/bannerimg/mosquitonet.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RECPC from "../../assets/products/RECPC.jpg";
import SamsungMi from "../../assets/products/SamsungMi.jpg";
import frigde from "../../assets/products/frigde.jpg";
import refrigde from "../../assets/products/refrigde.jpg";
import ac from "../../assets/products/ac.jpg";
import chimney from "../../assets/products/chimney.jpg";
import kitchen from "../../assets/products/kitchen.jpg";
import homedecor from "../../assets/products/homedecor.jpg";
import homeimprovement from "../../assets/products/homeimprovement.jpg";
import furniture from "../../assets/products/furniture.jpg";
// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        right: "15px",
        top: "20%",
        zIndex: 10,

        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        transform: "translateY(-50%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#000000" }}
      >
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        left: "15px",
        top: "20%",
        zIndex: 10,

        borderRadius: "50%",
        padding: "5px",
        cursor: "pointer",
        transform: "translateY(-50%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#000000" }}
      >
        <path d="M15 18l-6-6 6-6"></path>
      </svg>
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: false, // Pagination dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src={PC_Hero} alt="PC Hero" />
          </div>
          <div>
            <img src={MacPC_Hero} alt="Mac PC Hero" />
          </div>
          <div>
            <img src={cardgames} alt="Card Games" />
          </div>
          <div>
            <img src={redmi} alt="Redmi" />
          </div>
          <div>
            <img src={dailyneeds} alt="Daily Needs" />
          </div>
          <div>
            <img src={Sony} alt="Sony" />
          </div>
          <div>
            <img src={shoes} alt="Shoes" />
          </div>
          <div>
            <img src={mosquitonet} alt="Mosquito Net" />
          </div>
        </Slider>

        <div className=" grid grid-cols-4 gap-4 mx-3">
          {/* Each product category */}
          <div className="bg-white border p-4">
            <h2 className="font-bold text-lg mb-2">
              Up to 80% off | Electronics & accessories
            </h2>
            <img
              src={RECPC}
              alt="Electronic offer"
              className=" h-60 absolute"
            />
            <p className="text-blue-600 mt-2 text-sm">See all offers</p>
          </div>
          <div className="bg-white border p-4">
            <h2 className="font-bold text-lg mb-2">
              Starting ₹6,999 | Upgrade to 4K TVs
            </h2>
            <img src={SamsungMi} alt="TV offer" className="h-60 " />
            <p className="text-blue-600 mt-2 text-sm">See all offers</p>
          </div>
          <div className="bg-white border p-4">
            <h2 className="font-bold text-lg mb-2">
              Up to 75% off | Never before offers on appliances
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <img
                  src={frigde}
                  alt="Appliance offer"
                  className=" w-full h-28"
                />
                <p>Front loads | Up to 60% off</p>
              </div>
              <div>
                <img
                  src={refrigde}
                  alt="Appliance offer"
                  className="w-full h-28"
                />
                <p>High capacity fridges | Up to 60% off</p>
              </div>
              <div>
                <img src={ac} alt="Appliance offer" className=" w-full h-28" />
                <p>Energy efficient ACs | Up to 60% off</p>
              </div>
              <div>
                <img
                  src={chimney}
                  alt="Appliance offer"
                  className="  w-full h-28"
                />
                <p>AutoClean Chimneys | Up to 75% off</p>
              </div>
            </div>
            <p className="text-blue-600 mt-2 text-sm">See all offers</p>
          </div>
          <div className="bg-white border p-4">
            <h2 className="font-bold text-lg mb-2">
              Minimum 50% off | Home, kitchen & more
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <img
                  src={kitchen}
                  alt="Home offer"
                  className="w-full h-28 object-cover"
                />
                <p>Kitchen appliance</p>
              </div>
              <div>
                <img
                  src={furniture}
                  alt="Home offer"
                  className="w-full h-28 object-cover"
                />
                <p>Furniture</p>
              </div>
              <div>
                <img
                  src={homedecor}
                  alt="Home offer"
                  className="w-full h-28 object-cover"
                />
                <p>Home decor</p>
              </div>
              <div>
                <img
                  src={homeimprovement}
                  alt="Home offer"
                  className="w-full h-28 object-cover"
                />
                <p>Home improvemnet</p>
              </div>
            </div>
            <p className="text-blue-600 mt-2 text-sm">See all deals</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
