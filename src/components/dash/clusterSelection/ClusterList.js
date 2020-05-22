import React from "react";
import ClusterButton from "./ClusterButton";

const ClusterList = ({ clusterIds, selectedClusterId, selectClusterId }) => {
  return (
    <div className="shadow-md max-w-7xl py-6 px-4 sm:px-6 lg:px-8 mt-8 mb-16 mx-2">
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
