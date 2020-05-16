import React from "react";
import KeyWordsCard from "./KeyWordsCard";
import InputUrl from "./InputUrl";
import SimSitesCard from "./SimSitesCard";

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
    console.log(url);
    if (url === "") return;
    this.setState({ searching: true, searched: true });
    //store keywords,websites
    fetch("https://ec2-18-233-151-7.compute-1.amazonaws.com:5000/" + url)
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
    let prompt = "";
    if (searching === true) prompt = "Looking for result";
    else if (searched === false) prompt = "Type a url to get info";
    else if (keywords.length === 0 && websites.length === 0)
      prompt = "something went wrong try another url";
    else prompt = url;

    return (
      <div>
        <InputUrl
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <DisplayWebsiteInfo prompt={prompt} />
        <div style={{ display: "grid", alignItems: "center" }}>
          {keywords.length !== 0 && <KeyWordsCard keywords={keywords} />}
          {websites.length !== 0 && <SimSitesCard websites={websites} />}
        </div>
      </div>
    );
  }
}

function DisplayWebsiteInfo({ prompt }) {
  return (
    <div className=" text-center max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg mb-8 shadow-xl">
      <div className="flex justify-center text-center ml-6 pt-1">
        <h1 className="text-center text-2xl text-blue-700 leading-tight">
          {prompt}
        </h1>
      </div>
    </div>
  );
}
export default App;
