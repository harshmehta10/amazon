import React, { useState } from "react";

const All = () => {
  const [cartegory, setCategory] = useState(true);
  const [program, setProgram] = useState(true);
  return (
    <div>
      <div className="flex flex-col space-x-4 space-y-2 w-80 border">
        <div className="bg-[#232f3e] text-white font-bold px-4">
          <h1>Hello,sign in </h1>
        </div>
        <div>
          <ul className="flex flex-col space-y-1">
            <li className="font-bold">Trending</li>
            <li>Best Sellers</li>
            <li>New Releases</li>
            <li>Movers and Shakers</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-1">
            <li className="font-bold">Digital Content and Devices</li>
            <li>Amazon miniTv- Free entertainment</li>
            <li>Echo & Alexa</li>
            <li>Fire TV</li>
            <li>Kindle E-Readers & eBooks</li>
            <li>Audible Audiobooks</li>
            <li>Amazon Prime Video</li>
            <li>Amazon Prime Music</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-1">
            <li className="font-bold">Shop by Category</li>
            <li>Mobiles, Computers</li>
            <li>TV, Appliances, Electronics</li>
            <li>Mens's Fashion</li>
            <li>Women's Fashion</li>
            <li
              className="flex items-center space-x-2  "
              onClick={() => setCategory(!cartegory)}
            >
              see all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-4 transform  duration-300 ${
                  cartegory ? "rotate-0" : "rotate-180"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </li>
            {cartegory && (
              <>
                <li>Home, Kitchen, Pets</li>
                <li>Beauty, Health, Grocery</li>
                <li>Sports, Fitness, Bags, Luggage</li>
                <li>Toys, Boys, Products, Kids'Fashion</li>
                <li>Car, Motorbike, Industrial</li>
                <li>Books</li>
                <li>Movies,Music & Video Games</li>
                <li>see less</li>
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-1">
            <li className="font-bold">Programs & Features</li>
            <li>Amazon Pay</li>
            <li>Gift Cards & Mobile Recharges</li>
            <li>Amazon Launchpad</li>
            <li>Amazon Business</li>
            <li
              className="flex items-center space-x-2  "
              onClick={() => setProgram(!program)}
            >
              see all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-4 transform  duration-300 ${
                  program ? "rotate-0" : "rotate-180"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </li>
            {program && (
              <>
                <li>Handloom and Handicrafts</li>
                <li>Amazon Saheli</li>
                <li>Amazon Combos</li>
                <li>Amazon Custom</li>
                <li>Flights Tickets</li>
                <li>Buy more, Save more</li>
                <li>Clearance Store</li>
                <li>International Brands</li>
                <li>see less</li>
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-1">
            <li className="font-bold">Help & Settings</li>
            <li>Your Account</li>
            <li>Customer Service</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default All;
