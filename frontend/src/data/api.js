import axios from "axios";

const backendUrl = "https://farmtime-backend.vercel.app/api"
// const backendUrl = "http://localhost:5000/api"

const createService = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post(`${backendUrl}/service`, formData);
        console.log(response)
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const getserviceList = async () => {
    try {
        const response = await axios.get(`${backendUrl}/service`);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getServiceNameById = async (serviceId) => {
    try {
        const response = await axios.get(`${backendUrl}/service/${serviceId}`);
        return response.data.name;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getServiceCodeById = async (serviceId) =>{
    try {
        const response = await axios.get(`${backendUrl}/service/${serviceId}`);
        return response.data.service_code;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteServiceTimeById = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/time/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateServiceById = async (id, data) => {
    try {
        const response = await axios.put(`${backendUrl}/service/${id}`, data);
        console.log(response);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteServiceById = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/service/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createAdmin = async (formData) => {
    try {
        const response = await axios.post(`${backendUrl}/admin/`, formData);
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }
}

const getAdminData = async () => {
    try {
        const response = await axios.get(`${backendUrl}/admin/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getSpecificAdminData = async (id) => {
    try {
        const response = await axios.get(`${backendUrl}/admin/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const deleteAdmin = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/admin/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateAdmin = async (id, dataObject) => {
    try {
        const response = await axios.put(`${backendUrl}/admin/${id}`, dataObject);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getTechnicianData = async () => {
    try {
        const response = await axios.get(`${backendUrl}/technician/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getSpecificTechnician = async (id) => {
    try {
        const response = await axios.get(`${backendUrl}/technician/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getTechnicianByTasknowId = async (technicianId) => {
    try {
        const response = await axios.post(`${backendUrl}/technician/getTechnician`, {technicianId});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createTechnician = async (formData) => {
    try {
        const response = await axios.post(`${backendUrl}/technician/`, formData);
    }
    catch (error) {
        console.log(error);
    }
}

const updateTechnician = async (id, dataObject) => {
    try {
        const response = await axios.put(`${backendUrl}/technician/${id}`, dataObject);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const deleteTechnician = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/technician/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${backendUrl}/user/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getUserByDetails = async (data) => {
    try {
        console.log(data)
        const response = await axios.post(`${backendUrl}/user/getuser`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (formData) => {
    try {
        const response = await axios.post(`${backendUrl}/user/`, formData);
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }
}

const updateUser = async (id, dataObject) => {
    try {
        const response = await axios.put(`${backendUrl}/user/${id}`, dataObject);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const bookJob = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/user/bookjob`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/user/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getJob = async () => {
    try {
        const response = await axios.get(`${backendUrl}/job/`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getJobsofType = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/job/type`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getInspectionJobsOfTechnician = async (id) => {
    try {
        const response = await axios.post(`${backendUrl}/job/inspection`, id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getRepairJobsOfTechnician = async (id) => {
    try {
        const response = await axios.post(`${backendUrl}/job/repair`, id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getSpecificJob = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/job/getJob`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createJob = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/job/`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const deleteJob = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/job/deleteJob`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const updateJob = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/job/updateJob`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getSortedTechnician = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/technician/assign`, data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const getWidgetDetails = async () => {
    try {
        const response = await axios.get(`${backendUrl}/general/widgets`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const createMaterials = async (data) => {
    try {
        await axios.post(`${backendUrl}/material`, data);
    }
    catch (error) {
        console.log(error);
    }
}

const getAllMaterials = async () => {
    try {
        const response = await axios.get(`${backendUrl}/material`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const deleteMaterial = async(id) => {
    try {
        await axios.delete(`${backendUrl}/material/${id}`);
    } catch (error) {
        console.log(error);
    }
}

const updateMaterial = async(id, data) => {
    try {
        const response = await axios.put(`${backendUrl}/material/${id}`, data);
        return response.status;
    } catch (error) {
        console.log(error);
    }
}

const getMaterialNamesList = async () => {
    try {
        const response = await axios.get(`${backendUrl}/material/getNames`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const getMaterialByName = async(name) => {
    try {
        const response = await axios.post(`${backendUrl}/material/getByName`, name);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const createBatchRecord = async (data) => {
    try {
        const response = await axios.post(`${backendUrl}/batch`, data);
        return response.status;
    }
    catch (error) {
        console.log(error);
    }
}

const getBatchRecords = async () => {
    try {
        const response = await axios.get(`${backendUrl}/batch`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export {
    getAllMaterials,
    createMaterials,
    deleteMaterial,
    updateMaterial,
    getMaterialNamesList,
    getMaterialByName,
    createBatchRecord,
    getBatchRecords,
    updateAdmin,
    deleteAdmin,
    createAdmin,
    getAdminData,
    getSpecificAdminData,
    createService,
    getserviceList,
    getServiceNameById,
    getServiceCodeById,
    deleteServiceTimeById,
    updateServiceById,
    deleteServiceById,
    getTechnicianData,
    getSpecificTechnician,
    getTechnicianByTasknowId,
    updateTechnician,
    createTechnician,
    deleteTechnician,
    getAllUsers,
    getUserByDetails,
    createUser,
    updateUser,
    bookJob,
    deleteUser,
    getJob,
    getJobsofType,
    getInspectionJobsOfTechnician,
    getRepairJobsOfTechnician,
    getSpecificJob,
    createJob,
    updateJob,
    deleteJob,
    getSortedTechnician,
    getWidgetDetails
}
