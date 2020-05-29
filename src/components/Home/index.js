import React from "react";
import FrontImage from "../../assets/web_cat_landing1.jpg";
import WebInfoImage from "./cat_info2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faFile,
  faChartBar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <section
          className="header relative  items-center flex h-screen"
          style={{ maxHeight: "860px" }}
        >
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-800">
                  See what's happening in the Market before anyone else
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Web Cat provides detailed insights of what's happening in the
                  market by analyzing their top domains and websites{" "}
                </p>
                <div className="mt-12">
                  <Link
                    to="/dash"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-teal-600 uppercase text-sm shadow hover:shadow-lg"
                    style={{ transition: "all .15s ease" }}
                  >
                    DashBoard
                  </Link>
                  <a className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
            src={FrontImage}
            alt="..."
            style={{ maxHeight: "860px" }}
          />
        </section>
        <section className="mt-40 pb-40 relative bg-gray-200">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
            style={{ height: 80, transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{ height: 95, top: "-94px" }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-teal-600 fill-current"
                      />
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for finding your next direction
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Whether you are looking for new oppurtunites or just
                      curious, we got you covered. Browse any area and see
                      what's happening get how the sector is performing and who
                      are leading the pack. Find keywords, performance scores
                      and discover new organization{" "}
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <FontAwesomeIcon icon={faWindowMaximize} />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Seamless UI
                        </h6>
                        <p className="mb-4 text-gray-600">
                          We provide a carefully crafted User Interface to make
                          sure you get the most out of data easily.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0"></div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4"></div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <FontAwesomeIcon icon={faFile} />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">API</h6>
                        <p className="mb-4 text-gray-600">
                          Need the data for your own custom analysis, try our
                          extensive API{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon icon={faChartBar} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Market Analysis
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We Provide various parameters to evaluate a given market
                  including its popularity, recent changes and many more.
                </p>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img alt="..." src={WebInfoImage} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center pt-4">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32"></div>
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon icon={faNewspaper} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Website Info
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Find all you need to know about the website. Get the Category
                  any site belongs to also get website specfic kewywords and
                  also find similar sites and competitors
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4"></div>
          </div>
        </section>
        ;
      </>
    );
  }
}
