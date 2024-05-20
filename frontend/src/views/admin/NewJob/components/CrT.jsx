import React, { useState } from 'react';
import InstallerPayment from './Job';
import {getMaterialByName, createBatchRecord, updateMaterial} from 'data/api';

const CreateTech = () => {
  const [material, setMaterial] = useState({
    id: '',
    amount: 0
  })
  const [jobDetails, setJobDetails] = useState({
    name: '',
    operation: 'Increase',
    amount: 0,
    batch: '',
    comment: '',
  });

  const handleChange = (input) => (e) => {
    if (input === "name") {
      getMaterialByName({name: e.target.value}).then((response) => {
        setMaterial({id: response?._id, amount: response?.amount});
      });
    }
    setJobDetails({ ...jobDetails, [input]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(jobDetails);
    console.log(material);
    if (!material.id) {
      alert("Please select a material")
    }
    else {
      let amount = jobDetails.operation === "Increase" ? 
      material.amount + Number(jobDetails.amount) : material.amount - Number(jobDetails.amount);
      updateMaterial(material.id, {amount}).then((status) => {
        if (status === 200) {
          createBatchRecord({ ...jobDetails, finalAmount: amount }).then((responseStatus) => {
            if (responseStatus === 201) {
              alert("Batch Record Added Successfully");
            }
            else {
              alert("Internal Server Error");
            }
            setJobDetails({
              name: '',
              operation: '',
              amount: 0,
              batch: '',
              comment: ''
            })
            setMaterial({
              id: '',
              amount: 0
            })
          }).error((e) => {alert("Internal Server Error")})
        }
      }).error((e) => {alert("Internal Server Error")})
    }
  }

  return (
    <div className="mt-4 space-y-2 w-96" style={{ maxHeight: '70vh', minWidth: "50vw"}}>
      <h2 className="text-2xl font-semibold">Increase/Decrease Materials</h2>
      {/* Include your form fields for payment here */}
      <InstallerPayment handleChange={handleChange} values={jobDetails}/>
      <div className="flex space-x-4">
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateTech;
