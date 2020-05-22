import React from "react";

const ClusterView = ({ cluster_id, selectedClusterId, selectClusterId }) => {
  let selectedClass =
    "inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer";
  let normalClass =
    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer";
  let cssClass = cluster_id === selectedClusterId ? selectedClass : normalClass;
  return (
    <span
      className={cssClass}
      onClick={() => {
        selectClusterId(cluster_id);
      }}
    >
      {cluster_id ? cluster_id : "All"}
    </span>
  );
};

export default ClusterView;
