import {
  columnsDataDevelopment,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/inspectionJob/inspectionJobTable";

const Tables = () => {
  return (
    <DevelopmentTable
      columnsData={columnsDataDevelopment}
      tableData={tableDataDevelopment}
    />
  );
};

export default Tables;
