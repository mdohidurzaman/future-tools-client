import React from "react";
import worldMap from "../../Assets/images/worldMap.png";
import { MdWrongLocation, MdOutlineBuild, MdPeople } from "react-icons/md";

const BussinessSummary = () => {
  return (
    <>
      <div class="my-5">
        <h1 class="text-5xl grid justify-center">
          Millions of Bussiness Trust Us
        </h1>
        <p class="grid justify-center text-lg">
          Try your hand tools with future tools.
        </p>
      </div>
      <div
        class="hero min h-96 mb-20"
        style={{
          backgroundImage: `url(${worldMap})`,
          overFlow: "hidden",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content">
          <div className="body-content grid md:grid-cols-3 justify-items-center w-screen">
            <div className="single-item">
              <p>
                <MdWrongLocation size={100}></MdWrongLocation>
              </p>
              <h1 className="text-5xl font-bold py-3">72</h1>
              <h4 className="text-xl font-bold py-2">Countries</h4>
            </div>
            <div className="single-item justify-center items-center">
              <p>
                <MdOutlineBuild size={100}></MdOutlineBuild>
              </p>
              <h1 className="text-5xl font-bold py-3">500+</h1>
              <h4 className="text-xl font-bold py-2">Tools</h4>
            </div>
            <div className="single-item justify-center items-center">
              <p>
                <MdPeople size={100}></MdPeople>
              </p>
              <h1 className="text-5xl font-bold py-3">500M</h1>
              <h4 className="text-xl font-bold py-2">Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessSummary;
