import React from "react";
import ClusterRow from "./ClusterRow";
import Pagination from "../dash/clusterSelection/sitestable/Pagination";
import styled from "styled-components";
import Spinner from "react-spinkit";
import _ from "lodash";
import { URL } from "../../utils";

const LoadingCointainer = styled.div`
  display: grid;
  height: 60vh;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export default class Table extends React.Component {
  state = {
    loading: false,
    page: 1,
    maxpage: 10,
    data: [],
    mode: "name",
  };

  componentDidMount() {
    this.fetchdata();
  }

  handleMode = (mode) => {
    this.setState({ mode, page: 1 });
  };

  changePage = (page) => {
    let { maxpage } = this.state;
    if (page < 1 || page > maxpage) return;
    this.setState({ page });
  };

  fetchdata = () => {
    let url = URL + "/getAllClusterData" + "/2020-05-23/2020-05-18";

    this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ data: [], loading: false });
      });
  };

  render() {
    let { page, maxpage, data, loading, mode } = this.state;
    let feilds = [
      { name: "Name", mode: "name" },
      { name: "Score", mode: "primary" },
      { name: "Score Change", mode: "secondary" },
      { name: "Size", mode: "size" },
      { name: "Size Change", mode: "size_change" },
    ];

    if (!loading && data.length !== 0) {
      data = _.orderBy(data, [mode], ["asc"]);
      data = data.slice(10 * (page - 1), 10 * page);
      return (
        <div className="flex flex-col m-8">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {feilds.map((e) => (
                      <th
                        onClick={() => this.handleMode(e.mode)}
                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {e.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                {data.map((obj, i) => (
                  <ClusterRow
                    feilds={feilds}
                    key={obj.cluster_name}
                    site_obj={obj}
                  />
                ))}
              </table>
            </div>
          </div>
          <div className="mt-4">
            <Pagination
              page={page}
              changePage={this.changePage}
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
