import React from "react";
import ClusterSelection from "./clusterSelection/ClusterSelection";
import Feedback from "../Feedback";
import Info from "./Info";
class Dash extends React.Component {
  render() {
    return (
      <div>
        <Info />
        <ClusterSelection />
        <Feedback />
      </div>
    );
  }
}

export default Dash;
