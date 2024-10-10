import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AcerAspireLite from "../../assets/electronics/Acer Aspire Lite.jpg";
import Apple20WUSBCPowerAdapter from "../../assets/electronics/Apple 20W USB-C Power Adapter.jpg";
import AquaguardDelightNXTAquasaver from "../../assets/electronics/Aquaguard Delight NXT Aquasaver.jpg";
import ASUSTUFGamingA15 from "../../assets/electronics/ASUS TUF Gaming A15.jpg";
import ASUSVivobook15 from "../../assets/electronics/ASUS Vivobook 15.jpg";
import CromptonArnoNeo from "../../assets/electronics/Crompton Arno Neo.jpg";
import DellSmartchoice from "../../assets/electronics/Dell Smartchoice.jpg";
import DellG15 from "../../assets/electronics/Dell G15.jpg";
import HP15sCorei5 from "../../assets/electronics/HP 15s Core i5.jpg";
import HPVictusGamingLaptop from "../../assets/electronics/HP Victus Gaming Laptop.jpg";
import LenovoIdeaPadSlim3 from "../../assets/electronics/Lenovo IdeaPad Slim 3.jpg";
import LenovoSmartchoiceLOQ from "../../assets/electronics/Lenovo Smartchoice LOQ.jpg";
import MacBookAir from "../../assets/electronics/MacBook Air.jpg";
import OneplusBulletsZ2 from "../../assets/electronics/Oneplus Bullets Z2 .jpg";
import OnePlusNordBuds2 from "../../assets/electronics/OnePlus Nord Buds 2.jpg";
import POCOX6 from "../../assets/electronics/POCO X6.jpg";
import SamsungGalaxyBuds2Pro from "../../assets/electronics/Samsung Galaxy Buds2 Pro.jpg";

const BlockbusterDeals = () => {
  const deals = [
    {
      id: 1,
      src: AcerAspireLite,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 2,
      src: Apple20WUSBCPowerAdapter,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 3,
      src: AquaguardDelightNXTAquasaver,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 4,
      src: ASUSTUFGamingA15,
      festival: "Great Indian Festival",
      discount: "27% off",
      Price: "₹40,990",
      MRP: "₹60,990",
    },
    {
      id: 5,
      src: ASUSVivobook15,
      festival: "Great Indian Festival",
      discount: "38% off",
      Price: "₹47,990",
      MRP: "₹76,990",
    },
    {
      id: 6,
      src: CromptonArnoNeo,
      festival: "Great Indian Festival",
      discount: "21% off",
      Price: "₹36,990",
      MRP: "₹59,990",
    },
    {
      id: 7,
      src: DellSmartchoice,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 8,
      src: DellG15,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 9,
      src: HP15sCorei5,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 10,
      src: HPVictusGamingLaptop,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 11,
      src: LenovoIdeaPadSlim3,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 12,
      src: LenovoSmartchoiceLOQ,
      festival: "Great Indian Festival",
      discount: "31% off",
      Price: "66,190",
      MRP: "95,850",
    },
    {
      id: 13,
      src: MacBookAir,
      discount: "37 % Off",
      festival: "Great Indian Festival",
      Price: "58,990",
      MRP: "92,900",
    },
    {
      id: 14,
      src: OneplusBulletsZ2,
      festival: "Great Indian Festival",
      discount: "43% off",
      Price: "1,299",
      MRP: "2,299",
    },
    {
      id: 15,
      src: OnePlusNordBuds2,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 16,
      src: POCOX6,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
    {
      id: 17,
      src: SamsungGalaxyBuds2Pro,
      festival: "Great Indian Festival",
      discount: "41% off",
      Price: "₹29,990",
      MRP: "₹50,990",
    },
  ];
  const [images, setImages] = useState(deals);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Navigate to previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Navigate to next slide
    }
  };
  return (
    <div className="bg-[#FFD77D] p-6 m-4">
      {/* Header Section */}

      <h1 className="text-xl font-bold text-black">Blockbuster deals</h1>

      {/* Slider Section */}
      <div className="relative">
        {/* Custom Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {deals.map((deal, index) => (
            <div key={index} className="p-2">
              {/* Deal Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden px-3 py-2">
                <img
                  src={deal.src}
                  alt={`Deal ${index + 1}`}
                  className="h-40 w-full object-contain mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <h1 className=" text-white  bg-red-500 font-bold rounded-sm text-xs p-1">
                    {deal.discount}
                  </h1>
                  <h1 className="text-red-500 px-2 py-1 rounded-md text-xs">
                    {deal.festival}
                  </h1>
                </div>
                <div className="text-lg font-semibold text-black">
                  {deal.Price}
                </div>
                <div className="text-sm line-through text-gray-500 mb-2">
                  M.R.P: {deal.MRP}
                </div>
                <p className="text-sm text-gray-700">{deal.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlockbusterDeals;
