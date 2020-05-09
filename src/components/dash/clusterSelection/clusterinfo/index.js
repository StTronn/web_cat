import React from "react";
import KeyWordsCard from "../../../websites/KeyWordsCard";
import clusterData from "./clusters.json";
import InfoCard from "./InfoCard";
import "./clusterinfo.css";
import styled from "styled-components";
const Cointainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-bottom: 40px;
  grid-template-areas:
    ". ."
    "b b";
`;

//card ,card_cointainer,border

class ClusterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clusterInfo: clusterData,
      currentCluster: null,
      showRank: true,
      showSize: true,
      flipRank: false,
      flipSize: false,
    };
  }

  fetchInfo = () => {
    //get cluster id
    //if cluster id is 0 do nothing
    //else fetch
  };
  componentDidMount() {
    //fetch and store clusterInfo
  }

  handleFlip = (w) => {
    let { flipRank, flipSize, showRank, showSize } = this.state;
    if (w === "Rank")
      this.setState({ flipRank: !flipRank, showSize: !showSize });
    else this.setState({ flipSize: !flipSize, showRank: !showRank });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchInfo();
    }
  }
  render() {
    let { selectedClusterId } = this.props;
    let { clusterInfo, showRank, showSize, flipSize, flipRank } = this.state;

    if (selectedClusterId) {
      let clusterRankarr = clusterInfo[selectedClusterId].rank;
      let clusterSizearr = clusterInfo[selectedClusterId].size;
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
          <Cointainer>
            <InfoCard
              flip={flipRank}
              hide={!showRank}
              name="Rank"
              primaryData={clusterRank}
              secondaryData={clusterRankChange}
              handleFlip={this.handleFlip}
              arr={clusterRankarr}
            />
            <InfoCard
              flip={flipSize}
              hide={!showSize}
              name="Size"
              primaryData={clusterSize}
              secondaryData={clusterSizeChange}
              handleFlip={this.handleFlip}
              arr={clusterSizearr}
            />
          </Cointainer>

          <div
            className="animate__animated animate__fadeInDown"
            style={{
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {showRank && showSize && (
              <KeyWordsCard
                keywords={clusterInfo[selectedClusterId].keyword[0]
                  .split(/(\s+)/)
                  .filter(function (e) {
                    return e.trim().length > 0;
                  })}
              />
            )}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default ClusterInfo;
