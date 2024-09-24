import React from "react";
import logo from "../../assets/logo.png";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import Flag from "../../assets/Flag_of_India.svg.webp";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbartop = () => {
  return (
    // <div className="bg-[#131921] w-full  flex h-16">
    //   <div className="p-4 flex items-center justify-between">
    //     <div className="flex items-center w-28 h-8 p-2 hover:border rounded-sm cursor-pointer">
    //       <img src={logo} alt="logo" className="h-full w-18" />
    //       <span className="ml-[2px]">.in</span>
    //     </div>

    //     <div className="flex items-center ">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="size-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //           />
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    //           />
    //         </svg>
    //       </div>
    //       <div>
    //         <h1 className="text-sm text-gray-500">Delivery to Delhi</h1>
    //         <h1>update location</h1>
    //       </div>
    //     </div>
    //     <div className="flex items-center w-1/2">
    //       <h1 className="bg-gray-400">All</h1>
    //       <IoMdArrowDropdown className="bg-gray-400" />

    //       <input
    //         type="text"
    //         placeholder="Search Amazon.in"
    //         className="flex-grow p-2 rounded-l-md focus:outline-none"
    //       />
    //       <GoSearch />
    //     </div>
    //     <div className="flex items-center">
    //       <img src={Flag} alt="flag of india" className="h-3 w-3" />
    //       <h1>EN</h1>
    //       <IoMdArrowDropdown />
    //     </div>
    //     <div>
    //       <h6>Hello, sign in</h6>
    //       <div className="flex items-center">
    //         <h3>Accounts & Lists</h3>
    //         <span>
    //           <IoMdArrowDropdown />
    //         </span>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>Returns</h1>
    //       <h1>& Orders</h1>
    //     </div>
    //     <div>Cart</div>
    //   </div>
    // </div>
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black p-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Amazon Logo" className="h-10" />
          <h3>.in</h3>
        </div>
        <div className="flex items-center ">
          <div>
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-sm text-gray-500">Delivery to Delhi</h1>
            <h1>update location</h1>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <h1 className="bg-gray-400 p-2">All</h1>
          <input
            type="text"
            placeholder="Search in Amazon.in"
            className="flex-grow p-2  focus:outline-none text-black"
          />
          <button className="bg-yellow-500 p-3">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center">
          <img src={Flag} alt="flag of india" className="h-3 w-3" />
          <h1>EN</h1>
          <IoMdArrowDropdown />
        </div>
        <div className="flex items-center space-x-4 text-white">
          <div className="cursor-pointer">Hello, Sign in</div>
          <div className="cursor-pointer">Returns & Orders</div>
          <div className="flex items-center cursor-pointer">
            <FaShoppingCart />
            <span className="ml-1">Cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbartop;
