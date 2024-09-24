import React from "react";

const Navbarbottom = () => {
  return (
    <div>
      <div className="bg-[#232f3e] py-2 ">
        <ul className="flex items-center justify-between cursor-pointer">
          <li className="flex">
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
          <li className="flex items-center">
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
          <li>Amazon miniTv</li>
          <li>Sell</li>
          <li>Best Seller</li>
          <li>Today's Deal</li>
          <li>Moblies</li>
          <li className="flex items-center">
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
          <li>Customer Service</li>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>New Releases</li>
          <li>Home & Kitchen</li>
          <li>Amazon Pay</li>
          <li>Computers</li>
          <li>Car & Motorbike</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarbottom;
