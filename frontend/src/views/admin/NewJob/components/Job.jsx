import React, { useState, useEffect } from 'react';
import {getMaterialNamesList} from 'data/api';

const InstallerPayment = ({ values, handleChange }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterialNamesList().then((response) => {
      setMaterials(response);
    });
  },[]);

  return (
    <div>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Material Name</label>
          <select
            id="services"
            name="services"
            value={values.name}
            onChange={handleChange('name')}
            className="w-full text-sm border-b-2 border-gray-300 
            focus:border-brand-500 focus:outline-none 
            rounded-md px-2 py-1"
          >
            <option value="">Select a material</option>
            {materials.map((service, index) => {
              return (<option key={index} value={service}>{service}</option>)
            })}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Increase/Decrease</label>
          <select
            className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
            onChange={handleChange('operation')}
            value={values.operation}
          >
            <option value="Increase" selected={true}>Increase</option>
            <option value="Decrease">Decrease</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Amount</label>
          <input
            type="text"
            className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
            onChange={handleChange('amount')}
            value={values.amount}
            placeholder='Enter Amount'
          />
        </div>
        <div>
          <label className="block text-gray-700">Batch Number</label>
          <input
            type="text"
            className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
            onChange={handleChange('batch')}
            value={values.batch}
            placeholder='Batch Number is mandatory'
          />
        </div>
        <div>
          <label className="block text-gray-700">Comment</label>
          <input
            type="text"
            className="w-full text-sm border-b-2 border-gray-300 focus:border-brand-500 focus:outline-none rounded-md px-2 py-1"
            onChange={handleChange('comment')}
            value={values.comment}
            placeholder='Any other additional comment'
          />
        </div>
      </form>
    </div>
  );
};

export default InstallerPayment;
