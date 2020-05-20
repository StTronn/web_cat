import React from "react";
import { ReactComponent as FeedbackSvg } from "./Feedback-01.svg";

export default class Feedback extends React.Component {
  render() {
    return (
      <div class="fixed bottom-0 right-0 mr-8 mb-2 ">
        <div class="bg-white rounded-lg shadow-md px-4 py-2 border-1 border-gray-400">
          Submit Cluster No
          <svg className="inline " width="35" height="35">
            <FeedbackSvg />
          </svg>
        </div>
      </div>
    );
  }
}
