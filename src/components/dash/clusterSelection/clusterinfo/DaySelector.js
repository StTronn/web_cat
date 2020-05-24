import React from "react";
import "./clusterinfo.css";

class DaySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 10,
      dir: null,
    };
  }

  goRight = () => {
    let { days } = this.props;
    let { start, end } = this.state;
    let max = days.length;
    if (end < max + 1) {
      this.setState({ start: start + 1, end: end + 1, dir: 1 });
    }
  };

  goLeft = () => {
    let { start, end } = this.state;
    if (start > 0) {
      this.setState({ start: start - 1, end: end - 1, dir: -1 });
    }
  };

  render() {
    let { days, changeDay } = this.props;
    let { start, end, dir } = this.state;
    let dirClass = "";
    if (dir === 1) dirClass = "animate__animated animate__fadeInRight";
    if (dir === -1) dirClass = "animate__animated animate__fadeInLeft";

    return (
      <div className="flex justify-center animate__animated animate__fadeInDown mb-4">
        <nav class="relative z-0 inline-flex shadow-sm" key={dirClass}>
          <button
            onClick={this.goLeft}
            type="button"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {days.slice(start, end).map((e, i) => (
            <button
              onClick={() => {
                changeDay(e + 1);
              }}
              key={e + i}
              type="button"
              class={
                "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 " +
                dirClass
              }
            >
              {e + 1}
            </button>
          ))}
          <button
            onClick={this.goRight}
            type="button"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    );
  }
}

export default DaySelector;
