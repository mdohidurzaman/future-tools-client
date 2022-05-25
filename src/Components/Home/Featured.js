import React from "react";
import icon1 from "../../Assets/icons/icon1.JPG";
import icon2 from "../../Assets/icons/icon2.JPG";
import icon3 from "../../Assets/icons/icon3.JPG";
import icon4 from "../../Assets/icons/icon4.JPG";
import icon5 from "../../Assets/icons/icon5.JPG";
import icon6 from "../../Assets/icons/icon6.JPG";

const Featured = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Featured Categories</h1>
      <p className="text-2xl text-center pb-5">Popular Branded Future Tools.</p>
      <div className="categories grid md: grid-cols-3 mx-20 gap-10">
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon1} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Pressure Washers</h4>
            <p>Replacement PumpsHoses & Hose ReelsNozzles & Spray Tips</p>
          </div>
        </div>
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon2} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Power Tools</h4>
            <p>Cordless ToolsElectric Power ToolsGas Powered Tools</p>
          </div>
        </div>
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon3} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Hand Tools</h4>
            <p>Cutting ToolsSockets, & WrenchesPounding & Prying Tools</p>
          </div>
        </div>
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon4} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Safety Equipment</h4>
            <p>Eye ProtectionFall ProtectionHead Protection</p>
          </div>
        </div>
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon5} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Apparel</h4>
            <p>Heated Work GearWork ClothingWork Gloves</p>
          </div>
        </div>
        <div className="category d-flex items-center" style={{}}>
          <p>
            <img src={icon6} alt="" />
          </p>
          <div className="content">
            <h4 className="text-lg font-bold">Air Tools</h4>
            <p>Air CompressorsNailersStaple Guns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
