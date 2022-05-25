import React from "react";
import Banner from "../../Components/Home/Banner";
import BussinessSummary from "../../Components/Home/BussinessSummary";
import Products from "../../Components/Home/Products";
import Reviews from "../../Components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BussinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
