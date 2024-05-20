import React, { useState } from "react";
import Card from "components/card";
import {createMaterials, getAllMaterials} from 'data/api';

const ServiceCreate = ({renderMaterials}) => {
  const [materials, setMaterials] = useState({
    name: '',
    unit: '',
    amount: 0
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaterials({
      ...materials,
      [name]: value,
    });
  };

  const handleCreateClick = async () => {
    try {
      createMaterials(materials);
      setMaterials({
        name: '',
        unit: '',
        amount: 0
      });
      setTimeout(() => {
        getAllMaterials().then(response => {
          renderMaterials(response);
        })
      }, 500)
    } catch (error) {
      console.error("Error creating service:", error);
      // Handle errors and display an error message if needed
    }
  };

  return (
    <Card extra="mt-3 !z-5 overflow-hidden">
      <div className="p-4 space-y-4">
        <div>
          <label
            className="text-sm text-navy-700 dark:text-white block"
            htmlFor="serviceName"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={materials.name}
            onChange={handleInputChange}
            className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
          />
        </div>
        <div>
          <label
            className="text-sm text-navy-700 dark:text-white block"
            htmlFor="servicePrice"
          >
            Unit
          </label>
          <div className="flex items-center">
            <input
              type="string"
              step="0.01"
              id="unit"
              name="unit"
              value={materials.unit}
              onChange={handleInputChange}
              className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
            />
          </div>
        </div>
        {/* Add more form fields here */}
        <button
          className="mt-4 j linear rounded-[12px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
          onClick={handleCreateClick}
        >
          Create
        </button>
      </div>
    </Card>

  );
};

export default ServiceCreate;
