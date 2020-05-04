import React from "react";

const siterow = ({ site_obj }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/airbnb.svg"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {site_obj.url}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <h3>{site_obj.rank}</h3>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          +10
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        website key
      </td>
    </tr>
  );
};

export default siterow;