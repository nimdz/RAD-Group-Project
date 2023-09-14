import React, { useState } from "react";

const ReviewTable = ({
  data,
  onDelete,
  onUpdate,
  editingService,
  setEditingService,
}) => {
  const [editedReview, setEditedReview] = useState({});

  const handleEdit = (index) => {
    setEditingService(data[index]);

    setEditedReview(data[index]);
  };

  const handleSave = () => {
    onUpdate(editedReview);

    setEditingService(null);

    setEditedReview({});
  };

  const handleCancel = () => {
    setEditingService(null);

    setEditedReview({});
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex overflow-x-auto w-4/5 lg:w-2/5">
        <table className="min-w-full border">
          {}
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
                      value={editedReview.title || ""}
                      onChange={(e) =>
                        setEditedReview({
                          ...editedReview,
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
                      value={editedReview.description || ""}
                      onChange={(e) =>
                        setEditedReview({
                          ...editedReview,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className="text-sm leading-5 text-gray-900">
                      {item.description}
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

export default ReviewTable;
