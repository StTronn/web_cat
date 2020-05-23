import React from "react";
import KeyWordsCard from "./KeyWordsCard";
import clusterData from "./clusters.json";
import InfoCard from "./InfoCard";
import "./clusterinfo.css";
import styled from "styled-components";
import DaySelector from "./DaySelector";
import SingleDate from "./SingleDate";

const Cointainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-bottom: 40px;
  grid-template-areas:
    ". ."
    "b b";
`;
const InfoCointainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
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
      flipKeyword: false,
      day: 1,
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

  handleKeyWordFlip = () => {
    let { flipKeyword } = this.state;
    this.setState({ flipKeyword: !flipKeyword });
  };
  changeDay = (day) => {
    this.setState({ day });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchInfo();
    }
  }
  render() {
    let { selectedClusterId } = this.props;
    let {
      clusterInfo,
      showRank,
      showSize,
      flipSize,
      flipRank,
      flipKeyword,
      day,
    } = this.state;

    if (selectedClusterId) {
      selectedClusterId = selectedClusterId - 1;
      let clusterRankarr = clusterInfo[selectedClusterId].rank;
      let clusterSizearr = clusterInfo[selectedClusterId].size;
      let clusterSize = clusterInfo[selectedClusterId].size[day];
      let clusterSizeChange =
        clusterInfo[selectedClusterId].size[day] -
        clusterInfo[selectedClusterId].size[day - 1];
      let clusterRank = Math.round(
        clusterInfo[selectedClusterId].rank[day] /
          clusterInfo[selectedClusterId].size[day]
      );
      let clusterRankChange =
        clusterRank -
        Math.round(
          clusterInfo[selectedClusterId].rank[day - 1] /
            clusterInfo[selectedClusterId].size[day - 1]
        );

      return (
        <div key={selectedClusterId}>
          {showRank && showSize && !flipKeyword && <SingleDate />}
          {!flipKeyword && (
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
          )}
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
                handleFlip={this.handleKeyWordFlip}
                flip={flipKeyword}
                keywords={clusterInfo[selectedClusterId].keywords[0]
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
      return (
        <InfoCointainer className="animate__animated animate__fadeInDown">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-normal text-center text-teal-600 text-xl mb-2">
                Select a Category to get more info
              </div>
            </div>
          </div>
        </InfoCointainer>
      );
    }
  }
}

export default ClusterInfo;
