import React from "react";

import EmployeeTimeLogo from "../../assets/employee-time-logo.png";

import ExportExcelIcon from "../../assets/export-excel-download.png";

import AddEmployeeIcon from "../../assets/add-employee.png";

export default function EmployeeHeader() {
  return (
    <section className="w-11/12 mx-auto flex items-center justify-between pt-10">
      {/* logo and text */}
      <div className="flex items-center justify-center gap-x-5">
        {/* Logo */}
        <div className="bg-[#FFFFFF] rounded-xl p-[18px] w-[88px] h-[88px] flex items-center justify-center ">
          <img src={EmployeeTimeLogo} alt="Employee Time Logo" />
        </div>

        {/* Employee text */}
        <div>
          <h3 className="font-bold text-[#141928] text-2xl">Employee Time</h3>
          <span className="text-[#5F6776] font-medium text-lg">
            Manage your time logs
          </span>
        </div>
      </div>

      {/* export excel and add employee button */}
      <div className="flex gap-x-5">
        <button className="bg-[#FFFFFF] rounded-lg px-8 py-3 flex gap-x-2">
          <span className="text-[#141928] font-semibold ">Export Excel</span>

          <img src={ExportExcelIcon} alt="Export Excel Icon" />
        </button>

        <button className="bg-[#3E50F7]  rounded-lg px-8 py-3 flex gap-x-2 whitespace-nowrap">
          <img src={AddEmployeeIcon} alt="Add Employee Icon" />
          <span className="text-[#FFFFFF] manrope-semibold text-base">
            Add Employee
          </span>
        </button>
      </div>
    </section>
  );
}
