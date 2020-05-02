import React from "react";
import "./App.css";
import DisplayWebsiteInfo from "./components/DisplayWebsiteInfo";
import InputUrl from "./components/InputUrl";
import KeyWordsCard from "./components/KeyWordsCard";
import SimSitesCard from "./components/SimSitesCard";
import NavBar from "./components/NavBar";
import ClustersSelction from "./components/ClustersSelection";
import SelectedView from "./components/SelectedView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      websites: [],
      searched: false,
      searching: false,
      url: "",
    };
  }

  fetchUrlDetails = () => {
    let { url } = this.state;
    if (url === "") return;
    this.setState({ searching: true, searched: true });
    //store keywords,websites
    fetch("http://127.0.0.1:5000/" + url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          keywords: data.keywords || [],
          websites: data.websites || [],
          searching: false,
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
    let { searched, searching, keywords, websites, url } = this.state;
    let cluster_arr = new Array(70);
    let prompt = "";
    if (searching === true) prompt = "Looking for result";
    else if (searched === false) prompt = "Type a url to get info";
    else if (keywords.length === 0 && websites.length === 0)
      prompt = "something went wrong try another url";
    else prompt = url;

    return (
      <>
        <NavBar />

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 my-6">
          <h2 className="text-3xl font-bold leading-tight text-gray-900">
            Categories
          </h2>
          <br />
          {Array.apply(null, { length: 81 }).map((e, i) => (
            <>
              <ClustersSelction key={i} cluster_id={i} />
            </>
          ))}
        </div>
        <SelectedView />
        <InputUrl
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <DisplayWebsiteInfo prompt={prompt} />
        <div>
          {keywords.length !== 0 && <KeyWordsCard keywords={keywords} />}
          {websites.length !== 0 && <SimSitesCard websites={websites} />}
        </div>
      </>
    );
  }
}

export default App;
