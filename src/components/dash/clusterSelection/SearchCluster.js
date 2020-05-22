import React from "react";
import InputUrl from "./InputUrl";

class SearchCluster extends React.Component {
  render() {
    let selectedClassName =
      "bg-gray-800 text-white hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-l";
    let normalClassName =
      "bg-gray-200 text-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r";
    let {
      handleChange,
      handleSubmit,
      handleSearchMode,
      searchMode,
      selectedClusterId,
    } = this.props;
    return (
      <div
        style={{
          display: "grid",
          width: "100vw",
          marginBottom: "80px",
          marginTop: "100px",
          gridTemplateColumns: "1fr 8fr 2fr",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div class="flex justify-center px-2 w-auto hidden sm:block h-full ">
          <button
            type="button"
            class="inline-flex h-full items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            Education
          </button>
        </div>
        <InputUrl
          selectedClusterId={selectedClusterId}
          handleChange={handleChange}
          handleClick={handleSubmit}
        />
        <span class="">
          <button
            onClick={() => {
              handleSearchMode("query");
            }}
            className={
              searchMode === "query" ? selectedClassName : normalClassName
            }
          >
            Query
          </button>
          <button
            onClick={() => {
              handleSearchMode("domain");
            }}
            className={
              searchMode === "domain" ? selectedClassName : normalClassName
            }
          >
            Org Name
          </button>
        </span>
      </div>
    );
  }
}

export default SearchCluster;
