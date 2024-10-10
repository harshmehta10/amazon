import React from "react";
import fresh from "../../assets/fresh/fresh.png";
import freshmeat from "../../assets/fresh/freshmeat.png";
const Fresh = () => {
  return (
    <div className="border mx-2">
      <div className="font-semibold my-2 text-lg">Shop groceries</div>
      <div className="flex  my-2 justify-around">
        <img src={fresh} alt="" className="h-32 w-40 bg-gray-200" />
        <img src={freshmeat} alt="" className="h-36 w-44 bg-gray-200" />
      </div>
      <hr />
      <div className="text-[#007185] my-1">Shop all groceries on Amazon</div>
    </div>
  );
};

export default Fresh;
