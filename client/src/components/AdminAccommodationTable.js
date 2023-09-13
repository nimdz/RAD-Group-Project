import React from "react";

const AdminAccommodationTable = ({ data, onDelete }) => {
  return (
    <div className="flex justify-center my-10 ">
      <div className="flex overflow-x-auto w-4/5 lg:w-2/5">
        <table className="min-w-full border">
          <thead className="border">
            <tr>
              <th className="px-6 py-3 border bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 border bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {index + 1}
                  </div>
                </td>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.email}
                  </div>
                </td>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.title}
                  </div>
                </td>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.address}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAccommodationTable;
