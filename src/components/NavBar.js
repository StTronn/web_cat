import React from "react";
import { Link, useLocation } from "react-router-dom";
import WalkoverIcon from "../assets/Walkover-iconsvg.png";

export default function () {
  let path = useLocation().pathname;
  let selectedClass =
    "ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700";
  let normalClass =
    "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700";

  return (
    <div style={{ width: "100vw" }}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 69 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.6946 8.89078C58.8275 6.546 56.7571 4.86056 54.2835 4.49341L24.6882 0.0709251C22.2299 -0.298403 19.7778 0.796118 18.4056 2.86799L0.861627 29.3559C-0.27656 31.0708 -0.286748 33.3279 0.830334 35.0555L15.0795 57.0843C16.2282 58.8647 17.9897 60.1627 20.0299 60.7372L48.7145 68.8268C50.8199 69.4206 53.0435 68.4476 54.0434 66.5031L68.1157 39.0491C69.1244 37.0834 69.2579 34.7812 68.4956 32.7126L59.6947 8.89073L59.6946 8.89078Z"
                    fill="#38B2AC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.5787 14.7411C47.27 15.0315 47.6528 16.8967 46.4032 18.902C45.3604 20.5769 43.5243 21.8078 41.9655 21.9912C39.3212 24.542 36.6868 27.0832 34.0415 29.6365C33.8439 32.1497 30.529 35.2477 28.0383 34.7074C26.4097 34.3544 26.1062 32.463 27.3528 30.473C27.6763 29.9578 28.0718 29.4855 28.5099 29.0747C28.3236 27.6247 28.1377 26.1746 27.9507 24.7253C27.3284 24.813 26.6316 24.7381 26.1466 24.3025C24.0565 25.4756 21.9664 26.6484 19.876 27.8204C19.1293 29.77 16.4946 32.2069 14.3248 31.7367C12.7853 31.4031 12.5346 29.5703 13.7579 27.6356C14.2942 26.7874 15.0263 26.0586 15.8105 25.5338L17.1059 20.3371C17.0429 20.3301 16.9803 20.3207 16.9188 20.309C13.7073 19.6901 16.7344 15.1552 18.791 13.9839L20.1755 9.22155C17.3191 8.01641 21.5262 1.98744 24.9225 2.51106C28.1242 3.00629 25.2165 7.40912 23.3182 8.59606L21.8689 13.5807C23.9586 14.7411 21.6899 18.0359 20.3447 19.1134L18.939 24.749C19.0624 24.7857 19.1766 24.832 19.2814 24.888C21.544 23.6184 23.8062 22.3485 26.0691 21.0783C26.9617 19.3317 29.3912 17.2369 31.4653 17.6146C33.0809 17.909 33.4084 19.7443 32.1719 21.7136C31.7611 22.3682 31.2313 22.9522 30.6488 23.4307C30.826 24.7996 31.0013 26.1688 31.1778 27.538C31.5417 27.4478 31.8961 27.4092 32.2298 27.4311C34.6753 25.071 37.1129 22.7197 39.5599 20.3585C39.2514 17.6859 42.9931 14.2968 45.5787 14.7411L45.5787 14.7411Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.85616 36.2059C9.24525 37.0297 13.4043 43.1176 9.84454 42.1751C6.57335 41.3044 2.38666 35.362 5.85616 36.2059V36.2059Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.597 45.8713C17.9075 46.7857 21.79 52.4017 18.1812 51.3348C14.9816 50.3887 11.0624 44.8954 14.597 45.8713Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8444 55.2061C27.0999 56.1998 30.7346 61.4133 27.0479 60.2264C23.9073 59.217 20.2268 54.1028 23.8444 55.2061V55.2061Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.9836 50.7787C30.6281 51.8066 34.2661 57.4783 30.3064 56.2902C26.8111 55.2365 23.1014 49.6823 26.9836 50.7787V50.7787Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.456 59.357C41.1475 60.4814 44.5198 65.8518 40.4095 64.5273C36.8622 63.3873 33.413 58.1246 37.456 59.357Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.1535 49.9339C40.2856 51.0393 43.7788 57.128 39.3937 55.8657C35.4217 54.7203 31.8656 48.7855 36.1535 49.9339V49.9339Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.2537 38.4396C44.411 34.0407 47.6197 41.0783 45.5576 45.4109C43.422 49.8862 40.1072 42.814 42.2537 38.4396Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.7598 45.3313C50.7287 41.1428 53.4275 47.5258 51.5798 51.5572C49.6287 55.8148 46.8414 49.4118 48.7598 45.3313Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M54.9747 50.07C56.778 46.0882 59.022 51.9803 57.3744 55.7017C55.5871 59.7413 53.2667 53.8427 54.9747 50.07Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M55.4931 34.7871C57.3376 30.8271 59.6449 37.4459 57.9463 41.1843C56.1182 45.2091 53.7269 38.5797 55.4931 34.7871Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M61.3132 36.0596C63.0212 32.2837 64.9435 38.5863 63.4134 42.0423C61.7189 45.8739 59.7278 39.5636 61.3132 36.0596Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.0033 19.021C60.8194 15.192 63.0001 22.433 61.3284 26.0524C59.5255 29.952 57.2673 22.6844 59.0033 19.021Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <Link
                    to="/"
                    className={path === "/" ? selectedClass : normalClass}
                  >
                    Home
                  </Link>
                  <Link
                    to="/dash"
                    className={path === "/dash" ? selectedClass : normalClass}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/overview"
                    className={
                      path === "/overview" ? selectedClass : normalClass
                    }
                  >
                    Overview
                  </Link>
                  <Link
                    to="/websites"
                    className={
                      path === "/websites" ? selectedClass : normalClass
                    }
                  >
                    Websites
                  </Link>
                  <Link
                    to="/about"
                    className={path === "/about" ? selectedClass : normalClass}
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
