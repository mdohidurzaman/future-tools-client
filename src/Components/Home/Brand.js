import React from "react";
import brand1 from "../../Assets/icons/brand1.jpg";
import brand2 from "../../Assets/icons/brand2.jpg";
import brand3 from "../../Assets/icons/brand3.jpg";
import brand4 from "../../Assets/icons/brand4.jpg";
import brand5 from "../../Assets/icons/brand5.jpg";
import brand6 from "../../Assets/icons/brand6.jpg";
import brand7 from "../../Assets/icons/brand7.jpg";
import brand8 from "../../Assets/icons/brand8.jpg";

const Brand = () => {
  return (
    <div
      style={{ backgroundColor: "#DFF1FB", width: "100%" }}
      className="p-20 my-20"
    >
      <h1 className="text-5xl text-center">We Manufacture</h1>
      <p className="text-2xl text-center pb-5">Famous Brand FutureTools.</p>
      <div className="brand-image grid sm: grid-cols-2 md:grid-cols-8 gap-10 justify-center">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
        <img src={brand7} alt="" />
        <img src={brand8} alt="" />
      </div>
    </div>
  );
};

export default Brand;
