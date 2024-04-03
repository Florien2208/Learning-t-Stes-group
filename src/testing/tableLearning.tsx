import React from "react";
import { useReactTable } from "@tanstack/react-table"; // Correct import

interface DataItem {
  id: number;
  name: string;
  age: number;
  // Add more properties as needed
}

interface TableProps {
  data: DataItem[];
}

const MyTable: React.FC<TableProps> = ({ data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useReactTable({
      columns: [
        { Header: "ID", accessor: "id" },
        { Header: "Name", accessor: "name" },
        { Header: "Age", accessor: "age" },
        // Add more columns here
      ],
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
