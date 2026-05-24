import React from "react";
import Badge from "../UI/Badge";
import { EllipsisVertical } from "lucide-react";

export default function EmployeeTableRow({ employee }) {
  const {
    employeeId,
    employeeName,
    duration,
    startTime,
    endTime,
    dueHours,
    department,
    project,
    notes,
  } = employee;

  const departmentColors = {
    
    Development: "blue",
    Design: "green",
    Product: "orange",
    Sales: "purple",
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 whitespace-nowrap">
      <td className="p-3 px-8"># {employeeId}</td>
      <td className="p-3 px-8">{employeeName}</td>
      <td className="p-3 px-8">{duration}</td>
      <td className="p-3 px-8">
        {startTime} - {endTime}
      </td>
      <td className="p-3 px-8">{dueHours}</td>
      <td className="p-3 px-8">
        <Badge text={department} color={departmentColors[department]} />
      </td>
      <td className="p-3 px-8">CRM Project</td>
      <td className="p-3 px-8">Working On Data Management...</td>
      <td className="p-3 px-8">
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-semibold rounded  text-red-800 ">
            Reject
          </button>
          <button className="px-3 py-1.5 text-xs rounded bg-green-600 text-white hover:bg-green-700">
            Approve
          </button>

          <button className="ml-8 w-[30px] h-[30px] border border-[#DBDFE2] rounded-lg flex items-center justify-center hover:bg-gray-100">
            <EllipsisVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
