import React from "react";
import { CalendarDays, ChevronDown, Search } from "lucide-react";

const EmployeeLogsHeader = () => {

  


  return (
    <div className="w-full flex items-center justify-between ">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Employee Management
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative ">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
          />

          <input
            type="text"
            placeholder="Search ID,Name"
            className="placeholder:text-[#464255] min-w-62.5 max-w-122.5 h-11 rounded-lg border border-[#DBDFE2]  pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Date Range */}

        <div className="relative">
  
  <CalendarDays
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
  />

  
  <span className="absolute left-10 top-1/2 -translate-y-1/2  text-[#464255] pointer-events-none">
    Date Range
  </span>

  
  <ChevronDown
    size={18}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
  />

  {/* Date Input */}
  <input
    type="date"
    className="h-11 w-full cursor-pointer rounded-lg border border-gray-300 pl-10 pr-10 text-transparent outline-none focus:border-blue-500"
  />
</div>





        {/* Status Select */}
       

        <div className="relative">
          <select className="h-11 text-[#464255] rounded-lg border border-gray-300 px-4  outline-none focus:border-blue-500 appearance-none">
            <option>Status</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>

        {/* Department Select */}
        <div className="relative">
          <select className="h-11 appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-12  text-[#464255] outline-none focus:border-blue-500">
            <option value="">Department</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
            <option value="development">Development</option>
            <option value="sales">Sales</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogsHeader;
