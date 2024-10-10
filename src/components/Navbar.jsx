import React, { useState } from "react";

import Navbarbottom from "./Navbar/Navbarbottom";
import Navbartop from "./Navbar/Navbartop";
import All from "./All";
const Navbar = () => {
  const [openAll, setOpenAll] = useState(false);

  return (
    <div className=" text-white w-full">
      <Navbartop />
      <Navbarbottom />
    </div>
  );
};

export default Navbar;
