import React from "react";
import SearchCluster from "./SearchCluster";
import ClusterList from "./ClusterList";
import SitesTable from "./sitestable/SitesTable";

class ClusterSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClusterId: null,
      //all,search,domain
      mode: "all",
      searchMode: "query",
      searchText: "",
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

  handleChangeInput = (event) => {
    let { mode } = this.state;
    if (event.target.value === "") mode = "all";
    this.setState({ searchText: event.target.value, mode });
  };

  handleSubmit = () => {
    let { searchMode } = this.state;
    this.setState({ mode: searchMode });
  };

  handleSearchMode = (searchMode) => {
    this.setState({ searchMode });
  };

  selectClusterId = (id) => {
    this.setState({ selectedClusterId: id, mode: "all" });
  };

  render() {
    let {
      clusterIds,
      selectedClusterId,
      mode,
      searchText,
      searchMode,
    } = this.state;
    console.log(mode, searchMode);
    return (
      <>
        <ClusterList
          clusterIds={clusterIds}
          selectClusterId={this.selectClusterId}
          selectedClusterId={selectedClusterId}
        />
        <SearchCluster
          handleChange={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
          handleSearchMode={this.handleSearchMode}
          searchMode={searchMode}
        />
        <SitesTable
          selectedClusterId={selectedClusterId}
          mode={mode}
          searchText={searchText}
        />
      </>
    );
  }
}

export default ClusterSelection;
