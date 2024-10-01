import React, { useState, useRef } from "react";
import threebottle from "../../assets/utensils/threebottle.jpg";
import PieceNonStickCookwareSet from "../../assets/utensils/PieceNonStickCookwareSet.jpg";
import bottle from "../../assets/utensils/bottle.jpg";
import ChopperGreen from "../../assets/utensils/ChopperGreen.jpg";
import CurvedStainlessSteelWaterBottle from "../../assets/utensils/CurvedStainlessSteelWaterBottle.jpg";
import dishdrainer from "../../assets/utensils/dishdrainer.jpg";
import KitchenPress from "../../assets/utensils/KitchenPress.jpg";
import NONSTICKKADHAIWITHGLASSLID from "../../assets/utensils/NONSTICKKADHAIWITHGLASSLID.jpg";
import pan from "../../assets/utensils/pan.jpg";
import PlasticDishDrainerblue from "../../assets/utensils/PlasticDishDrainerblue.jpg";
import PlasticStorageContainers from "../../assets/utensils/PlasticStorageContainers.jpg";
import PlasticStorageJarandContainerSet from "../../assets/utensils/PlasticStorageJarandContainerSet.jpg";
import SaucepanwithGlassLid from "../../assets/utensils/SaucepanwithGlassLid.jpg";
import steelbigbowl from "../../assets/utensils/steelbigbowl.jpg";
import steeljars from "../../assets/utensils/steeljars.jpg";
import SteelTopeSet from "../../assets/utensils/SteelTopeSet.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Startingdeals = () => {
  const foods = [
    {
      id: 1,
      Name: "threebottle",
      src: threebottle,
    },
    {
      id: 2,
      Name: "PieceNonStickCookwareSet",
      src: PieceNonStickCookwareSet,
    },
    {
      id: 3,
      Name: "bottle",
      src: bottle,
    },
    {
      id: 4,
      Name: "ChopperGreen",
      src: ChopperGreen,
    },
    {
      id: 5,
      Name: "CurvedStainlessSteelWaterBottle",
      src: CurvedStainlessSteelWaterBottle,
    },
    {
      id: 6,
      Name: "dishdrainer",
      src: dishdrainer,
    },
    {
      id: 7,
      Name: "KitchenPress",
      src: KitchenPress,
    },
    {
      id: 8,
      Name: "NONSTICKKADHAIWITHGLASSLID",
      src: NONSTICKKADHAIWITHGLASSLID,
    },
    {
      id: 9,
      Name: "pan",
      src: pan,
    },
    {
      id: 10,
      Name: "PlasticDishDrainerblue",
      src: PlasticDishDrainerblue,
    },
    {
      id: 11,
      Name: "PlasticStorageContainers",
      src: PlasticStorageContainers,
    },
    {
      id: 12,
      Name: "PlasticStorageJarandContainerSet",
      src: PlasticStorageJarandContainerSet,
    },
    {
      id: 13,
      Name: "SaucepanwithGlassLid",
      src: SaucepanwithGlassLid,
    },
    {
      id: 14,
      Name: "steelbigbowl",
      src: steelbigbowl,
    },
    {
      id: 15,
      Name: "steeljars",
      src: steeljars,
    },
    {
      id: 16,
      Name: "SteelTopeSet",
      src: SteelTopeSet,
    },
  ];
  const [images, setImages] = useState(foods);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,

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
    <div className="bg-yellow-400 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          Starting ₹399 | Deals on Amazon brands & more
        </h1>
        <p className="text-blue-600 cursor-pointer">See all deals</p>
      </div>

      {/* Slider Section */}
      <div className="relative">
        {/* Custom Previous Button */}
        {/* <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        > */}
        {/* <svg
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
            <polyline points="15 18 9 12 15 6"></polyline> */}
        {/* </svg> */}
        {/* </button> */}

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {foods.map((food, index) => (
            <div key={index} className="p-2">
              <img
                src={food.src}
                alt={`Deal ${index + 1}`}
                className="h-40 w-full object-contain"
              />
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

export default Startingdeals;
