import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows, faRocket } from "@fortawesome/free-solid-svg-icons";

const About = () => (
  <div>
    <div className="bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
          We're a group of five interns at Walkover
          <br />
          <span className="text-teal-500">
            a creative pack that loves to learn, collaborate and create.
          </span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0"></div>
      </div>
    </div>
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/Nitss10/aboutUs/master/us1.png")',
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        />
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl"></h1>
              <p className="mt-4 text-lg text-gray-300"></p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: 70, transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        ></svg>
      </div>
    </div>

    <section className="pb-20 bg-gray-300 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap"></div>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faPeopleArrows} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              What We Do
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              With the world filled up lots of noise, we try to filter it and
              provide a better sense of the world. So you can find what's
              important and bring the right change{" "}
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              We developed a product which tracks and shows various industries
              growth rates and mechanism to classify any URL into one. We truly
              believe in the transformative power of imagination and design and
              their ability to simplify communications, elevate experiences,
              engage and inspire people everywhere. Good design and good
              relationships come from collaboration
            </p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
              className="font-bold text-gray-800 mt-8"
              target="_blank"
            ></a>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-500">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full alig-middle rounded-t-lg"
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
                    className="text-teal-500 fill-current"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Want a tailored analysis . Just reach out to us and we will
                  develop the right fit of tools and experience.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: 80, transform: "translateZ(0px)" }}
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-teal-500">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-3xl font-semibold">A growing company</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We have just Started and there's a lot in the box to bring to
                you. Perfection takes time but we make sure that they are worth
                the wait.{" "}
              </p>
              <ul className="list-none mt-6"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Our Team</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600"></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-12 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://github.com/Nitss10/aboutUs/raw/master/aman.png"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: 120 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Aman Gupta</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold"></p>
                <div className="mt-6">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-square" />
                  </button>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-12 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://github.com/Nitss10/aboutUs/raw/master/eesh.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: 120 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Eeshwari Bhatore</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold"></p>
                <div className="mt-6">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-square" />
                  </button>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-12 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://github.com/Nitss10/aboutUs/raw/master/niti.jpeg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: 120 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Niti Mangwani</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold"></p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-square" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-12 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://github.com/Nitss10/aboutUs/raw/master/pratik.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: 120 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Prateek Mehta</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold"></p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-fulloutline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-12 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://github.com/Nitss10/aboutUs/raw/master/rishav.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: 120 }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Rishav Thakur</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold"></p>
                <div className="mt-6">
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble" />
                  </button>
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
