import React from "react";
import KeyWordsCard from "./KeyWordsCard";
import InputUrl from "./InputUrl";
import SimSitesCard from "./SimSitesCard";
import Spinner from "react-spinkit";
import { URL } from "../../utils";
import styled from "styled-components";

const Cointainer = styled.div`
  display: grid;
  justify-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      websites: [],
      searched: false,
      searching: false,
      url: "",
      showSim: true,
      status: 200,
      clusterno: null,
    };
  }

  toggleSim = () => {
    let { showSim } = this.state;
    this.setState({ showSim: !showSim });
  };

  fetchUrlDetails = () => {
    let { url, showSim } = this.state;
    let temp = "";
    if (showSim) temp = "/1";
    else temp = "/0";
    if (url === "") return;
    this.setState({ searching: true, searched: true });
    //store keywords,websites
    fetch(URL + "/" + url + temp)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          keywords: data.keywords || [],
          websites: data.websites || [],
          searching: false,
          status: data.status,
          clusterno: data.cluster_no || "0",
        })
      );
    //change state and
  };

  handleClick = () => {
    this.fetchUrlDetails();
  };

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  };

  render() {
    let {
      searched,
      searching,
      keywords,
      websites,
      status,
      clusterno,
    } = this.state;
    let prompt = "";
    if (searching === true) prompt = "Looking for result";
    else if (searched === false) prompt = "Type a url to get info";
    else if (keywords.length === 0 && websites.length === 0) prompt = status;
    else prompt = "Cluster " + clusterno;
    if (!searching) {
      return (
        <Cointainer>
          <InputUrl
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
          <DisplayWebsiteInfo prompt={prompt} />
          <div style={{ display: "grid", alignItems: "center" }}>
            {keywords.length !== 0 && <KeyWordsCard keywords={keywords} />}
            {websites.length !== 0 && <SimSitesCard websites={websites} />}
          </div>
        </Cointainer>
      );
    } else {
      return (
        <Cointainer>
          <InputUrl
            handleClick={this.handleClick}
            handleChange={this.handleChange}
          />
          <br />
          <Spinner name="folding-cube" color="teal" />
        </Cointainer>
      );
    }
  }
}

function DisplayWebsiteInfo({ prompt }) {
  return (
    <div className=" text-center max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg mb-8 shadow-xl animate__animated animate__fadeInDown">
      <div className="flex justify-center text-center ml-6 pt-1">
        <h1 className="text-center text-2xl text-blue-700 leading-tight">
          {prompt}
        </h1>
      </div>
    </div>
  );
}
export default App;
