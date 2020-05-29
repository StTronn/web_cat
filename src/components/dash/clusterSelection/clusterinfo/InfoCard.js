import React from "react";
import LineChart from "./LineChart";
import BarInfo from "./BarInfo";
import { Prompt } from "./index";
import _ from "lodash";

const InfoCard = ({
  name,
  primaryData,
  secondaryData,
  flip,
  hide,
  handleFlip,
  arr,
  loading,
  data,
}) => {
  console.log("missing data", data);
  let downClassName = " bg-red-300 text-sm ml-2 rounded-lg p-1";
  let upClassName = " bg-teal-300 text-sm ml-2 rounded-lg p-1";
  if (!flip)
    return (
      <span
        id="app"
        className="bg-white inline-block h-60 rounded shadow-md flex card text-grey-darkest mx-4 my-8 animate__animated animate__fadeInDown"
        style={{ width: "320px", display: hide ? "none" : "" }}
      >
        <div className="w-full flex flex-col items-center">
          <div className="p-4 pb-0 flex-1">
            <h1 className=" mb-1 text-center text-grey-darkest">{name}</h1>
            <div className="text-xs flex items-center mb-6">
              <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
            </div>
            <span className="text-5xl text-grey-darkest">
              {primaryData}
              <span
                className={secondaryData >= 0 ? upClassName : downClassName}
              >
                {secondaryData >= 0 ? "+" : "-"}
                {secondaryData}
              </span>
            </span>
            <div className="flex items-center justify-center mt-4"></div>
          </div>
          <button
            onClick={() => {
              handleFlip(name);
            }}
            className="bg-teal-500 p-3 flex w-full text-center text-white items-center justify-between transition hover:bg-teal-700"
          >
            Learn More
          </button>
        </div>
      </span>
    );
  else
    return (
      <FlipedInfo
        loading={loading}
        data={data}
        handleFlip={handleFlip}
        name={name}
        arr={arr}
      />
    );
};

const FlipedInfo = ({ handleFlip, name, loading, data }) => {
  console.log("flipped data ", data);
  let arr = _.map(data, name);
  let dates = _.map(data, "date");
  console.log("flip", data, loading);
  if (data.length !== 0) {
    return (
      <>
        <div
          className="animate__animated animate__flipInX w-full mx-4"
          style={{
            display: "grid",
            justifyItems: "center",
            height: "60vh",
          }}
        >
          <LineChart arr={arr} dates={dates} name={name} />
        </div>
        <div className="animate__animated animate__flipInX w-full mx-4">
          <BarInfo arr={arr} />
        </div>
        <div style={{ gridArea: "b" }}>
          <h2 className="mb-4">{name}</h2>
          <button
            style={{ width: "40px", gridArea: "b" }}
            onClick={() => {
              handleFlip(name);
            }}
            class="bg-teal-500  hover:bg-teal-700 text-white font- py-2 px-4 rounded-full"
          >
            X
          </button>
        </div>
      </>
    );
  } else
    return (
      <>
        <div style={{ gridArea: "t" }}>
          <Prompt message="Nothing to show " />
        </div>
        <div style={{ gridArea: "b" }}>
          <h2 className="mb-4">{name}</h2>
          <button
            style={{ width: "40px", gridArea: "b" }}
            onClick={() => {
              handleFlip(name);
            }}
            class="bg-teal-500  hover:bg-teal-700 text-white font- py-2 px-4 rounded-full"
          >
            X
          </button>
        </div>
      </>
    );
};

export default InfoCard;
