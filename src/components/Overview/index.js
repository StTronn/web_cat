import React from "react";
import OverviewGraph from "./GraphOverview";
import Info from "./Info";
import Table from "./Table";

export default class Overview extends React.Component {
  render() {
    return (
      <>
        <Info />
        <Table />
        <OverviewGraph />;
      </>
    );
  }
}
