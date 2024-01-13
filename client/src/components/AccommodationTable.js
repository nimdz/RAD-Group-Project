import React, { useState } from "react";

const ServiceTable = ({
  data,
  onDelete,
  onUpdate,
  editingService,
  setEditingService,
}) => {
  const [editedService, setEditedService] = useState({}); 
  const handleEdit = (index) => {
    setEditingService(data[index]);

    setEditedService(data[index]);
  };

  const handleSave = () => {
    onUpdate(editedService);
    setEditingService(null);
    setEditedService({});
  };

  const handleCancel = () => {
    setEditingService(null);
    setEditedService({});
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex overflow-x-auto w-4/5 lg:w-2/5">
        <table className="min-w-full border">
          {/* ... (Table header) */}
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">
                    {index + 1}
                  </div>
                </td>

                <td className="px-6 py-4 border whitespace-no-wrap">
                  {editingService === item ? (
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={editedService.title || ""}
                      onChange={(e) =>
                        setEditedService({
                          ...editedService,
                          title: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className="text-sm leading-5 text-gray-900">
                      {item.title}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 border whitespace-no-wrap">
                  {editingService === item ? (
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={editedService.address || ""}
                      onChange={(e) =>
                        setEditedService({
                          ...editedService,
                          address: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className="text-sm leading-5 text-gray-900">
                      {item.address}
                    </div>
                  )}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap">
                  {editingService === item ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="text-green-500 mr-2"
                      >
                        Save
                      </button>
                      <button onClick={handleCancel} className="text-red-500">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                  )}
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

export default ServiceTable;
