import React from "react";
import Banner from "./Home/Banner";
import Startingdeals from "./Home/Startingdeals";
import BlockbusterDeals from "./Home/BlockbusterDeals";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <Startingdeals />
      <BlockbusterDeals />
    </div>
  );
};

export default Home;
