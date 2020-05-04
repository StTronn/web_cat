import React from "react";
import SiteRow from "./SiteRow";

class SitesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesList: [],
    };
  }
  fetchSites = () => {
    let { selectedClusterId } = this.props;
    let url = selectedClusterId
      ? "http://127.0.0.1:5000/getclusterurl/" + selectedClusterId
      : "http://127.0.0.1:5000/getclusterurl/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sitesList: data });
      });
  };
  componentDidMount() {
    this.fetchSites();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchSites();
    }
  }

  render() {
    console.log(this.props.selectedClusterId, this.state.sitesList);
    let { sitesList } = this.state;
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
  }
}

export default SitesTable;
