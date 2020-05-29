import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Dash from "./components/dash/index";
import Overview from "./components/Overview/index";
import Home from "./components/Home/index";
import About from "./components/about/index";
import Predict from "./components/websites/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/dash">
              <Dash />
            </Route>
            <Route path="/websites">
              <Predict />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
