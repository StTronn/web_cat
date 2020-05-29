import React from "react";
import KeyWordsCard from "./KeyWordsCard";
import clusterData from "./clusters.json";
import InfoCard from "./InfoCard";
import "./clusterinfo.css";
import styled from "styled-components";
import moment from "moment";
import SingleDate from "./SingleDate";
import { URL } from "../../../../utils";
import _ from "lodash";
import DaySelector from "./DaySelector";
import Spinner from "react-spinkit";

const Cointainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "t t"
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
      singleDate: moment().subtract(1, "days"),
      startDate: moment().subtract(30, "days"),
      endDate: moment().subtract(1, "days"),
      singleDateData: {},
      rangeDateData: [],
      loading: false,
    };
  }

  fetchInfo = () => {
    let { selectedClusterId } = this.props;
    let {
      showRank,
      showSize,
      flipKeyword,
      singleDate,
      startDate,
      endDate,
    } = this.state;
    let url = URL;
    if (selectedClusterId) {
      url +=
        "/getOneDayClusterData/" +
        singleDate.format("YYYY-MM-DD") +
        "/" +
        selectedClusterId;

      this.setState({ loading: true });
      console.log("hit url ", url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            this.setState({ singleDateData: data[0], loading: false });
          } else {
            this.setState({ singleDateData: {}, loading: false });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ singleDateData: {}, loading: false });
        });
      url = URL;
      url +=
        "/getClusterData/" +
        startDate.format("YYYY-MM-DD") +
        "/" +
        endDate.format("YYYY-MM-DD") +
        "/" +
        selectedClusterId;

      this.setState({ loading: true });
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            this.setState({ rangeDateData: data, loading: false });
          } else {
            this.setState({ rangeDateData: [], loading: false });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ rangeDateData: [], loading: false });
        });
    }
    //get cluster id
    //if cluster id is 0 do nothing
    //else fetch
  };
  componentDidMount() {
    //fetch and store clusterInfo
  }

  handleFlip = (w) => {
    let { flipRank, flipSize, showRank, showSize } = this.state;
    if (w === "rank")
      this.setState(
        { flipRank: !flipRank, showSize: !showSize },
        this.fetchInfo
      );
    else
      this.setState(
        { flipSize: !flipSize, showRank: !showRank },
        this.fetchInfo
      );
  };

  handleKeyWordFlip = () => {
    let { flipKeyword } = this.state;
    this.setState({ flipKeyword: !flipKeyword });
  };

  changeDay = (day) => {
    this.setState({ day });
  };

  changeSingleDate = (singleDate) => {
    let endDate = singleDate.clone().add(10, "days");
    this.setState(
      {
        singleDate: singleDate,
        startDate: singleDate,
        endDate: endDate,
      },
      this.fetchInfo
    );
  };

  handleDateRangeChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate }, this.fetchInfo);

  componentDidUpdate(prevProps) {
    if (prevProps.selectedClusterId !== this.props.selectedClusterId) {
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
      singleDate,
      singleDateData,
      rangeDateData,
      loading,
      startDate,
      endDate,
    } = this.state;

    if (selectedClusterId) {
      selectedClusterId = selectedClusterId - 1;
      let clusterRankarr = clusterInfo[selectedClusterId].rank;
      let clusterSizearr = clusterInfo[selectedClusterId].size;
      return (
        <div key={selectedClusterId}>
          <Cointainer>
            {!flipKeyword && (
              <SingleDate
                date={singleDate}
                updateDate={this.changeSingleDate}
              />
            )}

            {!flipKeyword && (
              <DaySelector
                startDate={startDate}
                endDate={endDate}
                updateDate={this.handleDateRangeChange}
              />
            )}
          </Cointainer>

          {loading && (
            <Prompt message={<Spinner name="folding-cube" color="teal" />} />
          )}

          {!loading && _.isEmpty(singleDateData) && (
            <Prompt message={"no data for given date"} />
          )}

          {!flipKeyword && !loading && !_.isEmpty(singleDateData) && (
            <>
              <Cointainer>
                <InfoCard
                  flip={flipRank}
                  hide={!showRank}
                  name="rank"
                  primaryData={singleDateData.rank}
                  secondaryData={singleDateData.rankChange}
                  handleFlip={this.handleFlip}
                  arr={clusterRankarr}
                  loading={loading}
                  data={rangeDateData}
                />
              </Cointainer>

              <Cointainer>
                <InfoCard
                  flip={flipSize}
                  hide={!showSize}
                  name="size"
                  primaryData={singleDateData.size}
                  secondaryData={singleDateData.sizeChange}
                  handleFlip={this.handleFlip}
                  arr={clusterSizearr}
                  loading={loading}
                  data={rangeDateData}
                />
              </Cointainer>
            </>
          )}
          <div
            className="animate__animated animate__fadeInDown"
            style={{
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {showRank && showSize && !loading && !_.isEmpty(singleDateData) && (
              <KeyWordsCard
                handleFlip={this.handleKeyWordFlip}
                flip={flipKeyword}
                keywords={singleDateData.keywords
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
      return <Prompt message="Select a Category to get more info" />;
    }
  }
}

export const Prompt = ({ message }) => {
  return (
    <InfoCointainer className="animate__animated animate__fadeInDown my-16 min-w-16">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-normal text-center text-teal-600 text-xl mb-2">
            {message}
          </div>
        </div>
      </div>
    </InfoCointainer>
  );
};

export default ClusterInfo;
