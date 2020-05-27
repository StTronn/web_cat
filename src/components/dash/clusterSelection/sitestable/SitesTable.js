import React from "react";
import SiteRow from "./SiteRow";
import Pagination from "./Pagination";
import Spinner from "react-spinkit";
import styled from "styled-components";
import { URL } from "../../../../utils";
import _ from "lodash";

const LoadingCointainer = styled.div`
  display: grid;
  height: 60vh;
  padding-top: 40px;
  padding-bottom: 40px;
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
      page: 1,
      maxpage: 20,
    };
  }

  fetchSites = () => {
    //update maxpage
    let { selectedClusterId, mode, searchText } = this.props;
    let { page } = this.state;
    let url = URL;
    if (mode === "all") {
      url += selectedClusterId
        ? "/getclusterurl/" + selectedClusterId + "/page/" + (page - 1)
        : "/getclusterurl/" + "page/" + (page - 1);
    } else if (mode === "query") {
      url += selectedClusterId
        ? "/search/query/" + searchText + "/clusterno/" + selectedClusterId
        : "/search/query/" + searchText;
    } else {
      url += "/search/domain/" + searchText;
    }
    this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (Array.isArray(data)) {
          this.setState({ sitesList: data, loading: false });
        } else
          this.setState({
            sitesList: data.sites,
            maxpage: data.max_page,
            loading: false,
          });
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
      this.setState({ page: 1 }, this.fetchSites);
    }
  }

  render() {
    let { sitesList, loading, maxpage, page, changePage } = this.props;
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
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                {sitesList.map((obj, i) => (
                  <SiteRow key={obj.url} site_obj={obj} />
                ))}
              </table>
            </div>
          </div>
          <div className="mt-4">
            <Pagination
              page={page}
              changePage={changePage}
              pages={Array.apply(null, Array(maxpage)).map(function (_, i) {
                return i;
              })}
            />
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
