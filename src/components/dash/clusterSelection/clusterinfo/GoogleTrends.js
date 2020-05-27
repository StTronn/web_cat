import React from "react";
import ReactDOM from "react-dom";

export default class WidgetGoogleTrends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
    };
    this.widget = this.widget.bind(this);
  }

  clear() {
    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
    }
  }

  componentDidMount() {
    this.widget();
  }

  widget() {
    this.clear();

    let _ = this;
    let script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/1243_RC12/embed_loader.js";
    script.async = true;

    ReactDOM.findDOMNode(_.refs.charts).appendChild(script);

    script.onload = function () {
      //let list = _.state.word.map((e, i) => {
      // return { keyword: e, geo: "", time: "today 12-m" };
      //});

      window.trends.embed.renderExploreWidgetTo(
        ReactDOM.findDOMNode(_.refs.charts),
        "TIMESERIES",
        {
          comparisonItem: [
            { keyword: _.state.word, geo: "", time: "today 12-m" },
          ],
          category: 0,
          property: "",
        },
        {
          exploreQuery: `q=${_.state.word}&date=today 12-m`,
          guestPath: "https://trends.google.com:443/trends/embed/",
        }
      );
      //console.log(list);
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      word: props.word,
    });
    this.widget();
  }

  render() {
    return <div ref="charts" />;
  }
}
