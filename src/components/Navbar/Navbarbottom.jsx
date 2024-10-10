import React, { useState } from "react";
import All from "../All";

const Navbarbottom = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="bg-[#232f3e] w-full h-full ">
        <ul className="flex items-center cursor-pointer justify-between  py-1">
          <li
            className="flex  border border-transparent hover:border-white"
            onClick={() => {
              setShowAll(!showAll);
              console.log("Toggled showAll:", !showAll);
            }}
          >
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
          {showAll && <All />}
          <li className="flex items-center border border-transparent hover:border-white px-1 py-1">
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
          <li className="border border-transparent hover:border-white px-1 py-1">
            Amazon miniTv
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Sell
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Best Seller
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Today's Deal
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Moblies
          </li>
          <li className="flex items-center border border-transparent hover:border-white px-1 py-1">
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
          <li className="border border-transparent hover:border-white px-1 py-1">
            Customer Service
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Electronics
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Fashion
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            New Releases
          </li>
          <li className="border border-transparent hover:border-white  px-1 py-1">
            Home & Kitchen
          </li>
          <li className="border border-transparent hover:border-white  px-1 py-1">
            Amazon Pay
          </li>
          <li className="border border-transparent hover:border-white  px-1 py-1">
            Computers
          </li>
          <li className="border border-transparent hover:border-white px-1 py-1">
            Car & Motorbike
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarbottom;
