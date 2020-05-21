import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { ReactComponent as FeedbackSvg } from "./Feedback-01.svg";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div
          onClick={this.openModal}
          class="fixed bottom-0 right-0 mr-8 mb-2  "
        >
          <div class="bg-white rounded-lg shadow-md px-4 py-2 border-1 border-gray-400">
            Submit Cluster No
            <svg className="inline " width="35" height="35">
              <FeedbackSvg />
            </svg>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="my-8">
            <form className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Category No
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="23"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-username"
                  >
                    Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-username"
                    type="password"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    onClick={this.closeModal}
                    className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}
