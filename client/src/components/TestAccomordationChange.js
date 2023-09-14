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

const ServiceTable = ({
    data,
    onDelete,
    onUpdate,
    editingService,
    setEditingService,
  }) => {
    const [editedService, setEditedService] = useState({}); // Store the edited service data
  
    const handleEdit = (index) => {
      // Set the editingService state to the service being edited
      setEditingService(data[index]);
  
      // Optionally, you can set the editedService state to the same data
      // to initialize the form fields with the current service data
      setEditedService(data[index]);
    };
  
    const handleSave = () => {
      // Call the onUpdate function to update the service with the edited data
      onUpdate(editedService);
  
      // Clear the editingService state to exit the editing mode
      setEditingService(null);
  
      // Clear the editedService state
      setEditedService({});
    };
  
    const handleCancel = () => {
      // Clear the editingService state to exit the editing mode
      setEditingService(null);
  
      // Clear the editedService state
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
                        value={editedService.description || ""}
                        onChange={(e) =>
                          setEditedService({
                            ...editedService,
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
  
  const ServiceTable = ({
      data,
      onDelete,
      onUpdate,
      editingService,
      setEditingService,
    }) => {
      const [editedService, setEditedService] = useState({}); // Store the edited service data
    
      const handleEdit = (index) => {
        // Set the editingService state to the service being edited
        setEditingService(data[index]);
    
        // Optionally, you can set the editedService state to the same data
        // to initialize the form fields with the current service data
        setEditedService(data[index]);
      };
    
      const handleSave = () => {
        // Call the onUpdate function to update the service with the edited data
        onUpdate(editedService);
    
        // Clear the editingService state to exit the editing mode
        setEditingService(null);
    
        // Clear the editedService state
        setEditedService({});
      };
    
      const handleCancel = () => {
        // Clear the editingService state to exit the editing mode
        setEditingService(null);
    
        // Clear the editedService state
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
                          value={editedService.description || ""}
                          onChange={(e) =>
                            setEditedService({
                              ...editedService,
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
      
      const ServiceTable = ({
          data,
          onDelete,
          onUpdate,
          editingService,
          setEditingService,
        }) => {
          const [editedService, setEditedService] = useState({}); // Store the edited service data
        
          const handleEdit = (index) => {
            // Set the editingService state to the service being edited
            setEditingService(data[index]);
        
            // Optionally, you can set the editedService state to the same data
            // to initialize the form fields with the current service data
            setEditedService(data[index]);
          };
        
          const handleSave = () => {
            // Call the onUpdate function to update the service with the edited data
            onUpdate(editedService);
        
            // Clear the editingService state to exit the editing mode
            setEditingService(null);
        
            // Clear the editedService state
            setEditedService({});
          };
        
          const handleCancel = () => {
            // Clear the editingService state to exit the editing mode
            setEditingService(null);
        
            // Clear the editedService state
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
                              value={editedService.description || ""}
                              onChange={(e) =>
                                setEditedService({
                                  ...editedService,
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
          
          const ServiceTable = ({
              data,
              onDelete,
              onUpdate,
              editingService,
              setEditingService,
            }) => {
              const [editedService, setEditedService] = useState({}); // Store the edited service data
            
              const handleEdit = (index) => {
                // Set the editingService state to the service being edited
                setEditingService(data[index]);
            
                // Optionally, you can set the editedService state to the same data
                // to initialize the form fields with the current service data
                setEditedService(data[index]);
              };
            
              const handleSave = () => {
                // Call the onUpdate function to update the service with the edited data
                onUpdate(editedService);
            
                // Clear the editingService state to exit the editing mode
                setEditingService(null);
            
                // Clear the editedService state
                setEditedService({});
              };
            
              const handleCancel = () => {
                // Clear the editingService state to exit the editing mode
                setEditingService(null);
            
                // Clear the editedService state
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
                                  value={editedService.description || ""}
                                  onChange={(e) =>
                                    setEditedService({
                                      ...editedService,
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
              
              const ServiceTable = ({
                  data,
                  onDelete,
                  onUpdate,
                  editingService,
                  setEditingService,
                }) => {
                  const [editedService, setEditedService] = useState({}); // Store the edited service data
                
                  const handleEdit = (index) => {
                    // Set the editingService state to the service being edited
                    setEditingService(data[index]);
                
                    // Optionally, you can set the editedService state to the same data
                    // to initialize the form fields with the current service data
                    setEditedService(data[index]);
                  };
                
                  const handleSave = () => {
                    // Call the onUpdate function to update the service with the edited data
                    onUpdate(editedService);
                
                    // Clear the editingService state to exit the editing mode
                    setEditingService(null);
                
                    // Clear the editedService state
                    setEditedService({});
                  };
                
                  const handleCancel = () => {
                    // Clear the editingService state to exit the editing mode
                    setEditingService(null);
                
                    // Clear the editedService state
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
                                      value={editedService.description || ""}
                                      onChange={(e) =>
                                        setEditedService({
                                          ...editedService,
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
                
                
                        
        
        