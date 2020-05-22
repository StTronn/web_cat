import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { ReactComponent as FeedbackSvg } from "./Feedback-01.svg";

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clusterno: null,
      clustername: "",
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    let { clusterno, clustername } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cluster_no: clusterno,
        cluster_name: clustername,
      }),
    };
    fetch(
      "https://sokt.io/UKmRxkZZA2Tw9BKrtYxw/personal-resources-monitoring",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          visible: false,
        });
      });
  };

  render() {
    return (
      <>
        <div
          onClick={this.openModal}
          class="fixed bottom-0 right-0 mr-4 mb-2  "
        >
          <div class="bg-white cursor-pointer rounded-lg font-light text-sm shadow-md px-4 py-2 border-1 border-gray-400">
            Suggest group name
            <svg className="inline " width="28" height="28">
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
          <div className=" my-8">
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
                    onChange={this.handleChange}
                    name="clusterno"
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
                    type="text"
                    name="clustername"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    onClick={this.handleSubmit}
                    className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Submit
                  </button>
                  <button
                    onClick={this.closeModal}
                    className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Close
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
