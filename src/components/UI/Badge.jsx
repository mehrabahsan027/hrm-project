import React from "react";

const Badge = ({ text , color }) => {
//   const colorMap = {
//     green: "bg-green-500",
//     red: "bg-red-500",
//     yellow: "bg-yellow-500",
//     blue: "bg-blue-500",
//     gray: "bg-gray-500",
//   };

  return (
   <span
  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${color}-100 text-${color}-700 text-sm font-medium`}
>
  {/* Dot */}
  <span
    className={`h-2 w-2 rounded-full bg-${color}-700`}
  ></span>

  {/* Text */}
  {text}
</span>
  );
};

export default Badge;