import React from "react";
import logo from "../../assets/logo.png";
import Flag from "../../assets/Flag_of_India.svg.webp";
const FooterBottom = () => {
  return (
    <div className="flex justify-center bg-[#232f3e] p-1">
      <div className="flex items-center bg-[#232f3e] text-white">
        <img src={logo} alt="footer logo" className="h-8 cursor-pointer" />
        <div className="flex items-center justify-around space-x-6">
          <div>
            <h1 className="text-[#CCC] cursor-pointer">English</h1>
          </div>
          <div className="border border-gray-400 flex items-center cursor-pointer">
            <img src={Flag} alt="flag" className="h-2" />
            <h1 className="text-sm  text-[#CCC]">India</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#0f1111)"></div>
    </div>
  );
};

export default FooterBottom;
