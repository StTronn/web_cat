import React from "react";
import OverviewGraph from "./GraphOverview";
import Info from "./Info";

export default class Overview extends React.Component {
  render() {
    return (
      <>
        <Info />
        <OverviewGraph />;
      </>
    );
  }
}
