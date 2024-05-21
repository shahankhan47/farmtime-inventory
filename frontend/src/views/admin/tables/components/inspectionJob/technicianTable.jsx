import React from "react";
import Card from "components/card";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const columnsData = [
  { Header: "NAME", accessor: "name" },
  { Header: "OPERATION", accessor: "operation" },
  { Header: "INITIAL", accessor: "initialAmount" },
  { Header: "FINAL", accessor: "finalAmount" },
  { Header: "DATE", accessor: "dateAdded" },
  { Header: "COMMENT", accessor: "comment" }
];

const CheckTable = ({onClose, isDarkMode, job, setJob}) => {
  const tableInstance = useTable(
    {
      columns: columnsData,
      data: job.materials,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Batch Details
        </div>
        <button
            onClick={onClose}
            className={`mt-4 ml-0 ${
            isDarkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-600 hover:bg-gray-500"
            } text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-gray-300`}
        >
            Close
        </button>
      </header>

      <div className="mt-8" style={{ maxHeight: "400px", overflowY: "auto" }}>
        {/* Apply maxHeight and overflowY styles to create the scrollable container */}
        <table {...getTableProps()} className="w-full" variant="simple" color="gray-500" mb="24px">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, cellIndex) => {
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    else if (cell.column.Header === "OPERATION") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    else if (cell.column.Header === "INITIAL") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                    }
                    else if (cell.column.Header === "FINAL") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                    }
                    else if (cell.column.Header === "COMMENT") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    else if (cell.column.Header === "DATE") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {new Date(cell.value).getDate()}/
                            {new Date(cell.value).getMonth()+1}/
                            {new Date(cell.value).getFullYear()}
                          </p>
                        );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={cellIndex}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CheckTable;
