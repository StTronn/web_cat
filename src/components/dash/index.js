import React from "react";
import ClusterSelection from "./clusterSelection/ClusterSelection";
import Feedback from "../Feedback";
class Dash extends React.Component {
  render() {
    return (
      <div>
        <ClusterSelection />
        <Feedback />
      </div>
    );
  }
}

export default Dash;
