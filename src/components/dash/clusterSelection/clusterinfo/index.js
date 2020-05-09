import React from "react";
import KeyWordsCard from "../../../websites/KeyWordsCard";
import clusterData from "./clusters.json";
import InfoCard from "./InfoCard";
import "./clusterinfo.css";
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
      let clusterSize = clusterInfo[selectedClusterId].size[1];
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
        <div key={selectedClusterId}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr ",
              justifyItems: "center",
              marginBottom: "40px",
            }}
          >
            <InfoCard
              name="Rank"
              primaryData={clusterRank}
              secondaryData={clusterRankChange}
            />
            <InfoCard
              name="Size"
              primaryData={clusterSize}
              secondaryData={clusterSizeChange}
            />
          </div>

          <div
            className="animate__animated animate__fadeInDown"
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
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default ClusterInfo;
