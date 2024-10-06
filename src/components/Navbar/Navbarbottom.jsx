import React, { useState } from "react";
import All from "../Pages/All";

const Navbarbottom = () => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(true);
  };
  return (
    <div>
      <div className="bg-[#232f3e] w-full h-full ">
        <ul className="flex items-center cursor-pointer justify-between mx-2 py-2">
          <li className="flex hover:border" onClick={handleClick}>
            {/* {showAll && <All />} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            All
          </li>
          <li className="flex items-center hover:border">
            Fresh
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="hover:border">Amazon miniTv</li>
          <li className="hover:border">Sell</li>
          <li className="hover:border">Best Seller</li>
          <li className="hover:border">Today's Deal</li>
          <li className="hover:border">Moblies</li>
          <li className="flex items-center hover:border">
            Prime{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="hover:border">Customer Service</li>
          <li className="hover:border">Electronics</li>
          <li className="hover:border">Fashion</li>
          <li className="hover:border">New Releases</li>
          <li className="hover:border">Home & Kitchen</li>
          <li className="hover:border">Amazon Pay</li>
          <li className="hover:border">Computers</li>
          <li className="hover:border">Car & Motorbike</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarbottom;
