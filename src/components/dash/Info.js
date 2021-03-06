import React from "react";

const Info = () => {
  return (
    <div className="py-12 bg-gray-900 mb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-teal-400 font-semibold tracking-wide uppercase">
            DashBoard
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            A better way to see Market
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-white lg:mx-auto">
            Find the average rank and size of any Category. Select any
            particular date or a range of dates to easily see how the Category
            is changing, You can also explore sites and search for the sites
            cointaing specific keywords.
          </p>
        </div>
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-teal-400">
                    Find what's interesting
                  </h5>
                  <p className="mt-2 text-base leading-6 text-white">
                    We have a wide range of different categories for you to
                    choose from
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-teal-400">
                    Easily get information you need
                  </h5>
                  <p className="mt-2 text-base leading-6 text-white">
                    Our easy to use and extensive interface helps you find the
                    right insights
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0"></li>
            <li className="mt-10 md:mt-0"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
