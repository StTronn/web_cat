import React from "react";
import "./App.css";
import DisplayWebsiteInfo from "./components/DisplayWebsiteInfo";
import InputUrl from "./components/InputUrl";

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
  render() {
    let { searched, keywords, websites, url } = this.state;
    let prompt = "";
    if (searched === false) prompt = "Type a url to get info";
    else if (keywords.length === 0 && websites.length === 0)
      prompt = "something went wrong try another url";
    else prompt = url;
    return (
      <>
        <InputUrl />
        <DisplayWebsiteInfo prompt={prompt} />
      </>
    );
  }
}

export default App;
