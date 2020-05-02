import React from "react";

const ClusterView = ({ cluster_id }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {cluster_id}
    </span>
  );
};
export default ClusterView;
