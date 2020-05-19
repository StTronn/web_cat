import React from "react";
import styled from "styled-components";
const Toggleoff = styled.div`
  top: -0.25rem;
  left: -0.25rem;
`;
const Toggleon = styled.div`
  top: -0.25rem;
  left: +1.25rem;
  background-color: #48bb78;
`;

export default class Toggle extends React.Component {
  render() {
    let { on, toggle } = this.props;
    if (on) {
      return (
        <div>
          <div className="flex items-center justify-center w-full my-4">
            {/* Totyggle Button */}
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              {/* toggle */}
              <div className="relative">
                {/* input */}
                <input id="toogleA" type="checkbox" className="hidden" />
                {/* line */}
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner " />
                {/* dot */}
                <Toggleon
                  onClick={toggle}
                  className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 "
                />
              </div>
              {/* label */}
              <div className="ml-3 text-gray-700 font-medium ">
                Show Similar Sites
              </div>
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex items-center justify-center w-full my-4">
            {/* Totyggle Button */}
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              {/* toggle */}
              <div className="relative">
                {/* input */}
                <input id="toogleA" type="checkbox" className="hidden" />
                {/* line */}
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
                {/* dot */}
                <Toggleoff
                  onClick={toggle}
                  className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                />
              </div>
              {/* label */}
              <div className="ml-3 text-gray-700 font-medium">
                Show Similar Sites
              </div>
            </label>
          </div>
        </div>
      );
    }
  }
}
