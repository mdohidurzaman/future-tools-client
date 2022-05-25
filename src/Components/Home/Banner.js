import React from "react";
import slide1 from "../../Assets/images/slide1.jpg";

const Banner = () => {
  return (
    <div class="hero min h-96" style={{ backgroundImage: `url(${slide1})` }}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content items-start text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to Our Hand Tools</h1>
          <p class="mb-5">
            If you need best hand tools the future tools is a right place for
            you. We will manufacture all types of hand tools and sell is various
            market places in the world.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
