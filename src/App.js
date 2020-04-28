import React from "react";
import "./App.css";
import DisplayWebsiteInfo from "./components/DisplayWebsiteInfo";
import InputUrl from "./components/InputUrl";
import KeyWordsCard from "./components/KeyWordsCard";
import SimSitesCard from "./components/SimSitesCard";
import Topbar from "./components/Topbar";

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
    console.log(searching, keywords);
    let prompt = "";
    if (searching === true) prompt = "Looking for result";
    else if (searched === false) prompt = "Type a url to get info";
    else if (keywords.length === 0 && websites.length === 0)
      prompt = "something went wrong try another url";
    else prompt = url;
    return (
      <>
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
