import React from "react";
import NavBar from "../../components/nav/NavBar";

const Hero = () => {
  return (
    <>
      <NavBar />
      <svg viewBox="0 400 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M918 672.5q-73 172.5-245.5 222t-345 0Q155 845 199 672.5T267.5 396Q292 292 396 250.5T669.5 185Q839 161 915 330.5t3 342Z"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill="#211434"
            d="M918 672.5q-73 172.5-245.5 222t-345 0Q155 845 199 672.5T267.5 396Q292 292 396 250.5T669.5 185Q839 161 915 330.5t3 342Z"
          />
        </g>
      </svg>
    </>
  );
};

export default Hero;
