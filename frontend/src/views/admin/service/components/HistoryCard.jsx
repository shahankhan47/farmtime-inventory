import React, { useEffect, useState } from "react";
import Card from "components/card";
import { updateMaterial, getAllMaterials } from 'data/api';

const ServiceProfile = ({data, renderServices}) => {
  const [editable, setEditable] = useState(false); // State to manage edit mode
  const [materials, setMaterials] = useState({
    _id: '',
    name: '',
    unit: '',
    amount: 0
  });


  useEffect(() => {
    setMaterials({
      _id: data._id,
      name: data.name,
      amount: data.amount,
      unit: data.unit,
    })
  }, [data]);
  
  const handleCancelClick = () => {
    setEditable(false);
    setMaterials({
      _id: '',
      name: '',
      unit: '',
      amount: 0
    })
  }

  const handleEditClick = () => {
    if (materials.id !== "")
    setEditable(true);
  };

  const handleSaveClick = async () => {
    console.log(materials);
    const response = await updateMaterial(materials._id, {
      "name": materials.name,
      "unit": materials.unit,
    });
    console.log(response);
    setEditable(false);
    setTimeout(() => {
      getAllMaterials().then(response => {
        renderServices(response);
      })
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaterials({
      ...materials,
      [name]: value,
    });
  };

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden"}>
      <div className="p-4">
        <div className="text-center mt-4 ">
          <p className="text-sm font-bold text-gray-600 border-1 flex flex-row justify-left gap-x-4 items-center">
            Internal Id: {materials._id}
          </p>
          <p className="text-sm font-bold text-gray-600 border-1 flex flex-row justify-left gap-x-4 items-center">
            Amount: {materials.amount}
          </p>
          <div className="input-field mt-4 flex flex-row justify-left gap-x-4 items-center">
            <label className="text-navy-700 dark:text-white" htmlFor="serviceName">
              Name
            </label>
            {editable ? (
              <input
                type="text"
                id="name"
                name="name"
                value={materials.name}
                onChange={handleInputChange}
              />
            ) : (
              <p>{materials.name}</p>
            )}
          </div>         
  
          <div className="mt-4 flex flex-row justify-left gap-x-4 items-center">
            <label className="text-navy-700 dark:text-white border-1 " htmlFor="servicePrice">
              Unit
            </label>
            <div className="flex items-center">
              {editable ? (
                <input
                  type="text"
                  step="0.01"
                  id="unit"
                  name="unit"
                  value={materials.unit}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="ml-1">{materials.unit}</p>
              )}
            </div>
          </div>
          {editable ? (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <button
              className="flex justify-left mt-4 linear rounded-[12px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="flex justify-left mt-4 linear rounded-[12px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className=" flex justify-left mt-4 linear rounded-[12px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceProfile;
