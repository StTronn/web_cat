import React from "react";
import SearchCluster from "./SearchCluster";
import ClusterList from "./ClusterList";

class ClusterSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClusterId: null,
      searchMode: "query",
      clusterIds: [],
    };
  }
  componentDidMount() {
    //dummy cluster list
    let arr = [];
    for (let i = 1; i <= 80; i++) {
      arr.push(i);
    }

    this.setState({ clusterIds: arr });
  }

  render() {
    let { clusterIds } = this.state;
    return (
      <>
        <ClusterList clusterIds={clusterIds} />
        <SearchCluster />
      </>
    );
  }
}

export default ClusterSelection;
