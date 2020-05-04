import React from "react";
import SearchCluster from "./SearchCluster";
import ClusterList from "./ClusterList";
import SitesTable from "./sitestable/SitesTable";

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
    for (let i = 0; i <= 99; i++) {
      arr.push(i);
    }

    this.setState({ clusterIds: arr });
  }

  selectClusterId = (id) => {
    let { selectedClusterId } = this.state;
    this.setState({ selectedClusterId: id });
  };

  render() {
    let { clusterIds, selectedClusterId } = this.state;
    return (
      <>
        <ClusterList
          clusterIds={clusterIds}
          selectClusterId={this.selectClusterId}
          selectedClusterId={selectedClusterId}
        />
        <SearchCluster />
        <SitesTable selectedClusterId={selectedClusterId} />
      </>
    );
  }
}

export default ClusterSelection;
