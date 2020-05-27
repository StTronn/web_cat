import React from "react";
import SearchCluster from "./SearchCluster";
import ClusterList from "./ClusterList";
import SitesTable from "./sitestable/SitesTable";
import ClusterInfo from "./clusterinfo/index";
import { URL } from "../../../utils";

class ClusterSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClusterId: 0,
      //all,search,domain
      mode: "all",
      searchMode: "query",
      searchText: "",
      clusterIds: [],
      sitesList: [],
      loading: true,
      page: 1,
      maxpage: 20,
    };
  }

  fetchSites = () => {
    //update maxpage
    let { selectedClusterId, mode, searchText, page } = this.state;
    if (mode !== "all" && searchText === "") return;
    let url = URL;
    if (mode === "all") {
      url += selectedClusterId
        ? "/getclusterurl/" + selectedClusterId + "/page/" + (page - 1)
        : "/getclusterurl/" + "page/" + (page - 1);
    } else if (mode === "query") {
      url += selectedClusterId
        ? "/search/query/" + searchText + "/clusterno/" + selectedClusterId
        : "/search/query/" + searchText;
    } else {
      url += "/search/domain/" + searchText;
    }
    this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (Array.isArray(data)) {
          this.setState({ sitesList: data, loading: false });
        } else
          this.setState({
            sitesList: data.sites,
            maxpage: data.max_page,
            loading: false,
          });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  changePage = (page) => {
    this.setState({ page }, this.fetchSites);
  };

  componentDidMount() {
    //dummy cluster list
    let arr = [];
    for (let i = 0; i <= 100; i++) {
      arr.push(i);
    }

    this.setState({ clusterIds: arr });
    this.fetchSites();
  }

  handleChangeInput = (event) => {
    if (event.target.value === "")
      this.setState(
        { searchText: event.target.value, mode: "all", page: 1 },
        this.fetchSites
      );
    else this.setState({ searchText: event.target.value });
  };

  handleSubmit = () => {
    let { searchMode } = this.state;
    this.setState({ mode: searchMode }, this.fetchSites);
  };

  handleSearchMode = (searchMode) => {
    this.setState({ searchMode });
  };

  selectClusterId = (id) => {
    this.setState(
      { selectedClusterId: id, mode: "all", searchText: "", page: 1 },
      this.fetchSites
    );
  };

  render() {
    let {
      clusterIds,
      selectedClusterId,
      mode,
      searchText,
      searchMode,
      sitesList,
      loading,
      maxpage,
      page,
    } = this.state;
    console.log("load", loading);
    return (
      <>
        <ClusterList
          clusterIds={clusterIds}
          selectClusterId={this.selectClusterId}
          selectedClusterId={selectedClusterId}
        />
        <ClusterInfo selectedClusterId={selectedClusterId} />
        <SearchCluster
          handleChange={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
          handleSearchMode={this.handleSearchMode}
          searchMode={searchMode}
          selectedClusterId={selectedClusterId}
          searchText={searchText}
        />
        <SitesTable
          selectedClusterId={selectedClusterId}
          mode={mode}
          searchText={searchText}
          sitesList={sitesList}
          loading={loading}
          maxpage={maxpage}
          page={page}
          changePage={this.changePage}
        />
      </>
    );
  }
}

export default ClusterSelection;
