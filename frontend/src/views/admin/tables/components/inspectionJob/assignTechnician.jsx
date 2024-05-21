import React from "react";
import Table from './technicianTable'

const AssignTechnicianModel = ({onClose, isOpen, job, setJob}) => {
    if (isOpen === false) {
        return null
    }
    return (
        <div className={`fixed inset-0 z-50`}>
            <div
            className={`fixed inset-0 bg-gray-200 opacity-60`}
            onClick={onClose}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center">
            <div className={`bg-white dark:bg-gray-800 w-[900px] p-8 rounded-lg`}>
                <Table onClose={onClose} job={job} setJob={setJob}/>
            </div>
            </div>
        </div>
    )
}

export default AssignTechnicianModel;