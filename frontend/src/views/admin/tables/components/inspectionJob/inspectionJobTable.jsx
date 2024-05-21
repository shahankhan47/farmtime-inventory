import React, { useEffect, useState } from "react";
import Card from "components/card";
import AssignTechnicianModel from './assignTechnician';
import { getBatchRecords } from "data/api";
import MUIDataTable from "mui-datatables";


const DevelopmentTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [batch, setBatch] = useState({});
  const [records, setRecords] = useState([])

  useEffect(() => {
    getBatchRecords().then((results) => {
      setRecords(results)
    })
  }, [])
  
  const columnsData = [
    {
      name: "_id",
      label: "BATCH NO",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "total",
      label: "MATERIALS MODIFIED",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "date",
      label: "LAST ADDED DATE",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "details",
      label: "SEE DETAILS",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              className="px-2 py-2 text-blue-800 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={() => openModal(records[tableMeta.rowIndex])}
            >
              Details
            </button>
          );
        },
      },
    },
  ];

  const openModal = (row) => {
    console.log(row);
    setBatch(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setBatch({});
  };

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto "}>
    <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
      <MUIDataTable
        title={<p className="text-xl font-bold text-navy-700 dark:text-white">View History</p>}
        data={records}
        columns={columnsData}
        options={{
          selectableRows: "none", // Disable row selection
        }}
      />
    </div>

    {showModal && 
    <AssignTechnicianModel
    onClose={closeModal}
    isOpen={showModal} 
    job={batch}
    setJob={batch}
    />}
  </Card>
  );
};


export default DevelopmentTable;