import React from "react";
import Banner from "../../Components/Home/Banner";
import Brand from "../../Components/Home/Brand";
import BussinessSummary from "../../Components/Home/BussinessSummary";
import Featured from "../../Components/Home/Featured";
import Products from "../../Components/Home/Products";
import Reviews from "../../Components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Featured />
      <Brand />
      <Reviews />
      <BussinessSummary />
    </div>
  );
};

export default Home;
