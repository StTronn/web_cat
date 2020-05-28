import React from "react";

const ClusterRow = ({ site_obj }) => {
  console.log(site_obj.change);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {site_obj.cluster_name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <h3>{site_obj.primary}</h3>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span
          className={
            parseInt(site_obj.secondary) >= 0
              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full  bg-red-100 text-red-800"
          }
        >
          {site_obj.secondary}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <h3>{site_obj.size}</h3>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span
          className={
            parseInt(site_obj.size_change) >= 0
              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full  bg-red-100 text-red-800"
          }
        >
          {site_obj.size_change}
        </span>
      </td>
    </tr>
  );
};

export default ClusterRow;
