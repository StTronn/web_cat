import React from "react";
import FrontImage from "../../assets/web_cat_landing1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize, faFile } from "@fortawesome/free-solid-svg-icons";

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
                  <a
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-teal-600 uppercase text-sm shadow hover:shadow-lg"
                    style={{ transition: "all .15s ease" }}
                    href="/learning-lab/tailwind-starter-kit/documentation/download"
                  >
                    DashBoard
                  </a>
                  <a
                    href="https://github.com/creativetimofficial/tailwind-starter-kit"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                    target="_blank"
                  >
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
                  <i className="fas fa-sitemap text-xl" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  CSS Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can have different colours.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Buttons
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Inputs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Labels
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Pagination
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Progressbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Typography
                  </span>
                </div>
                <a
                  className="font-bold text-gray-800 hover:text-gray-600"
                  style={{ transition: "all .15s ease" }}
                  href="/learning-lab/tailwind-starter-kit/documentation/alerts"
                >
                  View All{/* */}{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed" />
                </a>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    alt="..."
                    src="data:image/png;base64,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"
                    className="w-full align-middle rounded absolute shadow-lg"
                    style={{
                      maxWidth: 100,
                      left: 145,
                      top: "-29px",
                      zIndex: 3,
                    }}
                  />
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/component-profile-card-52a3ee76a70356d2e910b199b678cb91.png"
                    className="w-full align-middle rounded-lg absolute shadow-lg"
                    style={{ maxWidth: 210, left: 260, top: "-160px" }}
                  />
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/component-info-card-d19a4464d2cb70bb8050babd9b10aec1.png"
                    className="w-full align-middle rounded-lg absolute shadow-lg"
                    style={{
                      maxWidth: 180,
                      left: 40,
                      top: "-225px",
                      zIndex: 2,
                    }}
                  />
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/component-info-2-5212a3a6a4cdd7663af1a55dab18102a.png"
                    className="w-full align-middle rounded-lg absolute shadow-2xl"
                    style={{ maxWidth: 200, left: "-50px", top: 25 }}
                  />
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/component-menu-418bd9495e75d1cb24614ff2e244a3cf.png"
                    className="w-full align-middle rounded absolute shadow-lg"
                    style={{ maxWidth: 580, left: "-20px", top: 210 }}
                  />
                  <img
                    alt="..."
                    src="data:image/png;base64,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"
                    className="w-full align-middle rounded absolute shadow-xl"
                    style={{ maxWidth: 120, left: 195, top: 95 }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center pt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="justify-center flex flex-wrap relative">
                  <div className="my-4 w-full lg:w-6/12 px-4">
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                      <p className="text-base text-white opacity-75 mt-2">
                        A JavaScript library for building user interfaces
                        maintaned by Facebook and community of developers.
                      </p>
                    </div>
                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                      <p className="text-base text-white opacity-75 mt-2">
                        An open-source Model–view–viewmodel JavaScript framework
                        for building user interfaces.
                      </p>
                    </div>
                  </div>
                  <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                      <p className="text-base text-white opacity-75 mt-2">
                        Object-oriented programming language that conforms to
                        the ECMAScript specification.
                      </p>
                    </div>
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                      <p className="text-base text-white opacity-75 mt-2">
                        a JavaScript-based open-source front-end web framework
                        mainly maintained by Google.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-drafting-compass text-xl" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Javascript Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  In order to create a great User Experience some components
                  require JavaScript. In this way you can manipulate the
                  elements on the page and give more options to your users.
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We created a set of Components that are dynamic and come to
                  help you.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Alerts
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Dropdowns
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Modals
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Popovers
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Tabs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                    Tooltips
                  </span>
                </div>
                <a
                  className="font-bold text-gray-800 hover:text-gray-600"
                  style={{ transition: "all .15s ease" }}
                  href="/learning-lab/tailwind-starter-kit/documentation/vue/alerts"
                >
                  View all{/* */}{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed" />
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl" />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Complex Documentation
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    This extension comes a lot of fully coded examples that help
                    you get started faster. You can adjust the colors and also
                    the programming language. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="fas fa-fingerprint" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="fab fa-html5" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                            <i className="far fa-paper-plane" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/documentation-014ebef5373d22e362447511dcb171a3.png"
                />
              </div>
            </div>
          </div>
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">
                Beautiful Example Pages
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                Tailwind Starter Kit is a completly new product built using our
                past experience in web templates. Take the examples we made for
                you and start playing with them.
              </p>
            </div>
          </div>
        </section>
        ;
      </>
    );
  }
}
