import React from "react";

const InfoCard = ({ name, primaryData, secondaryData }) => {
  let downClassName = " bg-red-300 text-sm ml-2 rounded-lg p-1";
  let upClassName = " bg-teal-300 text-sm ml-2 rounded-lg p-1";
  return (
    <span
      id="app"
      className="bg-white inline-block h-60 rounded shadow-md flex card text-grey-darkest mx-4 my-8 animate__animated animate__fadeInDown"
      style={{ width: "320px" }}
    >
      <div className="w-full flex flex-col items-center">
        <div className="p-4 pb-0 flex-1">
          <h1 className=" mb-1 text-center text-grey-darkest">{name}</h1>
          <div className="text-xs flex items-center mb-6">
            <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
          </div>
          <span className="text-5xl text-grey-darkest">
            {primaryData}
            <span className={secondaryData >= 0 ? upClassName : downClassName}>
              {secondaryData >= 0 ? "+" : "-"}
              {secondaryData}
            </span>
          </span>
          <div className="flex items-center justify-center mt-4"></div>
        </div>
        <div className="bg-gray-400 p-3 flex w-full text-center items-center justify-between transition hover:bg-grey-light">
          Learn More
        </div>
      </div>
    </span>
  );
};

export default InfoCard;
