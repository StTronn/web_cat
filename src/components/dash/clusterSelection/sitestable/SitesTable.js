import React from "react";
import SiteRow from "./SiteRow";
import Spinner from "react-spinkit";
import styled from "styled-components";

const LoadingCointainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

class SitesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesList: [],
      loading: true,
    };
  }
  fetchSites = () => {
    let { selectedClusterId, mode, searchText } = this.props;
    let url = "http://ec2-18-233-151-7.compute-1.amazonaws.com:5000";
    if (mode === "all") {
      url += selectedClusterId
        ? "/getclusterurl/" + selectedClusterId
        : "/getclusterurl/";
    } else if (mode === "query") {
      url += selectedClusterId
        ? "/search/query/" + searchText + "/clusterno/" + selectedClusterId
        : "/search/query/" + searchText;
    } else {
      url += "/search/domain/" + searchText;
    }
    this.setState({ loading: true });
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ sitesList: data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    this.fetchSites();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.mode !== this.props.mode ||
      prevProps.selectedClusterId !== this.props.selectedClusterId
    ) {
      this.fetchSites();
    }
  }

  render() {
    let { sitesList, loading } = this.state;
    console.log("loading", loading);
    if (!loading) {
      return (
        <div className="flex flex-col m-8">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Url
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Keywords
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                {sitesList.map((obj, i) => (
                  <SiteRow key={obj.url} site_obj={obj} />
                ))}
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <LoadingCointainer>
          <Spinner name="folding-cube" color="teal" />{" "}
        </LoadingCointainer>
      );
    }
  }
}

export default SitesTable;
