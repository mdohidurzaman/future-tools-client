import React from "react";
import { MdWrongLocation, MdOutlineBuild, MdPeople } from "react-icons/md";

const BussinessSummary = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#DFF1FB",
          width: "100%",
        }}
        class="my-5 py-5"
      >
        <h1 class="text-5xl grid justify-center">
          Millions of Bussiness Trust Us
        </h1>
        <p class="grid justify-center text-lg pb-5">
          Try your hand tools with future tools.
        </p>

        <div>
          <div className="body-content grid sm: grid-cols-1 md:grid-cols-3 justify-items-center">
            <div className="single-item">
              <p style={{ color: "#FEB801" }}>
                <MdWrongLocation size={100}></MdWrongLocation>
              </p>
              <h1 className="text-5xl font-bold py-3">72</h1>
              <h4
                style={{ color: "#FEB801" }}
                className="text-xl font-bold py-2"
              >
                Countries
              </h4>
            </div>
            <div className="single-item justify-center items-center">
              <p style={{ color: "#FEB801" }}>
                <MdOutlineBuild size={100}></MdOutlineBuild>
              </p>
              <h1 className="text-5xl font-bold py-3">500+</h1>
              <h4
                style={{ color: "#FEB801" }}
                className="text-xl font-bold py-2"
              >
                Tools
              </h4>
            </div>
            <div className="single-item justify-center items-center">
              <p style={{ color: "#FEB801" }}>
                <MdPeople size={100}></MdPeople>
              </p>
              <h1 className="text-5xl font-bold py-3">500M</h1>
              <h4
                style={{ color: "#FEB801" }}
                className="text-xl font-bold py-2"
              >
                Clients
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BussinessSummary;
