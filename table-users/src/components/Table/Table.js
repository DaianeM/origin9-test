import React from "react";

import "./Table.css";

function Table({ columns, data }) {
  return (
    <div>
      <table className="table-wrapper">
        <thead>
          <tr>
            {Object.values(columns).map((label, index) => (
              <th key={index} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.keys(columns).map((key) => (
                <td key={key} data-label={columns[key]}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
