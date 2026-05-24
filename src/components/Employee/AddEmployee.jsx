import React, { useState } from "react";

const DEPARTMENTS = ["Design", "Development", "Product", "Sales"];
const PROJECTS = ["CRM Project", "HRM Project"];

import employeeLogsData from "../../utils/employeeLogsData";

export default function AddEmployee({ onClose }) {
  const [formData, setFormData] = useState({
    id: Math.random(),
    employeeId: "1250",
    employeeName: "Sadik Hasan",
    department: "",
    project: "CRM Project",
    startTime: "10:15 am",
    endTime: "08:15 pm",
    duration:"",
    dueHours:'',
    notes:'',
    action:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.employeeName || !formData.employeeId) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Adding Employee:", formData);


    employeeLogsData.push(formData);
    
    alert(`Successfully added employee: ${formData.employeeName}`);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 1. Employee ID (standalone, small width) */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-semibold text-[#4A5568]">
          Employee ID
        </label>
        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          placeholder="#"
          className="w-full max-w-[180px] px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium"
        />
      </div>

      {/* 2. Type Employee Name* (standalone, medium/large width) */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-semibold text-[#4A5568]">
          Type Employee Name*
        </label>
        <input
          type="text"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          placeholder="Sadik Hasan"
          className="w-full max-w-[480px] px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium"
          required
        />
      </div>

      {/* 3. Dropdowns Row: Select Department* & Select Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
        {/* Select Department* */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#4A5568]">
            Select Department*
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium appearance-none cursor-pointer pr-10"
              >
                <option value="">Department</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="w-[42px] h-[42px] min-w-[42px] flex items-center justify-center border border-[#3E50F7] rounded-xl text-[#3E50F7] hover:bg-[#3E50F7]/5 transition duration-200 cursor-pointer font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Select Project */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#4A5568]">
            Select Project
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium appearance-none cursor-pointer pr-10"
              >
                <option value="">Project</option>
                {PROJECTS.map((proj) => (
                  <option key={proj} value={proj}>
                    {proj}
                  </option>
                ))}
              </select>
             
            </div>
            <button
              type="button"
              className="w-[42px] h-[42px] min-w-[42px] flex items-center justify-center border border-[#3E50F7] rounded-xl text-[#3E50F7] hover:bg-[#3E50F7]/5 transition duration-200 cursor-pointer font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* 4. Time Selectors Row: Start Time & End Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
        {/* Select Start Time* */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#4A5568]">
            Select Start Time*
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              placeholder="10:15 am"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium"
              required
            />
            <button
              type="button"
              className="w-[42px] h-[42px] min-w-[42px] flex items-center justify-center border border-[#3E50F7] rounded-xl text-[#3E50F7] hover:bg-[#3E50F7]/5 transition duration-200 cursor-pointer font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Select End Time */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#4A5568]">
            Select End Time
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              placeholder="08:15 pm"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3E50F7] focus:ring-2 focus:ring-[#3E50F7]/10 transition duration-200 outline-none text-[#344054] text-[15px] font-medium"
            />
            <button
              type="button"
              className="w-[42px] h-[42px] min-w-[42px] flex items-center justify-center border border-[#3E50F7] rounded-xl text-[#3E50F7] hover:bg-[#3E50F7]/5 transition duration-200 cursor-pointer font-bold text-lg"
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* 5. Footer Buttons: Cancel and Add Employee */}
      <div className="flex justify-end items-center pt-8">
        <button
          type="button"
          onClick={onClose}
          className="text-[#5F6776] font-semibold hover:text-gray-900 transition duration-200 mr-8 cursor-pointer text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#3E50F7] text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-98 transition duration-200 cursor-pointer text-sm"
        >
          Add Employee
        </button>
      </div>
    </form>
  );
}
