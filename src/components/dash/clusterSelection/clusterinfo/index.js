import React from "react";
import KeyWordsCard from "../../../websites/KeyWordsCard";
import clusterData from "./clusters.json";
//card ,card_cointainer,border
class ClusterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clusterInfo: clusterData,
      currentCluster: null,
    };
  }

  fetchInfo = () => {
    //get cluster id
    //if cluster id is 0 do nothing
    //else fetch
  };
  componentDidMount() {
    //fetch and store clusterInfo
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchInfo();
    }
  }
  render() {
    let { selectedClusterId } = this.props;
    let { clusterInfo } = this.state;
    console.log(selectedClusterId);
    if (selectedClusterId) {
      let clusterSizeChange =
        clusterInfo[selectedClusterId].size[1] -
        clusterInfo[selectedClusterId].size[0];
      let clusterRank = Math.round(
        clusterInfo[selectedClusterId].rank[0] /
          clusterInfo[selectedClusterId].size[0]
      );
      let clusterRankChange =
        Math.round(
          clusterInfo[selectedClusterId].rank[1] /
            clusterInfo[selectedClusterId].size[1]
        ) - clusterRank;
      return (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              justifyItems: "center",
              marginBottom: "40px",
            }}
          >
            <span
              id="app"
              className="bg-white inline-block h-60 rounded shadow-md flex card text-grey-darkest mx-4 my-8"
              style={{ width: "320px" }}
            >
              <div className="w-full flex flex-col items-center">
                <div className="p-4 pb-0 flex-1">
                  <h3 className="font-medium mb-1 text-center text-grey-darkest">
                    {" "}
                    Rank
                  </h3>
                  <div className="text-xs flex items-center mb-6">
                    <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
                  </div>
                  <span className="text-5xl text-grey-darkest">
                    {clusterRank}
                    <span className=" bg-teal-300 text-sm ml-2 rounded-lg p-1">
                      {clusterRankChange >= 0 ? "+" : "-"}
                      {clusterRankChange}
                    </span>
                  </span>
                  <div className="flex items-center justify-center mt-4"></div>
                </div>
                <div className="bg-gray-400 p-3 flex w-full text-center items-center justify-between transition hover:bg-grey-light">
                  Learn More
                </div>
              </div>
            </span>
            <span
              id="app"
              className="bg-white  h-60 rounded shadow-md flex card text-grey-darkest mx-4 my-8"
              style={{ width: "320px" }}
            >
              <div className="w-full flex flex-col items-center">
                <div className="p-4 pb-0 flex-1">
                  <h3 className="font-medium mb-1 text-center text-grey-darkest">
                    {" "}
                    Size
                  </h3>
                  <div className="text-xs flex items-center mb-6">
                    <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
                  </div>
                  <span className="text-5xl text-grey-darkest">
                    {clusterInfo[selectedClusterId].size[0]}
                    <span className=" bg-teal-300 text-sm ml-2 rounded-lg p-1">
                      {clusterSizeChange >= 0 ? "+" : "-"} {clusterSizeChange}
                    </span>
                  </span>
                  <div className="flex items-center justify-center mt-4"></div>
                </div>
                <div className="bg-gray-400 p-3 flex w-full text-center items-center justify-between transition hover:bg-grey-light">
                  Learn More
                </div>
              </div>
            </span>
          </div>
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <KeyWordsCard
              keywords={clusterInfo[selectedClusterId].keyword[0]
                .split(/(\s+)/)
                .filter(function (e) {
                  return e.trim().length > 0;
                })}
            />
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default ClusterInfo;
