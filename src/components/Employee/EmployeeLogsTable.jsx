import React from 'react'
import EmployeeTableRow from './EmployeeTableRow'

import employeeLogsData from '../../utils/employeeLogsData.js'


export default function EmployeeLogsTable() {

  console.log(employeeLogsData)



  return (
   <div className="w-full overflow-x-auto py-8">
      <table className="w-full  text-left ">
        {/* Table Head */}
        <thead className="text-[#464255] bg-[#F3F5F6]  rounded-2xl ">
          <tr className="rounded-2xl whitespace-nowrap ">
            <th className="p-3 font-bold px-8">ID</th>
            <th className="p-3 font-bold px-8">Employee Name</th>
            <th className="p-3 font-bold px-8">Duration</th>
            <th className="p-3 font-bold px-8">Start Time - End Time</th>
            <th className="p-3 font-bold px-8">Due Hours</th>
            <th className="p-3 font-bold px-8">Department</th>
            <th className="p-3 font-bold px-8">Project</th>
            <th className="p-3 font-bold px-8">Notes</th>
            <th className="p-3 font-bold px-8">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
            {/* Employee Table Row */}
            {
              employeeLogsData?.map((data) => (
                <EmployeeTableRow key={data.id} employee={data} />
              ))
            }
            
            
        </tbody>
      </table>
    </div>
  )
}
