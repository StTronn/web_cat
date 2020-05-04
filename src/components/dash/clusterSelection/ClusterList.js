import React from "react";
import ClusterButton from "./ClusterButton";

const ClusterList = ({ clusterIds, selectedClusterId, selectClusterId }) => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 my-8">
      <h2 className="text-3xl font-bold leading-tight text-gray-900">
        Categories
      </h2>
      <br />
      {clusterIds.map((e, i) => (
        <>
          <ClusterButton
            key={e}
            cluster_id={e}
            selectedClusterId={selectedClusterId}
            selectClusterId={selectClusterId}
          />
        </>
      ))}
    </div>
  );
};

export default ClusterList;
